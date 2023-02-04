<script lang="ts">
    import { onMount } from "svelte";
    import { watchResize } from "svelte-watch-resize";
    import { Graphics } from "./graphics/graphics";

    let windowWidth: number;
    let windowHeight: number;

    let container: HTMLElement;
    let canvas: HTMLCanvasElement;

    let graphics: Graphics;

    // Init everything needed, once
    onMount(() => {
        // div containing the canvas
        container = document.getElementById("container");

        // Canvas that take all window space
        canvas = document.getElementById("canvas") as HTMLCanvasElement;

        // Class Graphics thant handles graphics
        graphics = new Graphics(canvas);

        windowWidth = container.offsetWidth;
        windowHeight = container.offsetHeight;
    });

    function windowResize(): void {
        windowWidth = container.offsetWidth;
        windowHeight = container.offsetHeight;
    }
</script>

<div id="container">
    <canvas id="canvas" width="100%" height="100%" />
</div>

<style>
    #container {
        width: 100%;
        height: 100%;
    }
</style>
