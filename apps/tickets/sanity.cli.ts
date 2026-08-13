import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  app: {
    organizationId: 'oCVG0p1Xy',
    entry: './src/App.tsx',
  },
  deployment: {
  appId: 'hnh47m2lzw0biyy5hbncbhqm',
},
  server:{
    port: 3334
  }
  
})
