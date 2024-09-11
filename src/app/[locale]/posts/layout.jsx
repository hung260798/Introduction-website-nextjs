import React from "react";
import PageWrapper from "@/components/v2/PageWrapper";

export default function Layout({ children }) {
  return (
    <React.Fragment>
      <PageWrapper>{children}</PageWrapper>
    </React.Fragment>
  );
}
