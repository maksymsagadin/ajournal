<script lang='ts'>
    import JournalEntry from "../lib/journal-entry.svelte"
    const title = 'Journal'
    let text = ''
    export let data
    // export let journalEntries: journalEntry = []

    async function handleSubmit() {
        if (!text) {
            console.error('No text entered')
            return
        }
        const response = await fetch('/api/journal-entries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text })
        })
        
        if (response.ok) {
            const result = await response.json()
            data.journalEntries = [...data.journalEntries, result]
        }
    }
</script>

<style>
    .journalEntries {
        text-align: center;
        width: 100%;
        max-width: 42rem;
        margin: 2rem auto;
    }
    form {
        margin-bottom: 0.75rem;
    }
    form > input {
        border-style: dotted dashed solid double;
    }
    .journalEntries :global(input) {
        padding: 1rem;
        margin: 1rem;
        border: 3px solid transparent;
        border-radius: 0.5rem;
    }
    .journalEntries :global(input:focus-visible) {
        box-shadow: inset 1px 1px 6px rgba(0,0,0,0.1);
        border: 3px #919191;
        border-style: dotted dashed solid double;
        outline: none;
        transition: ease-in-out;
    }
</style>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<div class='journalEntries'>
    <h1>{title}</h1>

    <form on:submit|preventDefault={handleSubmit}>
        <input type='text' name='text' bind:value={text} aria-label='Add a journal entry' placeholder='Add a journal entry'>
    </form>
    {#if data.journalEntries}
        {#each data.journalEntries as journalEntry (journalEntry.uid)}
            <JournalEntry {journalEntry} />
        {/each}
    {/if}
    
</div>

