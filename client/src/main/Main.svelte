<script lang="ts">
  import e from "express";
  import { HTTP } from "../services/http";

  const http: HTTP = new HTTP();

  const url = "";

  let animals = [];

  function fetch(): void {
    http.getJson("getAnimals", (data) => {
      animals = data;
    });
  }
</script>

<p>test</p>

<button on:click={fetch}>Fetch</button>

{#each animals as animal}
  <span>{animal}</span>
{/each}
