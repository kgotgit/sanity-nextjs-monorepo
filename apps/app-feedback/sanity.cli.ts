import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  app: {
    organizationId: 'oCVG0p1Xy',
    entry: './src/App.tsx',
  },
  server:{
    port: 3334
  }
})
