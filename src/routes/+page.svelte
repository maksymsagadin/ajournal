<script>
    import JournalEntry from "../lib/journal-entry.svelte"
    const title = 'Journal'
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>

<h1>{title}</h1>
<form action='' method=''>
    <input type='text' name='text' aria-label='Add a journal entry' placeholder='Add a journal entry'>
</form>

<JournalEntry />
<JournalEntry />
