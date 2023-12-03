import React, { useState, useRef } from "react";
import { Flex, Stack, Text, ActionIcon, Input, Modal, ColorPicker } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconColorPicker } from "@tabler/icons-react";



const TextProperties = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedSpacingIndex, setSelectedSpacingIndex] = useState(null);
  const [selectedTitleStyleIndex, setSelectedTitleStyleIndex] = useState(null);
  const inputRef = useRef(null);

  const openColorPickerModal = () => {
    open();
  };

  const textPropertiesData = [
    {
      title: "Title Color",
      icon: <IconColorPicker style={{ width: "70%", height: "70%" }} />,
      onClick: openColorPickerModal,
    },
    {
      title: "Title Text (Example)",
      inputProps: {
        w: "420px",
        size: "md",
        radius: "4px",
        placeholder: "This is a simple text",
      },
    },
    // {
    //   title: "Title Spacing",
    //   swatchValues: ["32", "24", "16"],
    // },
    {
      title: "Title Style",
      styleValues: ["Bold", "Italic", "Underline"],
    },
  ];

  // const handleSpacingClick = (index, value) => {
  //   setSelectedSpacingIndex(index);
  //   if (value === "16") {
  //     inputRef.current.style.wordSpacing = "8px";
  //   } else if (value === "24") {
  //     inputRef.current.style.wordSpacing = "10px";
  //   } else if (value === "32") {
  //     inputRef.current.style.wordSpacing = "12px";
  //   }
  // };

  // const handleSpacingClick = (index, value) => {
  //   if (selectedSpacingIndex === index) {
  //     // If the same index is clicked again, unselect it
  //     setSelectedSpacingIndex(null);
  //     inputRef.current.style.wordSpacing = ""; // Reset the style
  //   } else {
  //     // Toggle selection
  //     setSelectedSpacingIndex(index);

  //     // Apply styles based on the selected value
  //     if (value === "16") {
  //       inputRef.current.style.wordSpacing = "8px";
  //     } else if (value === "24") {
  //       inputRef.current.style.wordSpacing = "10px";
  //     } else if (value === "32") {
  //       inputRef.current.style.wordSpacing = "12px";
  //     }
  //   }
  // };

  // const handleTitleStyleClick = (index, style) => {
  //   setSelectedTitleStyleIndex(index);
  //   if (style === "Bold") {
  //     inputRef.current.style.fontWeight = "800";
  //   } else if (style === "Semibold") {
  //     inputRef.current.style.fontWeight = "600";
  //   } else if (style === "Medium") {
  //     inputRef.current.style.fontWeight = "500";
  //   }
  // };

  const handleTitleStyleClick = (index, style) => {
    // Toggle selection
    setSelectedTitleStyleIndex(
      selectedTitleStyleIndex === index ? null : index
    );

    // Reset styles
    inputRef.current.style.fontWeight = "";
    inputRef.current.style.fontStyle = "";
    inputRef.current.style.textDecorationLine = "";

    // Apply styles based on the selected style
    if (selectedTitleStyleIndex !== index) {
      if (style === "Bold") {
        inputRef.current.style.fontWeight = "700";
      } else if (style === "Italic") {
        inputRef.current.style.fontStyle = "italic";
      } else if (style === "Underline") {
        inputRef.current.style.textDecorationLine = "underline";
      }
    }
  };

  return (
    <Stack>
      {textPropertiesData.map((item, index) => (
        <Flex key={index} mt="8px" direction="column" h="85px" style={{borderBottom: "1px solid #E9E9E9"}}>
          <Flex justify="flex-start">
            <Text fw={400}>{item.title}</Text>
          </Flex>
          <Flex justify="flex-end" mt="8px">
            {item.icon && (
              <ActionIcon variant="filled" aria-label="Settings" onClick={item.onClick}>
                {item.icon}
                
              </ActionIcon>
            )}
            {/* {item.swatchValues && (
              <Flex bg="#FFFFFF" gap={`10px`} h="46px" w="158px">
                {item.swatchValues.map((value, i) => (
                  <Flex
                    key={i}
                    bg="#FFFFFF"
                    h="46px"
                    w="46px"
                    align="center"
                    justify="center"
                    style={{
                      border: `1px solid ${selectedSpacingIndex === i ? "#FF9209" : "#E9E9E9"}`,
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleSpacingClick(i , value)}
                  >
                    <Text>{value}</Text>
                  </Flex>
                ))}
              </Flex>
            )} */}
            {item.styleValues && (
              <Flex bg="#FFFFFF" gap={`10px`} h="46px" w="230px">
                {item.styleValues.map((style, i) => (
                  <Flex
                    key={i}
                    h="46px"
                    w={
                      style === "Italic"
                        ? "58px"
                        : style === "Underline"
                        ? "93px"
                        : "60px"
                    }
                    bg="#FFFFFF"
                    align="center"
                    justify="center"
                    style={{
                      border: `1px solid ${
                        selectedTitleStyleIndex === i ? "#FF9209" : "#E9E9E9"
                      }`,
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleTitleStyleClick(i, style)}
                  >
                    <Text
                      style={{
                        fontStyle:
                          selectedTitleStyleIndex === i && style === "Italic"
                            ? "italic"
                            : style === "Italic"
                            ? "italic"
                            : "normal",
                        textDecorationLine:
                          selectedTitleStyleIndex === i && style === "Underline"
                            ? "underline"
                            : style === "Underline"
                            ? "underline"
                            : "none",
                      }}
                    >
                      {style}
                    </Text>
                  </Flex>
                ))}
              </Flex>
            )}
          </Flex>
          {item.inputProps && (
            <Flex justify="center" mt="8px">
              <Input {...item.inputProps} ref={inputRef} readOnly size="sm" />
            </Flex>
          )}
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

export default TextProperties;
