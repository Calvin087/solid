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
                fontSize="xl"
                fontWeight="extrabold"
                color={AllColours.russianViolet}
                pb="10px"
            >
                Become an Email Marketing Guru
            </Text>
            <Image
                height="auto"
                width="100%"
                src="./images/video-shot-sm.png"
            />
            <Text pt="15px" pb="20px">
                10 essential automations and the psychological triggers to
                guarantee subscriber action.
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
