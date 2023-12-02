import React from "react";
import {
  Flex,
  Stack,
  Text,
  ActionIcon,
  Title,
  Group,
  Slider,
  ColorPicker,
  Input,
  Select,
  Button,
} from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import {
  IconCircleXFilled,
  IconAlignCenter,
  IconAlignJustified,
  IconCloudDownload,
  IconPhotoPlus,
} from "@tabler/icons-react";

const Settings = () => {
  return (
    <>
      <Dropzone
        bg="white"
        h="88px"
        w="213px"
        style={{
          border: "1px dashed #FF9209",
          borderRadius: "5px",
          display: "flex", // Make Dropzone a flex container
          justifyContent: "center", // Center content horizontally
          alignItems: "center", // Center content vertically
        }}
      >
        <Flex
          h="59px"
          w="62px"
          direction="column"
          justify="center"
          align="center"
          wrap="wrap"
          // style={{ border: "1px solid #FF9209" }}
        >
          <IconPhotoPlus size={32} />
          <Text fw={400} size="14px">
            Add Logo
          </Text>
        </Flex>
      </Dropzone>
      <Input mt="19px" w="402px" placeholder="Title Name" />
      <Select
        w="402px"
        mt="16px"
        placeholder="Primary Font"
        data={["Sans Serif", "Slab Serif", "Serif"]}
      />
      <Select
        w="402px"
        mt="16px"
        placeholder="Secondery Font"
        data={["Sans Serif", "Slab Serif", "Serif"]}
      />
      <Select w="402px" mt="16px" placeholder="Primary Font Color" />
      <Select w="402px" mt="16px" placeholder="Secondery Font Color" />

      <Flex
        h="139px"
        w="402px"
        mt="16px"
        direction="column"
        //   justify="center"
        //   align="center"
        wrap="wrap"
        // style={{ border: "1px solid #FF9209" }}
      >
        <Text fw={400} size="14px">
          Splash Screen
        </Text>
        <Dropzone
          bg="white"
          h="104px"
          w="
          402px"
          mt="16px"
          style={{
            border: "1px dashed #FF9209",
            borderRadius: "5px",
            display: "flex", // Make Dropzone a flex container
            justifyContent: "center", // Center content horizontally
            alignItems: "center", // Center content vertically
          }}
        >
          <Flex
            h="59px"
            w="144px"
            direction="column"
            justify="center"
            align="center"
            wrap="wrap"
            // style={{ border: "1px solid #FF9209" }}
          >
            <IconCloudDownload size={20} />
            <Title fw={400} size="14px" mt="16px">
              Drag Image or{" "}
              <Text span c="#FF9209" inherit>
                Upload
              </Text>
            </Title>
          </Flex>
        </Dropzone>
      </Flex>
      <Flex justify="flex-end" mt="16px">
        <Button color="#FF9209" h="32px" w="92px" fw={600}>
          Preview
        </Button>
      </Flex>
    </>
  );
};

export default Settings;
