import data from './data.json'
export const storageKey='infra-atlas-progress-v1'
export const statuses = {'not_started':'未开始','learning':'学习中','done':'已完成'} as const
export type Status=keyof typeof statuses
export type Progress=Record<string,Status>
export function validate(value:unknown):Progress {
 if(!value || typeof value!=='object' || Array.isArray(value)) throw Error('进度必须是对象')
 const result:Progress={}; const ids=new Set(data.resources.map(r=>r.id))
 for(const [id,status] of Object.entries(value)) {
  if(!ids.has(id) || typeof status!=='string' || !Object.hasOwn(statuses,status)) throw Error('包含未知资料或无效状态，请使用本站导出的文件')
  result[id]=status as Status
 }
 return result
}
export function parseBackup(value:unknown):Progress {
 const v=value as {version?:number;progress?:unknown}
 if(!v || v.version!==1) throw Error('不支持的文件版本')
 return validate(v.progress)
}
export function load():Progress {try {return validate(JSON.parse(localStorage.getItem(storageKey)||'{}'))} catch{return {}}}
