import React from "react";
import {
  Accordion,
  Box,
  Center,
  Flex,
  Group,
  Image,
  Stack,
  Text,
  TextInput,
  Grid,
} from "@mantine/core";
import {
  IconAlignJustified,
  IconBell,
  IconBellPlus,
  IconBellRinging,
  IconBellRinging2,
  IconMenu,
  IconMenu2,
  IconMenuDeep,
  IconSchoolBell,
  IconSearch,
  IconSquareCheckFilled,
  IconSquareRoundedCheck,
} from "@tabler/icons-react";
const icons = [
  { icon_code: "menu", icon_component: <IconMenu /> },
  { icon_code: "menu2", icon_component: <IconMenu2 /> },
  { icon_code: "menu-deep", icon_component: <IconMenuDeep /> },
  { icon_code: "magnify", icon_component: <IconSearch /> },
];

const AppbarLayouts = ({ layouts, selectedLayout, setSelectedLayout }) => {
  return (
    <Accordion
      chevronPosition="right"
      variant="contained"
      defaultValue={`App bar`}
    >
      <Accordion.Item value={`App bar`}>
        <Accordion.Control bg="indigo.2">
          <Group wrap="nowrap">
            <Text fw={700}>App bar</Text>
          </Group>
        </Accordion.Control>
        <Accordion.Panel>
          <Stack gap="xs" p="xs" justify="flex-start">
            {layouts?.map((layout, index) => (
              <Box
                onClick={() => setSelectedLayout(layout.id)}
                bg={layout.styles?.background_color}
                px={10}
                py={5}
                style={{
                  boxShadow: `gray 0px ${layout.styles?.shadow}px ${layout.styles?.shadow}px`,
                  borderBottomLeftRadius: `${layout.styles?.border_radius}px`,
                  borderBottomRightRadius: `${layout.styles?.border_radius}px`,
                  borderTop: `${
                    selectedLayout === layout.id ? "solid red 5px" : ""
                  }`,
                }}
                pos={`relative`}
              >
                {"yes" === layout.active && (
                  <IconSquareCheckFilled
                    size={15}
                    style={{
                      position: "absolute",
                      right: -1,
                      top: 0,
                      color: "red",
                    }}
                  />
                )}
                <Grid>
                  <Grid.Col span={4}>
                    <Flex gap="md" justify="flex-start" align="center">
                      {layout.components?.map((component) => {
                        if (component.component_position === "leading_area") {
                          return (
                            <Center
                              bg={component.styles?.background_color}
                              p={5}
                              style={{
                                borderRadius: `${component.styles?.icon?.border_radius}%`,
                              }}
                            >
                              {component.properties?.icon_code === "menu" && (
                                <IconMenu
                                  size={component.styles?.icon_size}
                                  color={component.styles?.icon_color}
                                  style={{
                                    backgroundColor:
                                      component.styles?.icon?.background_color,
                                  }}
                                />
                              )}
                              {component.properties?.icon_code === "menu-2" && (
                                <IconMenu2
                                  size={component.styles?.icon_size}
                                  color={component.styles?.icon_color}
                                  style={{
                                    backgroundColor:
                                      component.styles?.icon?.background_color,
                                  }}
                                />
                              )}
                              {component.properties?.icon_code ===
                                "menu-deep" && (
                                <IconMenuDeep
                                  size={component.styles?.icon_size}
                                  color={component.styles?.icon_color}
                                  style={{
                                    backgroundColor:
                                      component.styles?.icon?.background_color,
                                  }}
                                />
                              )}
                              {component.properties?.icon_code ===
                                "align-justified" && (
                                <IconAlignJustified
                                  size={component.styles?.icon_size}
                                  color={component.styles?.icon_color}
                                  style={{
                                    backgroundColor:
                                      component.styles?.icon?.background_color,
                                  }}
                                />
                              )}
                              {component.properties?.icon_code === "search" && (
                                <IconSearch
                                  size={component.styles?.icon_size}
                                  color={component.styles?.icon_color}
                                  style={{
                                    backgroundColor:
                                      component.styles?.icon?.background_color,
                                  }}
                                />
                              )}
                            </Center>
                          );
                        }
                      })}
                    </Flex>
                  </Grid.Col>
                  <Grid.Col span={4}>
                    <Flex gap="md" justify="center" align="center">
                      {layout.components?.map((component) => {
                        if (component.component_position === "title_area") {
                          return (
                            <Center
                              bg={component.styles?.background_color}
                              p={5}
                              style={{
                                borderRadius: `${component.styles?.icon?.border_radius}%`,
                              }}
                            >
                              {component.properties?.icon_code === "menu" && (
                                <IconMenu
                                  size={component.styles?.icon_size}
                                  color={component.styles?.icon_color}
                                  style={{
                                    backgroundColor:
                                      component.styles?.icon?.background_color,
                                  }}
                                />
                              )}
                              {component.properties?.icon_code === "menu-2" && (
                                <IconMenu2
                                  size={component.styles?.icon_size}
                                  color={component.styles?.icon_color}
                                  style={{
                                    backgroundColor:
                                      component.styles?.icon?.background_color,
                                  }}
                                />
                              )}
                              {component.properties?.icon_code ===
                                "menu-deep" && (
                                <IconMenuDeep
                                  size={component.styles?.icon_size}
                                  color={component.styles?.icon_color}
                                  style={{
                                    backgroundColor:
                                      component.styles?.icon?.background_color,
                                  }}
                                />
                              )}
                              {component.properties?.icon_code ===
                                "align-justified" && (
                                <IconAlignJustified
                                  size={component.styles?.icon_size}
                                  color={component.styles?.icon_color}
                                  style={{
                                    backgroundColor:
                                      component.styles?.icon?.background_color,
                                  }}
                                />
                              )}
                              {component.properties?.icon_code === "search" && (
                                <IconSearch
                                  size={component.styles?.icon_size}
                                  color={component.styles?.icon_color}
                                  style={{
                                    backgroundColor:
                                      component.styles?.icon?.background_color,
                                  }}
                                />
                              )}
                            </Center>
                          );
                        }
                      })}
                    </Flex>
                  </Grid.Col>
                  <Grid.Col span={4}>
                    <Flex gap="md" justify="flex-end" align="center">
                      {layout.components?.map((component) => {
                        if (component.component_position === "action_area") {
                          return (
                            <Center
                              bg={component.styles?.background_color}
                              p={5}
                              style={{
                                borderRadius: `${component.styles?.icon?.border_radius}%`,
                              }}
                            >
                              {component.properties?.icon_code === "menu" && (
                                <IconMenu
                                  size={component.styles?.icon_size}
                                  color={component.styles?.icon_color}
                                  style={{
                                    backgroundColor:
                                      component.styles?.icon?.background_color,
                                  }}
                                />
                              )}
                              {component.properties?.icon_code === "menu-2" && (
                                <IconMenu2
                                  size={component.styles?.icon_size}
                                  color={component.styles?.icon_color}
                                  style={{
                                    backgroundColor:
                                      component.styles?.icon?.background_color,
                                  }}
                                />
                              )}
                              {component.properties?.icon_code ===
                                "menu-deep" && (
                                <IconMenuDeep
                                  size={component.styles?.icon_size}
                                  color={component.styles?.icon_color}
                                  style={{
                                    backgroundColor:
                                      component.styles?.icon?.background_color,
                                  }}
                                />
                              )}
                              {component.properties?.icon_code ===
                                "align-justified" && (
                                <IconAlignJustified
                                  size={component.styles?.icon_size}
                                  color={component.styles?.icon_color}
                                  style={{
                                    backgroundColor:
                                      component.styles?.icon?.background_color,
                                  }}
                                />
                              )}
                              {component.properties?.icon_code === "search" && (
                                <IconSearch
                                  size={component.styles?.icon_size}
                                  color={component.styles?.icon_color}
                                  style={{
                                    backgroundColor:
                                      component.styles?.icon?.background_color,
                                  }}
                                />
                              )}
                              {component.properties?.icon_code === "bell" && (
                                <IconBell
                                  size={component.styles?.icon_size}
                                  color={component.styles?.icon_color}
                                  style={{
                                    backgroundColor:
                                      component.styles?.icon?.background_color,
                                  }}
                                />
                              )}
                            </Center>
                          );
                        }
                      })}
                    </Flex>
                  </Grid.Col>
                </Grid>
              </Box>
            ))}
          </Stack>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default AppbarLayouts;
