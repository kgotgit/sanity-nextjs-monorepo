import {defineMigration, at, setIfMissing, unset} from 'sanity/migrate'

const from = 'eventType'
const to = 'eventFormat'

export default defineMigration({
  title: "Replace event type with event format",
  documentTypes: ["event"],

  migrate: {
    document(doc, context) {
      return [
        at(to, setIfMissing(doc[from])),
        at(from, unset())
      ]
    }
  }
})
