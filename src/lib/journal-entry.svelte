<style>
    .journalEntry {
        display: grid;
        grid-template-columns: 3rem 1fr 3rem;
        grid-gap: 0.5rem;
        align-items: center;
        margin-bottom: 0.5rem;
        background-color: whitesmoke;
        border-radius: 0.75rem;
        filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.1));
        transform: translate(-5px, -5px);
        transition: filter 0.5s, transform 0.5s;
    }
</style>

<div class='journalEntry'>
    <form action='' method='' >
        <input type='hidden' name='completed' value='' />
        <button aria-label='Completed / Not Completed' class='toggle' >Completed / Not Completed</button>
    </form>

    <form action='' method='' class='text'>
        <input type='text' />
        <button aria-label='Save journal entry' class='save' >Save</button>
    </form>

    <form action='' method='' >
        <button aria-label='Delete journal entry' class='delete'>Delete</button>
    </form>
</div>