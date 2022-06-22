import { Box, Text, Flex, Button } from "@chakra-ui/react";
import Footer from "../component/Footer";
import DiffViewer from "../component/DiffViewer";

export default function detailMaintener() {
  return (
    <Box>
      <Box
        width="100%"
        height="100vh"
        display="block"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Flex width="100%" flexDirection="column" alignItems="center">
          <Text p="20px" mt="50px" fontSize="24" fontWeight="bold">
            Perubahan Materi
          </Text>
          <Box width="75%" mt="50px">
            <DiffViewer />
          </Box>
        </Flex>
        <Flex
          justifyContent="flex-end"
          alignItems="center"
          p="20px"
          mb={100}
          mt={50}
        >
          <Button
            variant="solid"
            size="md"
            mr="20px"
            color="white"
            colorScheme="pink"
            backgroundColor="red"
            width="90px"
            height={35}
          >
            Reject
          </Button>
          <Button
            variant="solid"
            size="md"
            mr="170px"
            color="white"
            colorScheme="teal"
            backgroundColor="#37E2D5"
            height={35}
            width={90}
          >
            Accept
          </Button>
        </Flex>
      </Box>
      <Footer />
    </Box>
  );
}