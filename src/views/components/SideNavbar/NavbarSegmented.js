import React, { useState } from "react";
import {
  Button,
  SegmentedControl,
  Drawer,
  Flex,
  Modal,
  Text,
  Grid,
  rem,
  Select,
  ScrollArea,
  Card,
  Group,
  Image,
  SimpleGrid,
} from "@mantine/core";
import {
  IconShoppingCart,
  IconLicense,
  IconMessage2,
  IconMessages,
  IconApps,
  IconSettings,
  IconLayoutSidebarLeftExpand,
  IconUsers,
  IconFileAnalytics,
  IconLayoutBottombarExpand,
  IconReceiptRefund,
  IconFlag3,
  IconFlag,
  IconLock,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import classes from "./NavbarSegmented.module.css";
import Appbar from "../Global/AppBar";
import Navbar from "../Global/Navbar";
import Drawer2 from "../Global/Drawer";
import Order from "../Order/Order";
import Receipts from "../Receipts/Receipts";
import Reviews from "../Reviews/Reviews";
import PageDrawer from "../Footer/PageDrawer";
import Home from "../../image/Mobile layouts/Theme2/HOME.png";
import Theme1 from "../../image/Mobile layouts/Theme2/HOME.png";
// import Theme2 from "../../image/Mobile layouts/Theme2/HOME.png"
import Theme3 from "../../image/Mobile layouts/Theme2/HOME.png";
import Theme4 from "../../image/Mobile layouts/Theme2/HOME.png";

const tabs = {
  account: [
    { link: "", label: "Appbar", icon: IconApps },
    { link: "", label: "Navbar", icon: IconLayoutBottombarExpand },
    { link: "", label: "Drawer", icon: IconLayoutSidebarLeftExpand },
  ],
  general: [
    { link: "", label: "Orders", icon: IconShoppingCart },
    { link: "", label: "Receipts", icon: IconLicense },
    { link: "", label: "Reviews", icon: IconMessage2 },
    { link: "", label: "Messages", icon: IconMessages },
    { link: "", label: "Customers", icon: IconUsers },
    { link: "", label: "Refunds", icon: IconReceiptRefund },
    { link: "", label: "Files", icon: IconFileAnalytics },
  ],
};

const NavbarSegmented = ({
  selectAppBar,
  setSelectAppBar,
  selectAppBar2,
  setSelectAppBar2,
  selectAppBar3,
  setSelectAppBar3,
  onItemClick,
  selectNavBar,
  setSelectNavBar,
  selectNavBar2,
  setSelectNavBar2,
  selectNavBar3,
  setSelectNavBar3,
  onNavBarItemClick,
  openCustomizeDrawer,
}) => {
  const [section, setSection] = useState("account");
  const [active, setActive] = useState("Appbar");
  //  Global
  const [isAppbarDrawerOpen, setIsAppbarDrawerOpen] = useState(false);
  const [isNavbarDrawerOpen, setIsNavbarDrawerOpen] = useState(false);
  const [isDrawerDrawerOpen, setIsDrawerDrawerOpen] = useState(false);
  const [isSettingsDrawerOpen, setIsSettingsDrawerOpen] = useState(false);
  const [isPageDrawerOpen, setIsPageDrawerOpen] = useState(false);
  // Component
  const [isOrderDrawerOpen, setIsOrderDrawerOpen] = useState(false);
  const [isReceiptsDrawerOpen, setIsReceiptsDrawerOpen] = useState(false);
  const [isReviewsDrawerOpen, setIsReviewsDrawerOpen] = useState(false);
  const [isMessagesDrawerOpen, setIsMessagesDrawerOpen] = useState(false);
  const [isCustomersDrawerOpen, setIsCustomersDrawerOpen] = useState(false);
  const [isRefundsDrawerOpen, setIsRefundsDrawerOpen] = useState(false);
  const [isFilesDrawerOpen, setIsFilesDrawerOpen] = useState(false);

  // Reviews Messages Customers Refunds Files

  const [opened, { open, close }] = useDisclosure(false);

  const links = tabs[section].map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        event.preventDefault();
        setActive(item.label);

        if (item.label === "Appbar") {
          setIsAppbarDrawerOpen(true);
        } else if (item.label === "Navbar") {
          setIsNavbarDrawerOpen(true);
        } else if (item.label === "Drawer") {
          setIsDrawerDrawerOpen(true);
        } else if (item.label === "Orders") {
          setIsOrderDrawerOpen(true);
        } else if (item.label === "Receipts") {
          setIsReceiptsDrawerOpen(true);
        } else if (item.label === "Reviews") {
          setIsReviewsDrawerOpen(true);
        } else if (item.label === "Messages") {
          setIsMessagesDrawerOpen(true);
        } else if (item.label === "Customers") {
          setIsCustomersDrawerOpen(true);
        } else if (item.label === "Refunds") {
          setIsRefundsDrawerOpen(true);
        } else if (item.label === "Files") {
          setIsFilesDrawerOpen(true);
        }
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  const closeAppbarDrawer = () => {
    setIsAppbarDrawerOpen(false);
  };

  const closeNavbarDrawer = () => {
    setIsNavbarDrawerOpen(false);
  };

  const closeDrawerDrawer = () => {
    setIsDrawerDrawerOpen(false);
  };

  // Conditionally render the footer based on the selected section
  const iconSection =
    section === "account" ? (
      <Flex mt="4px">
        <IconSettings
          className={classes.linkIcon}
          stroke={1.5}
          onClick={() => setIsSettingsDrawerOpen(true)}
        />
        <IconFlag3
          className={classes.linkIcon}
          stroke={1.5}
          onClick={() => setIsPageDrawerOpen(true)}
        />
        <IconFlag className={classes.linkIcon} stroke={1.5} onClick={open} />
      </Flex>
    ) : null;

  const footer = (
    <div className={classes.footer}>
      <a
        href="#"
        style={{
          display: "flex",
          justifyContent: section === "account" ? "space-between" : "flex-end",
        }}
        onClick={(event) => event.preventDefault()}
      >
        {iconSection}
        <Button size="xs">Save</Button>
      </a>
    </div>
  );

  const icon = (
    <IconLock style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
  );

  const transitionProps = {
    transition: "fade",
    duration: 800,
    timingFunction: "linear",
  };

  const [isImageClicked, setIsImageClicked] = useState(false);

  const handleImageClick = () => {
    // Toggle the state when the image is clicked
    setIsImageClicked(!isImageClicked);
  };

  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  // Function to open the preview modal
  const openPreviewModal = () => {
    setIsPreviewModalOpen(true);
  };

  // Function to close the preview modal
  const closePreviewModal = () => {
    setIsPreviewModalOpen(false);
  };

  return (
    <nav className={classes.navbar}>
      <div>
        <SegmentedControl
          value={section}
          onChange={(value) => setSection(value)}
          fullWidth
          color="cyan"
          transitionProps={transitionProps}
          data={[
            { label: "Global", value: "account" },
            { label: "Component", value: "general" },
          ]}
        />
      </div>

      <div className={classes.navbarMain}>{links}</div>

      {footer}
      {/* Component */}
      {/* Order Drawer */}
      <Drawer
        title="Order Drawer"
        opened={isOrderDrawerOpen}
        onClose={() => setIsOrderDrawerOpen(false)}
        position="left"
        size={300}
        overlayProps={{ backgroundOpacity: 0 }}
        transitionProps={transitionProps}
      >
        <div>
          <Order />
        </div>
      </Drawer>

      {/* Receipts Drawer */}
      <Drawer
        title="Receipts Drawer"
        opened={isReceiptsDrawerOpen}
        onClose={() => setIsReceiptsDrawerOpen(false)}
        position="left"
        size={300}
        overlayProps={{ backgroundOpacity: 0 }}
        transitionProps={transitionProps}
      >
        <Receipts />
      </Drawer>

      {/* Reviews Drawer */}
      <Drawer
        title="Reviews Drawer"
        opened={isReviewsDrawerOpen}
        onClose={() => setIsReviewsDrawerOpen(false)}
        position="left"
        size={300}
        overlayProps={{ backgroundOpacity: 0 }}
        transitionProps={transitionProps}
      >
        <Reviews />
      </Drawer>

      {/* Messages Drawer */}
      <Drawer
        title="Messages Drawer"
        opened={isMessagesDrawerOpen}
        onClose={() => setIsMessagesDrawerOpen(false)}
        position="left"
        size={300}
        overlayProps={{ backgroundOpacity: 0 }}
        transitionProps={transitionProps}
      >
        <div>
          <h3>Messages Drawer Content</h3>
        </div>
      </Drawer>

      {/* Customers Drawer */}
      <Drawer
        title="Customers Drawer"
        opened={isCustomersDrawerOpen}
        onClose={() => setIsCustomersDrawerOpen(false)}
        position="left"
        size={300}
        overlayProps={{ backgroundOpacity: 0 }}
        transitionProps={transitionProps}
      >
        <div>
          <h3>Customers Drawer Content</h3>
        </div>
      </Drawer>

      {/* Refunds Drawer */}
      <Drawer
        title="Refunds Drawer"
        opened={isRefundsDrawerOpen}
        onClose={() => setIsRefundsDrawerOpen(false)}
        position="left"
        size={300}
        overlayProps={{ backgroundOpacity: 0 }}
        transitionProps={transitionProps}
      >
        <div>
          <h3>Refunds Drawer Content</h3>
        </div>
      </Drawer>

      {/* Files Drawer */}
      <Drawer
        title="Files Drawer"
        opened={isFilesDrawerOpen}
        onClose={() => setIsFilesDrawerOpen(false)}
        position="left"
        size={300}
        overlayProps={{ backgroundOpacity: 0 }}
        transitionProps={transitionProps}
      >
        <div>
          <h3>Files Drawer Content</h3>
        </div>
      </Drawer>

      {/* Footer */}

      {/* Settings Drawer */}
      <Drawer
        title="Settings Drawer"
        opened={isSettingsDrawerOpen}
        onClose={() => setIsSettingsDrawerOpen(false)}
        position="left"
        size={300}
        overlayProps={{ backgroundOpacity: 0 }}
        transitionProps={transitionProps}
      >
        <div>
          <h3>Settings Drawer Content</h3>
          <Select
            label="Your favorite library"
            placeholder="Pick value"
            data={["React", "Angular", "Vue", "Svelte"]}
            defaultValue="React"
          />
        </div>
      </Drawer>

      {/* Page Drawer */}
      <Drawer
        title="Page Drawer"
        opened={isPageDrawerOpen}
        onClose={() => setIsPageDrawerOpen(false)}
        position="left"
        size={300}
        overlayProps={{ backgroundOpacity: 0 }}
        transitionProps={transitionProps}
      >
        <PageDrawer />
      </Drawer>

      {/* Page Modal */}
      <Modal
        opened={opened}
        onClose={close}
        title="All Theem Page"
        radius="md"
        size="calc(100vw-0)"
        transitionProps={transitionProps}
        scrollAreaComponent={ScrollArea.Autosize}
      >
        {/* Modal content */}
        {/* Start Preview Modal */}
        <Modal
          opened={isPreviewModalOpen}
          onClose={closePreviewModal}
          title="Preview Modal"
          size="sm"
          radius="md"
          transitionProps={transitionProps}
        >
          {/* Add your preview content here */}
          <h3>Preview Content</h3>
        </Modal>
        {/* End Preview Modal */}
        <Grid>
          <Grid.Col span={3}>
            <Card withBorder shadow="sm" radius="md">
              <Card.Section withBorder inheritPadding py="xs">
                <Group justify="space-between">
                  <Text
                    fw={700}
                    variant="gradient"
                    gradient={{ from: "indigo", to: "teal", deg: 360 }}
                  >
                    Theme 1
                  </Text>
                </Group>
              </Card.Section>
              <Card.Section inheritPadding mt="sm" pb="md">
                <SimpleGrid size="xs">
                  <Image
                    src={Theme1}
                    radius="sm"
                    onClick={handleImageClick}
                    style={{ cursor: "pointer" }}
                  />
                </SimpleGrid>
                {isImageClicked && (
                  <Text mt="xs">Text to show when image is clicked</Text>
                )}
              </Card.Section>
              <Flex gap="xs" justify="flex-end">
                <Button mt="xs" size="xs" onClick={openPreviewModal}>
                  Preview
                </Button>
                <Button mt="xs" size="xs">
                  Apply
                </Button>
              </Flex>
            </Card>
          </Grid.Col>
          <Grid.Col span={3}>
            <Card withBorder shadow="sm" radius="md">
              <Card.Section withBorder inheritPadding py="xs">
                <Group justify="space-between">
                  <Text
                    fw={700}
                    variant="gradient"
                    gradient={{ from: "indigo", to: "teal", deg: 360 }}
                  >
                    Theem 2
                  </Text>
                </Group>
              </Card.Section>
              <Card.Section inheritPadding mt="sm" pb="md">
                <SimpleGrid>
                  <Image src={Theme3} radius="sm" />
                </SimpleGrid>
              </Card.Section>
              <Flex gap="xs" mt="xs" justify="flex-end">
                <Button size="xs" onClick={openPreviewModal}>
                  Preview
                </Button>
                <Button size="xs">Apply</Button>
              </Flex>
            </Card>
          </Grid.Col>
          <Grid.Col span={3}>
            <Card withBorder shadow="sm" radius="md">
              <Card.Section withBorder inheritPadding py="xs">
                <Group justify="space-between">
                  <Text
                    fw={700}
                    variant="gradient"
                    gradient={{ from: "indigo", to: "teal", deg: 360 }}
                  >
                    Theem 3
                  </Text>
                </Group>
              </Card.Section>
              <Card.Section inheritPadding mt="sm" pb="md">
                <SimpleGrid>
                  <Image src={Theme4} radius="sm" />
                </SimpleGrid>
              </Card.Section>
              <Flex gap="xs" mt="xs" justify="flex-end">
                <Button size="xs" onClick={openPreviewModal}>
                  Preview
                </Button>
                <Button size="xs">Apply</Button>
              </Flex>
            </Card>
          </Grid.Col>
          <Grid.Col span={3}>
            <Card withBorder shadow="sm" radius="md">
              <Card.Section withBorder inheritPadding py="xs">
                <Group justify="space-between">
                  <Text
                    fw={700}
                    variant="gradient"
                    gradient={{ from: "indigo", to: "teal", deg: 360 }}
                  >
                    Theem 4
                  </Text>
                </Group>
              </Card.Section>
              <Card.Section inheritPadding mt="sm" pb="md">
                <SimpleGrid>
                  <Image src={Home} radius="sm" />
                </SimpleGrid>
              </Card.Section>
              <Flex gap="xs" mt="xs" justify="flex-end">
                <Button size="xs" onClick={openPreviewModal}>
                  Preview
                </Button>
                <Button size="xs">Apply</Button>
              </Flex>
            </Card>
          </Grid.Col>
          <Grid.Col span={3}>
            <Card withBorder shadow="sm" radius="md">
              <Card.Section withBorder inheritPadding py="xs">
                <Group justify="space-between">
                  <Text
                    fw={700}
                    variant="gradient"
                    gradient={{ from: "indigo", to: "teal", deg: 360 }}
                  >
                    Theem 5
                  </Text>
                </Group>
              </Card.Section>
              <Card.Section inheritPadding mt="sm" pb="md">
                <SimpleGrid>
                  <Image src={Theme4} radius="sm" />
                </SimpleGrid>
              </Card.Section>
              <Flex gap="xs" mt="xs" justify="flex-end">
                <Button size="xs" onClick={openPreviewModal}>
                  Preview
                </Button>
                <Button size="xs">Apply</Button>
              </Flex>
            </Card>
          </Grid.Col>
        </Grid>
      </Modal>

      {/* Global */}
      {/* AppBar Drawer*/}
      <Drawer
        title="App Bar Drawer"
        opened={isAppbarDrawerOpen}
        onClose={closeAppbarDrawer}
        position="left"
        size={500}
        // opacity={.25}
        transitionProps={transitionProps}
        overlayProps={{ backgroundOpacity: 0 }}
      >
        <Appbar
          Item={selectAppBar}
          setItem={setSelectAppBar}
          Item2={selectAppBar2}
          setItem2={setSelectAppBar2}
          Item3={selectAppBar3}
          setItem3={setSelectAppBar3}
          appBar={onItemClick}
          openCustomizeDrawer={openCustomizeDrawer}
        />
      </Drawer>

      {/* New Navbar Drawer */}
      <Drawer
        title="Navbar Drawer"
        opened={isNavbarDrawerOpen}
        onClose={closeNavbarDrawer}
        position="left"
        size={500}
        overlayProps={{ backgroundOpacity: 0 }}
        transitionProps={transitionProps}
      >
        <Navbar
          Item={selectNavBar}
          SetItem={setSelectNavBar}
          Item2={selectNavBar2}
          setItem2={setSelectNavBar2}
          Item3={selectNavBar3}
          setItem3={setSelectNavBar3}
          navBar={onNavBarItemClick}
        />
      </Drawer>

      {/* Drawer */}
      <Drawer
        title="Drawer Drawer"
        opened={isDrawerDrawerOpen}
        onClose={closeDrawerDrawer}
        position="left"
        size={300}
        overlayProps={{ backgroundOpacity: 0 }}
        transitionProps={transitionProps}
      >
        <Drawer2 />
      </Drawer>
    </nav>
  );
};

export default NavbarSegmented;
