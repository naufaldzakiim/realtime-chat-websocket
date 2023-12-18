import "@/styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import { Fonts } from "@/fonts";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Wangsaff</title>
        <meta
          name="description"
          content="Monitoring and Evaluating System for Informatics Diponegoro Univeristy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          breakpoints: {
            xs: "30em",
            sm: "48em",
            md: "64em",
            lg: "74em",
            xl: "90em",
          },
          fontFamily: "Poppins",
          components: {
            Button: {
              styles: {
                root: {
                  borderRadius: "8px",
                },
              },
            },
            TextInput: {
              styles: {
                label: {
                  color: "#d53535",
                  fontSize: "18px",
                },
                input: {
                  backgroundColor: "transparent",
                  color: "#d53535",
                  border: "2px solid #d53535",
                  borderRadius: "8px",
                  marginTop: "5px",
                },
              },
            },
            Textarea: {
              styles: {
                label: {
                  color: "#d53535",
                  fontSize: "18px",
                },
                input: {
                  backgroundColor: "transparent",
                  color: "#d53535",
                  border: "2px solid #d53535",
                  borderRadius: "8px",
                  marginTop: "5px",
                },
              },
            },
            PasswordInput: {
              styles: {
                label: {
                  color: "#d53535",
                },
                input: {
                  backgroundColor: "transparent",
                  color: "#d53535",
                  border: "2px solid #d53535",
                  borderRadius: "8px",
                  marginTop: "5px",
                },
                innerInput: {
                  backgroundColor: "transparent",
                  color: "#d53535",
                },
              },
            },
            NativeSelect: {
              styles: {
                label: {
                  color: "#d53535",
                  fontSize: "18px",
                },
                input: {
                  backgroundColor: "transparent",
                  color: "#d53535",
                  border: "2px solid #d53535",
                  borderRadius: "8px",
                  marginTop: "5px",
                  height: "42px",
                },
              },
            },
            // DateInput: {
            //   styles: {
            //     label: {
            //       color: "white",
            //     },
            //     input: {
            //       backgroundColor: "transparent",
            //       color: "white",
            //     },
            //     innerInput: {
            //       backgroundColor: "transparent",
            //       color: "white",
            //     },
            //   },
            // },
            DateInput: {
              styles: {
                label: {
                  color: "#d53535",
                  fontSize: "18px",
                },
                input: {
                  backgroundColor: "transparent",
                  color: "#d53535",
                  border: "2px solid #d53535",
                  borderRadius: "8px",
                  marginTop: "5px",
                  height: "42px",
                },
                innerInput: {
                  backgroundColor: "transparent",
                  color: "#d53535",
                },
              },
            },
            Select: {
              styles: {
                label: {
                  color: "#d53535",
                  fontSize: "18px",
                },
                input: {
                  backgroundColor: "transparent",
                  color: "#d53535",
                  border: "2px solid #d53535",
                  borderRadius: "8px",
                  marginTop: "5px",
                  height: "42px",
                },
                innerInput: {
                  backgroundColor: "transparent",
                  color: "#d53535",
                },
              },
            },
            YearPickerInput: {
              styles: {
                label: {
                  color: "#d53535",
                  fontSize: "18px",
                },
                input: {
                  backgroundColor: "transparent",
                  color: "#d53535",
                  border: "2px solid #d53535",
                  borderRadius: "8px",
                  marginTop: "5px",
                  height: "42px",
                },
                innerInput: {
                  backgroundColor: "transparent",
                  color: "#d53535",
                },
              },
            },
            Drawer: {
              styles: {
                content: {
                  backgroundColor: "black",
                },
                header: {
                  backgroundColor: "black",
                },
              },
            },
          },
          colors: {
            primary: [
              "#ffecec",
              "#f7d7d8",
              "#edadae",
              "#e37f80",
              "#da595a",
              "#d74142",
              "#d53535",
              "#bc2828",
              "#a92123",
              "#94161c",
            ],
          },
          primaryColor: "primary",
        }}
      >
        <Notifications />
        <Fonts />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
