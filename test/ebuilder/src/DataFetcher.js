import React, { useState } from "react";
import EmailTemplater from "./EmailTemplater";
import Instructions from "./Instructions";
import { useForm } from "react-hook-form";
import MobileWarningBanner from "./MobileWarningBanner";
import {
    Input,
    Flex,
    Text,
    Box,
    Button,
    Stack,
    InputGroup,
    InputLeftAddon,
    useToast,
    Radio,
    RadioGroup,
    Badge,
} from "@chakra-ui/react";

import AllColours from "./Colours";
import Footer from "./Footer";

const DataFetcher = () => {
    const [postData, setPostData] = useState([]);
    const [websiteURL, setWebsiteURL] = useState("");
    const [websiteError, setWebsiteError] = useState(null);
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const toast = useToast();

    const wpAPI = "/wp-json/wp/v2/posts?_embed";

    const { register, handleSubmit, watch, errors } = useForm();

    const noPostWarning = (msg) => {
        toast({
            title: "Something Went Wrong 😧",
            description: msg,
            status: "info",
            duration: 6000,
            position: "top",
            isClosable: true,
        });
        setIsButtonLoading(false);
    };

    const urlPrefixChecker = (url) => {
        return url.includes("https") ? url : "https://" + url;
    };

    const onSubmit = (data) => {
        let url = urlPrefixChecker(data.website);
        setIsButtonLoading(true);
        getPosts(url);
        setWebsiteURL(url);
    };

    const getPosts = (url) => {
        setWebsiteError(false);
        setPostData([]);

        fetch(url + wpAPI)
            .then((res) => res.ok && res.json())
            .then((data) => {
                if (data.length === 0) {
                    noPostWarning("There aren't any posts");
                }
                setPostData(data);
            })
            .catch((error) => {
                noPostWarning(
                    "Is the site missing an SSL / `Https` certificate?"
                );
            });
    };

    return (
        <div>
            <Flex
                // bgImage="url('/images/bg2.jpg')"
                bgColor="#fffffff0"
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                backgroundBlendMode="screen"
                direction="column"
                align="center"
                justify="space-between"
                // mb="100px"
                py="40px"
            >
                <Text
                    bgGradient="linear(to-t, #3f1349,#7c3d8e)"
                    bgClip="text"
                    fontSize={{ base: "4xl", sm: "5xl" }}
                    fontWeight="extrabold"
                    // color={AllColours.russianViolet}
                    pb="20px"
                    align="center"
                >
                    Wordpress To Email
                </Text>

                <Text
                    fontSize="xl"
                    color={AllColours.maximumPurple}
                    align="center"
                    width={{ base: "80%", sm: "500px" }}
                >
                    Turn your client's Wordpress articles into beautiful{" "}
                    <span style={{ color: AllColours.russianViolet }}>
                        Mobile-Ready{" "}
                    </span>
                    newsletters in.....like seconds.
                </Text>

                <Box as="form" onSubmit={handleSubmit(onSubmit)} align="center">
                    <Stack spacing={4} width={{ base: "350px", sm: "500px" }}>
                        <InputGroup
                            size="lg"
                            mt="50px"
                            borderColor={AllColours.russianVioletTrans}
                        >
                            <InputLeftAddon
                                children="https://"
                                backgroundColor="#fff"
                                color={AllColours.mediumSizeText}
                            />
                            <Input
                                backgroundColor="white"
                                fontSize="lg"
                                placeholder="www.your-awesome-site.com"
                                name="website"
                                ref={register({ required: true })}
                            />
                        </InputGroup>

                        <Box align="center" width="100%">
                            <Text
                                fontSize="sm"
                                color={AllColours.mediumSizeText}
                                align="center"
                                width={{ base: "100%", sm: "500px" }}
                            >
                                <span
                                    style={{ color: AllColours.russianViolet }}
                                >
                                    Required:
                                </span>{" "}
                                "https" secure site &amp; Post Excerpts
                            </Text>
                        </Box>
                    </Stack>

                    {isButtonLoading && postData.length === 0 ? (
                        <Button
                            mt="30px"
                            size="lg"
                            borderRadius="10px"
                            isLoading
                            loadingText="Awesomeness Loading"
                            backgroundColor={AllColours.carrotOrange}
                            _hover={{
                                bg: AllColours.carrotOrange,
                            }}
                            variant="solid"
                        >
                            Submit
                        </Button>
                    ) : (
                        <div>
                            <Button
                                mt="30px"
                                variant="solid"
                                size="lg"
                                borderRadius="10px"
                                type="submit"
                                backgroundColor={AllColours.jonquilYellow}
                                color={AllColours.russianViolet}
                                _hover={{
                                    bg: AllColours.carrotOrange,
                                }}
                                _active={{
                                    bg: AllColours.carrotOrange,
                                    transform: "scale(0.95)",
                                    color: "white",
                                }}
                            >
                                Let's Go!
                            </Button>
                        </div>
                    )}
                </Box>
            </Flex>

            {postData.length !== 0 ? (
                <EmailTemplater allPosts={postData} websiteURL={websiteURL} />
            ) : (
                <div>
                    <Instructions />
                </div>
            )}
        </div>
    );
};

export default DataFetcher;
