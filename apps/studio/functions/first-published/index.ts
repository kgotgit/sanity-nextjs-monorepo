import { documentEventHandler } from '@sanity/functions'
import { createClient } from '@sanity/client';

export const handler = documentEventHandler(async ({ context, event }) => {
  try{

    await createClient({
      ...context.clientOptions,
      useCdn: false,
      apiVersion: '2026-08-13'
    }).patch(event.data._id)
    .setIfMissing({
      firstPublishedAt: new Date().toISOString()
    }).commit({dryRun:context.local})
   console.log(context.local ? 'Dry run:' : 'Updated:', `firstPublished set on ${event.data._id}`)

  }catch(err){ 
    console.error(err);
  }
})