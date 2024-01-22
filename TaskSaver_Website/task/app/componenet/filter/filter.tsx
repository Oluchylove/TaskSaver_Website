import { Filter1Rounded } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function Filter() {
    return(
        <>
        <Box>
            <Box display={"flex"} gap={2} alignItems={"center"}>
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
                    <Filter1Rounded/>

                </Box>
                <Box>
                    <Typography color={"#564e69"}>Filter</Typography>
                </Box>
            </Box>
        </Box>
        </>
    )
    
}