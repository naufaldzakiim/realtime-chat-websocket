import React, { useState, useEffect } from "react";
import {
  AppShell,
  Grid,
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
          <NavBar />
        </Grid.Col>
        <Grid.Col span="auto" style={{minWidth: "400px"}}>{children}</Grid.Col>
      </Grid>
    </AppShell>
  );
}
