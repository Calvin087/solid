import React from "react";
import { Flex, Image, Heading, Text, Icon, Box } from "@chakra-ui/react";

const MobileWarningBanner = () => {
    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            backgroundColor="red.500"
            padding="10px"
            display={{ sm: "none" }}
        >
            <Text color="white">
                You really can't do this on mobile. Go get your computer.
            </Text>
        </Flex>
    );
};

export default MobileWarningBanner;
