import React, { useState, useEffect } from "react";
import {
  AppShell,
  LoadingOverlay,
  Grid,
  SimpleGrid,
  Box,
  Text,
  Group,
  Stack,
  Avatar,
  Input,
  Card,
} from "@mantine/core";

import NavBar from "@/components/molekul/Navbar";
import Cookies from "js-cookie";

type AppLayoutProps = {
  children: React.ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  const [user, setUser] = useState<any>({});

  useEffect(() => {
    const userData = Cookies.get("user");
    userData && setUser(JSON.parse(userData));
  }, []);

  const chatRooms = [
    {
      chat_room_id: 1,
      user_name: "Agus",
      message: "Hai",
    },
    {
      chat_room_id: 2,
      user_name: "Bambang",
      message: "Halo",
    },
    {
      chat_room_id: 3,
      user_name: "Cahyo",
      message: "Punten",
    },
  ];

  return (
    <AppShell
      styles={{
        main: {
          background: "#EEF0F6",
        },
      }}
    >
      <Grid style={{ height: "100%" }}>
        <Grid.Col span="auto" style={{maxWidth: "350px"}}>
          <NavBar chatRooms={chatRooms} />
        </Grid.Col>
        <Grid.Col span="auto" style={{minWidth: "400px"}}>{children}</Grid.Col>
      </Grid>
    </AppShell>
  );
}
