<script>
    import '../app.css'
</script>
<style>
    footer {
        padding: 1rem;
        box-shadow: inset 1px 1px 6px rgba(0,0,0,0.3);
        border: 3px #919191;
        border-style: dotted dashed solid double;
    }
</style>

<main>
    <slot />
</main>
<footer>
    <p>Work in progress by <a href='https://maksymsagadin.com/'>Maks</a></p>
</footer>