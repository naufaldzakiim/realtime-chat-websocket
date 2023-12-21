import React, { useState, useEffect } from "react";
import AppLayout from "@/layouts/AppLayout";
import {
  createStyles,
  Center,
  Box,
  Text,
  Stack,
  Image,
  Flex,
  Card,
  Input,
  Grid,
  ActionIcon,
} from "@mantine/core";
import { IconAdjustments, IconPlane, IconSend } from "@tabler/icons-react";
import { VscSend } from "react-icons/vsc";
import Link from "next/link";
import { useRouter } from "next/router";
import api from "@/configs/axios-interceptors";
import Cookies from "js-cookie";
import ChatItem from "@/components/molekul/ChatItem";

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

const chats_1 = [
  {
    chat_room_id: 1,
    sender_id: 1,
    message: "Hai saya Agus",
    created_at: "2023-01-02 09:00:00",
  },
  {
    chat_room_id: 1,
    sender_id: 2,
    message: "Hello",
    created_at: "2023-01-02 09:00:00",
  },
];

const chats_2 = [
  {
    chat_room_id: 1,
    sender_id: 1,
    message: "Hai saya Bambang",
    created_at: "2023-01-02 09:00:00",
  },
  {
    chat_room_id: 1,
    sender_id: 2,
    message: "Hello",
    created_at: "2023-01-02 09:00:00",
  },
];

const chats_3 = [
  {
    chat_room_id: 1,
    sender_id: 1,
    message: "Hai saya Cahyo",
    created_at: "2023-01-02 09:00:00",
  },
  {
    chat_room_id: 1,
    sender_id: 2,
    message: "Hello",
    created_at: "2023-01-02 09:00:00",
  },
];

const useStyles = createStyles((theme) => ({
  name: {
    textUnderlineOffset: "15px",
  },
  card: {
    borderRadius: "14px",
  },
  gridCol: {
    maxWidth: "455px",
    marginRight: "20px",
  },
  addBtn: {
    borderRadius: "13px",
    backgroundColor: "#333F73",
    color: "white",
    fontWeight: 600,
    fontSize: "32px",
    padding: "5px",
    ":hover": {
      backgroundColor: "#333F73",
      borderRadius: "8px",
    },
  },
}));

export default function Index() {
  const { classes } = useStyles();
  const [user, setUser] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { id } = router.query;

  const [chats, setChats] = useState<any>([]);
  const [chatRoom, setChatRoom] = useState<any>({});

  const getChatRoom = (roomId: any) => {
    switch (roomId) {
      case "1":
        return chatRooms[0];
      case "2":
        return chatRooms[1];
      case "3":
        return chatRooms[2];
      default:
        return {};
    }
  };

  const getChat = (roomId: any) => {
    switch (roomId) {
      case "1":
        return chats_1;
      case "2":
        return chats_2;
      case "3":
        return chats_3;
      default:
        return [];
    }
  };

  useEffect(() => {
    // const userData = Cookies.get("user");
    // userData && setUser(JSON.parse(userData));
    const chatRoom = getChatRoom(id);
    setChatRoom(chatRoom);
    const chats = getChat(id);
    setChats(chats);
  }, [id]);

  return (
    <AppLayout>
      <Card radius="md" h="100%" p={0}>
        <Stack justify="space-between" h="100%">
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
              <Text size="lg">{chatRoom.user_name}</Text>
            </Grid.Col>
          </Grid>
          <Stack spacing={0} w="100%" h="100%" bg="gray.3">
            {chats.map((chat: any) => {
              return (
                <>
                  {chat.sender_id == 2 ? (
                    <ChatItem chat={chat} position="right" />
                  ) : (
                    <ChatItem chat={chat} position="left" />
                  )}
                </>
              );
            })}
          </Stack>
          <Grid align="center" mx={8} mb={8}>
            <Grid.Col span="auto">
              <Input
                placeholder="Tulis Pesan"
                radius={8}
                size="sm"
                onChange={(e) => {
                  // setSearch(e.currentTarget.value);
                }}
              />
            </Grid.Col>
            <Grid.Col span="content">
              <ActionIcon
                color="teal"
                size="md"
                radius="lg"
                pl={2}
                variant="filled"
              >
                <VscSend />
              </ActionIcon>
            </Grid.Col>
          </Grid>
        </Stack>
      </Card>
    </AppLayout>
  );
}
