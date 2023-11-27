import { prefix } from "../config";

export const error = {
    isOp: "§cYou dont have permission to use this command§e: ${command}",
    unknownCommand: "§cUnknown Command§e: ${command}",
    cantExecute: "Error: Unable to execute command ${command}. Actor: ${actor}",
    noVal: "§cCommand Does't Required Any Value",
    noPos: "§cPlease specify a location",
    noBType: "§cPlease provide a valid Blocktype",
    noNum: "§cPlease provide a valid number",
    onlyNum: "§cInvalid argument. Please provide a valid number",
};
export const state = {
    Notediting: "§eWorldEditing §aFalse",
    editing: "§eWorldEditing §aTrue",
};
export const commandDesc = {
    undo: "§dChange Undo",
    redo: "§dChange Redo",
    fill: "§eFilled ${result} Blocks ",
    keep: "§eFilled ${result} Blocks ",
    replace: "§eReplace ${result} Blocks",
    hollow: "§eHallowed ${result} Blocks ",
    wall: "§eWall Placed",
    sphere: "§eSphere Placed",
    center: "§e${result}",
    copy: "§eCopyed ${result} Blocks",
    paste: "§ePasted ${result} Blocks",
};

export const command = {
    description: {
        up: `Go up\n  -Usage ${prefix}up [height]`,
        wand: "Give you the worldEdit wand",
        help: "Show's you this",
        fill: `Fill an area\n  -Usage ${prefix}fill [blocktype] [blockstate]`,
        keep: `Keep an area\n  -Usage ${prefix}keep [blocktype] [blockstate]`,
        replace: `Replace blocks\n  -Usage ${prefix}replace [blocktype] [newblocktype] [blockstate]`,
        hollow: `Create a hollow box\n  -Usage ${prefix}hollow [blocktype] [blockstate]`,
        wall: `Create a walls\n  -Usage ${prefix}wall [blocktype] [blockstate]`,
        sphere: `Create a sphere\n  -Usage ${prefix}sphere [blocktype] [size] [blockstate]`,
        center: "Give's you the center",
        copy: "Copy an area",
        paste: "Paste the copyed area",
        triangle: "Create a pyramid",
        undo: "Undo what you did",
        redo: "Undo what you did",
        position1: "Area Position 1",
        position2: "Area Position 2",
    },
};
