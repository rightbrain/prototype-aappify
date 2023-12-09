import React, { useState } from "react";
import {
  IconAlignJustified,
  IconSearch,
  IconPhoto,
  IconAlignLeft,
  IconPhotoMinus,
} from "@tabler/icons-react";
import {
  Accordion,
  ColorInput,
  Container,
  Text,
  Box,
  rem,
  Radio,
  Group,
  Checkbox,
  Stack,
  Flex,
  Center,
  Avatar,
  Divider,
} from "@mantine/core";

const SideAppBar = () => {
  return (
    <Box m="xs" bg="gray.0" style={{ height: "100%", overflowY: "auto" }}>
      <Stack my="xs" bg="var(--mantine-color-blue-light)">
        <Flex mih={50} gap="md" justify="space-between" align="center">
          <div style={{ flex: 1 }}>
            <IconAlignLeft style={{ marginLeft: "1rem" }} />
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "md",
              marginRight: "4px",
            }}
          >
            <IconSearch style={{ marginRight: "1rem" }} />
            <Avatar
            style={{ marginRight: '1rem' }}
              variant="filled"
              radius="sm"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
            />
          </div>
        </Flex>
      </Stack>
      <Divider my="sm" />
      <Accordion variant="contained">
        <Accordion.Item value="photos">
          <Accordion.Control>Appbar Items</Accordion.Control>
          <Accordion.Panel>
            <Accordion variant="contained">
              <Accordion.Item value="photos">
                <Accordion.Control
                  icon={
                    <IconAlignJustified
                      style={{
                        color: "var(--mantine-color-red-filled",
                        width: rem(20),
                        height: rem(20),
                      }}
                    />
                  }
                >
                  Drawer Icon
                </Accordion.Control>
                <Accordion.Panel>Content</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="print">
                <Accordion.Control
                  icon={
                    <IconSearch
                      style={{
                        color: "var(--mantine-color-blue-filled",
                        width: rem(20),
                        height: rem(20),
                      }}
                    />
                  }
                >
                  Search
                </Accordion.Control>
                <Accordion.Panel>Content</Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="camera">
                <Accordion.Control
                  icon={
                    <IconPhoto
                      style={{
                        color: "var(--mantine-color-teal-filled)",
                        width: rem(20),
                        height: rem(20),
                      }}
                    />
                  }
                >
                  Image
                </Accordion.Control>
                <Accordion.Panel>Content</Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
      <Accordion my="xs" variant="contained">
        <Accordion.Item value="photos">
          <Accordion.Control>Appbar Settings</Accordion.Control>
          <Accordion.Panel>
            <Accordion variant="contained">
              <Stack bg="var(--mantine-color-blue-light)">
                <Text style={{ marginLeft: "1rem" }}>Background</Text>
                <ColorInput
                  ml="xs"
                  mr="xs"
                  mb="xs"
                  placeholder="Input placeholder"
                  style={{ display: "inline-block" }}
                />
              </Stack>

              <Accordion.Item my="xs" value="shadow">
                <Accordion.Control>Shadow</Accordion.Control>
                <Accordion.Panel>
                  <Stack bg="gray.0">
                    <Center>
                      <Radio.Group my="xs" withAsterisk>
                        <Group>
                          <Radio value="shadow-1" />
                          <Radio value="shadow-2" />
                          <Radio value="shadow-3" />
                        </Group>
                      </Radio.Group>
                    </Center>
                  </Stack>
                </Accordion.Panel>
              </Accordion.Item>

              <Container
                my="xs"
                bg="var(--mantine-color-blue-light)"
                className="rounded-lg p-4 transition duration-300 ease-in-out hover:border-gray-300"
                style={{ borderRadius: "5px" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text my="xs" style={{ alignSelf: "flex-start" }}>
                    Back Button
                  </Text>
                  <Checkbox
                    my="xs"
                    color="indigo.5"
                    style={{ alignSelf: "flex-end" }}
                  />
                </div>
              </Container>

              <Container
                my="xs"
                bg="var(--mantine-color-blue-light)"
                className="rounded-lg p-4 transition duration-300 ease-in-out hover:border-gray-300"
                style={{ borderRadius: "5px" }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Text my="xs" style={{ alignSelf: "flex-start" }}>
                    Center Title
                  </Text>
                  <Checkbox
                    my="xs"
                    color="indigo.5"
                    style={{ alignSelf: "flex-end" }}
                  />
                </div>
              </Container>

              <Accordion.Item value="shape-type">
                <Accordion.Control>Shape Type</Accordion.Control>
                <Accordion.Panel>
                  <Stack bg="var(--mantine-color-blue-light)">
                    <Center>
                      <Radio.Group withAsterisk>
                        <Group my="xs">
                          <Radio value="shape-type-1" />
                          <Radio value="shape-type-2" />
                          <Radio value="shape-type-3" />
                        </Group>
                      </Radio.Group>
                    </Center>
                  </Stack>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="toolbar">
                <Accordion.Control>ToolBar Opacity</Accordion.Control>
                <Accordion.Panel>
                  <Stack bg="var(--mantine-color-blue-light)">
                    <Center>
                      <Checkbox.Group>
                        <Group my="xs">
                          <Checkbox value="react" />
                          <Checkbox value="svelte" />
                          <Checkbox value="ng" />
                          <Checkbox value="vue" />
                          <Checkbox value="redux" />
                        </Group>
                      </Checkbox.Group>
                    </Center>
                  </Stack>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="title-spacing">
                <Accordion.Control>Title Spacing</Accordion.Control>
                <Accordion.Panel>
                  <Stack
                    bg="var(--mantine-color-white)"
                    style={{ border: "1px solid #ccc" }}
                  >
                    <Stack
                      bg="gray.2"
                      ml="xs"
                      mr="xs"
                      mt="xs"
                      style={{ border: "1px solid #ccc" }}
                    >
                      <Flex
                        mih={50}
                        gap="xs"
                        justify="space-between"
                        align="center"
                        direction="row"
                        wrap="wrap"
                      >
                        <div
                          className="flex items-center justify-start"
                          style={{ marginLeft: "1rem" }}
                        >
                          <IconAlignLeft />
                        </div>

                        <div className="flex items-center justify-center">
                          <Text>RBS Company</Text>
                        </div>

                        <div
                          className="flex items-center justify-end"
                          style={{ marginRight: "1rem" }}
                        >
                          <Avatar
                            variant="filled"
                            radius="sm"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                          />
                        </div>
                      </Flex>
                    </Stack>
                    <Stack
                      bg="gray.2"
                      ml="xs"
                      mr="xs"
                      style={{ border: "1px solid #ccc" }}
                    >
                      <Flex
                        mih={50}
                        gap="xs"
                        justify="space-between"
                        align="center"
                        direction="row"
                        wrap="wrap"
                      >
                        <div
                          className="flex items-center justify-start"
                          style={{ marginLeft: "1rem" }}
                        >
                          <IconAlignLeft />
                        </div>

                        <div className="flex items-center justify-center">
                          <Text>RBS Company</Text>
                        </div>

                        <div
                          className="flex items-center justify-end"
                          style={{ marginRight: "1rem" }}
                        >
                          <Avatar
                            variant="filled"
                            radius="sm"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                          />
                        </div>
                      </Flex>
                    </Stack>
                    <Stack
                      bg="gray.2"
                      ml="xs"
                      mr="xs"
                      mb="xs"
                      style={{ border: "1px solid #ccc" }}
                    >
                      <Flex
                        mih={50}
                        gap="xs"
                        justify="space-between"
                        align="center"
                        direction="row"
                        wrap="wrap"
                      >
                        <div
                          className="flex items-center justify-start"
                          style={{ marginLeft: "1rem" }}
                        >
                          <IconAlignLeft />
                        </div>

                        <div className="flex items-center justify-center">
                          <Text>RBS Company</Text>
                        </div>

                        <div
                          className="flex items-center justify-end"
                          style={{ marginRight: "1rem" }}
                        >
                          <Avatar
                            variant="filled"
                            radius="sm"
                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                          />
                        </div>
                      </Flex>
                    </Stack>
                  </Stack>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Box>
  );
};

export default SideAppBar;
