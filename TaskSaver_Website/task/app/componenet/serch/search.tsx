import { SearchRounded } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Search() {
  return (
    <>
      <Box
        display={"flex"}
        gap={3}
        bgcolor={"#eaeaea"}
        padding={1}
        paddingLeft={3}
        borderRadius={5}
      >
        <SearchRounded sx={{ color: "#564e69" }} />
        <input
          placeholder="search for task or other thing"
          type="text"
          style={{
            border: "none",
            background: "none",
            width: 300,
          }}
        ></input>
      </Box>
    </>
  );
}
