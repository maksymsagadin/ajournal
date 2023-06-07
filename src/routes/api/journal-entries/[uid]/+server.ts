import type { RequestHandler } from "@sveltejs/kit"
import { api } from '../_api'

export const DELETE: RequestHandler = (request) => {
    return api(request.request, request.params)
}

export const PATCH: RequestHandler = async (request) => {
    const body = await request.request.json()
    const { text, done } = body

    console.log(done,'done')
    // const {text} = await request.request.json()
    // const done = await request.request.json()
    console.log(done,'done')
    return api(request.request, {
        uid: request.params.uid,
        text: text,
        done: done
    })
    
}