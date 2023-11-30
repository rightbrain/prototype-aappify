import React, { useState } from "react";
// import { Accordion, ScrollArea, ActionIcon, Group } from "@mantine/core";
import {
  Text,
  Box,
  Accordion,
  Flex,
  ColorPicker,
  Input,
  Stack,
  Slider,
  ScrollArea,
  SegmentedControl,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
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
import GeneralProperties from "./GeneralProperties/GeneralProperties";
import IconProperties from "./IconProperties/IconProperties";
import TextProperties from "./TextProperties/TextProperties";

const CategoryCustomize = () => {
  const [boxValue, setBoxValue] = useState(1);
  const [paddingValue, setPaddingValue] = useState(1);
  const [marginValue, setMarginValue] = useState(1);
  const handleRadiusChange = (newValue) => {
    setBoxValue(newValue);
  };

  const handleRadiusIncrement = () => {
    const newValue = boxValue + 1;
    if (newValue <= 100) {
      setBoxValue(newValue);
    }
  };

  const handlePaddingChange = (newValue) => {
    setPaddingValue(newValue);
  };

  const handlePaddingIncrement = () => {
    const newValue = paddingValue + 1;
    if (newValue <= 100) {
      setPaddingValue(newValue);
    }
  };

  const handleMarginChange = (newValue) => {
    setMarginValue(newValue);
  };

  const handleMarginIncrement = () => {
    const newValue = marginValue + 1;
    if (newValue <= 100) {
      setMarginValue(newValue);
    }
  };
  return (
    <ScrollArea h="470px">
      <SegmentedControl
        w="420px"
        // h="48px"
        color="yellow"
        data={["Properties", "Options", "Action"]}
      />
      <Accordion
        chevronPosition="right"
        variant="separated"
        mt="24px"
        w="420px"
        h="56px"
        bg="#E9E9E9"
      >
        <Accordion.Item value="general-properties" bg="#E9E9E9">
          <Accordion.Control h="56px" bg="#FFFFFF" fw={600}>
            General Properties
          </Accordion.Control>
          <Accordion.Panel bg="#FFFFFF">
            <GeneralProperties />
          </Accordion.Panel>
        </Accordion.Item>
        <Accordion.Item mt="16px" value="icon-properties" bg="#E9E9E9">
          <Accordion.Control h="56px" bg="#FFFFFF">
            Icon Properties
          </Accordion.Control>
          <Accordion.Panel bg="#FFFFFF">
            <IconProperties />
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item mt="16px" value="text-properties" bg="#E9E9E9">
          <Accordion.Control h="56px" bg="#FFFFFF">
            Text Properties
          </Accordion.Control>
          <Accordion.Panel bg="#FFFFFF">
            <TextProperties />
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </ScrollArea>
  );
};

export default CategoryCustomize;
