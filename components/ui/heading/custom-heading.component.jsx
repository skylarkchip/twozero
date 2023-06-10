import React from "react";
import { Heading } from "@chakra-ui/react";
import { stripHtml } from "@/utils/stripHtml";
import {
  getFontSizeForHeadingBase,
  getFontSizeForHeadingLg,
  getFontSizeForHeadingMd,
} from "@/utils/font";

const CustomHeading = ({ level, content }) => {
  return (
    <Heading
      as={`h${level}`}
      fontFamily="primary"
      fontSize={{
        base: getFontSizeForHeadingBase(level),
        md: getFontSizeForHeadingMd(level),
        lg: getFontSizeForHeadingLg(level),
      }}
      fontWeight="600"
    >
      {stripHtml(content)}
    </Heading>
  );
};

export default CustomHeading;
