import React from 'react';
import {Card, Grid, Sheet, Stack, Typography} from "@mui/joy";
import { GameBoard } from "./Game";

function App() {
  return (
      <Sheet>
          <Stack sx={{
              paddingTop: "5dvh",
              margin: "auto",
              width: "75%"
          }}
                 spacing={2}
          >
              <Card>
                  <Typography level={"h1"} sx={{ textAlign: "center" }}>
                      2048
                  </Typography>
              </Card>
              <Card
                  variant={"outlined"}
              >
                  <GameBoard size={4} />
              </Card>
          </Stack>
      </Sheet>
  );
}

export default App;
