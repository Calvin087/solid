import React from "react";
import { Stack, Input, Flex, Text, Badge, Box, Button } from "@chakra-ui/react";

const Chaklack = () => (
    <div>
        <Flex direction="column" align="center" justify="space-between">
            <Text>Title</Text>
            <Text>Subtitle</Text>
        </Flex>
        <Flex
            justifyContent="space-between"
            alignItems="center"
            flexDirection="column"
        >
            <Input
                width="50%"
                borderRadius="25px"
                backgroundColor="whiteAlpha.500"
                size="md"
                fontSize="lg"
            />
            <Button
                variant="solid"
                size="md"
                maxWidth="200px"
                borderRadius="10px"
            >
                Button text
            </Button>
        </Flex>

        <Flex
            pl="10vw"
            pt="5vh"
            flexDirection="row"
            justifyContent="space-between"
        >
            <Box width="30%" pr="5vw">
                <Flex
                    flexDirection="column"
                    alignItems="flex-start"
                    justifyContent="space-between"
                >
                    <Button variant="solid" size="md" mb="50px">
                        Copy Code To Clipboard
                    </Button>
                    <Text fontSize="lg">Add Your Logo Here</Text>
                    <Input />
                </Flex>
            </Box>
            <Box width="100%" backgroundColor="facebook.500">
                <Text>email HTML Goes Here</Text>
            </Box>
        </Flex>
    </div>
);

export default Chaklack;
