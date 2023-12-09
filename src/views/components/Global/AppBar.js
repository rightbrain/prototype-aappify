import React, { useState } from "react";
import { Avatar, Text, Flex, Box, Grid, Center, rem } from "@mantine/core";
import { IconAlignLeft, IconSearch, IconBell } from "@tabler/icons-react";

const appbarItems = [
  {
    id: 1,
    content: (
      <Box px={10} py={5} bg="#475177">
        <Grid>
          <Grid.Col span={2}>
            <Flex gap="md" justify="flex-start" align="center">
              <IconAlignLeft />
            </Flex>
          </Grid.Col>
          <Grid.Col span={8}>
            <Flex gap="md" justify="center" align="center">
              <Box
                bg="#FFFFFF"
                px={3}
                c={`gray.4`}
                style={{
                  width: "150px",
                  // backgroundColor: "var(--mantine-color-gray-0)",
                  // border: "1px solid var(--mantine-color-gray-4)",
                  borderRadius: "3px",
                }}
              >
                <Flex
                  gap="xs"
                  justify="flex-start"
                  align="center"
                  direction="row"
                  wrap="wrap"
                >
                  <IconSearch
                    style={{ width: rem(15), height: rem(15) }}
                    stroke={1.5}
                  />
                  <Text>Search</Text>
                </Flex>
              </Box>
            </Flex>
          </Grid.Col>
          <Grid.Col span={2}>
            <Flex gap="md" justify="flex-end" align="center">
              <Avatar
                size="sm"
                bg="white"
                radius="xl"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
              />
            </Flex>
          </Grid.Col>
        </Grid>
      </Box>
    ),
  },
  {
    id: 2,
    content: (
      <Box px={10} py={5} bg="#FDFDFD" style={{ border: "1px solid #192655" }}>
        <Grid>
          <Grid.Col span={2}>
            <Flex gap="md" justify="flex-start" align="center">
              <IconAlignLeft />
            </Flex>
          </Grid.Col>
          <Grid.Col span={8}>
            <Flex gap="md" justify="center" align="center">
              <Box
                bg="#F5F5F7"
                px={3}
                c={`#6A6A6A`}
                style={{
                  width: "150px",
                  // backgroundColor: "var(--mantine-color-gray-0)",
                  // border: "1px solid var(--mantine-color-gray-4)",
                  borderRadius: "3px",
                }}
              >
                <Flex
                  gap="xs"
                  justify="flex-start"
                  align="center"
                  direction="row"
                  wrap="wrap"
                >
                  <IconSearch
                    style={{ width: rem(15), height: rem(15) }}
                    stroke={1.5}
                  />
                  <Text>Search</Text>
                </Flex>
              </Box>
            </Flex>
          </Grid.Col>
          <Grid.Col span={2}>
            <Flex gap="md" justify="flex-end" align="center">
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justify: "space-around",
                  gap: "xl",
                  marginRight: "4px",
                }}
              >
                <Box>
                  <Avatar
                    size="sm"
                    bg="white"
                    radius="xl"
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                  />
                </Box>
              </Box>
            </Flex>
          </Grid.Col>
        </Grid>
      </Box>
    ),
  },
  {
    id: 3,
    content: (
      <Box px={10} py={5} bg="#E8E9EE">
        <Grid>
          <Grid.Col span={2}>
            <Flex gap="md" justify="flex-start" align="center">
              <Avatar
                size="sm"
                bg="white"
                radius="xl"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
              />
            </Flex>
          </Grid.Col>
          <Grid.Col span={8}>
            <Flex gap="md" justify="center" align="center">
              <Box
                bg="#FFFFFF"
                px={3}
                c={`#989898`}
                style={{
                  width: "150px",
                  // backgroundColor: "var(--mantine-color-gray-0)",
                  // border: "1px solid var(--mantine-color-gray-4)",
                  borderRadius: "3px",
                }}
              >
                <Flex
                  gap="xs"
                  justify="flex-start"
                  align="center"
                  direction="row"
                  wrap="wrap"
                >
                  <IconSearch
                    style={{ width: rem(15), height: rem(15) }}
                    stroke={1.5}
                  />
                  <Text>Search</Text>
                </Flex>
              </Box>
            </Flex>
          </Grid.Col>
          <Grid.Col span={2}>
            <Flex gap="md" justify="flex-end" align="center">
              <IconAlignLeft />
            </Flex>
          </Grid.Col>
        </Grid>
      </Box>
    ),
  },
  {
    id: 4,
    content: (
      <Box px={10} py={5}>
        <Grid>
          <Grid.Col span={2}>
            <Flex gap="md" justify="flex-start" align="center">
              <IconAlignLeft />
            </Flex>
          </Grid.Col>
          <Grid.Col span={8}>
            <Flex gap="md" justify="center" align="center">
              <Box
                bg="#F5F5F7"
                px={3}
                c={`#989898`}
                style={{
                  width: "150px",
                  // backgroundColor: "var(--mantine-color-gray-0)",
                  // border: "1px solid var(--mantine-color-gray-4)",
                  borderRadius: "3px",
                }}
              >
                <Flex
                  gap="xs"
                  justify="flex-start"
                  align="center"
                  direction="row"
                  wrap="wrap"
                >
                  <IconSearch
                    style={{ width: rem(15), height: rem(15) }}
                    stroke={1.5}
                  />
                  <Text>Search</Text>
                </Flex>
              </Box>
            </Flex>
          </Grid.Col>
          <Grid.Col span={2}>
            <Flex gap="md" justify="flex-end" align="center">
              <Avatar
                size="sm"
                bg="white"
                radius="md"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
              />
            </Flex>
          </Grid.Col>
        </Grid>
      </Box>
    ),
  },
  // ... more items as needed
  
];

const AppBar = ({ setItem, appBar, openCustomizeDrawer }) => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleItemClick = (item) => {
    setItem(item);
    appBar(item.content);
    setSelectedItemId(item.id);
    openCustomizeDrawer(`AppBar-${item.id}`);
  };

  // const handleItemClick = (item) => {
  //   // Toggle the selection state of the clicked item
  //   if (selectedItemId === item.id) {
  //     setSelectedItemId(null); // Unselect the item
  //   } else {
  //     setSelectedItemId(item.id); // Select the item
  //   }

  //   setItem(item);
  //   appBar(item.content);
  //   openCustomizeDrawer(`AppBar-${item.id}`);
  // };

  return (
    <>
      {appbarItems.map((item) => (
        <>
          <Flex
            w="400px"
            h="80px"
            style={{
              border: selectedItemId === item.id ? "1px solid #E88508" : "none",
            }}
          >
            <Box
              w="375px"
              h="70px"
              m="10px"
              key={item.id}
              onClick={() => handleItemClick(item)}
              style={{ borderBottom: "1px solid #E9E9E9" }}
            >
              {item.content}
              <Center mt="8px">
                <Text size="xs">AppBar - {item.id}</Text>
              </Center>
            </Box>
          </Flex>
        </>
      ))}
    </>
  );
};

export default AppBar;
