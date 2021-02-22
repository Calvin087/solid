import { Button, useToast } from "@chakra-ui/react";
import React, { useRef, useState } from "react";

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
                            <Button
                                variant="solid"
                                size="md"
                                mb="50px"
                                borderRadius="10px"
                                colorScheme="green"
                                _hover={{ bg: "gray.500" }}
                                _active={{
                                    bg: "gray.700",
                                    transform: "scale(0.95)",
                                }}
                                onClick={copyToClipboard}
                            >
                                Copy Template to Clipboard
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
