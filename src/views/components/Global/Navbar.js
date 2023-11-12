import React from "react";
import { Flex, ActionIcon, Box, ThemeIcon } from "@mantine/core";
import {
  IconHome2,
  IconUser,
  IconSearch,
  IconMessageCircle,
  IconShoppingBag,
  IconBookmark,
} from "@tabler/icons-react";

const icons = [
  { name: "IconHome2", component: <IconHome2 /> },
  { name: "IconMessageCircle", component: <IconMessageCircle /> },
  { name: "IconSearch", component: <IconSearch /> },
  { name: "IconShoppingBag", component: <IconShoppingBag /> },
  { name: "IconUser", component: <IconUser /> },
];
const blackicons = [
  { name: "IconHome2", component: <IconHome2 /> },
  { name: "IconMessageCircle", component: <IconMessageCircle /> },
  { name: "IconBookmark", component: <IconBookmark /> },
  { name: "IconUser", component: <IconUser /> },
];
const redicons = [
  { name: "IconHome2", component: <IconHome2 /> },
  { name: "IconMessageCircle", component: <IconMessageCircle /> },
  { name: "IconBookmark", component: <IconBookmark /> },
  { name: "IconUser", component: <IconUser /> },
];

const navbaritem = {
  flex1: (
    <Flex
      mih={40}
      bg="dark.9"
      justify="space-around"
      align="center"
      direction="row"
      wrap="wrap"
      style={{ border: "1px solid #1b1c1b" }}
    >
      {blackicons.map((blackicon, index) => (
        <ThemeIcon
          variant="gradient"
          size="md"
          aria-label="Gradient action icon"
          gradient={{ from: "red", to: "green", deg: 360 }}
        >
          {blackicon.component}
        </ThemeIcon>
      ))}
    </Flex>
  ),
  flex2: (
    <Flex
      mih={40}
      bg="white"
      // mt="xs"
      justify="space-around"
      align="center"
      direction="row"
      wrap="wrap"
      style={{ border: "1px solid #1b1c1b" }}
    >
      {redicons.map((redicon, index) => (
        <ThemeIcon
          variant="gradient"
          size="md"
          aria-label="Gradient action icon"
          gradient={{ from: "violet", to: "red", deg: 155 }}
        >
          {redicon.component}
        </ThemeIcon>
      ))}
    </Flex>
  ),
  flex3: (
    <Flex
      mih={40}
      mt="xs"
      bg="white"
      justify="space-around"
      align="center"
      direction="row"
      wrap="wrap"
      style={{ border: "1px solid #1b1c1b" }}
    >
      {icons.map((icon, index) => (
        <ThemeIcon
          variant="gradient"
          size="md"
          aria-label="Gradient action icon"
          gradient={{ from: "green", to: "indigo", deg: 360 }}
        >
          {icon.component}
        </ThemeIcon>
      ))}
    </Flex>
  ),
};

const Navbar = ({
  Item,
  SetItem,
  Item2,
  setItem2,
  Item3,
  setItem3,
  navBar,
}) => {
  const handleStack1Click = () => {
    SetItem(!Item);
    navBar(navbaritem.flex1);
  };

  const handleStack2Click = () => {
    setItem2(!Item2);
    navBar(navbaritem.flex2);
  };

  const handleStack3Click = () => {
    setItem3(!Item3);
    navBar(navbaritem.flex3);
  };

  return (
    <>
      <Flex>
      
        <Box w={220} onClick={handleStack1Click}>{navbaritem.flex1}</Box>
        <Box w={220} ml="xs" onClick={handleStack2Click}>
          {navbaritem.flex2}
        </Box>
      </Flex>
      <Box w={220} onClick={handleStack3Click}>{navbaritem.flex3}</Box>
    </>
  );
};

export default Navbar;
