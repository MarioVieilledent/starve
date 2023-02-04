<script lang="ts">
    import { onMount } from "svelte";
    import Square from "./Square.svelte";

    let table: number[][] = [];

    onMount(() => {
        initGame();
    });

    function initGame(): void {
        // Create the board game
        table = [
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0],
        ];
        // Start the game
        createRandomNumber();
    }
    function createRandomNumber() {}
</script>

<div class="container fc">
    {#each table as row, i}
        <div class="row f">
            {#each row as card, j}
                <div class="card">
                    {#if table}
                        <Square value={table[i][j]} />
                    {/if}
                </div>
            {/each}
        </div>
    {/each}
</div>

<style lang="scss">
    $squareSize: 48px;

    .container {
        padding: 12px;
        .row {
            .card {
                width: $squareSize;
                height: $squareSize;
                margin: 0px 12px 12px 0px;
            }
        }
    }
</style>
