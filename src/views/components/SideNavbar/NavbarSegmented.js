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
  Center,
  Tooltip,
  Box,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import "@mantine/carousel/styles.css";
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
  IconLock,
  IconLayersSubtract,
  IconTemplate,
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
// Theme Image Import
import Theme1 from "../../image/Mobile layouts/Theme1/landing page-1.png";
import Theme2 from "../../image/Mobile layouts/Theme2/HOME.png";
import Theme3 from "../../image/Mobile layouts/Theme3/landing page.png";

// Page Image Import
import Theme1Page1 from "../../image/Mobile layouts/Theme1/Cart-1.png";
import Theme1Page2 from "../../image/Mobile layouts/Theme1/Checkout-1.png";
import Theme1Page3 from "../../image/Mobile layouts/Theme1/Checkout.png";
import Theme1Page4 from "../../image/Mobile layouts/Theme1/Detail.png";
import Theme1Page5 from "../../image/Mobile layouts/Theme1/Profile-1.png";
import Theme1Page6 from "../../image/Mobile layouts/Theme1/landing page-2.png";
import Theme1Page7 from "../../image/Mobile layouts/Theme1/product list.png";
import Theme2Page1 from "../../image/Mobile layouts/Theme2/MY CART.png";
import Theme2Page2 from "../../image/Mobile layouts/Theme2/PRODUCT DETAILS.png";
import Theme3Page1 from "../../image/Mobile layouts/Theme3/Cart.png";
import Theme3Page2 from "../../image/Mobile layouts/Theme3/Product list page.png";
import Theme3Page3 from "../../image/Mobile layouts/Theme3/ProductDetail-1.png";
import Theme3Page4 from "../../image/Mobile layouts/Theme3/ProductDetail.png";
import Theme3Page5 from "../../image/Mobile layouts/Theme3/Profile.png";

