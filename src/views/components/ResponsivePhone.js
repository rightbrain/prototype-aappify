import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
  Box,
  Center,
  Stack,
  Flex,
  ActionIcon,
  Avatar,
  Text,
  Checkbox,
} from "@mantine/core";
import {
  IconHome2,
  IconUser,
  IconMessageCircle,
  IconBookmark,
  IconAlignLeft,
  IconSearch,
} from "@tabler/icons-react";

const ResponsivePhone = ({ selectedAppBarItem, selectedNavBarItem }) => {
  const [visible] = useDisclosure(false);
  {
    /* Is true loader is visible */
  }

  const [selectedBlackIcon, setSelectedBlackIcon] = useState(null);
  // const [selectedItem, setSelectedItem] = useState(null);

  const bgColor = visible ? "blue" : "gray.2";

  const handleBlackIconClick = (index, component) => {
    console.log("Clicked icon :", component);
    setSelectedBlackIcon(index);
  };

  const blackicons = [
    { name: "IconHome2", component: <IconHome2 /> },
    { name: "IconMessageCircle", component: <IconMessageCircle /> },
    { name: "IconBookmark", component: <IconBookmark /> },
    { name: "IconUser", component: <IconUser /> },
  ];

  return (
    <Stack>
      <Center>
        <Box
          className="responsive-phone"
          pos="relative"
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            maxWidth: "250px",
            width: "250px",
            height: "500px",
            backgroundColor: "var(--mantine-color-gray-0)",
            border: "2px solid var(--mantine-color-dark-9)",
            borderRadius: "18px",
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          {/* This is the first Box */}
          <Box
            bg="dark.9"
            style={{
              width: "100%",
              height: "30px",
              borderRadius: "14px 14px 0px 0px",
            }}
          >
            <Center mt="xs">
              <Box
                bg="white"
                style={{
                  width: "50px",
                  height: "5px",
                  borderRadius: "20px",
                }}
              />
            </Center>
          </Box>
          {/* This is Display Box */}
          <Box
            bg={bgColor}
            style={{
              flex: 1,
              width: "100%",
              position: "relative",
              border: "2px solid var(--mantine-color-dark-9)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Appbar Start */}
            {selectedAppBarItem}
            {/* Appbar End */}
            <Flex
              style={{ flex: 1, background: "var(--mantine-color-gray-2)" }}
            ></Flex>

            {/* Navbar Start */}
            {selectedNavBarItem}
            {/* Navbar End */}
          </Box>
          {/* This is the last Box */}
          <Box
            bg="dark.9"
            style={{
              width: "100%",
              height: "30px",
              borderRadius: "0px 0px 14px 14px",
            }}
          >
            <Center mt="xs">
              <Box
                bg="white"
                style={{
                  width: "50px",
                  height: "5px",
                  borderRadius: "20px",
                }}
              />
            </Center>
          </Box>
        </Box>
      </Center>
    </Stack>
  );
};

export default ResponsivePhone;
