import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '3udpij1m',
    dataset: 'production'
  },
  deployment: {
    appId: 'e165zm387wjf51wl39wdf9p6',
    /**
     * Enable auto-updates for studios.
     * Learn more at https://www.sanity.io/docs/studio/latest-version-of-sanity#k47faf43faf56
     */
    autoUpdates: true,
  },
  typegen: {
    path: '../web/src/**/*.{ts,tsx,js,jsx}',
    schema: './schema.json',
    generates: '../web/src/sanity/types.ts',
  },
})
