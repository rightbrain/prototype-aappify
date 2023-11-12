import React, { useState } from "react";
import { Accordion } from "@mantine/core";
import { IconPlus, IconMinus } from "@tabler/icons-react";

const Receipts = () => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const handleAccordionToggle = () => {
    setIsAccordionOpen((prev) => !prev);
  };

  return (
    <Accordion
      bg={`gray.3`}
      chevron={isAccordionOpen ? <IconMinus /> : <IconPlus />}
      onToggle={handleAccordionToggle}
    >
      <Accordion.Item value="apple">
        <Accordion.Control>Apple</Accordion.Control>
        <Accordion.Panel>
          <Accordion chevron={null} bg={`blue`}>
            <Accordion.Item value="test">
              <Accordion.Control>Test</Accordion.Control>
              <Accordion.Panel>
                <Accordion chevron={null} bg={`red`}>
                  <Accordion.Item value="test-2">
                    <Accordion.Control>Test-2</Accordion.Control>
                    <Accordion.Panel>Content</Accordion.Panel>
                  </Accordion.Item>
                </Accordion>
              </Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
};

export default Receipts;
