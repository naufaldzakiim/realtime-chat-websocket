import React from "react";
import { createStyles, Flex, Box, Text, Card, Image } from "@mantine/core";

export type ChatItemProps = {
  chat: any;
  position: "left" | "right";
};

export default function index({chat, position = "left"}:ChatItemProps) {
  if (position === "left") {
    return (
      <Flex key={chat.room_id} align="center" justify="start" px={16} py={8}>
        <Box mr={8}>
          <Image
            alt="profile picture"
            radius="100%"
            src="/sample-profile.jpg"
            height={36}
            width={36}
            withPlaceholder
            className=""
          />
        </Box>
        <Card radius="md" p={8}>
          <Text size="sm">{chat.message}</Text>
        </Card>
      </Flex>
    );
  }
  
  else if (position === "right") {
    return (
      <Flex key={chat.room_id} align="center" justify="end" direction="row-reverse" px={16} py={8}>
        <Box ml={8}>
          <Image
            alt="profile picture"
            radius="100%"
            src="/sample-profile.jpg"
            height={36}
            width={36}
            withPlaceholder
            className=""
          />
        </Box>
        <Card radius="md" p={8}>
          <Text size="sm">{chat.message}</Text>
        </Card>
      </Flex>
    );
  }
}
