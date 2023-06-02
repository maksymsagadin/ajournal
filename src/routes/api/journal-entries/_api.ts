import type { RequestEvent } from "@sveltejs/kit"

let journalEntries: journalEntry[] = []

export const api = (request: RequestEvent, journalEntry?: journalEntry) => {
    let body = {}
    let status = 500
    console.log(request, 'request at api')
    switch (request.method.toUpperCase()) {
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
                body= journalEntry
                status= 201
            } else {
                body = { error: 'Invalid journal entry in POST request.' };
                status = 400;
            }
            break;
        case 'DELETE':
            console.log(request,'params')
            break;
            // journalEntries = journalEntries.filter(entry => entry.uid !== request.params.uid)
            // body = journalEntries
            status: 200
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