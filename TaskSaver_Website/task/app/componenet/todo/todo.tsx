import { Add, AddAPhotoOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Card from "../card/card";
import High from "../priority/high";
import Image from "next/image";
import Logo1 from "../../images/logo1.png";
import Logo2 from "../../images/logo2.png";
import Logo3 from "../../images/logo3.jpg";
import Logo4 from "../../images/logo4.png";
import Logo5 from "../../images/logo5.png";
import Logo6 from "../../images/logo6.png";
import Logo7 from "../../images/logo7.png";
import Logo8 from "../../images/logo8.png";
import Less from "../priority/low";
import Medium from "../priority/medium";

export default function Todo() {
  const todo = [
    {
      id: 1,
      logo: Logo1,
      priority: <High />,
      title: "Webner website design",
      team: 3,
      tags: [
        {
          id: 1,
          name: "Next js",
        },
        {
          id: 2,
          name: "React js",
        },
        {
          id: 3,
          name: "MUI",
        },
      ],
    },
    {
      id: 2,
      logo: Logo2,
      priority: <Less />,
      title: "Webner website design",
      team: 3,
      tags: [
        {
          id: 1,
          name: "Next js",
        },
        {
          id: 2,
          name: "React js",
        },
        {
          id: 3,
          name: "MUI",
        },
      ],
    },

    {
      id: 3,
      logo: Logo3,
      priority: <Medium />,
      title: "Webner website design",
      team: 3,
      tags: [
        {
          id: 1,
          name: "Next js",
        },
        {
          id: 2,
          name: "React js",
        },
        {
          id: 3,
          name: "MUI",
        },
      ],
    },
  ];
  return (
    <>
      <Box>
        <Box
          bgcolor={"#eaeaea"}
          borderTop={"3px solid #885ce4"}
          padding={3}
          width={470}
        >
          <Box mt={2} display={"flex"} justifyContent={"space-between"}>
            <Typography color={"#564e69"} fontSize={18} fontWeight={600}>
              To Do
            </Typography>
            <Add />
          </Box>
          <Box mt={1}>
            {todo.map((list: any) => (
              <Card key={list.id} list={list} />
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}
