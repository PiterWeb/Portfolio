<script>
    import Project from "../components/Project.svelte";
    import Section from "../components/Section.svelte";

    let projects = [{imgSrc: 'https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80' , title:'Hello' , body:'Body Example' , url:''}, {} , {} , {}]

</script>

<Section text="My Projects" />

<section class="flex flex-wrap my-20">

    {#each projects as project}
    <Project {...project}/>
    {/each}

</section>