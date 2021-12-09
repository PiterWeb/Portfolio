<script>
  import Section from "./Section.svelte";

  import TextBlock from "./TextBlock.svelte";
</script>

<Section text="Knowledge" />

<TextBlock>
  <ul class="list-disc list-inside">
    <li>HTML</li>
    <li>
      CSS : <span class="text-lg">
        TailwindCSS / Bootstrap / <a
          class="underline"
          href="https://github.com/PiterWeb/PiterNoteApp">Bulma</a
        ></span
      >
    </li>
    <li>
      Javascript : <span class="text-lg"
        >Functional Programming / Object Oriented Programming/ <a
          class="underline"
          href="https://github.com/PiterWeb/Cloud-File-Home-Server"
          >ExpressJS API</a
        >
        /
        <a class="underline" href="https://github.com/PiterWeb/PiterNoteApp"
          >ExpressJS Server Side Rendering</a
        >
        /
        <a
          class="underline"
          href="https://github.com/PiterWeb/Cloud-File-Home-APP"
          >Svelte
        </a>
        / Vue (Learning) / Mongoose /
        <a
          class="underline"
          href="https://github.com/PiterWeb/Cloud-File-Home-APP"
          >Svelte + Capacitor Native Apps</a
        >
      </span>
    </li>
    <li>
      Python (Beginner) : <span class="text-lg"
        >Functional Programming / Flask API / Flask Server Side Rendering</span
      >
    </li>
    <li>
      DB : <span class="text-lg">
        <a class="underline" href="https://github.com/PiterWeb/PiterBot"
          >MySQL</a
        >
        /
        <a class="underline" href="https://github.com/PiterWeb/PiterNoteApp"
          >FireBase Realtime Database</a
        > / MongoDB / FaunaDB</span
      >
    </li>
  </ul>
</TextBlock>
