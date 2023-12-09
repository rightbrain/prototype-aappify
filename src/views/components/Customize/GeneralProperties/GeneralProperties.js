import React, { useState } from "react";
import {
  Flex,
  Text,
  ActionIcon,
  Modal,
  ColorPicker,
  Stack,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconColorPicker } from "@tabler/icons-react";

const GeneralProperties = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedShadowIndex, setSelectedShadowIndex] = useState(null);
  const [selectedShapeTypeIndex, setSelectedShapeTypeIndex] = useState(null);
  const [selectedColourOpacityIndex, setSelectedColourOpacityIndex] =
    useState(null);

  const openColorPickerModal = () => {
    open();
  };
  // const handleShadowClick = (index) => {
  //   setSelectedShadowIndex(index);
  // };

  const handleShadowClick = (index) => {
    setSelectedShadowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  // const handleShapeTypeClick = (index) => {
  //   setSelectedShapeTypeIndex(index);
  // };

  const handleShapeTypeClick = (index) => {
    setSelectedShapeTypeIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  // const handleColourOpacityClick = (index) => {
  //   setSelectedColourOpacityIndex(index);
  // };

  const handleColourOpacityClick = (index) => {
    setSelectedColourOpacityIndex((prevIndex) =>
      prevIndex === index ? null : index
    );
  };

  const generalPropertiesData = [
    {
      label: "Background Color",
      type: "color",
      icon: IconColorPicker,
      onClick: openColorPickerModal,
    },
    {
      label: "Shadow",
      type: "shadow",
      options: [
        {
          color: "#E9E9E9",
          borderRadius: "2px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        },
        {
          color: "#E9E9E9",
          borderRadius: "2px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        },
        {
          color: "#E9E9E9",
          borderRadius: "2px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        },
        {
          color: "#E9E9E9",
          borderRadius: "2px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        },
      ],
    },
    {
      label: "Shape Type",
      type: "shape",
      options: [
        {
          backgroundColor: "#E9E9E9",
          borderRadius: "100px",
          border: "1px solid #475177",
        },
        {
          backgroundColor: "#E9E9E9",
          borderRadius: "2px",
          border: "1px solid #475177",
        },
        {
          backgroundColor: "#E9E9E9",
          borderRadius: "2px",
          border: "1px solid #475177",
        },
      ],
    },
    {
      label: "Colour Opacity",
      type: "colorOpacity",
      options: [
        { backgroundColor: "#E9E9E9", color: "#B8BCCA", borderRadius: "2px" },
        { backgroundColor: "#E9E9E9", color: "#959BB1", borderRadius: "2px" },
        { backgroundColor: "#E9E9E9", color: "#656E8D", borderRadius: "2px" },
        { backgroundColor: "#E9E9E9", color: "#475177", borderRadius: "2px" },
      ],
    },
  ];

  return (
    <Stack>
      {generalPropertiesData.map((property, index) => (
        <Flex key={index} direction="column" h="73px">
          <Flex justify="flex-start">
            <Text fw={400}>{property.label}</Text>
          </Flex>
          <Flex justify="flex-end" mt="8px">
            {property.type === "color" && (
              <ActionIcon variant="filled" aria-label="Settings">
                <property.icon
                  style={{ width: "70%", height: "70%" }}
                  onClick={property.onClick}
                  stroke={1.5}
                />
              </ActionIcon>
            )}
            {property.type === "shadow" && (
              <Flex gap={`10px`}>
                {property.options.map((option, optionIndex) => (
                  <Flex
                    key={optionIndex}
                    bg={option.color}
                    h="46px"
                    w="46px"
                    align="center"
                    justify="center"
                    onClick={() => handleShadowClick(optionIndex)}
                    style={{
                      border:
                        selectedShadowIndex === optionIndex
                          ? "1px solid #FF9209"
                          : "none",
                    }}
                  >
                    <Flex
                      bg="#FFFFFF"
                      h="36px"
                      w="36px"
                      boxShadow={option.boxShadow}
                    />
                  </Flex>
                ))}
              </Flex>
            )}
            {property.type === "shape" && (
              <Flex gap={`10px`}>
                {property.options.map((option, optionIndex) => (
                  <Flex
                    key={optionIndex}
                    bg={option.backgroundColor}
                    h="46px"
                    w="46px"
                    align="center"
                    justify="center"
                    onClick={() => handleShapeTypeClick(optionIndex)}
                    style={{
                      border:
                        selectedShapeTypeIndex === optionIndex
                          ? "1px solid #FF9209"
                          : "none",
                    }}
                  >
                    <Flex
                      bg="#FFFFFF"
                      h="36px"
                      w="36px"
                      style={{
                        borderRadius: option.borderRadius,
                        border: option.border,
                      }}
                    />
                  </Flex>
                ))}
              </Flex>
            )}
            {property.type === "colorOpacity" && (
              <Flex gap={`10px`}>
                {property.options.map((option, optionIndex) => (
                  <Flex
                    key={optionIndex}
                    bg={option.backgroundColor}
                    h="46px"
                    w="46px"
                    align="center"
                    justify="center"
                    onClick={() => handleColourOpacityClick(optionIndex)}
                    style={{
                      border:
                        selectedColourOpacityIndex === optionIndex
                          ? "1px solid #FF9209"
                          : "none",
                    }}
                  >
                    <Flex
                      bg={option.color}
                      h="36px"
                      w="36px"
                      style={{ borderRadius: option.borderRadius }}
                    />
                  </Flex>
                ))}
              </Flex>
            )}
          </Flex>
        </Flex>
      ))}
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

export default GeneralProperties;
