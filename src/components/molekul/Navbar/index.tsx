import React from "react";
import {
  createStyles,
  Navbar,
  Image,
  Center,
  Stack,
  ScrollArea,
  Text,
  Avatar,
  Grid,
  Group,
  SimpleGrid,
  Box,
  Card,
  Input,
} from "@mantine/core";
import { IconListSearch, IconSearch } from "@tabler/icons-react";
import Cookies from "js-cookie";
import api from "@/configs/axios-interceptors";
import router from "next/router";
import ChatRoomList from "@/components/molekul/ChatRoomList";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: "243063",
  },
}));

export type NavbarProps = {
  chatRooms: any;
};

export default function Index({ chatRooms }: NavbarProps) {
  const { classes } = useStyles();

  const onLogout = async () => {
    try {
      const response = await api.post("/auth/logout");
      Cookies.remove("token");
      Cookies.remove("user");
      router.push("/auth/signin");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <Card radius="md" h="100%" p={0}>
      <Stack>
        <Grid align="center" mt={8} mx={8}>
          <Grid.Col span="content">
            <Image
              alt="profile picture"
              radius="100%"
              src="/sample-profile.jpg"
              height={36}
              width={36}
              withPlaceholder
              className=""
            />
          </Grid.Col>
          <Grid.Col span="auto">
            <Input
              icon={<IconSearch />}
              placeholder="Cari untuk mengirim pesan"
              radius={8}
              size="xs"
              onChange={(e) => {
                // setSearch(e.currentTarget.value);
              }}
            />
          </Grid.Col>
        </Grid>
        <Text c="primary" size={18} fw={700} align="left" mx={16}>
          Chats
        </Text>
        <ChatRoomList chatRooms={chatRooms} />
      </Stack>
    </Card>
  );
}
