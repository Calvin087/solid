import React from "react";
import FeedbackForm from "./FeedbackForm";
import AllColours from "./Colours";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Text,
} from "@chakra-ui/react";

function ModalFeedbackForm() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
            <Button
                onClick={onOpen}
                size="sm"
                backgroundColor={AllColours.russianViolet}
                color="white"
                _hover={{
                    bg: AllColours.maximumPurple,
                }}
                _active={{
                    bg: AllColours.maximumPurple,
                    transform: "scale(0.95)",
                    color: "white",
                }}
            >
                Feedback / Bugs 👋
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} size={"2xl"}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader
                        fontSize={"2xl"}
                        color={AllColours.russianViolet}
                    >
                        Get in touch
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text color={AllColours.mediumSizeText} pb={"20px"}>
                            If you'd like to see more functionality or if you've
                            found a bug, fill out the form below. We'd love to
                            hear from you and see what cool things you came up
                            with.
                        </Text>
                        <Text
                            color={AllColours.mediumSizeText}
                            fontWeight={"bold"}
                        >
                            Four optional questions.
                        </Text>
                        <Text color={AllColours.mediumSizeText} mb={"30"}>
                            If you choose to leave your email, we'd love to have
                            a chat.
                        </Text>
                        <FeedbackForm />
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            backgroundColor={AllColours.russianViolet}
                            color="white"
                            _hover={{
                                bg: AllColours.maximumPurple,
                            }}
                            _active={{
                                bg: AllColours.maximumPurple,
                                transform: "scale(0.95)",
                                color: "white",
                            }}
                            onClick={onClose}
                        >
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default ModalFeedbackForm;
