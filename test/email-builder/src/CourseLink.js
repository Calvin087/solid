import React from "react";
import { Button, Flex, Image, Text, Link } from "@chakra-ui/react";
import AllColours from "./Colours";

const CourseLinks = () => {
    return (
        <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            mt="25px"
        >
            <Text
                fontSize="lg"
                fontWeight="extrabold"
                color={AllColours.russianViolet}
                pb="10px"
            >
                10x Your Campaigns
            </Text>
            <Link
                href="https://email-loyalty.thinkific.com/courses/email-loyalty-full-plus"
                isExternal
            >
                <Image
                    height="auto"
                    width="100%"
                    src="./images/video-shot-sm.png"
                    boxShadow="md"
                />
            </Link>
            <Text pt="15px" fontSize="lg" fontWeight="bold">
                10 campaigns to get you immediate results.
            </Text>
            <Text
                pt="5px"
                pb="20px"
                fontSize="sm"
                color={AllColours.mediumSizeText}
            >
                Discover all the ways to use psychological triggers in your
                marketing and guarantee subscriber action.
            </Text>
            <Link
                href="https://email-loyalty.thinkific.com/courses/email-loyalty-full-plus"
                isExternal
            >
                <Button
                    variant="solid"
                    size="md"
                    borderRadius="10px"
                    backgroundColor={AllColours.polishedPine}
                    color="white"
                    _hover={{ bg: AllColours.polishedPineDark }}
                    _active={{
                        bg: AllColours.polishedPineDark,
                        transform: "scale(0.95)",
                    }}
                    // onClick={copyToClipboard}
                >
                    Learn Now
                </Button>
            </Link>
        </Flex>
    );
};

export default CourseLinks;
