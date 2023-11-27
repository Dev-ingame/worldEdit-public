import { command, commandDesc, error } from "../../text/en-US";
import { language } from "../../text/languageHandler";
import { wand } from "../utils";
import { commandBuilder } from "./commandBuilder";
import { debug, prefix } from "../../config";

let size, result, type, Rtype, length;
if (debug == true) {
    commandBuilder.registerCommand(
        "test",
        "Test",
        (msg, actor, command, args) => {
            console.log(msg);
            console.log(actor.name);
            console.log(command);
            console.log(args);

            const redo = wand._redoStack[actor.name];
            redo.forEach((change) => {
                console.log(
                    `${change.x} ${change.y} ${change.z} ${change.blockType}`,
                );
            });

            // const undo = wand._undoStack[actor.name];
            // undo.forEach((change) => {
            //     console.log(
            //         `${change.x} ${change.y} ${change.z} ${change.blockType}`,
            //     );
            // });
        },
    );
}

commandBuilder.registerCommand(
    "help",
    command.description.help,
    (msg, actor, command, args) => {
        if (args[0]) {
            const Command = commandBuilder.getCommand(args[0]);
            if (!Command) {
                return actor.sendMessage(
                    `§e${args[0]}§a:§c ${language(
                        error.unknownCommand,
                        "command",
                        args[0],
                    )}`,
                );
            } else {
                actor.sendMessage(`§e${args[0]}§a:§c ${Command.description}`);
            }
        } else {
            const allCommands = commandBuilder.getAllCommands();
            actor.sendMessage(allCommands);
        }
    },
);
commandBuilder.registerCommand(
    "up",
    command.description.up,
    (msg, actor, command, args) => {
        if (!args[0] || isNaN(args[0])) {
            actor.sendMessage(error.noNum);
            return;
        }

        const Command = [];
        const location = {
            x: actor.location.x.toFixed(1),
            y: actor.location.y.toFixed(),
            z: actor.location.z.toFixed(1),
        };

        const height = parseFloat(args[0]);
        Command.push(
            `setblock ${location.x} ${parseFloat(location.y) + height - 1} ${
                location.z
            } glass`,
            `tp ${actor.name} ${location.x} ${
                parseFloat(location.y) + height
            } ${location.z}`,
        );

        wand.runCommandBatch(Command);
    },
);

commandBuilder.registerCommand(
    "wand",
    command.description.wand,
    (msg, actor, command, args) => {
        wand.give(actor);
    },
);

commandBuilder.registerCommand(
    "pos1",
    command.description.position2,
    (msg, actor, command, args) => {
        const location = {
            x: actor.location.x.toFixed(1),
            y: actor.location.y.toFixed(1),
            z: actor.location.x.toFixed(1),
        };
        wand._players[actor.name].start = location;
        actor.sendMessage(
            `§aPosition 1: §e${wand._players[actor.name].start.x} §7/§e ${
                wand._players[actor.name].start.y
            } §7/§e ${wand._players[actor.name].start.z}`,
        );
    },
);

commandBuilder.registerCommand(
    "pos2",
    command.description.position2,
    (msg, actor, command, args) => {
        const location = {
            x: actor.location.x.toFixed(1),
            y: actor.location.y.toFixed(1),
            z: actor.location.z.toFixed(1),
        };
        wand._players[actor.name].end = location;
        actor.sendMessage(
            `§aPosition 2: §e${wand._players[actor.name].end.x} §7/§e ${
                wand._players[actor.name].end.y
            } §7/§e ${wand._players[actor.name].end.z}`,
        );
    },
);

commandBuilder.registerCommand(
    "undo",
    command.description.undo,
    (msg, actor, command, args) => {
        if (args[0]) return actor.sendMessage(error.noVal);
        wand.Undo(actor);
        actor.sendMessage(commandDesc.undo);
    },
);
commandBuilder.registerCommand(
    "redo",
    command.description.redo,
    (msg, actor, command, args) => {
        if (args[0]) return actor.sendMessage(error.noVal);
        wand.Redo(actor);
        actor.sendMessage(commandDesc.redo);
    },
);

