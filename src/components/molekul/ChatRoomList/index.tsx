import React, { useState, useEffect } from "react";
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
  Divider,
} from "@mantine/core";
import { IconListSearch, IconSearch } from "@tabler/icons-react";
import Cookies from "js-cookie";
import api from "@/configs/axios-interceptors";
import Router, { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: "243063",
  },

  chatroom: {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: theme.colors.gray[3],
    },
  },

  chatroom_active: {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: "#a92123",
    },
  },
}));

export type ChatRoomListProps = {
  chatRooms: any;
};

export default function Index({ chatRooms }: ChatRoomListProps) {
  const { classes } = useStyles();
  const router = useRouter();
  const [id, setId] = useState<any>(null);
  // if (router.query.id){
  //   setId(router.query.id)
  // }

  // get id from url if exist
  useEffect(() => {
    if (router.query.id) {
      setId(router.query.id);
    }
  }, [router.query.id]);

  console.log("id", id);

  return (
    <Stack justify="space-between" spacing={0} w="100%">
      {chatRooms.map((chatRoom: any) => {
        console.log("chatRoom id", (chatRoom.chat_room_id).toString());
        const isActive = (id == (chatRoom.chat_room_id).toString())
        return (
          <Card
            key={chatRoom.chat_room_id}
            radius={0}
            py={8}
            px={12}
            bg={isActive ? "primary" : "white"}
            className={isActive ? classes.chatroom_active : classes.chatroom}
            onClick={() => {
              Router.push(`/chats/${chatRoom.chat_room_id}`);
            }}            
          >
            <Grid align="center">
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
                <Group position="apart">
                  <Text c={isActive ? "white" : "black"} size={16} align="left">
                    {chatRoom.user_name}
                  </Text>
                  <Text c={isActive ? "white" : "black"} size={12} align="left">
                    10:00
                  </Text>
                </Group>
                <Text c={isActive ? "white" : "black"} size={14} align="left">
                  {chatRoom.message}
                </Text>
              </Grid.Col>
            </Grid>
          </Card>
        );
      })}
    </Stack>
  );
}
