import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  app: {
    organizationId: 'oCVG0p1Xy',
    entry: './src/App.tsx',
  },
  server:{
    port: 3334
  },
  deployment:{
    appId: 'r67eoy46smb8l2fnftm7ki86'
  }
})
