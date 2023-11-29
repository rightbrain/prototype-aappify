import {
  Flex,
  Box,
  Stack,
  Text,
  Modal,
  ColorPicker,
  ActionIcon,
  Grid,
} from "@mantine/core";
import React from "react";
import { useDisclosure } from "@mantine/hooks";
import { IconColorFilter, IconColorPicker } from "@tabler/icons-react";

const GeneralProperties = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <Stack>
        {/* Background Color */}
        <Flex direction="column" h="73px">
          <Flex justify="flex-start">
            <Text fw={400}>Background Color</Text>
          </Flex>
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
        {/* Shadow */}
        <Flex mt="8px" direction="column" h="73px">
          {/* Set justify="flex-start" for the first Box */}
          <Flex justify="flex-start">
            <Text fw={400}>Shadow</Text>
          </Flex>
          {/* Set justify="flex-end" for the last Box */}
          <Flex justify="flex-end" mt="8px">
            <Grid>
            <Grid.Col h="46px" w="46px" bg="#E9E9E9">1</Grid.Col>
            </Grid>
          </Flex>
        </Flex>
        <Flex mt="8px" direction="column" h="73px">
          {/* Set justify="flex-start" for the first Box */}
          <Flex justify="flex-start">
            <Text fw={400}>Shape Type</Text>
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
        <Flex mt="8px" direction="column" h="73px">
          {/* Set justify="flex-start" for the first Box */}
          <Flex justify="flex-start">
            <Text fw={400}>Colour Opacity</Text>
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
