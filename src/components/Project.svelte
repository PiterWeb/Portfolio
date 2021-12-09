<script>

export let title = 'Loading...' , body = 'Loading...';
export let url = 'https://github.com/piterweb';
export let imgSrc = 'https://via.placeholder.com/350x150';

</script>

<a href="{url}" class="group my-2 container mx-auto w-65 flex-initial select-none">

<article class="transition duration-600 transform group-hover:ring-10 dark:group-hover:ring-white dark:group-hover:ring-opacity-5 group-hover:ring-gray-600 group-hover:ring-opacity-6 border-1 border-gray-100 rounded bg-black bg-opacity-90 transition duration-500 transform hover:scale-105">
    <header class="max-w-65">
      <img alt="" src="{imgSrc}">
    </header>
    <footer class="text-gray-300 max-w-65  mx-2 py-2">
      <h1 class="text-xl font-bold">{title}</h1>
      <p class="text-base">{body}</p>  
    </footer>        
</article>

</a>

<style>
</style>