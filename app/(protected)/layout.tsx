"use client"

import { Header } from "@components/layouts/header"
import { ThemedLayoutV2 } from "@refinedev/mui"
import { Authenticated } from "@refinedev/core"

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Authenticated redirectOnFail="/login">
      <ThemedLayoutV2 Header={() => <Header />}>{children}</ThemedLayoutV2>
    </Authenticated>
  )
}
