import type { RequestHandler } from "@sveltejs/kit"
let journalEntries: journalEntry[] = []

export const GET: RequestHandler = () => {
    return new Response(JSON.stringify(journalEntries), {
        status: 200,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export const POST: RequestHandler = async ({ request }) => {
    try {
        const {text} = await request.json()

        // Check if there's already an entry with the same text
        if (journalEntries.some(entry => entry.text === text)) {
            return new Response(JSON.stringify({error: 'Duplicate entry'}), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            
        }
        // Create new Entry
        const newEntry: journalEntry = {
            created_at: new Date(),
            text: text,
            done: false
        }
        journalEntries.push(newEntry)

        return new Response(JSON.stringify(newEntry),{
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            },
        })
    } catch(error) {
        console.error(error)
        return new Response(JSON.stringify({error: 'An error occurred'}), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
}