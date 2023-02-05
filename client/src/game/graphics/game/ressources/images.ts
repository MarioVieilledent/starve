
const imgStone: HTMLImageElement = new Image();
const imgPlayer: HTMLImageElement = new Image();
const imgGold: HTMLImageElement = new Image();
const imgTree: HTMLImageElement = new Image();
const imgCraftingTable: HTMLImageElement = new Image();

imgStone.src = `images/stone.png`;
imgPlayer.src = `images/player.png`;
imgGold.src = `images/gold.png`;
imgTree.src = `images/tree.png`;
imgCraftingTable.src = `images/craftingTable.png`;

export const imgs: any = {
    stone: imgStone,
    player: imgPlayer,
    gold: imgGold,
    tree: imgTree,
    craftingTable: imgCraftingTable,
}