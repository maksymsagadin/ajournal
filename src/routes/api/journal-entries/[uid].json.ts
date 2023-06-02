import type { RequestHandler } from "@sveltejs/kit"
import { api } from './_api'


export const del: RequestHandler = (request) => {
    console.log('request at delete api', request)
    return api(request)
    
}