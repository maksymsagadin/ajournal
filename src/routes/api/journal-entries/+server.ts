import type { RequestHandler } from "@sveltejs/kit"
import { api } from './_api'

export const GET: RequestHandler = ({ request }) => {
    return api(request)
}

export const POST: RequestHandler = async ({ request }) => {
    const {text} = await request.json()
    return api(request, {
        created_at: new Date(),
        text: text,
        done: false
    })
    
}