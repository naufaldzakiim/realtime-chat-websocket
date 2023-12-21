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
  ScrollArea
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconAdjustments, IconPlane, IconSend } from "@tabler/icons-react";
import { VscSend } from "react-icons/vsc";
import Link from "next/link";
import { useRouter } from "next/router";
import api from "@/configs/axios-interceptors";
import Cookies from "js-cookie";
import ChatItem from "@/components/molekul/ChatItem";
import { socket } from "@/configs/socket";

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
  const {isReady} = router;

  const [chats, setChats] = useState<any>([]);
  const [chatRoom, setChatRoom] = useState<any>({});

  const form = useForm({
    initialValues: {
      id: "",
      message: "",
    },
  });

  const getChats = async () => {
    try {
      const response = await api.get("/chats/list");
      console.log(response.data.data.data);
      setChats(response.data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getLastMessage = async () => {
    try {
      const response = await api.get("/chats/last-message");
      console.log(response.data.data.data);
      setChatRoom(response.data.data.data[0]);
      console.log(chatRoom);
    } catch (error) {
      console.log(error);
    }
  };

  // const sendMessage = async () => {
  //   try {
  //     const response = await api.post("/chats/create", {
  //       room_id: id,
  //       message: form.values.message,
  //     });
  //     getChats();
  //     form.reset();
  //   } catch (error) {
  //     console.log(error);
  //     setIsLoading(false);
  //   }

  //   console.log(form.values);
  // };
  useEffect(() => {
    if(isReady){
      socket.emit("joinChat", { room_id: router.query.id });
      console.log("join chat room");
    }
  },[isReady]);

  useEffect(() => {
    const userData = Cookies.get("user");
    userData && setUser(JSON.parse(userData));
    getLastMessage();
    getChats();
  }, [id]);



  function sendMessage() {
    const message = {
        message: form.values.message,
    };

    socket.emit("sendMessage", message);

    socket.on("newMessage", (message) => {
      // console.log(message);
      setChats((chats: any) => [...chats, message]);
    });
    form.reset();
}

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
              <Text size="lg">{chatRoom.recipient_name}</Text>
            </Grid.Col>
          </Grid>
          <ScrollArea h="80vh" w="100%">
          <Stack spacing={0} w="100%" h="100%" bg="gray.3">
            {chats.map((chat: any) => {
              return (
                <>
                  {chat.sender_id == user.id ? (
                    <ChatItem chat={chat} position="right" />
                  ) : (
                    <ChatItem chat={chat} position="left" />
                  )}
                </>
              );
            })}
          </Stack>
          </ScrollArea>
          <Grid align="center" mx={8} mb={8}>
            <Grid.Col span="auto">
              <Input
                placeholder="Tulis Pesan"
                radius={8}
                size="sm"
                {...form.getInputProps("message")}
              />
            </Grid.Col>
            <Grid.Col span="content">
              <ActionIcon
                color="teal"
                size="lg"
                radius="lg"
                pl={2}
                m={0}
                variant="filled"
                onClick={() => {
                  sendMessage();
                }}
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
