<script lang="ts">
    import { onMount } from "svelte";
    import { watchResize } from "svelte-watch-resize";
    import { Graphics } from "./graphics/game";

    let container: HTMLElement;

    // Handles drawing on canvas
    let graphics: Graphics;

    // Init everything needed, once
    onMount(async () => {
        // div containing the canvas
        container = document.getElementById("container");

        // Class Graphics thant handles graphics
        setTimeout(() => {
            graphics = new Graphics();
        }, 50);

        setTimeout(() => {
            windowResize();
        }, 100);
    });

    function windowResize(): void {
        if (graphics) {
            graphics.resize(container.offsetWidth, container.offsetHeight);
        }
    }
</script>

<div id="container" use:watchResize={windowResize}>
    <canvas id="canvas" />
</div>

<style>
    #container {
        width: 100%;
        height: 100%;
        background-color: #133a2b;
        overflow: hidden;
    }
</style>
