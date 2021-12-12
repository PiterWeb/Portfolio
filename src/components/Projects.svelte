<script>
    import Project from "../components/Project.svelte";
    import Section from "../components/Section.svelte";

    let projects = [{title:'Piter Note App' , body:'Web simple individual and colaboration notes built with: EJS templates , Expressjs and Firebase Realtime Database' , imgSrc: 'PiterNoteApp.gif' , url:'https://github.com/PiterWeb/PiterNoteApp'} , {title:'Cloud File Home APP' , body:'Android APP built in JS with Svelte and Capacitor' , imgSrc: 'cfhapp.gif' , url:'https://github.com/PiterWeb/Cloud-File-Home-APP'} , {title: 'Cloud File Home Server' , body:'Expressjs Server to handle the requests for file system on Cloud File Home APP' , imgSrc: 'cfhserver.gif' , url:'https://github.com/PiterWeb/Cloud-File-Home-Server'}];

</script>

<Section text="My Projects" />

<section class="flex flex-wrap my-20">

    {#each projects as project}
    <Project {...project}/>
    {/each}

</section>