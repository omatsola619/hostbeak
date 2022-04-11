import React from "react";
import styles from "../styles/Layout.module.css";
import DashboardHeader from "./DashboardHeader";
import SidebarItems from "./SidebarItems";

function DashboardLayout({active}) {
  return (
    <>
      <DashboardHeader />
      {/*sidebar items */}
      <SidebarItems active={active} />
    </>
  );
}

export default DashboardLayout;
