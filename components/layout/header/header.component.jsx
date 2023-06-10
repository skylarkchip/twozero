import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";

const Header = () => {
  const onNavigateSectionHandler = (id) => {
    const target = document.querySelector(id);
    target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Container maxW="7xl" py="8">
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Link href="/">
            <Text
              color="primary"
              fontFamily="primary"
              fontSize="4xl"
              fontWeight="extrabold"
              textTransform="lowercase"
              textDecoration="underline"
              letterSpacing="tighter"
              textDecorationThickness="4px"
            >
              TwoZero.
            </Text>
          </Link>
        </Box>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: "unset", md: "8" }}
          alignItems="center"
          justifyContent="center"
        >
          <HStack spacing="8" display={{ base: "none", md: "flex" }}>
            <Button
              variant="link"
              color="primary"
              fontFamily="primary"
              fontSize="lg"
              fontWeight="semibold"
              onClick={() => {
                onNavigateSectionHandler("#services");
              }}
            >
              Services
            </Button>
            <Button
              variant="link"
              color="primary"
              fontFamily="primary"
              fontSize="lg"
              fontWeight="semibold"
              onClick={() => {
                onNavigateSectionHandler("#expertise");
              }}
            >
              Expertise
            </Button>
          </HStack>
          <Button
            variant="outline"
            borderColor="primary"
            borderRadius="3xl"
            borderWidth="2px"
            color="primary"
            fontFamily="primary"
            fontWeight="semibold"
            fontSize="lg"
            letterSpacing="wide"
            overflow="hidden"
            size={{ base: "sm", md: "md" }}
            _hover={{ bgColor: "gray.50" }}
            mt={{ base: "0", md: "unset" }}
            onClick={() => {
              onNavigateSectionHandler("#contact");
            }}
          >
            Let&rsquo;s Collab
          </Button>
        </Stack>
      </Flex>
    </Container>
  );
};

export default Header;
