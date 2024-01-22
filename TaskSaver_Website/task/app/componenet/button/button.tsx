import { Add } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function Button() {
  return (
    <>
      <Box>
        <Box
          display={"flex"}
          width={200}
          height={40}
          justifyContent={"Center"}
          alignItems={"Center"}
          bgcolor={"#3f1795"}
          color={"white"}
          borderRadius={2}
        >
          <Add />
          <Typography>Add task</Typography>
        </Box>
      </Box>
    </>
  );
}
