<script>
  import Game from "./game/Game.svelte";
</script>

<div class="all fc">
  <div class="header f">
    <h1>Site pour test des trucs</h1>
  </div>
  <div class="nav-and-content f">
    <div class="nav fc" />
    <div class="content">
      <Game />
    </div>
  </div>
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

    .header {
      width: 100%;
      height: $header-height;
      align-items: center;
      border-bottom: 1px solid #555;

      h1 {
        margin: 0px 0px 0px 12px;
        font-size: 24px;
      }
    }

    .nav-and-content {
      width: 100%;
      height: calc(100% - $header-height);

      .nav {
        width: $nav-width;
        height: 100%;
        border-right: 1px solid #555;
      }

      .content {
        width: calc(100% - $nav-width);
        height: 100%;
      }
    }
  }
</style>