const themes = [
  {
    name: "Theme 1",
    image: Theme1,
    pages: [
      { pageName: "Page 1", image: Theme1Page1 },
      { pageName: "Page 2", image: Theme1Page2 },
      { pageName: "Page 3", image: Theme1Page3 },
      { pageName: "Page 4", image: Theme1Page4 },
      { pageName: "Page 5", image: Theme1Page5 },
      { pageName: "Page 6", image: Theme1Page6 },
      { pageName: "Page 7", image: Theme1Page7 },
    ],
  },
  {
    name: "Theme 2",
    image: Theme2,
    pages: [
      { pageName: "Page 1", image: Theme2Page1 },
      { pageName: "Page 2", image: Theme2Page2 },
      { pageName: "Page 3", image: Theme2 },
      { pageName: "Page 4", image: Theme2 },
      { pageName: "Page 5", image: Theme2 },
      { pageName: "Page 6", image: Theme2 },
      { pageName: "Page 7", image: Theme2 },
    ],
  },
  {
    name: "Theme 3",
    image: Theme3,
    pages: [
      { pageName: "Page 1", image: Theme3Page1 },
      { pageName: "Page 2", image: Theme3Page2 },
      { pageName: "Page 3", image: Theme3Page3 },
      { pageName: "Page 4", image: Theme3Page4 },
      { pageName: "Page 5", image: Theme3Page5 },
    ],
  },
  {
    name: "Theme 4",
    image: Theme1,
    pages: [
      { pageName: "Page 1", image: Theme1Page1 },
      { pageName: "Page 2", image: Theme1Page2 },
      { pageName: "Page 3", image: Theme1Page3 },
      { pageName: "Page 4", image: Theme1Page4 },
      { pageName: "Page 5", image: Theme1Page5 },
      { pageName: "Page 6", image: Theme1Page6 },
      { pageName: "Page 7", image: Theme1Page7 },
    ],
  },
  {
    name: "Theme 5",
    image: Theme2,
    pages: [
      { pageName: "Page 1", image: Theme2Page1 },
      { pageName: "Page 2", image: Theme2Page2 },
      { pageName: "Page 3", image: Theme2 },
      { pageName: "Page 4", image: Theme2 },
      { pageName: "Page 5", image: Theme2 },
      { pageName: "Page 6", image: Theme2 },
      { pageName: "Page 7", image: Theme2 },
    ],
  },
  {
    name: "Theme 6",
    image: Theme3,
    pages: [
      { pageName: "Page 1", image: Theme3Page1 },
      { pageName: "Page 2", image: Theme3Page2 },
      { pageName: "Page 3", image: Theme3Page3 },
      { pageName: "Page 4", image: Theme3Page4 },
      { pageName: "Page 5", image: Theme3Page5 },
    ],
  },
  {
    name: "Theme 7",
    image: Theme1,
    pages: [
      { pageName: "Page 1", image: Theme1Page1 },
      { pageName: "Page 2", image: Theme1Page2 },
      { pageName: "Page 3", image: Theme1Page3 },
      { pageName: "Page 4", image: Theme1Page4 },
      { pageName: "Page 5", image: Theme1Page5 },
      { pageName: "Page 6", image: Theme1Page6 },
      { pageName: "Page 7", image: Theme1Page7 },
    ],
  },
  {
    name: "Theme 8",
    image: Theme2,
    pages: [
      { pageName: "Page 1", image: Theme2Page1 },
      { pageName: "Page 2", image: Theme2Page2 },
      { pageName: "Page 3", image: Theme2 },
      { pageName: "Page 4", image: Theme2 },
      { pageName: "Page 5", image: Theme2 },
      { pageName: "Page 6", image: Theme2 },
      { pageName: "Page 7", image: Theme2 },
    ],
  },
  {
    name: "Theme 9",
    image: Theme3,
    pages: [
      { pageName: "Page 1", image: Theme3Page1 },
      { pageName: "Page 2", image: Theme3Page2 },
      { pageName: "Page 3", image: Theme3Page3 },
      { pageName: "Page 4", image: Theme3Page4 },
      { pageName: "Page 5", image: Theme3Page5 },
    ],
  },
  {
    name: "Theme 10",
    image: Theme1,
    pages: [
      { pageName: "Page 1", image: Theme1Page1 },
      { pageName: "Page 2", image: Theme1Page2 },
      { pageName: "Page 3", image: Theme1Page3 },
      { pageName: "Page 4", image: Theme1Page4 },
      { pageName: "Page 5", image: Theme1Page5 },
      { pageName: "Page 6", image: Theme1Page6 },
      { pageName: "Page 7", image: Theme1Page7 },
    ],
  },
  {
    name: "Theme 11",
    image: Theme2,
    pages: [
      { pageName: "Page 1", image: Theme2Page1 },
      { pageName: "Page 2", image: Theme2Page2 },
      { pageName: "Page 3", image: Theme2 },
      { pageName: "Page 4", image: Theme2 },
      { pageName: "Page 5", image: Theme2 },
      { pageName: "Page 6", image: Theme2 },
      { pageName: "Page 7", image: Theme2 },
    ],
  },
  {
    name: "Theme 12",
    image: Theme3,
    pages: [
      { pageName: "Page 1", image: Theme3Page1 },
      { pageName: "Page 2", image: Theme3Page2 },
      { pageName: "Page 3", image: Theme3Page3 },
      { pageName: "Page 4", image: Theme3Page4 },
      { pageName: "Page 5", image: Theme3Page5 },
    ],
  },
];

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
        <Tooltip label="Settings">
          <IconSettings
            className={classes.linkIcon}
            stroke={1.5}
            onClick={() => setIsSettingsDrawerOpen(true)}
          />
        </Tooltip>
        <Tooltip label="Page">
          <IconLayersSubtract
            className={classes.linkIcon}
            stroke={1.5}
            onClick={() => setIsPageDrawerOpen(true)}
          />
        </Tooltip>
        <Tooltip label="Template">
          <IconTemplate
            className={classes.linkIcon}
            stroke={1.5}
            onClick={open}
          />
        </Tooltip>
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

  const transitionProps = {
    transition: "fade",
    duration: 800,
    timingFunction: "linear",
  };

  // Function to close the preview modal
  const closePreviewModal = () => {
    setIsPreviewModalOpen(false);
  };
  // Theme
  const [selectedPage, setSelectedPage] = useState(null);

  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

  // Function to open the preview modal
  // const openPreviewModal = (theme) => {
  //   setIsPreviewModalOpen(true);
  //   setSelectedPage(Object.values(theme).slice(1));
  // };
  const [previewModalTitle, setPreviewModalTitle] = useState("");
  const openPreviewModal = (theme) => {
    setIsPreviewModalOpen(true);
    setSelectedPage(theme.pages);
    setPreviewModalTitle(`${theme.name} - Preview`);
  };

  const themeCards = themes.map((theme, index) => (
    <Grid.Col span={2} key={index}>
      <Card withBorder shadow="sm" radius="md">
        <Card.Section withBorder inheritPadding py="xs">
          <Group justify="space-between">
            <Text
              fw={700}
              variant="gradient"
              gradient={{ from: "indigo", to: "teal", deg: 360 }}
            >
              {theme.name}
            </Text>
          </Group>
        </Card.Section>
        <Card.Section>
          <SimpleGrid size="sm">
            <Center>
              <Image
                src={theme.image}
                radius="sm"
                h={200}
                w="auto"
                fit="contain"
                // style={{ cursor: "pointer" }}
              />
            </Center>
          </SimpleGrid>
        </Card.Section>
        <Flex gap="xs" justify="center" style={{ borderTop: "1px solid gray" }}>
          <Button mt="xs" size="xs" onClick={() => openPreviewModal(theme)}>
            Preview
          </Button>
          <Button mt="xs" size="xs">
            Apply
          </Button>
        </Flex>
      </Card>
    </Grid.Col>
  ));

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
        {/* Content */}
        <Box style={{ height: "460px", overflow: "auto" }}>
          <Select
            label="Your favorite library"
            placeholder="Pick value"
            data={["React", "Angular", "Vue", "Svelte"]}
            defaultValue="React"
          />
        </Box>

        {/* Footer */}
        <Box style={{ marginTop: "auto", borderTop: "1px solid gray" }}>
          {/* Your footer goes here */}
          <Flex justify="flex-end" mt="4px">
            <Button size="xs" onClick={() => setIsSettingsDrawerOpen(false)}>
              Back
            </Button>
          </Flex>
        </Box>
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
        {/* Content */}
        <Box style={{ height: "460px", overflow: "auto" }}>
          <PageDrawer />
        </Box>

        {/* Footer */}
        <Box style={{ marginTop: "auto", borderTop: "1px solid gray" }}>
          {/* Your footer goes here */}
          <Flex justify="flex-end" mt="4px">
            <Button size="xs" onClick={() => setIsPageDrawerOpen(false)}>
              Back
            </Button>
          </Flex>
        </Box>
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
          title={previewModalTitle}
          radius="md"
          size="xl"
          transitionProps={transitionProps}
          overlayProps={{
            backgroundOpacity: 0.55,
            blur: 3,
          }}
        >
          {/* <Carousel
            height={435}
            slideSize="33.333333%"
            slideGap="md"
            loop
            align="start"
            bg="blue"
          >
            {selectedPage &&
              selectedPage.map((page, index) => (
                <Carousel.Slide key={index}>
                  <Image src={page.image} />
                </Carousel.Slide>
              ))}
          </Carousel> */}
          <div style={{ height: 400, display: "flex" }}>
            <Carousel
              height="100%"
              style={{ flex: 1 }}
              slideSize={{ base: "100%", sm: "50%", md: "33.333333%" }}
              slideGap={{ base: 0, sm: "md" }}
              loop
              align="center"
            >
              {selectedPage &&
                selectedPage.map((page, index) => (
                  <Carousel.Slide key={index}>
                    <Card withBorder shadow="sm" radius="md">
                      <Card.Section withBorder inheritPadding py="xs">
                        <Text fw={500}>{page.pageName}</Text>
                      </Card.Section>

                      <Card.Section mt="sm">
                        <Image src={page.image} h={320} fit="contain" />
                      </Card.Section>
                    </Card>
                  </Carousel.Slide>
                ))}
            </Carousel>
          </div>
        </Modal>

        {/* End Preview Modal */}
        <Grid>{themeCards}</Grid>
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
        {/* Content */}
        <Box style={{ height: "90%", overflow: "auto" }}>
          <Drawer2 />
        </Box>

        {/* Footer */}
        <Box style={{ marginTop: "auto", borderTop: "1px solid gray" }}>
          {/* Your footer goes here */}
          <Flex justify="flex-end" mt="4px">
            <Button size="xs" onClick={closeDrawerDrawer}>
              Back
            </Button>
          </Flex>
        </Box>
      </Drawer>
    </nav>
  );
};

export default NavbarSegmented;
