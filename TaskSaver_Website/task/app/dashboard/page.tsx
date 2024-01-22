"use client";
import { Box, Divider, Typography } from "@mui/material";
import { usePathname } from "next/navigation";
import Search from "../componenet/serch/search";
import { Profiler } from "react";
import Profile from "../componenet/profile/profile";
import Filter from "../componenet/filter/filter";
import Button from "../componenet/button/button";
import Todo from "../componenet/todo/todo";
import DoneComponent from "../componenet/done/done";
export default function Mypage() {
  const pathname = usePathname();
  return (
    <>
      <Box>
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box>
            <Search />
          </Box>
          <Box>
            <Profile />
          </Box>
        </Box>
      </Box>
      <Box mt={3}>
        <Divider />
      </Box>

      <Box
        display={"flex"}
        alignItems={"center"}
        mt={3}
        justifyContent={"space-between"}
      >
        <Typography fontSize={24} fontWeight={600} color={"#564e69"}>
          Dashboard Overview{" "}
        </Typography>
        <Box>
          <Filter />
        </Box>
        <Box>
          <Button />
        </Box>
      </Box>
      <Box mt={3}>
        <Box display={"flex"} justifyContent={"space-between"} gap={3}>
          <Box>
            <Todo />
          </Box>
          <Box>
            <DoneComponent />
          </Box>
        </Box>
      </Box>
    </>
  );
}
