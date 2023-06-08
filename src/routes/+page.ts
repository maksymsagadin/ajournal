import type { PageLoad } from './$types'

export const load = async ({fetch}) => {
    const response = await fetch('/api/journal-entries')
    if (response.ok) {
        const journalEntries: journalEntry[] = await response.json()
        return {journalEntries}
    }
    const message = await response.text()
    console.error(message)
    return {journalEntries: []}
}
