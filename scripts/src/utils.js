import { world, ItemStack, Vector } from "@minecraft/server";

const overworld = world.getDimension("overworld");
const player = world.getPlayers()[0];
const _0x2c7f7a = _0x4c11;
(function (_0x1d2f1f, _0x4fb8a8) {
    const _0x890f04 = _0x4c11,
        _0x364357 = _0x1d2f1f();
    while (!![]) {
        try {
            const _0x56b6b9 =
                -parseInt(_0x890f04(0x145)) / 0x1 +
                -parseInt(_0x890f04(0x16a)) / 0x2 +
                parseInt(_0x890f04(0x168)) / 0x3 +
                (-parseInt(_0x890f04(0x158)) / 0x4) *
                    (-parseInt(_0x890f04(0x16b)) / 0x5) +
                parseInt(_0x890f04(0x175)) / 0x6 +
                -parseInt(_0x890f04(0x162)) / 0x7 +
                parseInt(_0x890f04(0x177)) / 0x8;
            if (_0x56b6b9 === _0x4fb8a8) break;
            else _0x364357["push"](_0x364357["shift"]());
        } catch (_0x4af090) {
            _0x364357["push"](_0x364357["shift"]());
        }
    }
})(_0x540d, 0x2b3dc);
class Wand {
    ["_players"] = {};
    [_0x2c7f7a(0x14b)] = {};
    ["_redoStack"] = {};
    [_0x2c7f7a(0x142)] = {};
    [_0x2c7f7a(0x172)](_0x51fbee) {
        const _0x24cd67 = _0x2c7f7a;
        console[_0x24cd67(0x15d)](_0x24cd67(0x15e));
        const _0x13cb16 = _0x51fbee[_0x24cd67(0x14e)],
            _0x41e0c4 = _0x51fbee[_0x24cd67(0x17a)](_0x24cd67(0x16f))[
                "container"
            ],
            _0x33be80 = _0x51fbee[_0x24cd67(0x17b)];
        _0x41e0c4[_0x24cd67(0x179)](
            _0x33be80,
            new ItemStack("minecraft:wooden_axe", 0x1),
        );
        const _0xd2c9c3 = _0x41e0c4["getSlot"](_0x33be80);
        _0xd2c9c3[_0x24cd67(0x153)]([_0x24cd67(0x154)]),
            this[_0x24cd67(0x144)][_0x13cb16]
                ? player["sendMessage"](
                      "§eYou\x27re\x20already\x20in\x20Edit\x20Mode",
                  )
                : (this[_0x24cd67(0x144)][_0x13cb16] = {
                      start: undefined,
                      end: undefined,
                  });
    }
    async [_0x2c7f7a(0x164)](_0x1c9e8f, _0x149af8) {
        const _0x537cd7 = _0x2c7f7a;
        !this[_0x537cd7(0x14b)][_0x1c9e8f] &&
            (this[_0x537cd7(0x14b)][_0x1c9e8f] = []),
            this["_undoStack"][_0x1c9e8f]["push"](_0x149af8);
    }
    async [_0x2c7f7a(0x160)](_0x107fee, _0x3174ff) {
        const _0x582e95 = _0x2c7f7a;
        !this[_0x582e95(0x15f)][_0x107fee] &&
            (this[_0x582e95(0x15f)][_0x107fee] = []),
            this["_redoStack"][_0x107fee][_0x582e95(0x166)](_0x3174ff);
    }
    async [_0x2c7f7a(0x152)](_0x348086) {
        const _0x4e7644 = _0x2c7f7a;
        for (const _0x1ec9d2 of _0x348086) {
            await overworld[_0x4e7644(0x171)](_0x1ec9d2);
        }
    }
    ["center"](_0x5694fc, _0x1edad7) {
        const _0x3989dc = _0x2c7f7a,
            _0x20c69b = _0x5694fc,
            _0x4fbc2d = _0x1edad7,
            _0x1bb9b = {
                x: Math[_0x3989dc(0x16e)](
                    (_0x20c69b["x"] + _0x4fbc2d["x"]) / 0x2,
                ),
                y: Math[_0x3989dc(0x16e)](
                    (_0x20c69b["y"] + _0x4fbc2d["y"]) / 0x2,
                ),
                z: Math[_0x3989dc(0x16e)](
                    (_0x20c69b["z"] + _0x4fbc2d["z"]) / 0x2,
                ),
            };
        return _0x1bb9b;
    }
    ["hasRequired"](_0x4906aa) {
        const _0x48e80d = _0x2c7f7a,
            _0x268af5 = _0x4906aa["name"];
        return !(
            this[_0x48e80d(0x144)][_0x268af5]?.[_0x48e80d(0x176)] &&
            this[_0x48e80d(0x144)][_0x268af5]?.["end"]
        );
    }
    [_0x2c7f7a(0x149)](_0x3e3adf, _0x4edf38) {
        const _0x30bbef = _0x2c7f7a,
            _0x5b8061 = Math["abs"](_0x4edf38["x"] - _0x3e3adf["x"]) + 0x1,
            _0x21a6fd = Math["abs"](_0x4edf38["y"] - _0x3e3adf["y"]) + 0x1,
            _0x20d7bd =
                Math[_0x30bbef(0x167)](_0x4edf38["z"] - _0x3e3adf["z"]) + 0x1;
        return _0x5b8061 * _0x21a6fd * _0x20d7bd;
    }
    ["getBlock"](_0x5ed26a, _0x25cf23, _0x2c2a7d) {
        const _0x882231 = _0x2c7f7a,
            _0x3a8b7a = overworld[_0x882231(0x174)](
                new Vector(_0x5ed26a, _0x25cf23, _0x2c2a7d),
            );
        return _0x3a8b7a || null;
    }
    #CalStartEnd(_0x4da220, _0x4a1e9b) {
        const _0x4ee166 = _0x2c7f7a;
        return {
            start: {
                x: Math["min"](_0x4da220["x"], _0x4a1e9b["x"]),
                y: Math[_0x4ee166(0x150)](_0x4da220["y"], _0x4a1e9b["y"]),
                z: Math[_0x4ee166(0x150)](_0x4da220["z"], _0x4a1e9b["z"]),
            },
            end: {
                x: Math[_0x4ee166(0x16d)](_0x4da220["x"], _0x4a1e9b["x"]),
                y: Math["max"](_0x4da220["y"], _0x4a1e9b["y"]),
                z: Math[_0x4ee166(0x16d)](_0x4da220["z"], _0x4a1e9b["z"]),
            },
        };
    }
    [_0x2c7f7a(0x156)](_0x1d9a15) {
        const _0xbba603 = _0x2c7f7a,
            _0x35b1c4 = _0x1d9a15["name"],
            _0x31dffd = [],
            _0x44a6bd = [],
            _0x12320f = this["_undoStack"][_0x35b1c4];
        if (_0x12320f && _0x12320f[_0xbba603(0x14d)] > 0x0) {
            const _0x355556 = this[_0xbba603(0x14b)][_0x35b1c4]["pop"]();
            _0x355556[_0xbba603(0x148)]((_0x471697) => {
                const _0x1739fe = _0xbba603,
                    _0x1abbaf = this[_0x1739fe(0x174)](
                        _0x471697["x"],
                        _0x471697["y"],
                        _0x471697["z"],
                    );
                _0x44a6bd[_0x1739fe(0x166)]({
                    x: _0x471697["x"],
                    y: _0x471697["y"],
                    z: _0x471697["z"],
                    blockType: _0x1abbaf[_0x1739fe(0x15c)],
                }),
                    _0x31dffd["push"](
                        _0x1739fe(0x14a) +
                            _0x471697["x"] +
                            "\x20" +
                            _0x471697["y"] +
                            "\x20" +
                            _0x471697["z"] +
                            "\x20" +
                            _0x471697[_0x1739fe(0x15a)],
                    );
            });
        }
        this["_toRedoStack"](_0x35b1c4, _0x44a6bd),
            this[_0xbba603(0x152)](_0x31dffd);
    }
    [_0x2c7f7a(0x155)](_0x4c6e0f) {
        const _0x243fa1 = _0x2c7f7a,
            _0x367ef8 = _0x4c6e0f[_0x243fa1(0x14e)],
            _0x124269 = [],
            _0x1a3b4f = [],
            _0x406f42 = this["_redoStack"][_0x367ef8];
        if (_0x406f42 && _0x406f42[_0x243fa1(0x14d)] > 0x0) {
            const _0x3819b2 =
                this[_0x243fa1(0x15f)][_0x367ef8][_0x243fa1(0x170)]();
            _0x3819b2[_0x243fa1(0x148)]((_0x1beb02) => {
                const _0x2f262c = _0x243fa1,
                    _0x385bed = this[_0x2f262c(0x174)](
                        _0x1beb02["x"],
                        _0x1beb02["y"],
                        _0x1beb02["z"],
                    );
                _0x1a3b4f[_0x2f262c(0x166)]({
                    x: _0x1beb02["x"],
                    y: _0x1beb02["y"],
                    z: _0x1beb02["z"],
                    blockType: _0x385bed[_0x2f262c(0x15c)],
                }),
                    _0x124269[_0x2f262c(0x166)](
                        _0x2f262c(0x14a) +
                            _0x1beb02["x"] +
                            "\x20" +
                            _0x1beb02["y"] +
                            "\x20" +
                            _0x1beb02["z"] +
                            "\x20" +
                            _0x1beb02[_0x2f262c(0x15a)],
                    );
            });
        }
        this["_toUndoStack"](_0x367ef8, _0x1a3b4f),
            this[_0x243fa1(0x152)](_0x124269);
    }
    [_0x2c7f7a(0x14f)](_0x368c25) {
        const _0x33559e = _0x2c7f7a,
            _0x34d028 = _0x368c25[_0x33559e(0x14e)],
            _0x3577c1 = [],
            { start: _0x52f537, end: _0x495beb } =
                this[_0x33559e(0x144)][_0x34d028],
            { start: _0x17665d, end: _0x3d66cc } = this.#CalStartEnd(
                _0x52f537,
                _0x495beb,
            );
        for (
            let _0x44b5de = _0x17665d["x"];
            _0x44b5de <= _0x3d66cc["x"];
            _0x44b5de++
        ) {
            for (
                let _0x5e12a1 = _0x17665d["y"];
                _0x5e12a1 <= _0x3d66cc["y"];
                _0x5e12a1++
            ) {
                for (
                    let _0x4e0daf = _0x17665d["z"];
                    _0x4e0daf <= _0x3d66cc["z"];
                    _0x4e0daf++
                ) {
                    const _0x5508b8 = this[_0x33559e(0x174)](
                        _0x44b5de,
                        _0x5e12a1,
                        _0x4e0daf,
                    );
                    _0x3577c1[_0x33559e(0x166)]({
                        x: _0x44b5de,
                        y: _0x5e12a1,
                        z: _0x4e0daf,
                        blockType: _0x5508b8
                            ? _0x5508b8["typeId"]
                            : _0x33559e(0x178),
                    });
                }
            }
        }
        return (
            (this[_0x33559e(0x142)][_0x34d028] = [..._0x3577c1]),
            _0x3577c1["length"]
        );
    }
    ["Paste"](_0x1b3b00, _0x5e2ad6 = "north") {
        const _0x3bd9ae = _0x2c7f7a,
            _0x31b623 = _0x1b3b00[_0x3bd9ae(0x14e)],
            _0x1342b1 = [],
            _0x41a656 = [],
            _0x38a412 = this[_0x3bd9ae(0x142)][_0x31b623],
            { start: _0x3702e9 } = this[_0x3bd9ae(0x144)][_0x31b623];
        if (_0x38a412 && _0x38a412["length"] > 0x0)
            return (
                _0x38a412[_0x3bd9ae(0x148)]((_0x1793b7) => {
                    const _0xc0079a = _0x3bd9ae,
                        _0x13d4e5 =
                            _0x3702e9["x"] +
                            (_0x1793b7["x"] - _0x38a412[0x0]["x"]),
                        _0x3fd058 =
                            _0x3702e9["y"] +
                            (_0x1793b7["y"] - _0x38a412[0x0]["y"]),
                        _0x1136b2 =
                            _0x3702e9["z"] +
                            (_0x1793b7["z"] - _0x38a412[0x0]["z"]);
                    let _0x229948 = _0x13d4e5,
                        _0x4deedb = _0x1136b2;
                    switch (_0x5e2ad6["toLowerCase"]()) {
                        case _0xc0079a(0x159):
                            (_0x229948 =
                                _0x3702e9["x"] +
                                (_0x38a412[0x0]["z"] - _0x1793b7["z"])),
                                (_0x4deedb =
                                    _0x3702e9["z"] +
                                    (_0x1793b7["x"] - _0x38a412[0x0]["x"]));
                            break;
                        case _0xc0079a(0x143):
                            (_0x229948 =
                                _0x3702e9["x"] +
                                (_0x38a412[0x0]["x"] - _0x1793b7["x"])),
                                (_0x4deedb =
                                    _0x3702e9["z"] +
                                    (_0x38a412[0x0]["z"] - _0x1793b7["z"]));
                            break;
                        case _0xc0079a(0x169):
                            (_0x229948 =
                                _0x3702e9["x"] +
                                (_0x1793b7["z"] - _0x38a412[0x0]["z"])),
                                (_0x4deedb =
                                    _0x3702e9["z"] +
                                    (_0x38a412[0x0]["x"] - _0x1793b7["x"]));
                            break;
                        default:
                            (_0x229948 = _0x13d4e5), (_0x4deedb = _0x1136b2);
                            break;
                    }
                    const _0x8a8a63 = this[_0xc0079a(0x174)](
                        _0x229948,
                        _0x3fd058,
                        _0x4deedb,
                    );
                    _0x41a656[_0xc0079a(0x166)]({
                        x: _0x229948,
                        y: _0x3fd058,
                        z: _0x4deedb,
                        blockType: _0x8a8a63
                            ? _0x8a8a63[_0xc0079a(0x15c)]
                            : blockType,
                    }),
                        _0x1342b1["push"](
                            _0xc0079a(0x14a) +
                                _0x229948 +
                                "\x20" +
                                _0x3fd058 +
                                "\x20" +
                                _0x4deedb +
                                "\x20" +
                                _0x1793b7[_0xc0079a(0x15a)],
                        );
                }),
                this[_0x3bd9ae(0x152)](_0x1342b1),
                this[_0x3bd9ae(0x164)](_0x31b623, _0x41a656),
                _0x38a412[_0x3bd9ae(0x14d)]
            );
    }
    ["Fill"](_0x262dc3, _0x55e092, _0x1a68c0 = "") {
        const _0x38146d = _0x2c7f7a,
            _0x5cc0ac = _0x262dc3[_0x38146d(0x14e)],
            _0x41dcbe = [],
            _0x456ef7 = [],
            { start: _0x1f62bf, end: _0x2bfd89 } = this["_players"][_0x5cc0ac],
            { start: _0x5e4169, end: _0x9c7255 } = this.#CalStartEnd(
                _0x1f62bf,
                _0x2bfd89,
            );
        for (
            let _0x3ac6a6 = _0x5e4169["x"];
            _0x3ac6a6 <= _0x9c7255["x"];
            _0x3ac6a6++
        ) {
            for (
                let _0x31fc41 = _0x5e4169["y"];
                _0x31fc41 <= _0x9c7255["y"];
                _0x31fc41++
            ) {
                for (
                    let _0x3bad4a = _0x5e4169["z"];
                    _0x3bad4a <= _0x9c7255["z"];
                    _0x3bad4a++
                ) {
                    const _0x33bb3e = this[_0x38146d(0x174)](
                        _0x3ac6a6,
                        _0x31fc41,
                        _0x3bad4a,
                    );
                    _0x41dcbe["push"]({
                        x: _0x3ac6a6,
                        y: _0x31fc41,
                        z: _0x3bad4a,
                        blockType: _0x33bb3e ? _0x33bb3e["typeId"] : _0x55e092,
                    }),
                        _0x456ef7[_0x38146d(0x166)](
                            "setblock\x20" +
                                _0x3ac6a6 +
                                "\x20" +
                                _0x31fc41 +
                                "\x20" +
                                _0x3bad4a +
                                "\x20" +
                                _0x55e092 +
                                "\x20" +
                                _0x1a68c0,
                        );
                }
            }
        }
        return (
            this[_0x38146d(0x152)](_0x456ef7)[_0x38146d(0x163)]((_0xfa539b) => {
                const _0x518b38 = _0x38146d;
                this[_0x518b38(0x164)](_0x5cc0ac, _0x41dcbe),
                    world[_0x518b38(0x16c)](_0x518b38(0x147));
            }),
            _0x41dcbe["length"]
        );
    }
    [_0x2c7f7a(0x165)](_0x5ef451, _0x1d28f4, _0x3cfef6, _0x5572dc = "") {
        const _0x169bb4 = _0x2c7f7a,
            _0xfa092 = _0x5ef451["name"],
            _0x569ace = [],
            _0x33d959 = [],
            { start: _0x4182bb, end: _0x1c1853 } =
                this[_0x169bb4(0x144)][_0xfa092],
            { start: _0x535936, end: _0x150bcd } = this.#CalStartEnd(
                _0x4182bb,
                _0x1c1853,
            );
        for (
            let _0x43ffea = _0x535936["x"];
            _0x43ffea <= _0x150bcd["x"];
            _0x43ffea++
        ) {
            for (
                let _0x5dd53f = _0x535936["y"];
                _0x5dd53f <= _0x150bcd["y"];
                _0x5dd53f++
            ) {
                for (
                    let _0x54ed0d = _0x535936["z"];
                    _0x54ed0d <= _0x150bcd["z"];
                    _0x54ed0d++
                ) {
                    const _0x169adc = this["getBlock"](
                        _0x43ffea,
                        _0x5dd53f,
                        _0x54ed0d,
                    );
                    _0x569ace[_0x169bb4(0x166)]({
                        x: _0x43ffea,
                        y: _0x5dd53f,
                        z: _0x54ed0d,
                        blockType: _0x169adc
                            ? _0x169adc[_0x169bb4(0x15c)]
                            : _0x1d28f4,
                    }),
                        _0x169adc["typeId"]["replace"](_0x169bb4(0x157), "") ==
                            _0x1d28f4 &&
                            _0x33d959["push"](
                                _0x169bb4(0x14a) +
                                    _0x43ffea +
                                    "\x20" +
                                    _0x5dd53f +
                                    "\x20" +
                                    _0x54ed0d +
                                    "\x20" +
                                    _0x3cfef6 +
                                    "\x20" +
                                    _0x5572dc,
                            );
                }
            }
        }
        return (
            this[_0x169bb4(0x152)](_0x33d959)[_0x169bb4(0x163)]((_0x36baa1) => {
                const _0x507150 = _0x169bb4;
                this["_toUndoStack"](_0xfa092, _0x569ace),
                    world[_0x507150(0x16c)](_0x507150(0x147));
            }),
            _0x569ace[_0x169bb4(0x14d)]
        );
    }
    ["FillKeep"](_0x32ba91, _0x5dc254, _0x49209f = "") {
        const _0x2c487c = _0x2c7f7a,
            _0x48042f = _0x32ba91[_0x2c487c(0x14e)],
            _0x5eaab8 = [],
            _0x147668 = [],
            { start: _0x16ec93, end: _0x49b245 } =
                this[_0x2c487c(0x144)][_0x48042f],
            { start: _0xd97c97, end: _0x58b39c } = this.#CalStartEnd(
                _0x16ec93,
                _0x49b245,
            );
        for (
            let _0x53e7eb = _0xd97c97["x"];
            _0x53e7eb <= _0x58b39c["x"];
            _0x53e7eb++
        ) {
            for (
                let _0x3fe4a1 = _0xd97c97["y"];
                _0x3fe4a1 <= _0x58b39c["y"];
                _0x3fe4a1++
            ) {
                for (
                    let _0x39edce = _0xd97c97["z"];
                    _0x39edce <= _0x58b39c["z"];
                    _0x39edce++
                ) {
                    const _0x428e6a = this[_0x2c487c(0x174)](
                        _0x53e7eb,
                        _0x3fe4a1,
                        _0x39edce,
                    );
                    _0x5eaab8[_0x2c487c(0x166)]({
                        x: _0x53e7eb,
                        y: _0x3fe4a1,
                        z: _0x39edce,
                        blockType: _0x428e6a
                            ? _0x428e6a[_0x2c487c(0x15c)]
                            : _0x5dc254,
                    }),
                        _0x147668[_0x2c487c(0x166)](
                            _0x2c487c(0x14a) +
                                _0x53e7eb +
                                "\x20" +
                                _0x3fe4a1 +
                                "\x20" +
                                _0x39edce +
                                "\x20" +
                                _0x5dc254 +
                                "\x20" +
                                _0x49209f +
                                _0x2c487c(0x173),
                        );
                }
            }
        }
        return (
            this["runCommandBatch"](_0x147668)[_0x2c487c(0x163)](
                (_0x49a1eb) => {
                    const _0x41cfaa = _0x2c487c;
                    this[_0x41cfaa(0x164)](_0x48042f, _0x5eaab8),
                        world[_0x41cfaa(0x16c)]("Done");
                },
            ),
            _0x5eaab8[_0x2c487c(0x14d)]
        );
    }
    ["Hollow"](_0x44cf74, _0x1a6432, _0x2a9214 = "") {
        const _0x128d3a = _0x2c7f7a,
            _0x10344f = _0x44cf74[_0x128d3a(0x14e)],
            _0x3d39eb = [],
            _0x4f4e13 = [],
            { start: _0x35cf4c, end: _0xa2d051 } = this["_players"][_0x10344f],
            { start: _0x503991, end: _0x4baf7e } = this.#CalStartEnd(
                _0x35cf4c,
                _0xa2d051,
            );
        for (
            let _0x5d0069 = _0x503991["x"];
            _0x5d0069 <= _0x4baf7e["x"];
            _0x5d0069++
        ) {
            for (
                let _0x36bbf5 = _0x503991["y"];
                _0x36bbf5 <= _0x4baf7e["y"];
                _0x36bbf5++
            ) {
                for (
                    let _0x5a9b3a = _0x503991["z"];
                    _0x5a9b3a <= _0x4baf7e["z"];
                    _0x5a9b3a++
                ) {
                    if (
                        _0x5d0069 === _0x503991["x"] ||
                        _0x5d0069 === _0x4baf7e["x"] ||
                        _0x36bbf5 === _0x503991["y"] ||
                        _0x36bbf5 === _0x4baf7e["y"] ||
                        _0x5a9b3a === _0x503991["z"] ||
                        _0x5a9b3a === _0x4baf7e["z"]
                    ) {
                        const _0xc1351a = this[_0x128d3a(0x174)](
                            _0x5d0069,
                            _0x36bbf5,
                            _0x5a9b3a,
                        );
                        _0x3d39eb[_0x128d3a(0x166)]({
                            x: _0x5d0069,
                            y: _0x36bbf5,
                            z: _0x5a9b3a,
                            blockType: _0xc1351a[_0x128d3a(0x15c)],
                        }),
                            _0x4f4e13[_0x128d3a(0x166)](
                                _0x128d3a(0x14a) +
                                    _0x5d0069 +
                                    "\x20" +
                                    _0x36bbf5 +
                                    "\x20" +
                                    _0x5a9b3a +
                                    "\x20" +
                                    _0x1a6432 +
                                    "\x20" +
                                    _0x2a9214,
                            );
                    }
                }
            }
        }
        return (
            this["runCommandBatch"](_0x4f4e13)[_0x128d3a(0x163)](
                (_0x5b84f7) => {
                    const _0x14f745 = _0x128d3a;
                    this[_0x14f745(0x164)](_0x10344f, _0x3d39eb),
                        world[_0x14f745(0x16c)](_0x14f745(0x147));
                },
            ),
            _0x3d39eb["length"]
        );
    }
    ["Walls"](_0x131cad, _0x2ce9a3, _0x5c93db = "") {
        const _0x32d99d = _0x2c7f7a,
            _0x406cd4 = _0x131cad[_0x32d99d(0x14e)],
            _0xa4b2d4 = [],
            _0x208fb6 = [],
            { start: _0x2f21e5, end: _0x528eaa } =
                this[_0x32d99d(0x144)][_0x406cd4],
            { start: _0x1adade, end: _0x4c2e3d } = this.#CalStartEnd(
                _0x2f21e5,
                _0x528eaa,
            );
        for (
            let _0x20acbe = _0x1adade["x"];
            _0x20acbe <= _0x4c2e3d["x"];
            _0x20acbe++
        ) {
            for (
                let _0x9c381a = _0x1adade["y"];
                _0x9c381a <= _0x4c2e3d["y"];
                _0x9c381a++
            ) {
                for (
                    let _0x9e1b42 = _0x1adade["z"];
                    _0x9e1b42 <= _0x4c2e3d["z"];
                    _0x9e1b42++
                ) {
                    if (
                        _0x20acbe === _0x1adade["x"] ||
                        _0x20acbe === _0x4c2e3d["x"] ||
                        _0x9e1b42 === _0x1adade["z"] ||
                        _0x9e1b42 === _0x4c2e3d["z"]
                    ) {
                        const _0x28b00b = this["getBlock"](
                            _0x20acbe,
                            _0x9c381a,
                            _0x9e1b42,
                        );
                        _0xa4b2d4[_0x32d99d(0x166)]({
                            x: _0x20acbe,
                            y: _0x9c381a,
                            z: _0x9e1b42,
                            blockType: _0x28b00b[_0x32d99d(0x15c)],
                        }),
                            _0x208fb6[_0x32d99d(0x166)](
                                "setblock\x20" +
                                    _0x20acbe +
                                    "\x20" +
                                    _0x9c381a +
                                    "\x20" +
                                    _0x9e1b42 +
                                    "\x20" +
                                    _0x2ce9a3 +
                                    "\x20" +
                                    _0x5c93db,
                            );
                    }
                }
            }
        }
        return (
            this[_0x32d99d(0x152)](_0x208fb6)[_0x32d99d(0x163)]((_0x541d5f) => {
                const _0x3025b2 = _0x32d99d;
                this[_0x3025b2(0x164)](_0x406cd4, _0xa4b2d4),
                    world[_0x3025b2(0x16c)](_0x3025b2(0x147));
            }),
            _0xa4b2d4[_0x32d99d(0x14d)]
        );
    }
    [_0x2c7f7a(0x146)](_0xb0d722, _0xcb386b, _0x4421bb, _0x435b37 = "") {
        const _0x287b6d = _0x2c7f7a,
            _0x34b042 = _0xb0d722[_0x287b6d(0x14e)],
            _0x28b5ae = [],
            _0x25882f = [],
            { start: _0x579c9b, end: _0x25e484 } = this["_players"][_0x34b042],
            { start: _0x29fa2d, end: _0x3263da } = this.#CalStartEnd(
                _0x579c9b,
                _0x25e484,
            ),
            _0x2a3297 = this["center"](_0x579c9b, _0x25e484);
        if (_0x4421bb == undefined)
            _0x4421bb = Math[_0x287b6d(0x16d)](
                (_0x3263da["x"] - _0x29fa2d["x"]) / 0x2,
                (_0x3263da["y"] - _0x29fa2d["y"]) / 0x2,
                (_0x3263da["z"] - _0x29fa2d["z"]) / 0x2,
            );
        for (
            let _0x1c1ef5 = _0x29fa2d["x"];
            _0x1c1ef5 <= _0x3263da["x"];
            _0x1c1ef5++
        ) {
            for (
                let _0x5db860 = _0x29fa2d["y"];
                _0x5db860 <= _0x3263da["y"];
                _0x5db860++
            ) {
                for (
                    let _0x4d2553 = _0x29fa2d["z"];
                    _0x4d2553 <= _0x3263da["z"];
                    _0x4d2553++
                ) {
                    if (
                        Math["pow"](_0x1c1ef5 - _0x2a3297["x"], 0x2) +
                            Math[_0x287b6d(0x15b)](
                                _0x5db860 - _0x2a3297["y"],
                                0x2,
                            ) +
                            Math["pow"](_0x4d2553 - _0x2a3297["z"], 0x2) <=
                        Math[_0x287b6d(0x15b)](_0x4421bb, 0x2)
                    ) {
                        const _0x542351 = this[_0x287b6d(0x174)](
                            _0x1c1ef5,
                            _0x5db860,
                            _0x4d2553,
                        );
                        _0x28b5ae[_0x287b6d(0x166)]({
                            x: _0x1c1ef5,
                            y: _0x5db860,
                            z: _0x4d2553,
                            blockType: _0x542351[_0x287b6d(0x15c)],
                        }),
                            _0x25882f[_0x287b6d(0x166)](
                                _0x287b6d(0x14a) +
                                    _0x1c1ef5 +
                                    "\x20" +
                                    _0x5db860 +
                                    "\x20" +
                                    _0x4d2553 +
                                    "\x20" +
                                    _0xcb386b +
                                    "\x20" +
                                    _0x435b37,
                            );
                    }
                }
            }
        }
        return (
            this[_0x287b6d(0x152)](_0x25882f)[_0x287b6d(0x163)]((_0x1ead22) => {
                const _0xf1a17c = _0x287b6d;
                this[_0xf1a17c(0x164)](_0x34b042, _0x28b5ae),
                    world["sendMessage"](_0xf1a17c(0x147));
            }),
            _0x28b5ae[_0x287b6d(0x14d)]
        );
    }
    [_0x2c7f7a(0x151)](_0x5ae8cd, _0xa5c724, _0x4cccd9, _0x5e7742 = "") {
        const _0x1cc77f = _0x2c7f7a,
            _0x5eb9ea = _0x5ae8cd[_0x1cc77f(0x14e)],
            _0x133cfe = [],
            _0x593384 = [],
            { start: _0x19151f } = this[_0x1cc77f(0x144)][_0x5eb9ea];
        let _0x54d3d = Math[_0x1cc77f(0x16d)](
            -0x264,
            Math[_0x1cc77f(0x150)](_0x19151f["x"], 0x264),
        );
        const _0x50336f = _0x19151f["y"];
        let _0x317f9a = Math["max"](
            -0x264,
            Math[_0x1cc77f(0x150)](_0x19151f["z"], 0x264),
        );
        const _0x4fd15d = Math["floor"](_0x4cccd9 / 0x2);
        for (let _0x1a3239 = 0x0; _0x1a3239 < _0x4cccd9; _0x1a3239++) {
            const _0x1060a3 = _0x50336f + _0x1a3239,
                _0x45e05f = _0x4fd15d - _0x1a3239;
            for (
                let _0x43800d = -_0x45e05f;
                _0x43800d <= _0x45e05f;
                _0x43800d++
            ) {
                for (
                    let _0x866e92 = -_0x45e05f;
                    _0x866e92 <= _0x45e05f;
                    _0x866e92++
                ) {
                    const _0x5128f8 = _0x54d3d + _0x43800d,
                        _0x36b3af = _0x317f9a + _0x866e92,
                        _0x18ed88 = Math[_0x1cc77f(0x16d)](
                            -0x264,
                            Math[_0x1cc77f(0x150)](_0x5128f8, 0x264),
                        ),
                        _0x2430c0 = Math["max"](
                            -0x264,
                            Math[_0x1cc77f(0x150)](_0x36b3af, 0x264),
                        ),
                        _0x2969b9 = this[_0x1cc77f(0x174)](
                            _0x18ed88,
                            _0x1060a3,
                            _0x2430c0,
                        );
                    _0x133cfe[_0x1cc77f(0x166)]({
                        x: _0x18ed88,
                        y: _0x1060a3,
                        z: _0x2430c0,
                        blockType: _0x2969b9
                            ? _0x2969b9[_0x1cc77f(0x15c)]
                            : _0xa5c724,
                    }),
                        _0x593384[_0x1cc77f(0x166)](
                            "setblock\x20" +
                                _0x18ed88 +
                                "\x20" +
                                _0x1060a3 +
                                "\x20" +
                                _0x2430c0 +
                                "\x20" +
                                _0xa5c724 +
                                "\x20" +
                                _0x5e7742,
                        );
                }
            }
        }
        return (
            this[_0x1cc77f(0x152)](_0x593384)[_0x1cc77f(0x163)](() => {
                const _0x18afa1 = _0x1cc77f;
                this["_toUndoStack"](_0x5eb9ea, _0x133cfe),
                    world["sendMessage"](_0x18afa1(0x147));
            }),
            _0x133cfe[_0x1cc77f(0x14d)]
        );
    }
    [_0x2c7f7a(0x161)](_0xfd3a2b) {
        const _0x4d108e = _0x2c7f7a,
            _0x233f52 = _0xfd3a2b["name"],
            { start: _0x43c4ac, end: _0x3cf6f5 } =
                this[_0x4d108e(0x144)][_0x233f52],
            _0x3ec8b4 = this[_0x4d108e(0x14c)](_0x43c4ac, _0x3cf6f5);
        return (
            overworld[_0x4d108e(0x171)](
                _0x4d108e(0x14a) +
                    _0x3ec8b4["x"] +
                    "\x20" +
                    _0x3ec8b4["y"] +
                    "\x20" +
                    _0x3ec8b4["z"] +
                    "\x20bedrock",
            ),
            _0x3ec8b4
        );
    }
}
export const wand = new Wand();
function _0x4c11(_0x1b5c49, _0x22ffe5) {
    const _0x540d98 = _0x540d();
    return (
        (_0x4c11 = function (_0x4c116e, _0x47657f) {
            _0x4c116e = _0x4c116e - 0x142;
            let _0x486539 = _0x540d98[_0x4c116e];
            return _0x486539;
        }),
        _0x4c11(_0x1b5c49, _0x22ffe5)
    );
}
function _0x540d() {
    const _0x420fbc = [
        "Done",
        "forEach",
        "CalcuBlock",
        "setblock\x20",
        "_undoStack",
        "center",
        "length",
        "name",
        "Copy",
        "min",
        "Triangle",
        "runCommandBatch",
        "setLore",
        "WAND",
        "Redo",
        "Undo",
        "minecraft:",
        "36zpnSxV",
        "east",
        "blockType",
        "pow",
        "typeId",
        "log",
        "test",
        "_redoStack",
        "_toRedoStack",
        "Center",
        "2319065Xduqvk",
        "finally",
        "_toUndoStack",
        "replace",
        "push",
        "abs",
        "881226IqFbog",
        "west",
        "156940aTbEtl",
        "139220jWbPcR",
        "sendMessage",
        "max",
        "round",
        "inventory",
        "pop",
        "runCommand",
        "give",
        "\x20keep",
        "getBlock",
        "1697082dKrxKE",
        "start",
        "513752fbgIkT",
        "Bedrock",
        "setItem",
        "getComponent",
        "selectedSlot",
        "_cloneStack",
        "south",
        "_players",
        "304523HbNBiA",
        "Sphere",
    ];
    _0x540d = function () {
        return _0x420fbc;
    };
    return _0x540d();
}
