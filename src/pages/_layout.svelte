<script>
  import Header from "../components/Header.svelte";

  import Footer from "../components/Footer.svelte";

</script>

  <div
    class="bg-gray-200 w-screen h-full min-h-screen dark:bg-black dark:bg-opacity-95 dark:text-gray-300"
  >
    <Header />
    <slot />
    <Footer />
  </div>

