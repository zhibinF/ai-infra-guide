import {defineConfig} from '@playwright/test'
export default defineConfig({testDir:'./tests',workers:1,use:{baseURL:'http://127.0.0.1:4173/ai-infra-guide/',launchOptions:process.env.CI?{}:{executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'}},webServer:{command:'npm run preview -- --host 127.0.0.1',port:4173,reuseExistingServer:false}})
