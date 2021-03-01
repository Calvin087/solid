import React, { useState } from "react";
import EmailTemplater from "./EmailTemplater";
import Instructions from "./Instructions";
import { useForm } from "react-hook-form";
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
} from "@chakra-ui/react";

import AllColours from "./Colours";

const DataFetcher = () => {
    const [postData, setPostData] = useState([]);
    const [websiteURL, setWebsiteURL] = useState("");
    const [websiteError, setWebsiteError] = useState(null);
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const [httpValue, setHttpValue] = useState("http://");
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
        return url.includes("http") ? url : httpValue + url;
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
                noPostWarning("Please check the url is correct");
            });
    };

    return (
        <div>
            <Flex
                bgImage="url('/images/bg2.jpg')"
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
                    fontSize="5xl"
                    fontWeight="extrabold"
                    color={AllColours.russianViolet}
                    pb="20px"
                >
                    Wordpress To Email
                </Text>

                <Text fontSize="xl" color={AllColours.maximumPurple}>
                    Turn your client's Wordpress articles into beautiful
                </Text>
                <Text fontSize="xl" color={AllColours.maximumPurple} mb="30px">
                    email newsletters in seconds.
                </Text>

                <Box
                    as="form"
                    onSubmit={handleSubmit(onSubmit)}
                    width="40%"
                    align="center"
                >
                    <RadioGroup onChange={setHttpValue} value={httpValue}>
                        <Stack
                            direction="row"
                            align="center"
                            justify="space-evenly"
                        >
                            <Radio colorScheme="blackAlpha" value="http://">
                                <Text
                                    color={AllColours.mediumSizeText}
                                    fontWeight="bold"
                                >
                                    http://
                                </Text>
                            </Radio>
                            <Radio colorScheme="blackAlpha" value="https://">
                                <Text
                                    color={AllColours.mediumSizeText}
                                    fontWeight="bold"
                                >
                                    https://
                                </Text>
                            </Radio>
                        </Stack>
                    </RadioGroup>

                    <Stack spacing={4}>
                        <InputGroup
                            size="md"
                            mt="30px"
                            borderColor={AllColours.russianVioletTrans}
                        >
                            <InputLeftAddon
                                children={httpValue}
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
