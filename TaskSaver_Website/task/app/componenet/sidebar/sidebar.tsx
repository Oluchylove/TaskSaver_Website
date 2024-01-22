"use client";
import { Box, Button, SvgIcon, Typography } from "@mui/material";
import Logo from "../../images/logo.png";
import Image from "next/image";
import { sidebar } from "./data/sidebardata";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import ListAltIcon from "@mui/icons-material/ListAlt";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FilePresentIcon from "@mui/icons-material/FilePresent";
import SettingsIcon from "@mui/icons-material/Settings";
import UpdateIcon from "@mui/icons-material/Update";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import Styles from "./data/sidebar.module.css";
import styled from "styled-components";
import "../../globals.css";
import Message from "../message/message";
import Version from "../version/version";

export default function Sidebar() {
  const pathname = usePathname();

  const sidebar = {
    maintab: [
      {
        id: 1,
        name: "dashboard",
        icon: <SpaceDashboardIcon />,
        href: "/dashboard",
      },

      {
        id: 3,
        name: "Project",
        icon: <ListAltIcon />,
        href: "/project",
      },

      {
        id: 4,
        name: "Task",
        icon: <FormatListNumberedIcon />,
        href: "/task",
      },

      {
        id: 5,
        name: "Documents",
        icon: <FilePresentIcon />,
        href: "/document",
      },
    ],
    subtab: [
      {
        id: 6,
        name: "Settings",
        icon: <SettingsIcon />,
        href: "/setting",
      },

      {
        id: 7,
        name: "Logout",
        icon: <UpdateIcon />,
        href: "./logout",
      },
    ],
  };
  return (
    <>
      <Image src={Logo} alt="Logo" height={44} width={169}></Image>

      <Box mt={5}>
        {sidebar.maintab.map((sidebar) => (
          <div
            key={sidebar.id}
            className={pathname === sidebar.href ? "linkholder" : "linknormal"}
          >
            <Link href={sidebar.href} className={"link"}>
              <Box mt={0} display={"flex"} gap={3}>
                <Box>{sidebar.icon}</Box>
                <Box>
                  <Typography fontSize={"16px"} fontWeight={500}>
                    {sidebar.name}
                  </Typography>
                </Box>
              </Box>
            </Link>
          </div>
        ))}
        <Box mt={8}>
          {sidebar.subtab.map((sidebar) => (
            <Link key={sidebar.id} href={sidebar.href}>
              <Box color={"white"} mt={3} display={"flex"} gap={3}>
                <Box> {sidebar.icon}</Box>
                <Box>{sidebar.name}</Box>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
      <Box mt={7}>
        <Message />
      </Box>
      <Box mt={3} mb={3}>
        <Version />
      </Box>
    </>
  );
}
