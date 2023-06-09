import type { RequestEvent } from "@sveltejs/kit"
import PrismaClient from "$lib/prisma"

const prisma = new PrismaClient()

export const api = async (request: RequestEvent, journalEntry?: journalEntry) => {
    let body = {}
    let status = 500
    switch (request.method) {
        case 'GET':
            body = await prisma.journalEntry.findMany()
            status = 200
            break
        case 'POST':
            body = await prisma.journalEntry.create({
                data: {
                    created_at: journalEntry?.created_at as Date,
                    done: journalEntry?.done as boolean,
                    text: journalEntry?.text as string
                }
            })
            status = 201
            break
        case 'DELETE':
            body = await prisma.journalEntry.delete({
                where: {
                    uid: journalEntry?.uid
                }
            })
            status = 200
            break
        case 'PATCH':
            body = await prisma.journalEntry.update({
                where: {
                    uid: journalEntry?.uid
                },
                data: {
                    text: journalEntry?.text,
                    done: journalEntry?.done
                }
            })
            status = 200
            break
        default:
            body = { error: 'Invalid request method.' }
            status: 405
            break
    }

    return new Response(JSON.stringify(body), {
        status,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}