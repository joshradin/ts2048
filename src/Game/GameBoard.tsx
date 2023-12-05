import React from "react";
import {Sheet} from "@mui/joy";
import Tile from "./Tile";

export interface GameBoardProps {
    size: number;
}

export default function GameBoard(props: GameBoardProps) {
    const { size } = props;

    const rows = React.useMemo(() => {
        const table = [];

        for (let i = 0; i < size; i++) {
            const row = [];
            for (let j = 0; j < size; j++) {
                row.push((
                    <td key={j} style={{width: `${(1 / size * 100)}%`}}>
                        <Sheet variant={"outlined"} sx={{aspectRatio: "1/1" }}>
                            <Tile value={i+j === 0 ? 0 : 2**(i*j)}/>
                        </Sheet>
                    </td>))
            }
            table.push(<tr key={i}>{row}</tr>)
        }

        return table;
    }, [size])

    return (
        <table style={{
            tableLayout: "fixed"
        }}>
            <tbody>
            {rows}
            </tbody>

        </table>
    )
}