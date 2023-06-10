import React from "react";
import { Box, Flex, Image, SimpleGrid } from "@chakra-ui/react";

const Solutions = ({ content }) => {
  // console.log(content);
  return (
    <SimpleGrid
      columns={{ base: "2", md: "3", lg: "4" }}
      gap="10"
      px={{ base: "2", md: "6", lg: "10" }}
      pt="4"
    >
      {content.map((c) => (
        <Flex key={c.id} w="full" h="full" justifyContent="center">
          <Box
            key={c.id}
            w="150px"
            h="150px"
            p="8"
            bgColor="white"
            borderRadius="md"
          >
            <Image
              src={c.image.url}
              alt={c.image.alt}
              w="full"
              h="full"
              objectFit="contain"
              bgColor="transparent"
            />
          </Box>
        </Flex>
      ))}
    </SimpleGrid>
  );
};

export default Solutions;
