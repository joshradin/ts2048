import {tileValueToColor} from "./Tile";

test("tile value to color", () => {
    let prev = null;
    for (let i = 0; i <= 12; i++) {
        const e = 2**i;
        const color = tileValueToColor(e);
        console.log("color:", color.rgb().array());
        expect(color).not.toEqual(prev);
        prev = color;
    }
})