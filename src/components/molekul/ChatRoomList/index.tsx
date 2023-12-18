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
  Divider,
} from "@mantine/core";
import { IconListSearch, IconSearch } from "@tabler/icons-react";
import Cookies from "js-cookie";
import api from "@/configs/axios-interceptors";
import router from "next/router";

const useStyles = createStyles((theme) => ({
  navbar: {
    backgroundColor: "243063",
  },

  nav_item: {
    "&:hover": {
      cursor: "pointer",
      backgroundColor: theme.colors.gray[0],
    },
  },
}));

export type ChatRoomListProps = {
  chatRooms: any;
};

export default function Index({ chatRooms }: ChatRoomListProps) {
  const { classes } = useStyles();

  return (
    <Stack justify="space-between" spacing={0} w="100%">
      {chatRooms.map((chatRoom: any) => (
        <Card
          key={chatRoom.chat_room_id}
          radius={0}
          py={8}
          px={12}
          className={classes.nav_item}
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
                <Text c="black" size={16} align="left">
                  {chatRoom.user_name}
                </Text>
                <Text c="black" size={12} align="left">
                  10:00
                </Text>
              </Group>
              <Text c="black" size={14} align="left">
                {chatRoom.message}
              </Text>
            </Grid.Col>
          </Grid>
        </Card>
      ))}
    </Stack>
  );
}
