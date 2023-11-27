import { world, system } from "@minecraft/server";
import { wand } from "../utils";
import { debug } from "../../config";

const players = world.getPlayers();
const overworld = world.getDimension("overworld");

world.afterEvents.worldInitialize.subscribe((ev) => {
    if (debug == true) {
        world.sendMessage("World Initialized");
        players.forEach((player) => {
            if (!wand._players[player.name]) {
                wand._players[player.name] = {
                    start: undefined,
                    end: undefined,
                };
            }
        });
    }
});

function gethand(player) {
    const hand = player.selectedSlot;
    const item = player.getComponent("inventory").container.getSlot(hand);
    const wnd = item.getLore().find((e) => e == "WAND");

    return { item, wnd };
}

world.beforeEvents.playerBreakBlock.subscribe((ev) => {
    const player = ev.player;
    const { wnd } = gethand(ev.player);

    if (wnd && wand._players[player.name]) {
        wand._players[player.name].start = ev.block.location;
        player.sendMessage(
            `§aPosition 1: §e${wand._players[player.name].start.x} §7/§e ${
                wand._players[player.name].start.y
            } §7/§e ${wand._players[player.name].start.z}`,
        );
        ev.cancel = true;
    }
});

world.beforeEvents.playerInteractWithBlock.subscribe((ev) => {
    const player = ev.player;
    const { wnd } = gethand(ev.player);

    if (wnd && wand._players[player.name]) {
        wand._players[player.name].end = ev.block.location;
        player.sendMessage(
            `§aPosition 2: §e${wand._players[player.name].end.x} §7/§e ${
                wand._players[player.name].end.y
            } §7/§e ${wand._players[player.name].end.z}`,
        );
        ev.cancel = true;
    }
});
