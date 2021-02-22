import React, { useState } from "react";
import EmailTemplater from "./EmailTemplater";
import { useForm } from "react-hook-form";
import {
    Stack,
    Input,
    Flex,
    Text,
    Badge,
    Box,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from "@chakra-ui/react";

const DataFetcher = () => {
    const [postData, setPostData] = useState([]);
    const [websiteURL, setWebsiteURL] = useState("");
    const [websiteError, setWebsiteError] = useState(null);

    const wpAPI = "/wp-json/wp/v2/posts?_embed";

    const { register, handleSubmit, watch, errors } = useForm();

    const urlPrefixChecker = (url) => {
        return url.includes("http") ? url : "https://" + url;
    };

    const onSubmit = (data) => {
        let url = urlPrefixChecker(data.website);
        getPosts(url);
        setWebsiteURL(url);
    };

    const getPosts = (url) => {
        setWebsiteError(false);
        fetch(url + wpAPI)
            .then((res) => res.ok && res.json())
            .then((data) => setPostData(data))
            .catch((error) => setWebsiteError(true));
    };

    console.log(websiteError);

    return (
        <div>
            <Flex direction="column" align="center" justify="space-between">
                <Text>Title</Text>
                <Text>Subtitle</Text>
            </Flex>

            <Flex direction="column" align="center" justify="space-between">
                <Box
                    as="form"
                    onSubmit={handleSubmit(onSubmit)}
                    width="40vw"
                    align="center"
                >
                    <Input
                        borderRadius="25px"
                        backgroundColor="whiteAlpha.500"
                        size="md"
                        fontSize="lg"
                        name="website"
                        ref={register({ required: true })}
                    />

                    {errors.website && <span>This field is required</span>}
                    {websiteError && (
                        <span>That website doesn't look right.</span>
                    )}

                    <Button
                        mt="20px"
                        variant="solid"
                        size="md"
                        borderRadius="10px"
                        type="submit"
                        colorScheme="green"
                        _hover={{ bg: "gray.500" }}
                        _active={{
                            bg: "gray.700",
                            transform: "scale(0.95)",
                        }}
                    >
                        Button text
                    </Button>
                </Box>
            </Flex>

            {postData.length !== 0 ? (
                <EmailTemplater allPosts={postData} websiteURL={websiteURL} />
            ) : (
                ""
            )}
        </div>
    );
};

export default DataFetcher;
