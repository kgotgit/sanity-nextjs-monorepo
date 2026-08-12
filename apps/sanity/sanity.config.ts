import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {structure} from './structure'
import {defaultDocumentNode} from './structure/defaultDocumentNode'
import {availability} from 'sanity-plugin-availability'

export default defineConfig({
  name: 'default',
  title: 'Day One Content Operations',

  projectId: '3udpij1m',
  dataset: 'production',

  plugins: [structureTool({structure, defaultDocumentNode}), visionTool(),availability()],

  schema: {
    types: schemaTypes,
  },

  tools: (prev, {currentUser}) => {
    const isAdmin = currentUser?.roles.some((role) => role.name === 'administrator')

    if (isAdmin) {
      return prev
    }

    return prev.filter((tool) => tool.name !== 'vision')
  },
})