commandBuilder.registerCommand(
    "fill",
    command.description.fill,
    (msg, actor, command, args) => {
        if (!args[0]) return actor.sendMessage(error.noBType);
        type = args[0].toLowerCase();

        if (wand.hasRequired(actor)) return actor.sendMessage(error.noPos);
        result = wand.Fill(actor, type, args[1]);
        actor.sendMessage("test");
        // wand.Fill(actor, type).then((e) => {
        //     actor.sendMessage(language(commandDesc.fill, "", "", e));
        // });
    },
);
commandBuilder.registerCommand(
    "pyramid",
    command.description.triangle,
    (msg, actor, command, args) => {
        if (!args[0]) return actor.sendMessage(error.noBType);
        type = args[0].toLowerCase();
        if (typeof args[1] == "number" && args[1] !== undefined)
            return actor.sendMessage(error.onlyNum);

        const result = wand.Triangle(actor, type, args[1], args[2]);
        actor.sendMessage(language(commandDesc.fill, "result", result));
        // wand.Fill(actor, type).then((e) => {
        //     actor.sendMessage(language(commandDesc.fill, "", "", e));
        // });
    },
);
commandBuilder.registerCommand(
    "copy",
    command.description.copy,
    (msg, actor, command, args) => {
        if (wand.hasRequired(actor)) return actor.sendMessage(error.noPos);
        const result = wand.Copy(actor);
        actor.sendMessage(language(commandDesc.copy, "result", result));
    },
);

commandBuilder.registerCommand(
    "paste",
    command.description.paste,
    (msg, actor, command, args) => {
        if (wand.hasRequired(actor)) return actor.sendMessage(error.noPos);
        const result = wand.Paste(actor, args[0]);
        actor.sendMessage(language(commandDesc.paste, "result", result));
    },
);

commandBuilder.registerCommand(
    "keep",
    command.description.keep,
    (msg, actor, command, args) => {
        if (!args[0]) return actor.sendMessage(error.noBType);
        type = args[0].toLowerCase();
        if (wand.hasRequired(actor)) return actor.sendMessage(error.noPos);
        const result = wand.FillKeep(actor, type);
        actor.sendMessage(language(commandDesc.fill, "result", result));
    },
);

commandBuilder.registerCommand(
    "replace",
    command.description.replace,
    (msg, actor, command, args) => {
        if (!args[0]) return actor.sendMessage(error.noBType);
        type = args[0].toLowerCase();
        if (!args[1]) return actor.sendMessage(error.noBType);
        Rtype = args[1].toLowerCase();
        if (wand.hasRequired(actor)) return actor.sendMessage(error.noPos);
        result = wand.replace(actor, type, Rtype);

        actor.sendMessage(language(commandDesc.replace, "result", result));
    },
);

commandBuilder.registerCommand(
    "hollow",
    command.description.hollow,
    (msg, actor, command, args) => {
        if (!args[0]) return actor.sendMessage(error.noBType);
        type = args[0].toLowerCase();
        if (wand.hasRequired(actor)) return actor.sendMessage(error.noPos);
        result = wand.Hollow(actor, type, Rtype);
        actor.sendMessage(language(commandDesc.hollow, "result", result));
    },
);

commandBuilder.registerCommand(
    "sphere",
    command.description.sphere,
    (msg, actor, command, args) => {
        if (typeof !args[0] == "string")
            return actor.sendMessage(error.noBType);
        type = args[0].toLowerCase();
        if (typeof args[1] == "number" && args[1] !== undefined)
            return actor.sendMessage(error.onlyNum);
        size = args[1];
        if (wand.hasRequired(actor)) return actor.sendMessage(error.noPos);
        result = wand.Sphere(actor, type, size);
        actor.sendMessage(language(commandDesc.sphere, "result", result));
    },
);

commandBuilder.registerCommand(
    "wall",
    command.description.wall,
    (msg, actor, command, args) => {
        if (!args[0]) return actor.sendMessage(error.noBType);
        type = args[0].toLowerCase();
        if (wand.hasRequired(actor)) return actor.sendMessage(error.noPos);
        result = wand.Walls(actor, type);
        actor.sendMessage(language(commandDesc.wall, "result", result));
    },
);

commandBuilder.registerCommand(
    "center",
    command.description.center,
    (msg, actor, command, args) => {
        if (wand.hasRequired(actor)) return actor.sendMessage(error.noPos);
        result = wand.Center(actor);
        actor.sendMessage(
            language(commandDesc.center, "result", [
                "Center: ",
                "§aX:§e ",
                result.x,
                " §aY:§e ",
                result.y,
                " §aZ:§e ",
                result.z,
            ]),
        );
    },
);
