import {Box, Typography} from "@mui/joy";
import Color from "color";

export function tileValueToColor(value: number): Color  {
    if (value === 0) {
        return Color.hsl(0, 0, 100);
    }
    const exponent = Math.log2(value);
    const percent = (exponent / 16) * 100 + 25;
    return Color.hsl(22, percent, -percent + 112);
}

export default function Tile({ value }: {value: number}) {
    const color = tileValueToColor(value);

    return (
        <Box sx={{bgcolor: color.toString(), width: "100%", height: "100%", textAlign: "center", textJustify: "center"}}>
            <Typography level={"h1"}>
                {value}
            </Typography>
        </Box>
    )
}