<script lang='ts'>
    export let journalEntry: journalEntry
    let updatedText = journalEntry.text

    async function deleteJournalEntry(event: Event) {
        event.preventDefault()
        const response = await fetch(`/api/journal-entries/${journalEntry.uid}`, {
            method: 'DELETE',
        })
        if (response.ok) {
            let remaining = await response.json()
            journalEntry.ref.style.display = 'none'
        } else {
            console.error('Failed to delete')
        }
    }
    async function updateJournalEntryText(event: Event) {
        event.preventDefault()
        const response = await fetch(`/api/journal-entries/${journalEntry.uid}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: updatedText })
        })
        if (response.ok) {
            let updated = await response.json()
        } else {
            console.error('Failed to update')
        }
    }
    async function updateJournalEntryDone(event: Event) {
        event.preventDefault()
        journalEntry.done = !journalEntry.done
        const response = await fetch(`/api/journal-entries/${journalEntry.uid}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ done: journalEntry.done })
        })
        if (response.ok) {
            let updated = await response.json()
        } else {
            console.error('Failed to update')
        }
    }
</script>

<style>
    .journalEntry {
        display: grid;
        grid-template-columns: 3rem 1fr 3rem;
        grid-gap: 0.5rem;
        align-items: center;
        margin-bottom: 0.5rem;
        background-color: whitesmoke;
        border-radius: 0.75rem;
        filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.3));
        transform: translate(-5px, -5px);
        transition: filter 0.5s, transform 0.5s;
    }

    .journalEntry button {
        position: relative;
        border: none;
        width: 2.5rem;
        height: 2.5rem;
        background-repeat: no-repeat;
        background-position: center;
        transition: opacity 0.2s;
    }

    .journalEntry input {
        flex: 1;
        padding: 0.5rem 2rem 0.5rem 1rem;
        border-radius: 0.5rem;
    }

    button.toggle {
        margin-left: 1rem;
        border: 3px solid rgba(0, 0, 0, 0.3);
        border-radius: 50%;
        box-sizing: border-box;
    }

    .text {
        position: relative;
        display: flex;
        align-items: center;
        flex: 1;
    }

    .save {
        position: absolute;
        left: 0;
        opacity: 0;
        background-image: url("data:image/svg+xml,%3Csvg%20width%3D%22800px%22%20height%3D%22800px%22%20viewBox%3D%220%200%201024%201024%22%20class%3D%22icon%22%20%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%09%3Cpath%20d%3D%22M960%20252.736L771.008%2064H86.4a22.528%2022.528%200%200%200-22.4%2022.4v851.2c0%2012.352%2010.112%2022.4%2022.4%2022.4h851.2c12.288%200%2022.4-10.048%2022.4-22.4v-215.36a22.4%2022.4%200%200%200-44.864%200V596.032h0.256c0%200.512-0.256%200.896-0.256%201.344a22.4%2022.4%200%201%200%2044.864%200c0-0.512-0.256-0.896-0.256-1.344H960v-96h-0.32c0.064-0.576%200.32-1.088%200.32-1.6a22.4%2022.4%200%200%200-44.864%200c0%200.576%200.256%201.024%200.32%201.6H915.2V414.976h0.064l-0.064%200.384a22.4%2022.4%200%200%200%2044.8%200.064l-0.064-0.384H960V252.736z%22%20fill%3D%22%22%20%2F%3E%3Cpath%20d%3D%22M108.8%20915.2V108.8h643.648L915.2%20271.296V915.2z%22%20fill%3D%22%234A5FA0%22%20%2F%3E%3Cpath%20d%3D%22M241.984%2064v203.584c0%2012.288%2010.112%2022.4%2022.4%2022.4h483.2c12.288%200%2022.4-10.112%2022.4-22.4V64h-528z%22%20fill%3D%22%22%20%2F%3E%3Cpath%20d%3D%22M286.784%20108.8h438.4v136.384h-438.4z%22%20fill%3D%22%23B3B2B1%22%20%2F%3E%3Cpath%20d%3D%22M769.984%20960V548.352a22.592%2022.592%200%200%200-22.464-22.4H264.32a22.528%2022.528%200%200%200-22.4%2022.4V960h528.064z%22%20fill%3D%22%22%20%2F%3E%3Cpath%20d%3D%22M286.784%20570.816h438.4V915.2h-438.4z%22%20fill%3D%22%23B3B2B1%22%20%2F%3E%3Cpath%20d%3D%22M548.032%20136h145.984v81.984H548.032z%22%20fill%3D%22%23949494%22%20%2F%3E%3Cpath%20d%3D%22M670.976%20653.248c0%2012.288-10.048%2022.4-22.4%2022.4h-275.2c-12.288%200-22.4-10.048-22.4-22.4s10.112-22.4%2022.4-22.4h275.2c12.352%200%2022.4%2010.112%2022.4%2022.4zM670.976%20744.64c0%2012.288-10.048%2022.4-22.4%2022.4h-275.2c-12.288%200-22.4-10.048-22.4-22.4s10.112-22.4%2022.4-22.4h275.2a22.4%2022.4%200%200%201%2022.4%2022.4zM670.976%20836.032c0%2012.288-10.048%2022.4-22.4%2022.4h-275.2c-12.288%200-22.4-10.048-22.4-22.4s10.112-22.4%2022.4-22.4h275.2a22.4%2022.4%200%200%201%2022.4%2022.4z%22%20fill%3D%22%22%20%2F%3E%3Cpath%20d%3D%22M168.576%20858.368a16%2016%200%200%201-32%200V169.024a16%2016%200%200%201%2032%200v689.344z%22%20fill%3D%22%23FFFFFF%22%20%2F%3E%0A%3C%2Fsvg%3E");
        background-size: 90% auto;
    }

    .journalEntry input:focus + .save,
    .save:focus {
        opacity: 1;
    }

    .delete {
        position: absolute;
        left: 0;
        opacity: 0.5;
        background-image: url("data:image/svg+xml,%3Csvg%20width%3D%22800px%22%20height%3D%22800px%22%20viewBox%3D%220%200%201024%201024%22%20class%3D%22icon%22%20%20version%3D%221.1%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M800%20272h-576V896h576v-251.008h-0.192c0-0.32%200.192-0.576%200.192-0.896a22.4%2022.4%200%200%200-44.864%200c0%200.32%200.192%200.576%200.192%200.896H755.2v-53.888a22.4%2022.4%200%201%200%2044.8%200V519.872h-0.256c0-0.448%200.256-0.832%200.256-1.28a22.4%2022.4%200%200%200-44.8%200c0%200.448%200.256%200.832%200.256%201.28H755.2V405.184h0.32c-0.064%200.512-0.32%200.896-0.32%201.408a22.4%2022.4%200%201%200%2044.8%200c0-0.512-0.256-0.896-0.32-1.408h0.32V272z%22%20fill%3D%22%22%20%2F%3E%3Cpath%20d%3D%22M203.968%20831.488a308.032%2038.528%200%201%200%20616.064%200%20308.032%2038.528%200%201%200-616.064%200Z%22%20fill%3D%22%22%20%2F%3E%3Cpath%20d%3D%22M268.8%20316.8h486.4v580.992H268.8z%22%20fill%3D%22%232CA6FF%22%20%2F%3E%3Cpath%20d%3D%22M204.032%20241.024v54.144s74.688%2061.12%20308.032%2061.12%20308.032-61.12%20308.032-61.12v-59.712l-616.064%205.568zM820.032%20897.728c0%2012.288-8.32%2021.824-18.496%2028.736%200%200-84.48%2046.528-289.472%2046.528-198.976%200-289.024-47.232-289.024-47.232-10.432-6.528-18.944-15.68-18.944-28.032V838.4c0-12.288%209.408-18.816%2020.928-14.464%200%200%20105.728%2040.064%20287.04%2040.512%20184%200.448%20287.168-40.256%20287.168-40.256%2011.456-4.48%2020.8%201.856%2020.8%2014.208v59.328z%22%20fill%3D%22%22%20%2F%3E%3Cpath%20d%3D%22M512%20950.656c-189.696%200-277.824-44.288-278.656-44.736-2.56-1.664-6.912-5.376-6.912-8.128v-49.792c28.8%209.6%20129.664%2038.464%20285.504%2038.784%20157.056%200%20255.424-28.16%20285.696-38.336v49.28c0%202.688-3.264%206.528-8.768%2010.24-0.256%200.064-83.456%2042.688-276.864%2042.688zM512%20333.824c-178.752%200-260.864-36.928-285.568-50.88v-19.776l571.2-5.184v24.896c-24.512%2013.952-106.624%2050.944-285.632%2050.944z%22%20fill%3D%22%23097EC6%22%20%2F%3E%3Cpath%20d%3D%22M203.968%20235.456a308.032%2064.704%200%201%200%20616.064%200%20308.032%2064.704%200%201%200-616.064%200Z%22%20fill%3D%22%22%20%2F%3E%3Cpath%20d%3D%22M512%20277.696c-166.848%200-262.592-26.24-283.072-42.304%2020.48-16%20116.224-42.24%20283.072-42.24s262.592%2026.176%20283.072%2042.24c-20.416%2016.128-116.224%2042.304-283.072%2042.304z%22%20fill%3D%22%232CA6FF%22%20%2F%3E%3Cpath%20d%3D%22M518.4%20390.784c17.6-0.128%2032%2014.208%2032%2031.808v375.488c0%2017.6-14.4%2032-32%2032a32.064%2032.064%200%200%201-32-32V423.04c0-17.664%2014.4-32.128%2032-32.256zM375.232%20384.384c17.6-0.128%2032%2014.208%2032%2031.808v350.016c0%2017.6-14.4%2032-32%2032a32.064%2032.064%200%200%201-32-32V416.576c0-17.6%2014.4-32.064%2032-32.192z%22%20fill%3D%22%23097EC6%22%20%2F%3E%3Cpath%20d%3D%22M508.032%20128.832a94.08%2094.08%200%200%200-94.016%2094.016h50.496a43.52%2043.52%200%200%201%2087.04%200h50.496a94.08%2094.08%200%200%200-94.016-94.016z%22%20fill%3D%22%22%20%2F%3E%3Cpath%20d%3D%22M660.288%20384.384c17.6-0.128%2032%2014.208%2032%2031.808v350.016c0%2017.6-14.4%2032-32%2032a32.064%2032.064%200%200%201-32-32V416.576c0-17.6%2014.4-32.064%2032-32.192zM508.032%20183.232a39.68%2039.68%200%200%201%2039.616%2039.616h32a71.68%2071.68%200%200%200-143.232-0.064h32c0-21.824%2017.728-39.552%2039.616-39.552z%22%20fill%3D%22%23097EC6%22%20%2F%3E%3Cpath%20d%3D%22M319.104%20795.968a16%2016%200%200%201-32%200V372.096a16%2016%200%200%201%2032%200v423.872z%22%20fill%3D%22%23FFFFFF%22%20%2F%3E%3C%2Fsvg%3E");
        background-size: 105% auto;
    }

    .delete:hover,
    .delete:focus {
        opacity: 1;
    }

    .done {
        transform: none;
        opacity: 0.4;
        filter: drop-shadow(0px 0px 1px rgba(0,0,0,0.2));
    }

    .done .toggle {
        background-image: url("data:image/svg+xml,%3Csvg%20width%3D%22800px%22%20height%3D%22800px%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E%0A%20%20%3Cdefs%3E%0A%20%20%20%20%3Cpath%20id%3D%22check-a%22%20d%3D%22M4.29289322%2C0.292893219%20C4.68341751%2C-0.0976310729%205.31658249%2C-0.0976310729%205.70710678%2C0.292893219%20C6.09763107%2C0.683417511%206.09763107%2C1.31658249%205.70710678%2C1.70710678%20L1.90917969%2C5.46118164%20C1.5186554%2C5.85170593%200.885490417%2C5.85170593%200.494966125%2C5.46118164%20C0.104441833%2C5.07065735%200.104441833%2C4.43749237%200.494966125%2C4.04696808%20L4.29289322%2C0.292893219%20Z%22%2F%3E%0A%20%20%20%20%3Cpath%20id%3D%22check-c%22%20d%3D%22M10.7071068%2C13.2928932%20C11.0976311%2C13.6834175%2011.0976311%2C14.3165825%2010.7071068%2C14.7071068%20C10.3165825%2C15.0976311%209.68341751%2C15.0976311%209.29289322%2C14.7071068%20L0.292893219%2C5.70710678%20C-0.0976310729%2C5.31658249%20-0.0976310729%2C4.68341751%200.292893219%2C4.29289322%20L4.29289322%2C0.292893219%20C4.68341751%2C-0.0976310729%205.31658249%2C-0.0976310729%205.70710678%2C0.292893219%20C6.09763107%2C0.683417511%206.09763107%2C1.31658249%205.70710678%2C1.70710678%20L2.41421356%2C5%20L10.7071068%2C13.2928932%20Z%22%2F%3E%0A%20%20%3C%2Fdefs%3E%0A%20%20%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%20transform%3D%22rotate(-90%2011%207)%22%3E%0A%20%20%20%20%3Cg%20transform%3D%22translate(1%201)%22%3E%0A%20%20%20%20%20%20%3Cmask%20id%3D%22check-b%22%20fill%3D%22%23ffffff%22%3E%0A%20%20%20%20%20%20%20%20%3Cuse%20xlink%3Ahref%3D%22%23check-a%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fmask%3E%0A%20%20%20%20%20%20%3Cuse%20fill%3D%22%23D8D8D8%22%20fill-rule%3D%22nonzero%22%20xlink%3Ahref%3D%22%23check-a%22%2F%3E%0A%20%20%20%20%20%20%3Cg%20fill%3D%22%23FFA0A0%22%20mask%3D%22url(%23check-b)%22%3E%0A%20%20%20%20%20%20%20%20%3Crect%20width%3D%2224%22%20height%3D%2224%22%20transform%3D%22translate(-7%20-5)%22%2F%3E%0A%20%20%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3C%2Fg%3E%0A%20%20%20%20%3Cmask%20id%3D%22check-d%22%20fill%3D%22%23ffffff%22%3E%0A%20%20%20%20%20%20%3Cuse%20xlink%3Ahref%3D%22%23check-c%22%2F%3E%0A%20%20%20%20%3C%2Fmask%3E%0A%20%20%20%20%3Cuse%20fill%3D%22%23000000%22%20fill-rule%3D%22nonzero%22%20xlink%3Ahref%3D%22%23check-c%22%2F%3E%0A%20%20%20%20%3Cg%20fill%3D%22%237600FF%22%20mask%3D%22url(%23check-d)%22%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%2224%22%20height%3D%2224%22%20transform%3D%22translate(-6%20-4)%22%2F%3E%0A%20%20%20%20%3C%2Fg%3E%0A%20%20%3C%2Fg%3E%0A%3C%2Fsvg%3E");
        background-size: 100% auto;
    }

</style>

<div class='journalEntry'  class:done={journalEntry.done} bind:this={journalEntry.ref}>
    <form on:submit={updateJournalEntryDone} >
        <input type='hidden' name='completed' value='{journalEntry.done ? '' : 'true'}' />
        <button aria-label='Mark as {journalEntry.done ? 'Not Completed' : 'Completed'}' class='toggle' />
    </form>

    <form on:submit={updateJournalEntryText} class='text'>
        <input type='text' bind:value='{updatedText}'/>
        <button aria-label='Save journal entry' class='save' />
    </form>

    <form on:submit={deleteJournalEntry} >
        <button aria-label='Delete journal entry' class='delete' />
    </form>
</div>