import { Button, useToast, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import AllColours from "./Colours";

const CopyToClipboard = ({ emailBody }) => {
    const textAreaRef = useRef(null);
    const toast = useToast();

    function copyToClipboard(e) {
        textAreaRef.current.select();
        document.execCommand("copy");
        // This is just personal preference.
        // I prefer to not show the the whole text area selected.
        e.target.focus();

        toast({
            title: "Ready To Deploy! 📝",
            description: "The template code has been copied to your clipboard!",
            status: "info",
            duration: 5500,
            position: "bottom-left",
            isClosable: true,
        });
    }

    return (
        <div>
            <div>
                {
                    /* Logical shortcut for only displaying the 
          button if the copy command exists */
                    document.queryCommandSupported("copy") && (
                        <div>
                            <Text
                                fontSize="xl"
                                fontWeight="extrabold"
                                mb="20px"
                                color={AllColours.russianViolet}
                            >
                                Copy Template Code
                            </Text>
                            {/* <Text
                                fontSize="lg"
                                color={AllColours.mediumSizeText}
                                mb="20px"
                            >
                                Or just copy the entire code to your clipboard
                                now.
                            </Text> */}
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
                                onClick={copyToClipboard}
                            >
                                Copy Clipboard
                            </Button>
                        </div>
                    )
                }
                <textarea
                    ref={textAreaRef}
                    value={emailBody}
                    style={{ opacity: 0 }}
                />
            </div>
        </div>
    );
};

export default CopyToClipboard;
