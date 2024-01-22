import { Box, Typography } from "@mui/material";
import Link from "next/link";

export default function Message() {
  return (
    <>
      <Box
        width={"100%"}
        bgcolor={"#885ce4"}
        padding={5}
        borderRadius={5}
        color={"white"}
      >
        <Typography fontWeight={600}>Premium Account</Typography>
        <Typography mt={"5px"}>
          Get premuim account for $2 per month. Offer ends in 2 weeks
        </Typography>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          mt={2}
          alignItems={"center"}
        >
          <Box>Cancel</Box>
          <Box bgcolor={"#661bc8"} padding={1} borderRadius={"5px"}>
            <Link href={"#"}>Subcribe</Link>
          </Box>
        </Box>
      </Box>
    </>
  );
}
