import React from "react";
import { default as ClientWrapper } from "@/components/v2/PageWrapper";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <ClientWrapper>{children}</ClientWrapper>
    </React.Fragment>
  );
}
