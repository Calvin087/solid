import React from "react";
import ReactDOM from "react-dom";
import DataFetcher from "./DataFetcher";
import { ChakraProvider } from "@chakra-ui/react";
import FeedbackForm from "./FeedbackForm";
import Footer from "./Footer";
import MobileWarningBanner from "./MobileWarningBanner";

ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <MobileWarningBanner />
            <DataFetcher />
            <Footer />
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
