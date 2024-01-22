import { People } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

export default function Card({list}) {
    return(
        <>
        <Box>
            <Box bgcolor={"white"} borderRadius={2}  display={"flex"} padding={4} gap={3} mb={3}>
                <Box borderRadius={30}width={40}height={40} >
                    <Image src={list.logo} width={40}height={40} alt="img"/>
                    
                </Box>
                <Box>
                    
                        {list.priority}
                   
                    <Box>
                       <Typography fontWeight={600} color={"#3f1795"} mt={"3px"}>{list.title}</Typography> 
                    </Box>
                    <Box display={"flex"} gap={2}>
                        {
                            list.tags.map((tag)=>(
                                <Box >
                                <Box key={tag.id} >
                                   <Typography fontSize={13} color={"#847e7e"}>{tag.name}</Typography> 
                                </Box>
                                </Box>
                                
                            ))
                        }
                    </Box>
                    <Box display={"flex"} color={"#847e7e"} gap={1} mt={"14px"}>
                        <People/> {list.team} <Typography>Person working on this task</Typography>
                    </Box>
                </Box>
                
            </Box>
        </Box>
        </>
    )
    
    
}