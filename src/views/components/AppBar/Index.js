import React, { useState } from "react";
import AppbarLayouts from "./AppbarLayouts";
import data from "./Dtata";

const Index = ({Item, setItem, Item2, setItem2, appBar}) => {
  const [selectedLayout, setSelectedLayout] = useState(false);
  return (
    <>
      <AppbarLayouts
        layouts={data.appbar}
        selectedLayout={selectedLayout}
        setSelectedLayout={setSelectedLayout}
      />
    </>
  );
};

export default Index;
