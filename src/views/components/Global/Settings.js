import React, {useState} from "react";
import {
  Flex,
  Text,
  Title,
  ColorPicker,
  ActionIcon,
  Modal,
  Input,
  Select,
  Button,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Dropzone } from "@mantine/dropzone";
import { IconCloudDownload, IconPhotoPlus, IconColorPicker } from "@tabler/icons-react";

const Settings = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [currentColorType, setCurrentColorType] = useState("");

  const openColorPickerModal = (colorType) => {
    setCurrentColorType(colorType);
    open();
  };
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
      {/* <Select w="402px" mt="16px" placeholder="Primary Font Color" /> */}
      <Flex mt="8px" direction="column" h="73px" style={{borderBottom: "1px solid #E9E9E9"}}>
        <Flex justify="flex-start">
          <Text fw={400}>Primary Font Color</Text>
        </Flex>
        <Flex justify="flex-end" mt="8px">
          <ActionIcon variant="filled" aria-label="Settings">
            <IconColorPicker
              style={{ width: "70%", height: "70%" }}
              onClick={() => openColorPickerModal("Primary")}
              stroke={1.5}
            />
          </ActionIcon>
        </Flex>
      </Flex>
      {/* <Select w="402px" mt="16px" placeholder="Secondery Font Color" /> */}
      <Flex mt="8px" direction="column" h="73px" style={{borderBottom: "1px solid #E9E9E9"}}>
        <Flex justify="flex-start">
          <Text fw={400}>Secondery Font Color</Text>
        </Flex>
        <Flex justify="flex-end" mt="8px">
          <ActionIcon variant="filled" aria-label="Settings">
            <IconColorPicker
              style={{ width: "70%", height: "70%" }}
              onClick={() => openColorPickerModal("Secondary")}
              stroke={1.5}
            />
          </ActionIcon>
        </Flex>
      </Flex>

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

      {/* ColorPicker Modal */}
      <Modal
        opened={opened}
        onClose={close}
        title={`${currentColorType} Font Color`}
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
    </>
  );
};

export default Settings;
