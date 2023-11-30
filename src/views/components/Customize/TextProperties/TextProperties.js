import React, { useState, useRef } from "react";
import { Flex, Stack, Text, ActionIcon, Input } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconColorPicker } from "@tabler/icons-react";

const textPropertiesData = [
  {
    title: "Title Color",
    icon: <IconColorPicker style={{ width: "70%", height: "70%" }} />,
  },
  {
    title: "Title Text",
    inputProps: {
      w: "420px",
      size: "md",
      radius: "4px",
      placeholder: "Type your title text",
    },
  },
  {
    title: "Title Spacing",
    swatchValues: ["32", "24", "16"],
  },
  {
    title: "Title Style",
    styleValues: ["Bold", "Semibold", "Medium"],
  },
];

const TextProperties = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedSpacingIndex, setSelectedSpacingIndex] = useState(null);
  const [selectedTitleStyleIndex, setSelectedTitleStyleIndex] = useState(null);
  const inputRef = useRef(null);

  const handleSpacingClick = (index) => {
    setSelectedSpacingIndex(index);
  };

  const handleTitleStyleClick = (index, style) => {
    setSelectedTitleStyleIndex(index);
    if (style === "Bold") {
      inputRef.current.style.fontWeight = "bold";
    } else if (style === "Semibold") {
      inputRef.current.style.fontWeight = "600";
    } else if (style === "Medium") {
      inputRef.current.style.fontWeight = "500";
    }
  };

  return (
    <Stack>
      {textPropertiesData.map((item, index) => (
        <Flex key={index} mt="8px" direction="column" h="73px">
          <Flex justify="flex-start">
            <Text fw={400}>{item.title}</Text>
          </Flex>
          <Flex justify="flex-end" mt="8px">
            {item.icon && (
              <ActionIcon variant="filled" aria-label="Settings">
                {item.icon}
              </ActionIcon>
            )}
            {item.swatchValues && (
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
                    onClick={() => handleSpacingClick(i)}
                  >
                    <Text>{value}</Text>
                  </Flex>
                ))}
              </Flex>
            )}
            {item.styleValues && (
              <Flex bg="#FFFFFF" gap={`10px`} h="46px" w="254px">
                {item.styleValues.map((style, i) => (
                  <Flex
                    key={i}
                    h="46px"
                    w={style === "Semibold" ? "91px" : style === "Medium" ? "83px" : "60px"}
                    bg="#FFFFFF"
                    align="center"
                    justify="center"
                    style={{
                      border: `1px solid ${selectedTitleStyleIndex === i ? "#FF9209" : "#E9E9E9"}`,
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleTitleStyleClick(i, style)}
                  >
                    <Text>{style}</Text>
                  </Flex>
                ))}
              </Flex>
            )}
          </Flex>
          {item.inputProps && (
            <Flex justify="center" mt="8px">
              <Input {...item.inputProps} ref={inputRef} />
            </Flex>
          )}
        </Flex>
      ))}
    </Stack>
  );
};

export default TextProperties;
