import React from "react";
import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

const Footer = () => {
  return (
    <Flex
      bgColor="primary"
      w="full"
      px={{ base: "unset", md: "8" }}
      py="12"
      alignItems="center"
    >
      <Container maxW="7xl">
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          alignItems={{ base: "unset", md: "center" }}
          rowGap={{ base: "6", md: "unset" }}
        >
          <VStack align="left" justifyContent="center" spacing="6" flex="1">
            <Link href="/">
              <Text
                color="white"
                fontFamily="primary"
                fontWeight="extrabold"
                fontSize="4xl"
                letterSpacing="tighter"
                textDecoration="underline"
                textDecorationThickness="4px"
                textTransform="lowercase"
              >
                TwoZero.
              </Text>
            </Link>
            <Text color="white" fontFamily="primary">
              &copy; 2023 TwoZero. All rights reserved.
            </Text>
          </VStack>
          <VStack align="left" justifyContent="center" spacing="6" flex="1">
            <Text color="white" fontFamily="primary">
              Address Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do.
            </Text>
            <Text color="white" fontFamily="primary">
              support@twozerocreatives.com
            </Text>
          </VStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Footer;
