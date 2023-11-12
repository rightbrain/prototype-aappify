import React, { useState } from "react";
import {
  Button,
  SegmentedControl,
  Drawer,
  Box,
  Flex,
  Modal,
  Text,
  Input,
  Grid,
  Checkbox,
  PasswordInput,
  Anchor,
  rem,
  Select,
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
  IconAt,
  IconLock,
} from "@tabler/icons-react";
import { useDisclosure } from "@mantine/hooks";
import classes from "./NavbarSegmented.module.css";
import Appbar from "../Global/AppBar";
import Navbar from "../Global/Navbar";
import Drawer2 from "../Global/Drawer";
import Index from "../AppBar/Index";
import Order from "../Order/Order";
import Receipts from "../Receipts/Receipts";
import Reviews from "../Reviews/Reviews";

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

  return (
    <nav className={classes.navbar}>
      <div>
        <SegmentedControl
          value={section}
          onChange={(value) => setSection(value)}
          fullWidth
          color="cyan"
          transitionDuration={500}
          transitionTimingFunction="linear"
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
        transitionProps={{
          transition: "fade",
          duration: 2000,
          timingFunction: "linear",
        }}
      >
        <div>
          {/* <h3>Order Drawer Content</h3> */}
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
        transitionProps={{
          transition: "fade",
          duration: 2000,
          timingFunction: "linear",
        }}
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
        transitionProps={{
          transition: "fade",
          duration: 2000,
          timingFunction: "linear",
        }}
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
        transitionProps={{
          transition: "fade",
          duration: 2000,
          timingFunction: "linear",
        }}
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
        transitionProps={{
          transition: "fade",
          duration: 2000,
          timingFunction: "linear",
        }}
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
        transitionProps={{
          transition: "fade",
          duration: 2000,
          timingFunction: "linear",
        }}
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
        transitionProps={{
          transition: "fade",
          duration: 2000,
          timingFunction: "linear",
        }}
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
        transitionProps={{
          transition: "fade",
          duration: 2000,
          timingFunction: "linear",
        }}
      >
        <div>
          <h3>Settings Drawer Content</h3>
          <Select
            label="Your favorite library"
            placeholder="Pick value"
            data={["React", "Angular", "Vue", "Svelte"]}
            defaultValue="React"
            // clearable
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
        transitionProps={{
          transition: "fade",
          duration: 2000,
          timingFunction: "linear",
        }}
      >
        <div>
          <h3>Page Drawer Content</h3>
        </div>
      </Drawer>

      {/* Page Modal */}
      <Modal
        opened={opened}
        onClose={close}
        title="This is a fullscreen modal"
        radius={0}
        transitionProps={{ transition: "fade", duration: 2000 }}
        lefted
      >
        {/* Modal content */}
        <Grid>
          <Grid.Col span={6}>
            <Input.Label required>First name</Input.Label>
            <Input
              placeholder="Your first name"
              description="Description below the input"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Input.Label required>Last namel</Input.Label>
            <Input placeholder="Your last name" />
          </Grid.Col>
          <Grid.Col span={12}>
            <Input.Label required>Email</Input.Label>
            <Input
              placeholder="Your email"
              leftSection={<IconAt size={16} />}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <PasswordInput
              leftSection={icon}
              label="Password"
              required
              placeholder="Password"
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <PasswordInput
              leftSection={icon}
              label="Confirm Passwordrd"
              required
              placeholder="Confirm Password"
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <Checkbox
              defaultChecked
              label="I agree to sell my soul and privacy to this corporation"
            />
          </Grid.Col>
          <Grid.Col span={6}>
            <Anchor c={`gray`} underline="hover" target="_blank">
              Have an account? Login
            </Anchor>
          </Grid.Col>
          <Grid.Col span={6}>
            <Flex justify="flex-end">
              <Button>Register</Button>
            </Flex>
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
        transitionProps={{
          transition: "fade",
          duration: 2000,
          timingFunction: "linear",
        }}
      >
        {/* <Index
          Item={selectAppBar}
          setItem={setSelectAppBar}
          Item2={selectAppBar2}
          setItem2={setSelectAppBar2}
          appBar={onItemClick}
        /> */}
        <Appbar
          Item={selectAppBar}
          setItem={setSelectAppBar}
          Item2={selectAppBar2}
          setItem2={setSelectAppBar2}
          Item3={selectAppBar3}
          setItem3={setSelectAppBar3}
          appBar={onItemClick}
        />
      </Drawer>

      {/* New Navbar Drawer */}
      <Drawer
        title="Navbar Drawer"
        opened={isNavbarDrawerOpen}
        onClose={closeNavbarDrawer}
        position="left"
        size={500}
        transitionProps={{
          transition: "fade",
          duration: 2000,
          timingFunction: "linear",
        }}
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
        transitionProps={{
          transition: "fade",
          duration: 2000,
          timingFunction: "linear",
        }}
      >
        <Drawer2 />
      </Drawer>
    </nav>
  );
};

export default NavbarSegmented;
