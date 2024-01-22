import { Add, AddAPhotoOutlined } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import Card from "../card/card";

import Image from "next/image";
import Logo1 from "../../images/logo1.png";
import Logo2 from "../../images/logo2.png";
import Logo3 from "../../images/logo3.jpg";
import Logo4 from "../../images/logo4.png";
import Logo5 from "../../images/logo5.png";
import Logo6 from "../../images/logo6.png";
import Logo7 from "../../images/logo7.png";
import Logo8 from "../../images/logo8.png";
import DoneTage from "../priority/donetag";

export default function DoneComponent() {
  const todo = [
    {
      id: 1,
      logo: Logo1,
      priority: <DoneTage />,
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
      priority: <DoneTage />,
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
      priority: <DoneTage />,
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
          borderTop={"3px solid #3dd0ad"}
          padding={3}
          width={470}
        >
          <Box mt={2} display={"flex"} justifyContent={"space-between"}>
            <Typography color={"#3dd0ad"} fontSize={18} fontWeight={600}>
              Done
            </Typography>
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
