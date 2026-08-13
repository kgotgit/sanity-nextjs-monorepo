import {defineBlueprint, defineDocumentFunction} from '@sanity/blueprints'

export default defineBlueprint({
  resources: [
    defineDocumentFunction({name: 'first-published', event: {on: ['create','update'], includeAllVersions: true, filter: "_type == 'event' && !defined(firstPublishedAt)"}}),
  ],
})