<script lang="ts">
  import Canvas from "./game/Canvas.svelte";
</script>

<div class="all">
  <Canvas />
</div>

<style lang="scss">
  $header-height: 48px;
  $nav-width: 240px;

  :global(.f) {
    display: flex;
  }

  :global(.fc) {
    display: flex;
    flex-direction: column;
  }

  .all {
    width: 100%;
    height: 100%;
  }
</style>
