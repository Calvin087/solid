import React from "react";
import { Button, Flex, Image, Text, Link } from "@chakra-ui/react";
import AllColours from "./Colours";

const AffiliateLinks = () => {
    return (
        <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            mt="50px"
        >
            <Text
                fontSize="lg"
                fontWeight="extrabold"
                color={AllColours.russianViolet}
                pb="10px"
            >
                Send Your Campaign Free
            </Text>
            <Link
                href="https://www.mailerlite.com/a/vhtiamoopy
"
                isExternal
            >
                <Image
                    height="auto"
                    width="100%"
                    src="./images/mailer-lite.jpg"
                    boxShadow="md"
                />
            </Link>
            <Text
                pt="20px"
                pb="20px"
                fontSize="sm"
                color={AllColours.mediumSizeText}
            >
                MailerLite is a beginner-friendly tool that comes packed with
                advanced features for all of your email marketing needs.
            </Text>
            <Link
                href="https://www.mailerlite.com/a/vhtiamoopy
"
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
                >
                    Learn More
                </Button>
            </Link>
        </Flex>
    );
};

export default AffiliateLinks;
