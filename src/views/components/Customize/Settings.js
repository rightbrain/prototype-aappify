import React, { useState } from "react";
import {
  Stack,
  Flex,
  Slider,
  Input,
  Text,
  Accordion,
} from "@mantine/core";

import { IconPlus } from "@tabler/icons-react";

const Settings = () => {
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
    <Accordion.Item value="settings" mt="xs">
      <Accordion.Control bg="#FFFFFF">
        <Text>Settings</Text>
      </Accordion.Control>
      <Accordion.Panel bg="#FFFFFF">
        <Stack gap={0}>
          {/* Box Radius */}
          <Text size="sm">Box Radius</Text>
          <Flex
            mih={40}
            bg="white"
            gap="xs"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
            style={{
              border: "1px solid #1b1c1b",
              borderRadius: "5px",
            }}
          >
            <Input
              type="number"
              size="xs"
              value={boxValue}
              w={45}
              readOnly
              style={{ borderRadius: "20px" }}
            />
            <Slider
              value={boxValue}
              onChange={handleRadiusChange}
              min={0}
              max={100}
              w={220}
              label={null}
            />
            <IconPlus
              onClick={handleRadiusIncrement}
              style={{
                border: "1px solid #000",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
          </Flex>
          {/* padding */}
          <Text size="sm">Padding</Text>
          <Flex
            mih={40}
            bg="white"
            gap="xs"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
            style={{
              border: "1px solid #1b1c1b",
              borderRadius: "5px",
            }}
          >
            <Input
              type="number"
              size="xs"
              value={paddingValue}
              w={45}
              readOnly
              style={{ borderRadius: "20px" }}
            />
            <Slider
              value={paddingValue}
              onChange={handlePaddingChange}
              min={0}
              max={100}
              w={220}
              label={null}
            />
            <IconPlus
              onClick={handlePaddingIncrement}
              style={{
                border: "1px solid #000",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
          </Flex>
          {/* Margin */}
          <Text size="sm">Margin</Text>
          <Flex
            mih={40}
            bg="white"
            gap="xs"
            justify="center"
            align="center"
            direction="row"
            wrap="wrap"
            style={{
              border: "1px solid #1b1c1b",
              borderRadius: "5px",
            }}
          >
            <Input
              type="number"
              size="xs"
              value={marginValue}
              w={45}
              readOnly
              style={{ borderRadius: "20px" }}
            />
            <Slider
              value={marginValue}
              onChange={handleMarginChange}
              min={0}
              max={100}
              w={220}
              label={null}
            />
            <IconPlus
              onClick={handleMarginIncrement}
              style={{
                border: "1px solid #000",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
          </Flex>
        </Stack>
      </Accordion.Panel>
    </Accordion.Item>
  );
};

export default Settings;
