import type { RequestHandler } from "@sveltejs/kit"
import { api } from './_api'

export const GET: RequestHandler = (request) => {
    return api(request.request)
}

export const POST: RequestHandler = async ({ request }) => {
    const {text} = await request.json()
    // Check if there's already an entry with the same text
    // if (journalEntries.some(entry => entry.text === text)) {
    //     return new Response(JSON.stringify({error: 'Duplicate entry'}), {
    //         status: 400,
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    // }
    return api(request, {
        uid: `${Date.now()}`, //JournalEntries: replace with UID from database
        created_at: new Date(),
        text: text,
        done: false
    })
    
}