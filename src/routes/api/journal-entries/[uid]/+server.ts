import type { RequestHandler } from "@sveltejs/kit"
import { api } from '../_api'

export const DELETE: RequestHandler = (request) => {
    return api(request.request, request.params)
}

export const PATCH: RequestHandler = async (request) => {
    const {text} = await request.request.json()
    return api(request.request, {
        uid: request.params.uid,
        text: text
    })
    
}