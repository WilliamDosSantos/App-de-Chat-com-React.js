import React from "react";
import * as C from "./styles";
import SidebarHeader from "./../SidebarHeader/index";
import SidebarChats from "./../SidebarChats/index";

const Sidebar = ({ setUserChat, userChat }) => {
  return (
    <C.Container>
      <SidebarHeader setUserChat={setUserChat} />
      <SidebarChats setUserChat={setUserChat} userChat={userChat} />
    </C.Container>
  );
};

export default Sidebar;
