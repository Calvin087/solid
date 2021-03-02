import React, { Children } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Text,
} from "@chakra-ui/react";
import AllColours from "./Colours";

const SideBarAccordion = (props) => {
    return (
        <div>
            <Accordion allowToggle>
                <AccordionItem borderStyle="none" pl="0rem">
                    <h2>
                        <AccordionButton>
                            <Box
                                flex="1"
                                textAlign="left"
                                color={AllColours.mediumSizeText}
                            >
                                <Text>Here's a few options</Text>
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>{props.children}</AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default SideBarAccordion;
