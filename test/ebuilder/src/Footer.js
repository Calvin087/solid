import React from "react";
import {
    Flex,
    Image,
    Heading,
    Text,
    Icon,
    Box,
    Link,
    Divider,
} from "@chakra-ui/react";
import AllColours from "./Colours";

const Footer = () => {
    return (
        <Flex
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            pb="20px"
        >
            <Divider width="30%" mb="20px" />
            <Text
                bgGradient="linear(to-t, #3f1349,#7c3d8e)"
                bgClip="text"
                fontSize="xl"
                fontWeight="extrabold"
                align="center"
                // color={AllColours.russianViolet}
                pb="2px"
            >
                Wordpress To Email
            </Text>
            <Text>
                Website designed and maintained by&nbsp;
                <Link
                    href="https://www.calvintorra.com"
                    isExternal
                    fontWeight="bold"
                    color={AllColours.maximumPurple}
                >
                    Calvin Torra
                </Link>
            </Text>
            <Text>👀&nbsp;&nbsp;No tracking, no cookies 🍪&nbsp;, but</Text>
            <Text>There are some affiliate links</Text>
        </Flex>
    );
};

export default Footer;
