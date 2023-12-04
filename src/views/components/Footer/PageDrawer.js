import React, { useState } from "react";
import { Select, rem } from "@mantine/core";
import {
  IconChevronRight,
} from "@tabler/icons-react";

const PageDrawer = () => {
  const icon = <IconChevronRight style={{ width: rem(16), height: rem(16) }} />;
  return (
    <>
      <Select
        h="48px"
        checkIconPosition="right"
        rightSection={icon}
        placeholder="Pick value"
        data={["Home", "Angular", "Vue", "Svelte"]}
        defaultValue="Home"
        // clearable
      />
      <Select
        h="48px"
        mt="16px"
        rightSection={icon}
        placeholder="Pick value"
        data={["Home", "Category List", "Vue", "Svelte"]}
        defaultValue="Category List"
        clearable
      />
      <Select
        h="48px"
        mt="16px"
        rightSection={icon}
        placeholder="Pick value"
        data={["Home", "Category List", "Category with Product", "Svelte"]}
        defaultValue="Category with Product"
        clearable
      />
      <Select
        h="48px"
        mt="16px"
        rightSection={icon}
        placeholder="Pick value"
        data={["Home", "Angular", "Vue", "Product List"]}
        defaultValue="Product List"
        clearable
      />
      <Select
        h="48px"
        mt="16px"
        rightSection={icon}
        placeholder="Pick value"
        data={["Home", "Angular", "Vue", "Svelte", "Product Details"]}
        defaultValue="Product Details"
        clearable
      />
      <Select
        h="48px"
        mt="16px"
        rightSection={icon}
        placeholder="Pick value"
        data={["Home", "Angular", "Vue", "Svelte", "Search"]}
        defaultValue="Search"
        clearable
      />
      <Select
        h="48px"
        mt="16px"
        rightSection={icon}
        placeholder="Pick value"
        data={["Home", "Angular", "Vue", "Svelte", "Search", "Cart"]}
        defaultValue="Cart"
        clearable
      />
      <Select
        h="48px"
        mt="16px"
        rightSection={icon}
        placeholder="Pick value"
        data={[
          "Home",
          "Angular",
          "Vue",
          "Svelte",
          "Search",
          "Dashboard / Profile",
        ]}
        defaultValue="Dashboard / Profile"
        clearable
      />
      <Select
        h="48px"
        mt="16px"
        rightSection={icon}
        placeholder="Pick value"
        data={["Home", "Angular", "Vue", "Svelte", "Search", "Order"]}
        defaultValue="Order"
        clearable
      />
    </>
  );
};

export default PageDrawer;
