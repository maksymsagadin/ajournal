import type { RequestEvent } from "@sveltejs/kit"

let journalEntries: journalEntry[] = []

export const api = (request: RequestEvent, journalEntry?: journalEntry) => {
    let body = {}
    let status = 500
    switch (request.method) {
        case 'GET':
            body = journalEntries
            status = 200
            break;
        case 'POST':
            if (journalEntry) {
                if (journalEntries.some(entry => entry.text === journalEntry.text)) {
                    status= 400
                    break
                }
                journalEntries.push(journalEntry)
                body = journalEntry
                status = 201
            } else {
                body = { error: 'Invalid journal entry in POST request.' };
                status = 400;
            }
            break;
        case 'DELETE':
            journalEntries = journalEntries.filter(entry => entry.uid !== journalEntry?.uid)
            body = journalEntries
            status = 200
            break;
        case 'PATCH':
            journalEntries = journalEntries.map(entry => {
                if (entry.uid === journalEntry?.uid) {
                    if (journalEntry.text){entry.text = journalEntry.text}
                    if (journalEntry.done) {entry.done = journalEntry.done}
                }
                return entry
            })
            body = journalEntries
            status = 200
            break;
        default:
            body = { error: 'Invalid request method.' }
            status: 405
            break;
    }

    return new Response(JSON.stringify(body), {
        status,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}