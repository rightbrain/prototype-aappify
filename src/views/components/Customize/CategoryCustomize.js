import React, { useState } from "react";
import { Accordion, ScrollArea, ActionIcon, Group } from "@mantine/core";
import {
  IconBellFilled,
  IconBellRinging2,
  IconBellRinging,
  IconBellOff,
  IconBell,
  IconBaselineDensityMedium,
  IconAlignLeft,
  IconAlignRight,
  IconAlignCenter,
  IconAlignJustified,
} from "@tabler/icons-react";

const CategoryCustomize = () => {
  return (
    <ScrollArea h="470px">
      <Accordion>
        {/* Accordion.Item */}
        <Accordion.Item pb="xs" value="items">
          {/* Accordion.Control */}
          <Accordion.Control bg="indigo.3">Items</Accordion.Control>
          {/* Accordion.Panel */}
          <Accordion.Panel bg="#FFFFFF">
            <Accordion>
              <Accordion.Item pb="xs" value="drawer-button">
                <Accordion.Control bg="indigo.3">
                  Drawer Button
                </Accordion.Control>
                <Accordion.Panel bg="gray.2">
                  <Group justify="center">
                    <ActionIcon variant="default">
                      <IconBaselineDensityMedium
                        style={{ width: "70%", height: "70%" }}
                        stroke={1.5}
                      />
                    </ActionIcon>
                    <ActionIcon variant="default" aria-label="Settings">
                      <IconAlignLeft
                        style={{ width: "70%", height: "70%" }}
                        stroke={1.5}
                      />
                    </ActionIcon>
                    <ActionIcon variant="default" aria-label="Settings">
                      <IconAlignRight
                        style={{ width: "70%", height: "70%" }}
                        stroke={1.5}
                      />
                    </ActionIcon>
                    <ActionIcon variant="default" aria-label="Settings">
                      <IconAlignCenter
                        style={{ width: "70%", height: "70%" }}
                        stroke={1.5}
                      />
                    </ActionIcon>
                    <ActionIcon variant="default" aria-label="Settings">
                      <IconAlignJustified
                        style={{ width: "70%", height: "70%" }}
                        stroke={1.5}
                      />
                    </ActionIcon>
                  </Group>
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item pb="xs" value="aappify">
                <Accordion.Control bg="indigo.3">Aappify</Accordion.Control>
                <Accordion.Panel bg="gray.2"></Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item pb="xs" value="notification-button">
                <Accordion.Control bg="indigo.3">
                  Notification Button
                </Accordion.Control>
                <Accordion.Panel bg="gray.2">
                  <Group justify="center">
                    <ActionIcon variant="default">
                      <IconBellFilled
                        style={{ width: "70%", height: "70%" }}
                        stroke={1.5}
                      />
                    </ActionIcon>
                    <ActionIcon variant="default" aria-label="Settings">
                      <IconBellRinging2
                        style={{ width: "70%", height: "70%" }}
                        stroke={1.5}
                      />
                    </ActionIcon>
                    <ActionIcon variant="default" aria-label="Settings">
                      <IconBellRinging
                        style={{ width: "70%", height: "70%" }}
                        stroke={1.5}
                      />
                    </ActionIcon>
                    <ActionIcon variant="default" aria-label="Settings">
                      <IconBellOff
                        style={{ width: "70%", height: "70%" }}
                        stroke={1.5}
                      />
                    </ActionIcon>
                    <ActionIcon variant="default" aria-label="Settings">
                      <IconBell
                        style={{ width: "70%", height: "70%" }}
                        stroke={1.5}
                      />
                    </ActionIcon>
                  </Group>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="settings">
          {/* Accordion.Control */}
          <Accordion.Control bg="indigo.3">Settings</Accordion.Control>
          {/* Accordion.Panel */}
          <Accordion.Panel bg="#FFFFFF">
            <Accordion>
              <Accordion.Item pb="xs" value="drawer-button">
                <Accordion.Control bg="indigo.3">
                  Drawer Button
                </Accordion.Control>
                <Accordion.Panel bg="gray.2"></Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item pb="xs" value="aappify">
                <Accordion.Control bg="indigo.3">Aappify</Accordion.Control>
                <Accordion.Panel bg="gray.2"></Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item pb="xs" value="notification-button">
                <Accordion.Control bg="indigo.3">
                  Notification Button
                </Accordion.Control>
                <Accordion.Panel bg="gray.2"></Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </ScrollArea>
  );
};

export default CategoryCustomize;
