import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false,
})
const EVENT_QUERY = `*[_type == "event" && !defined(details)][0]._id`

async function run() {
  const eventId = await client.fetch(EVENT_QUERY)

  console.log({eventId})
}

run()