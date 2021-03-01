import React from "react";
import { Flex, Image, Heading, Text, Icon, Box } from "@chakra-ui/react";
import AllColours from "./Colours";

const Instructions = () => {
    return (
        <Flex justifyContent="center" alignItems="center">
            <Flex
                width={{ sm: "80%" }}
                justifyContent="center"
                alignItems="center"
                flexDirection="row"
                flexWrap="wrap"
                display="flex"
                opacity={1}
                mt="50px"
                mb="130px"
            >
                <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    width={{ sm: "100%", lg: "30%" }}
                    mb={{ sm: "50px", xl: "0px" }}
                >
                    <Image
                        height="64px"
                        width="64px"
                        src="./images/inst1a.png"
                    />
                    <Text
                        fontSize="2xl"
                        fontWeight="bold"
                        color={AllColours.russianViolet}
                        pt="15px"
                    >
                        Enter Client's URL
                    </Text>
                    <Text color={AllColours.mediumSizeText}>
                        Ensure you choose the right
                    </Text>
                    <Text color={AllColours.mediumSizeText}>
                        'http' type that the site is using.
                    </Text>
                </Flex>
                <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    width={{ sm: "100%", lg: "30%" }}
                    mb={{ sm: "50px", xl: "0px" }}
                >
                    <Image
                        height="64px"
                        width="64px"
                        src="./images/inst2.png"
                    />
                    <Text
                        fontSize="2xl"
                        fontWeight="bold"
                        color={AllColours.russianViolet}
                        pt="15px"
                    >
                        Customise &amp; Copy
                    </Text>
                    <Text color={AllColours.mediumSizeText}>
                        Choose your own Logo and CTA
                    </Text>
                    <Text color={AllColours.mediumSizeText}>
                        and One-Click copy all the code
                    </Text>
                </Flex>
                <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    width={{ sm: "100%", lg: "30%" }}
                    mb={{ sm: "50px", xl: "0px" }}
                >
                    <Image
                        height="64px"
                        width="64px"
                        src="./images/inst3.png"
                    />
                    <Text
                        fontSize="2xl"
                        fontWeight="bold"
                        color={AllColours.russianViolet}
                        pt="15px"
                    >
                        Send &amp; Invoice
                    </Text>
                    <Text color={AllColours.mediumSizeText}>
                        Beta users have reported invoicing
                    </Text>
                    <Text color={AllColours.mediumSizeText}>
                        clients avg{" "}
                        <span style={{ fontWeight: "bold" }}>&pound;120</span>{" "}
                        using this tool.
                    </Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Instructions;
