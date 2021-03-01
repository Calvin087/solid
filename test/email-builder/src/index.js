import React from "react";
import ReactDOM from "react-dom";
import DataFetcher from "./DataFetcher";
import { ChakraProvider } from "@chakra-ui/react";
import FeedbackForm from "./FeedbackForm";

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <DataFetcher />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
