import React, {useState} from "react";
import {
  Flex,
  Box,
  Stack,
  Text,
  Modal,
  ColorPicker,
  ActionIcon,
  Grid,
  Avatar,
  Center,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconUser, IconUserFilled, IconColorPicker } from "@tabler/icons-react";

const IconProperties = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedRadius, setSelectedRadius] = useState(0); // Add state for selected radius
  const [selectedIconSize, setSelectedIconSize] = useState(0); // Add state for selected Size
  const [selectedIconWeight, setSelectedIconWeight] = useState(0); // Add state for selected Weight
  
  // const handleRadiusClick = (radius) => {
  //   setSelectedRadius(radius);
  // };

  const handleRadiusClick = (radius) => {
    setSelectedRadius((prevRadius) => (prevRadius === radius ? null : radius));
  };

  // const handleIconSizeClick = (size) => {
  //   setSelectedIconSize(size);
  // };

  const handleIconSizeClick = (size) => {
    setSelectedIconSize((prevSize) => (prevSize === size ? null : size));
  };

  // const handleIconWeightClick = (weight) => {
  //   setSelectedIconWeight(weight);
  // };

  const handleIconWeightClick = (weight) => {
    setSelectedIconWeight((prevWeight) => (prevWeight === weight ? null : weight));
  };

  return (
    <Stack>
      {/* Icon Shape Radius */}
      <Flex direction="column" h="73px">
        <Flex justify="flex-start">
          <Text fw={400}>Icon Shape Radius</Text>
        </Flex>
        <Flex justify="flex-end" mt="8px">
          <Flex bg="#FFFFFF" gap={`10px`}>
            <Flex
            onClick={() => handleRadiusClick(0)}
            // bg={selectedRadius === 0 ? "#FF9209" : "#E9E9E9"} // Change border color based on selection
              bg="#E9E9E9"
              h="46px"
              w="46px"
              align="center"
              justify="center"
              style={{border: selectedRadius === 0 ? "1px solid #FF9209" : "none",}}
            >
              <Avatar radius={0} bg="#475177" h="36px" w="36px">
                <IconUser style={{ color: "#FFFFFF" }} />
              </Avatar>
            </Flex>
            <Flex
              onClick={() => handleRadiusClick(1)}
              // bg={selectedRadius === 100 ? "#FF9209" : "#E9E9E9"} 
              bg="#E9E9E9"
              h="46px"
              w="46px"
              align="center"
              justify="center"
              style={{border: selectedRadius === 1 ? "1px solid #FF9209" : "none",}}
            >
              <Avatar radius={`100px`} bg="#475177" h="36px" w="36px">
                <IconUser style={{ color: "#FFFFFF" }} />
              </Avatar>
            </Flex>
            <Flex
              onClick={() => handleRadiusClick(2)}
              // bg={selectedRadius === 2 ? "#FF9209" : "#E9E9E9"}
              bg="#E9E9E9"
              h="46px"
              w="46px"
              align="center"
              justify="center"
              style={{border: selectedRadius === 2 ? "1px solid #FF9209" : "none",}}
            >
              <Avatar radius={`2px`} bg="#475177" h="36px" w="36px">
                <IconUser style={{ color: "#FFFFFF" }} />
              </Avatar>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* Icon Background Colour */}
      <Flex mt="8px" direction="column" h="73px">
        {/* Set justify="flex-start" for the first Box */}
        <Flex justify="flex-start">
          <Text fw={400}>Icon Background Colour</Text>
        </Flex>
        {/* Set justify="flex-end" for the last Box */}
        <Flex justify="flex-end" mt="8px">
          <ActionIcon variant="filled" aria-label="Settings">
            <IconColorPicker
              style={{ width: "70%", height: "70%" }}
              onClick={() => {
                open();
              }}
              stroke={1.5}
            />
          </ActionIcon>
        </Flex>
      </Flex>
      {/* Icon Colour */}
      <Flex mt="8px" direction="column" h="73px">
        {/* Set justify="flex-start" for the first Box */}
        <Flex justify="flex-start">
          <Text fw={400}>Icon Colour</Text>
        </Flex>
        {/* Set justify="flex-end" for the last Box */}
        <Flex justify="flex-end" mt="8px">
        <ActionIcon variant="filled" aria-label="Settings">
              <IconColorPicker
                style={{ width: "70%", height: "70%" }}
                onClick={() => {
                  open();
                }}
                stroke={1.5}
              />
            </ActionIcon>
        </Flex>
      </Flex>
      {/* Icon Size */}
      <Flex mt="8px" direction="column" h="73px">
        {/* Set justify="flex-start" for the first Box */}
        <Flex justify="flex-start">
          <Text fw={400}>Icon Size</Text>
        </Flex>
        {/* Set justify="flex-end" for the last Box */}
        <Flex justify="flex-end" mt="8px">
          <Flex bg="#FFFFFF" gap={`10px`} h="46px" w="158px">
            <Flex
            onClick={() => handleIconSizeClick(0)}
              bg="#FFFFFF"
              h="46px"
              w="46px"
              align="center"
              justify="center"
              style={{
                // border: "1px solid #E9E9E9",
                border: selectedIconSize === 0 ? "1px solid #FF9209" : "1px solid #E9E9E9",
                borderRadius: "4px",
              }}
            >
              <Text>32</Text>
            </Flex>
            <Flex
            onClick={() => handleIconSizeClick(1)}
              bg="#FFFFFF"
              h="46px"
              w="46px"
              align="center"
              justify="center"
              style={{
                // border: "1px solid #E9E9E9",
                border: selectedIconSize === 1 ? "1px solid #FF9209" : "1px solid #E9E9E9",
                borderRadius: "4px",
              }}
            >
              <Text>24</Text>
            </Flex>
            <Flex
            onClick={() => handleIconSizeClick(2)}
              bg="#FFFFFF"
              h="46px"
              w="46px"
              align="center"
              justify="center"
              style={{
                // border: "1px solid #E9E9E9",
                border: selectedIconSize === 2 ? "1px solid #FF9209" : "1px solid #E9E9E9",
                borderRadius: "4px",
              }}
            >
              <Text>16</Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      {/* Icon Weight */}
      <Flex mt="8px" direction="column" h="73px">
        {/* Set justify="flex-start" for the first Box */}
        <Flex justify="flex-start">
          <Text fw={400}>Icon Weight</Text>
        </Flex>
        {/* Set justify="flex-end" for the last Box */}
        <Flex justify="flex-end" mt="8px">
          <Flex bg="#FFFFFF" gap={`10px`} h="46px" w="158px">
            <Flex
            onClick={() => handleIconWeightClick(0)}
              bg="#FFFFFF"
              h="46px"
              w="46px"
              align="center"
              justify="center"
              style={{
                // border: "1px solid #E9E9E9",
                border: selectedIconWeight === 0 ? "1px solid #FF9209" : "1px solid #E9E9E9",
                borderRadius: "4px",
              }}
            >
              <IconUserFilled />
            </Flex>
            <Flex
            onClick={() => handleIconWeightClick(1)}
              bg="#FFFFFF"
              h="46px"
              w="46px"
              align="center"
              justify="center"
              style={{
                // border: "1px solid #E9E9E9",
                border: selectedIconWeight === 1 ? "1px solid #FF9209" : "1px solid #E9E9E9",
                borderRadius: "4px",
              }}
            >
              <IconUser stroke={1} />
            </Flex>
            <Flex
            onClick={() => handleIconWeightClick(2)}
              bg="#FFFFFF"
              h="46px"
              w="46px"
              align="center"
              justify="center"
              style={{
                // border: "1px solid #E9E9E9",
                border: selectedIconWeight === 2 ? "1px solid #FF9209" : "1px solid #E9E9E9",
                borderRadius: "4px",
              }}
            >
              <IconUser />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Modal
        opened={opened}
        onClose={close}
        title="Background Color"
        radius="md"
      >
        <ColorPicker
          fullWidth
          format="hex"
          swatches={[
            "#25262b",
            "#868e96",
            "#fa5252",
            "#e64980",
            "#be4bdb",
            "#7950f2",
            "#4c6ef5",
            "#228be6",
            "#15aabf",
            "#12b886",
            "#40c057",
            "#82c91e",
            "#fab005",
            "#fd7e14",
          ]}
        />
      </Modal>
    </Stack>
  );
};

export default IconProperties;
