import React from "react";
import Footer from "./../component/Footer";

import {
  Box,
  Text,
  Flex,
  Link,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

export default function detailRoadmap() {
  return (
    <Box>
      <Box
        backgroundColor="#ffffff"
        display="block"
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        width="100%"
        height="710px"
      >
        <Text ml="168px" mt="70px" fontSize="24px" fontWeight="bold">
          Dokter
        </Text>
        <Flex ml="168px" mt="27px">
          <Text fontSize="20px">
            <Link>Course Lainnya</Link>
          </Text>
        </Flex>
        <TableContainer width="75%" ml="160px" mt="20px">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>no</Th>
                <Th>materi</Th>
                <Th>status</Th>
                <Th>action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {itemTable.map((item) => {
                return (
                  <Tr>
                    <Td>{item.no}</Td>
                    <Td>{item.materi}</Td>
                    <Td>{item.status}</Td>
                    <Td>
                      <Link color={"teal.300"}>{item.action}</Link>
                    </Td>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Footer />
    </Box>
  );
}

const itemTable = [
  {
    no: 1,
    materi: "Pengenalan Profesi Dokter",
    status: "published",
    action: "Detail",
  },
  {
    no: 2,
    materi: "Etika Medis",
    status: "published",
    action: "Detail",
  },
  {
    no: 3,
    materi: "Genetika",
    status: "coming soon",
    action: "Detail",
  },
];