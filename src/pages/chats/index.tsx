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
} from "@mantine/core";
import Link from "next/link";
import api from "@/configs/axios-interceptors";
import Cookies from "js-cookie";

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

  useEffect(() => {
    // const userData = Cookies.get("user");
    // userData && setUser(JSON.parse(userData));
  }, []);

  return (
    <AppLayout>
      {/* <Stack align="center" style={{ minHeight: "100%" }}>
        <Image
          alt="profile picture"
          radius={16}
          src="/chat.png"
          height={300}
          width={300}
          withPlaceholder
          className=""
        />
        <Text align="center">Realtime Chat App</Text>
        <Text align="center">Coming Soon</Text>
      </Stack> */}
      <Flex
        mih="100%"
        gap="md"
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
      >
        <Image
          alt="profile picture"
          radius={16}
          src="/chat.png"
          height={300}
          width={300}
          withPlaceholder
          className=""
        />
        <Text align="center">Realtime Chat App</Text>
        <Text align="center">Send and receive message in realtime</Text>
      </Flex>
    </AppLayout>
  );
}
