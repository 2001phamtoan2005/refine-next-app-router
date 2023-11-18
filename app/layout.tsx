"use client";

import React from "react";

import { Refine } from "@refinedev/core";
import dataProvider from "@refinedev/simple-rest";
import routerProvider from "@refinedev/nextjs-router/app";
import "@refinedev/antd/dist/reset.css";

import { ConfigProvider } from "antd";
import "@styles/global.css";

import { authProvider } from "src/authProvider";
import { API_URL } from "../src/constants";

import { RefineSnackbarProvider, notificationProvider } from "@refinedev/mui";
import { ThemeProvider } from "@mui/material/styles";
import { ColorModeContextProvider } from "src/context";
import { RefineKbarProvider, RefineKbar } from "@refinedev/kbar";
import { CssBaseline, GlobalStyles } from "@mui/material";
// i18n
import "src/locales/i18n";
import type { I18nProvider } from "@refinedev/core";
import { useTranslation } from "react-i18next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t, i18n } = useTranslation();
  const i18nProvider: I18nProvider = {
    changeLocale: (lang: string) => i18n.changeLanguage(lang),
    getLocale: () => i18n.language,
    translate: (key: string, options?: any) => t(key, options),
  };

  return (
    // <ConfigProvider theme={RefineThemes.Blue}>
    <html lang="de">
      <body>
        <RefineKbarProvider>
          {/* <ThemeProvider theme={RefineThemes.Orange}> */}
          <ColorModeContextProvider>
            <CssBaseline />
            <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
            <RefineSnackbarProvider>
              <Refine
                authProvider={authProvider}
                routerProvider={routerProvider}
                dataProvider={dataProvider(API_URL)}
                i18nProvider={i18nProvider}
                resources={[
                  {
                    name: "posts",
                    list: "/posts",
                    create: "/posts/create",
                    edit: "/posts/edit/:id",
                    show: "/posts/show/:id",
                    meta: {
                      canDelete: true,
                    },
                  },
                ]}
                options={{
                  syncWithLocation: true,
                }}
                notificationProvider={notificationProvider}
              >
                {children}
                <RefineKbar />
              </Refine>
            </RefineSnackbarProvider>
          </ColorModeContextProvider>
          {/* </ThemeProvider> */}
        </RefineKbarProvider>
      </body>
    </html>
    // </ConfigProvider>
  );
}
