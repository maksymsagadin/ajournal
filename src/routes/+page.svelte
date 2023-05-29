<script>
    import JournalEntry from "../lib/journal-entry.svelte"

    const title = 'Journal'
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
        border: 3px  dashed #919191;
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

    <form action='' method=''>
        <input type='text' name='text' aria-label='Add a journal entry' placeholder='Add a journal entry'>
    </form>

    <JournalEntry />
    <JournalEntry />
</div>

