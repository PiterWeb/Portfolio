<script>
    
    import { darkMode } from '../stores/store';

    const toggleDarkMode = () => {
        darkMode.update(value => (value == 'false') ? 'true' : 'false');
        window.document.body.classList.toggle('dark');
    }

</script>

<button class="rounded w-40 col-end border bg-black bg-opacity-95 text-gray-300 dark:bg-gray-200 dark:text-black font-bold" on:click={toggleDarkMode}>Toggle Dark Mode</button>