import React, { useEffect, useState } from "react";
import CopyToClipboard from "./CopyToClipboard";
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

const EmailTemplater = ({ allPosts, websiteURL }) => {
    // if the excerpt has no length / undefined, ...>0

    // Starting Default Image Store
    const defaultThumbnail =
        "https://raw.githubusercontent.com/Calvin087/email-builder/master/default-thumbnail.png";

    const defaultHeroImg =
        "https://raw.githubusercontent.com/Calvin087/email-builder/master/default-hero-image-small.jpg";

    const logo =
        "https://raw.githubusercontent.com/Calvin087/email-builder/master/email-header.png";

    // Starting Hero Post
    const heroPost = allPosts[0];
    const heroTitle = heroPost.title.rendered;
    const heroExcerpt = heroPost.excerpt.rendered;
    const heroImage = heroPost._embedded["wp:featuredmedia"]
        ? heroPost._embedded["wp:featuredmedia"][0].media_details.sizes.full
              .source_url
        : defaultHeroImg;

    // Starting Other Posts
    const otherPosts = allPosts.slice(1, 5);
    console.log(heroExcerpt);

    // Starting Post Inserts
    const smallPostInsert = otherPosts
        .map(
            (otherPost) =>
                `<tr key=${otherPost.id}>
                <td
                    align="left"
                    valign="top"
                    style="
                border-collapse: collapse;
                border-spacing: 0;
                padding-top: 30px;
                padding-right: 20px;

            "
                >
                    <a
                        target="_blank"
                        style="text-decoration: none"
                        href="${otherPost.link}">
                    <img
                        border="0"
                        vspace="0"
                        hspace="0"
                        style="
                    padding: 0;
                    margin: 0;
                    outline: none;
                    text-decoration: none;
                    -ms-interpolation-mode: bicubic;
                    border: none;
                    display: block;
                    color: #000000;
                "
                        src=${
                            otherPost._embedded["wp:featuredmedia"]
                                ? otherPost._embedded["wp:featuredmedia"][0]
                                      .media_details.sizes.thumbnail.source_url
                                : defaultThumbnail
                        }
                        alt="H"
                        title="${otherPost.title.rendered}"
                        width="50"
                        height="50"
                    /></a>
                </td>

                <td
                    align="left"
                    valign="top"
                    style="
                font-size: 16px;
                font-weight: 400;
                line-height: 160%;
                border-collapse: collapse;
                border-spacing: 0;
                margin: 0;
                padding: 0;
                padding-top: 25px;
                color: #000000;
                font-size:14px;
                font-family: sans-serif;
            "
                    class="paragraph"
                >
                <a
                        target="_blank"
                        href="${otherPost.link}"
                        style="text-decoration: none;
                        font-size: 16px;
                        font-weight: 400;
                        line-height: 150%;
                        color: #333333;">

                <b style="color: #333333; font-size:16px;">
                    ${otherPost.title.rendered.slice(0, 51)}...</b>

                    <br />
                    ${otherPost.excerpt.rendered
                        .replace("<p>", "")
                        .replace("</p>", "")
                        .slice(0, 104)}...
    </a>
                </td>
            </tr>`
        )
        .join("");

    const mainEmailBody = `<html xmlns="http://www.w3.org/1999/xhtml">
        <head>
            <meta http-equiv="content-type" content="text/html; charset=utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0;"
            />
            <meta name="format-detection" content="telephone=no" />

            <style>
                /* Reset styles */
                body {
                    margin: 0;
                    padding: 0;
                    min-width: 100%;
                    width: 100% !important;
                    height: 100% !important;
                }
                body,
                table,
                td,
                div,
                p,
                a {
                    -webkit-font-smoothing: antialiased;
                    text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                    -webkit-text-size-adjust: 100%;
                    line-height: 100%;
                }
                table,
                td {
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                    border-collapse: collapse !important;
                    border-spacing: 0;
                }
                img {
                    border: 0;
                    line-height: 100%;
                    outline: none;
                    text-decoration: none;
                    -ms-interpolation-mode: bicubic;
                }
                #outlook a {
                    padding: 0;
                }
                .ReadMsgBody {
                    width: 100%;
                }
                .ExternalClass {
                    width: 100%;
                }
                .ExternalClass,
                .ExternalClass p,
                .ExternalClass span,
                .ExternalClass font,
                .ExternalClass td,
                .ExternalClass div {
                    line-height: 100%;
                }

                /* Rounded corners for advanced mail clients only */
                @media all and (min-width: 560px) {
                    .container {
                        border-radius: 8px;
                        -webkit-border-radius: 8px;
                        -moz-border-radius: 8px;
                        -khtml-border-radius: 8px;
                    }
                }

                /* Set color for auto links (addresses, dates, etc.) */
                a,
                a:hover {
                    color: #127db3;
                }
                .footer a,
                .footer a:hover {
                    color: #999999;
                }
            </style>

            <title>${heroTitle}</title>
        </head>

        <body
            topmargin="0"
            rightmargin="0"
            bottommargin="0"
            leftmargin="0"
            marginwidth="0"
            marginheight="0"
            width="100%"
            style="
                border-collapse: collapse;
                border-spacing: 0;
                margin: 0;
                padding: 0;
                width: 100%;
                height: 100%;
                -webkit-font-smoothing: antialiased;
                text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
                -webkit-text-size-adjust: 100%;
                line-height: 100%;
                background-color: #f1f1f1;
                color: #000000;
            "
            bgcolor="#F0F0F0"
            text="#000000"
        >
            <table
                width="100%"
                align="center"
                border="0"
                cellpadding="0"
                cellspacing="0"
                style="
                    border-collapse: collapse;
                    border-spacing: 0;
                    margin: 0;
                    padding: 0;
                    width: 100%;
                "
                class="background"
            >
                <tr>
                    <td
                        align="center"
                        valign="top"
                        style="
                            border-collapse: collapse;
                            border-spacing: 0;
                            margin: 0;
                            padding: 0;
                        "
                        bgcolor="#f1f1f1"
                    >
                        <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            align="center"
                            width="560"
                            style="
                                border-collapse: collapse;
                                border-spacing: 0;
                                padding: 0;
                                width: inherit;
                                max-width: 560px;
                            "
                            class="wrapper"
                        >
                            <tr>
                                <td
                                    align="center"
                                    valign="top"
                                    style="
                                        border-collapse: collapse;
                                        border-spacing: 0;
                                        margin: 0;
                                        padding: 0;
                                        padding-left: 6.25%;
                                        padding-right: 6.25%;
                                        width: 87.5%;
                                        padding-top: 20px;
                                        padding-bottom: 20px;
                                    "
                                >
                                    <div
                                        style="
                                            display: none;
                                            visibility: hidden;
                                            overflow: hidden;
                                            opacity: 0;
                                            font-size: 1px;
                                            line-height: 1px;
                                            height: 0;
                                            max-height: 0;
                                            max-width: 0;
                                            color: #f0f0f0;
                                        "
                                        class="preheader"
                                    >
                                        ${
                                            heroPost.excerpt.rendered
                                                .replace("<p>", "")
                                                .replace("</p>", "")
                                                .slice(0, 140) + "..."
                                        }
                                    </div>

                                    <a
                                        target="_blank"
                                        style="text-decoration: none"
                                        href="${websiteURL}"
                                        ><img
                                            border="0"
                                            vspace="0"
                                            hspace="0"
                                            src=${logo}
                                            width="60"
                                            height="60"
                                            alt="Logo"
                                            title="Logo"
                                            style="
                                                color: #000000;
                                                font-size: 10px;
                                                margin: 0;
                                                padding: 0;
                                                outline: none;
                                                text-decoration: none;
                                                -ms-interpolation-mode: bicubic;
                                                border: none;
                                                display: block;
                                            "
                                    /></a>
                                </td>
                            </tr>
                        </table>

                        <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            align="center"
                            bgcolor="#FFFFFF"
                            width="560"
                            style="
                                border-collapse: collapse;
                                border-spacing: 0;
                                padding: 0;
                                width: inherit;
                                max-width: 560px;
                            "
                            class="container"
                        >
                            <tr>
                                <td
                                    align="center"
                                    valign="top"
                                    style="
                                        border-collapse: collapse;
                                        border-spacing: 0;
                                        margin: 0;
                                        padding: 0;
                                        padding-left: 8.25%;
                                        padding-right: 8.25%;
                                        width: 87.5%;
                                        font-size: 24px;
                                        font-weight: bold;
                                        line-height: 130%;
                                        padding-top: 25px;
                                        color: #333333;
                                        font-family: sans-serif;
                                    "
                                    class="header"
                                >
                                    ${heroTitle}
                                </td>
                            </tr>

                            <tr>
                                <td
                                    align="center"
                                    valign="top"
                                    style="
                                        border-collapse: collapse;
                                        border-spacing: 0;
                                        margin: 0;
                                        padding: 0;
                                        padding-top: 20px;
                                    "
                                    class="hero"
                                >
                                    <a
                                        target="_blank"
                                        style="text-decoration: none"
                                        href="${heroPost.link}"
                                        ><img border="0" vspace="0" hspace="0"
                                        src="${
                                            heroPost._embedded[
                                                "wp:featuredmedia"
                                            ]
                                                ? heroImage
                                                : defaultHeroImg
                                        }" alt="Please enable images to view this
                                        content" title="${heroTitle}" width="560"
                                        style=" width: 100%; max-width: 560px;
                                        color: #000000; font-size: 13px; margin: 0;
                                        padding: 0; outline: none; text-decoration:
                                        none; -ms-interpolation-mode: bicubic;
                                        border: none; display: block; " /></a
                                    >
                                </td>
                            </tr>

                            <tr>
                                <td
                                    align="center"
                                    valign="top"
                                    style="
                                        border-collapse: collapse;
                                        border-spacing: 0;
                                        margin: 0;
                                        padding: 0;
                                        padding-left: 6.25%;
                                        padding-right: 6.25%;
                                        width: 87.5%;
                                        font-size: 17px;
                                        font-weight: 400;
                                        line-height: 160%;
                                        padding-top: 25px;
                                        color: #000000;
                                        font-family: sans-serif;
                                    "
                                    class="paragraph"
                                >
                                    ${
                                        heroPost.excerpt.rendered
                                            .replace("<p>", "")
                                            .replace("</p>", "")
                                            .slice(0, 140) + "..."
                                    }
                                </td>
                            </tr>

                            <tr>
                                <td
                                    align="center"
                                    valign="top"
                                    style="
                                        border-collapse: collapse;
                                        border-spacing: 0;
                                        margin: 0;
                                        padding: 0;
                                        padding-left: 6.25%;
                                        padding-right: 6.25%;
                                        width: 87.5%;
                                        padding-top: 25px;
                                        padding-bottom: 5px;
                                    "
                                    class="button"
                                >
                                    <a
                                        href="${heroPost.link}"
                                        target="_blank"
                                        style="text-decoration: underline"
                                    >
                                        <table
                                            border="0"
                                            cellpadding="0"
                                            cellspacing="0"
                                            align="center"
                                            style="
                                                max-width: 240px;
                                                min-width: 120px;
                                                border-collapse: collapse;
                                                border-spacing: 0;
                                                padding: 0;
                                            "
                                        >
                                            <tr>
                                                <td
                                                    align="center"
                                                    valign="middle"
                                                    style="
                                                        padding: 12px 24px;
                                                        margin: 0;
                                                        text-decoration: underline;
                                                        border-collapse: collapse;
                                                        border-spacing: 0;
                                                        border-radius: 4px;
                                                        -webkit-border-radius: 4px;
                                                        -moz-border-radius: 4px;
                                                        -khtml-border-radius: 4px;
                                                    "
                                                    bgcolor="#E9703E"
                                                >
                                                    <a
                                                        target="_blank"
                                                        style="
                                                            text-decoration: underline;
                                                            color: #ffffff;
                                                            font-family: sans-serif;
                                                            font-size: 17px;
                                                            font-weight: 400;
                                                            line-height: 120%;
                                                        "
                                                        href="${heroPost.link}"
                                                    >
                                                        Read The Full Post
                                                    </a>
                                                </td>
                                            </tr>
                                        </table></a
                                    >
                                </td>
                            </tr>

                            <tr>
                                <td
                                    align="center"
                                    valign="top"
                                    style="
                                        border-collapse: collapse;
                                        border-spacing: 0;
                                        margin: 0;
                                        padding: 0;
                                        padding-left: 6.25%;
                                        padding-right: 6.25%;
                                        width: 87.5%;
                                        padding-top: 25px;
                                    "
                                    class="line"
                                >
                                    <hr
                                        color="#E0E0E0"
                                        align="center"
                                        width="100%"
                                        size="1"
                                        noshade
                                        style="margin: 0; padding: 0"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td
                                    align="center"
                                    valign="top"
                                    style="
                                        border-collapse: collapse;
                                        border-spacing: 0;
                                        margin: 0;
                                        padding: 0;
                                        padding-left: 6.25%;
                                        padding-right: 6.25%;

                                    "
                                    class="list-item"
                                >
                                    <table
                                        align="center"
                                        border="0"
                                        cellspacing="0"
                                        cellpadding="0"
                                        style="
                                            width: inherit;
                                            margin: 0;
                                            padding: 0;
                                            border-collapse: collapse;
                                            border-spacing: 0;
                                        "
                                    >
                ${smallPostInsert}
            </table>
                                </td>
                            </tr>

                            <tr>
                                <td
                                    align="center"
                                    valign="top"
                                    style="
                                        border-collapse: collapse;
                                        border-spacing: 0;
                                        margin: 0;
                                        padding: 0;
                                        padding-left: 6.25%;
                                        padding-right: 6.25%;
                                    "
                                    class="list-item"
                                >
                                    <table
                                        align="center"
                                        border="0"
                                        cellspacing="0"
                                        cellpadding="0"
                                        style="
                                            width: inherit;
                                            margin: 0;
                                            padding: 0;
                                            border-collapse: collapse;
                                            border-spacing: 0;
                                        "
                                    ></table>
                                </td>
                            </tr>

                            <tr>
                                <td
                                    align="center"
                                    valign="top"
                                    style="
                                        border-collapse: collapse;
                                        border-spacing: 0;
                                        margin: 0;
                                        padding: 0;
                                        padding-left: 6.25%;
                                        padding-right: 6.25%;
                                        width: 87.5%;
                                        padding-top: 25px;
                                    "
                                    class="line"
                                >
                                    <hr
                                        color="#E0E0E0"
                                        align="center"
                                        width="100%"
                                        size="1"
                                        noshade
                                        style="margin: 0; padding: 0"
                                    />
                                </td>
                            </tr>

                            <tr>
                                <td
                                    align="center"
                                    valign="top"
                                    style="
                                        border-collapse: collapse;
                                        border-spacing: 0;
                                        margin: 0;
                                        padding: 0;
                                        padding-left: 6.25%;
                                        padding-right: 6.25%;
                                        width: 87.5%;
                                        font-size: 17px;
                                        font-weight: 400;
                                        line-height: 160%;
                                        padding-top: 20px;
                                        padding-bottom: 25px;
                                        color: #000000;
                                        font-family: sans-serif;
                                    "
                                    class="paragraph"
                                >
                                    Have a&nbsp;question?
                                    <a
                                        href="mailto:email@yourbusiness.com"
                                        target="_blank"
                                        style="
                                            color: #127db3;
                                            font-family: sans-serif;
                                            font-size: 17px;
                                            font-weight: 400;
                                            line-height: 160%;
                                        "
                                        >email@yourbusiness.com</a
                                    >
                                </td>
                            </tr>
                        </table>

                        <table
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            align="center"
                            width="560"
                            style="
                                border-collapse: collapse;
                                border-spacing: 0;
                                padding: 0;
                                width: inherit;
                                max-width: 560px;
                            "
                            class="wrapper"
                        >
                            <tr>
                                <td
                                    align="center"
                                    valign="top"
                                    style="
                                        border-collapse: collapse;
                                        border-spacing: 0;
                                        margin: 0;
                                        padding: 0;
                                        padding-left: 6.25%;
                                        padding-right: 6.25%;
                                        width: 87.5%;
                                        padding-top: 25px;
                                    "
                                    class="social-icons"
                                >
                                    <table
                                        width="256"
                                        border="0"
                                        cellpadding="0"
                                        cellspacing="0"
                                        align="center"
                                        style="
                                            border-collapse: collapse;
                                            border-spacing: 0;
                                            padding: 0;
                                        "
                                    >
                                        <tr>
                                            <td
                                                align="center"
                                                valign="middle"
                                                style="
                                                    margin: 0;
                                                    padding: 0;
                                                    padding-left: 10px;
                                                    padding-right: 10px;
                                                    border-collapse: collapse;
                                                    border-spacing: 0;
                                                "
                                            >
                                                <a
                                                    target="_blank"
                                                    href="${websiteURL}"
                                                    style="text-decoration: none"
                                                    ><img
                                                        border="0"
                                                        vspace="0"
                                                        hspace="0"
                                                        style="
                                                            padding: 0;
                                                            margin: 0;
                                                            outline: none;
                                                            text-decoration: none;
                                                            -ms-interpolation-mode: bicubic;
                                                            border: none;
                                                            display: inline-block;
                                                            color: #000000;
                                                        "
                                                        alt="F"
                                                        title="Facebook"
                                                        width="44"
                                                        height="44"
                                                        src="https://raw.githubusercontent.com/Calvin087/email-builder/master/facbeook-footer.png"
                                                /></a>
                                            </td>

                                            <td
                                                align="center"
                                                valign="middle"
                                                style="
                                                    margin: 0;
                                                    padding: 0;
                                                    padding-left: 10px;
                                                    padding-right: 10px;
                                                    border-collapse: collapse;
                                                    border-spacing: 0;
                                                "
                                            >
                                                <a
                                                    target="_blank"
                                                    href="${websiteURL}"
                                                    style="text-decoration: none"
                                                    ><img
                                                        border="0"
                                                        vspace="0"
                                                        hspace="0"
                                                        style="
                                                            padding: 0;
                                                            margin: 0;
                                                            outline: none;
                                                            text-decoration: none;
                                                            -ms-interpolation-mode: bicubic;
                                                            border: none;
                                                            display: inline-block;
                                                            color: #000000;
                                                        "
                                                        alt="T"
                                                        title="Twitter"
                                                        width="44"
                                                        height="44"
                                                        src="https://raw.githubusercontent.com/Calvin087/email-builder/master/twitter-footer.png"
                                                /></a>
                                            </td>

                                            <td
                                                align="center"
                                                valign="middle"
                                                style="
                                                    margin: 0;
                                                    padding: 0;
                                                    padding-left: 10px;
                                                    padding-right: 10px;
                                                    border-collapse: collapse;
                                                    border-spacing: 0;
                                                "
                                            >
                                                <a
                                                    target="_blank"
                                                    href="${websiteURL}"
                                                    style="text-decoration: none"
                                                    ><img
                                                        border="0"
                                                        vspace="0"
                                                        hspace="0"
                                                        style="
                                                            padding: 0;
                                                            margin: 0;
                                                            outline: none;
                                                            text-decoration: none;
                                                            -ms-interpolation-mode: bicubic;
                                                            border: none;
                                                            display: inline-block;
                                                            color: #000000;
                                                        "
                                                        alt="G"
                                                        title="Instagram"
                                                        width="44"
                                                        height="44"
                                                        src="https://raw.githubusercontent.com/Calvin087/email-builder/master/instagram-footer.png"
                                                /></a>
                                            </td>

                                            <td
                                                align="center"
                                                valign="middle"
                                                style="
                                                    margin: 0;
                                                    padding: 0;
                                                    padding-left: 10px;
                                                    padding-right: 10px;
                                                    border-collapse: collapse;
                                                    border-spacing: 0;
                                                "
                                            >
                                                <a
                                                    target="_blank"
                                                    href="${websiteURL}"
                                                    style="text-decoration: none"
                                                    ><img
                                                        border="0"
                                                        vspace="0"
                                                        hspace="0"
                                                        style="
                                                            padding: 0;
                                                            margin: 0;
                                                            outline: none;
                                                            text-decoration: none;
                                                            -ms-interpolation-mode: bicubic;
                                                            border: none;
                                                            display: inline-block;
                                                            color: #000000;
                                                        "
                                                        alt="I"
                                                        title="Linkedin"
                                                        width="44"
                                                        height="44"
                                                        src="https://raw.githubusercontent.com/Calvin087/email-builder/master/linkedin-footer.png"
                                                /></a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>

                            <tr>
                                <td
                                    align="center"
                                    valign="top"
                                    style="
                                        border-collapse: collapse;
                                        border-spacing: 0;
                                        margin: 0;
                                        padding: 0;
                                        padding-left: 6.25%;
                                        padding-right: 6.25%;
                                        width: 87.5%;
                                        font-size: 13px;
                                        font-weight: 400;
                                        line-height: 150%;
                                        padding-top: 20px;
                                        padding-bottom: 20px;
                                        color: #999999;
                                        font-family: sans-serif;
                                    "
                                    class="footer"
                                >
                                    You're being sent this email because you're awesome.<br>
                                    <a
                                        href="${websiteURL}"
                                        target="_blank"
                                        style="
                                            text-decoration: underline;
                                            color: #999999;
                                            font-family: sans-serif;
                                            font-size: 13px;
                                            font-weight: 400;
                                            line-height: 150%;
                                        "
                                        >Change your subscription here</a
                                    >

                                    <img
                                        width="1"
                                        height="1"
                                        border="0"
                                        vspace="0"
                                        hspace="0"
                                        style="
                                            margin: 0;
                                            padding: 0;
                                            outline: none;
                                            text-decoration: none;
                                            -ms-interpolation-mode: bicubic;
                                            border: none;
                                            display: block;
                                        "
                                        src="https://raw.githubusercontent.com/Calvin087/email-builder/master/tracking-placeholder.png"
                                    />
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </body>
    </html>`;

    return (
        <div>
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
                        <CopyToClipboard emailBody={mainEmailBody} />

                        <Text fontSize="lg">Add Your Logo Here</Text>
                        <Input />
                    </Flex>
                </Box>
                <Box width="100%">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: mainEmailBody,
                        }}
                    />
                </Box>
            </Flex>
        </div>
    );
};

export default EmailTemplater;

{
    /* <iframe
                        title="This is a unique title"
                        src={
                            "data:text/html," +
                            encodeURIComponent(mainEmailBody)
                        }
                        style={{
                            width: "100%",
                            height: "100vh",
                            overflow: "auto",
                            borderWidth: "0",
                        }}
                    /> */
}
