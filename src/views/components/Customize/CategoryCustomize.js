import React, { useState } from "react";
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
} from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

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
      <Box bg="gray.2" style={{ borderRadius: "10px" }}>
        {/* Accordion */}
        <Accordion variant="contained" defaultValue="category-item" pb={10}>
          {/* Accordion.Item */}
          <Accordion.Item value="category-item1">
            {/* Accordion.Control */}
            <Accordion.Control bg="#FFFFFF">
              <Text>Category Item 1</Text>
            </Accordion.Control>
            {/* Accordion.Panel */}
            <Accordion.Panel bg="#FFFFFF">
              <Flex direction="column">
                <Text>Background Color</Text>
                <ColorPicker w="auto" size="lg" format="rgba" />
              </Flex>
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
                    w={100}
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
                    w={100}
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
                    w={100}
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
          <Accordion.Item value="category-item2">
            {/* Accordion.Control */}
            <Accordion.Control bg="#FFFFFF">
              <Text>Category Item 2</Text>
            </Accordion.Control>
            {/* Accordion.Panel */}
            <Accordion.Panel bg="#FFFFFF">
              <Flex direction="column">
                <Text>Background Color</Text>
                <ColorPicker w="auto" size="lg" format="rgba" />
              </Flex>
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
                    w={100}
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
                    w={100}
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
                    w={100}
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
          <Accordion.Item value="category-item3">
            {/* Accordion.Control */}
            <Accordion.Control bg="#FFFFFF">
              <Text>Category Item 3</Text>
            </Accordion.Control>
            {/* Accordion.Panel */}
            <Accordion.Panel bg="#FFFFFF">
              <Flex direction="column">
                <Text>Background Color</Text>
                <ColorPicker w="auto" size="lg" format="rgba" />
              </Flex>
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
                    w={100}
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
                    w={100}
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
                    w={100}
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
          <Accordion.Item value="category-item4">
            {/* Accordion.Control */}
            <Accordion.Control bg="#FFFFFF">
              <Text>Category Item 4</Text>
            </Accordion.Control>
            {/* Accordion.Panel */}
            <Accordion.Panel bg="#FFFFFF">
              <Flex direction="column">
                <Text>Background Color</Text>
                <ColorPicker w="auto" size="lg" format="rgba" />
              </Flex>
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
                    w={100}
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
                    w={100}
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
                    w={100}
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
          <Accordion.Item value="category-item5">
            {/* Accordion.Control */}
            <Accordion.Control bg="#FFFFFF">
              <Text>Category Item 5</Text>
            </Accordion.Control>
            {/* Accordion.Panel */}
            <Accordion.Panel bg="#FFFFFF">
              <Flex direction="column">
                <Text>Background Color</Text>
                <ColorPicker w="auto" size="lg" format="rgba" />
              </Flex>
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
                    w={100}
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
                    w={100}
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
                    w={100}
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
          <Accordion.Item value="category-item6">
            {/* Accordion.Control */}
            <Accordion.Control bg="#FFFFFF">
              <Text>Category Item 6</Text>
            </Accordion.Control>
            {/* Accordion.Panel */}
            <Accordion.Panel bg="#FFFFFF">
              <Flex direction="column">
                <Text>Background Color</Text>
                <ColorPicker w="auto" size="lg" format="rgba" />
              </Flex>
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
                    w={100}
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
                    w={100}
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
                    w={100}
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
          <Accordion.Item value="category-item7">
            {/* Accordion.Control */}
            <Accordion.Control bg="#FFFFFF">
              <Text>Category Item 7</Text>
            </Accordion.Control>
            {/* Accordion.Panel */}
            <Accordion.Panel bg="#FFFFFF">
              <Flex direction="column">
                <Text>Background Color</Text>
                <ColorPicker w="auto" size="lg" format="rgba" />
              </Flex>
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
                    w={100}
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
                    w={100}
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
                    w={100}
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
        </Accordion>
      </Box>
    </ScrollArea>
  );
};

export default CategoryCustomize;
