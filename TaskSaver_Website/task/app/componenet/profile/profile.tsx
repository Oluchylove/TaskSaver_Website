import { Mail, Notifications } from "@mui/icons-material";
import { Avatar, Box, Typography } from "@mui/material";

export default function Profile() {
  return (
    <>
      <Box>
        <Box display={"flex"} gap={3}>
          <Box display={"flex"} gap={2}>
            <Box
              bgcolor={"#eaeaea"}
              width={40}
              height={40}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={30}
              color={"#6d6b6b"}
            >
              <Notifications />
            </Box>
            <Box
              bgcolor={"#eaeaea"}
              width={40}
              height={40}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={30}
              color={"#6d6b6b"}
            >
              <Mail />
            </Box>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            gap={2}
            bgcolor={"#eaeaea"}
            borderRadius={20}
            width={170}
          >
            <Avatar />
            <Typography color={"#7e7e7e"}>Peter Hawlk</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
