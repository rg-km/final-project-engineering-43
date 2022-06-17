import {
  Box,
  Button,
  Flex,
  Link,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Footer from './Footer';
import Header from './Header';

export default function teacher() {
  return (
    <>
      <Header />
      <Text ml="40px" mt="90px" fontSize="24px">
        Teacher Dashboard
      </Text>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        m={0}
        pl={10}
        pr={10}
        pt={5}
        pb={5}
        width="100%"
        height="100px"
      >
        <Flex justifyContent="flex-start" alignItems="center">
          <Link ml="16px" fontWeight="medium" fontSize="md" mr={5}>
            Materi
          </Link>
          <Link ml="16px" fontWeight="medium" fontSize="md" mr={5}>
            Perubahan Materi
          </Link>
        </Flex>
        <Flex justifyContent="flex-start" alignItems="center">
          <Button
            width={'auto'}
            height={42}
            color="#C2DED1"
            ml="16px"
            bgColor="#36435A"
            colorScheme="teal"
            borderRadius={6}
          >
            Tambah Profesi
          </Button>
          <Button
            width={'auto'}
            height={42}
            color="#C2DED1"
            ml="16px"
            bgColor="#36435A"
            colorScheme="teal"
            borderRadius={6}
          >
            Tambah Materi
          </Button>
        </Flex>
      </Box>
      <TableContainer>
        <Table variant="simple" height="100px" mb={90}>
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Tittle</Th>
              <Th>Profesi</Th>
              <Th>Status</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {TableItem.map((tableItem) => (
              <Tr>
                <Td>{tableItem.no}</Td>
                <Td>{tableItem.tittle}</Td>
                <Td>{tableItem.profesi}</Td>
                <Td>{tableItem.status}</Td>
                <Td>{tableItem.action}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>

      <Footer />
    </>
  );
}

const TableItem = [
  {
    no: 1,
    tittle: 'Kompetensi Kepribadian',
    profesi: 'Guru',
    status: 'Draft',
    action: (
      <Flex>
        <Button mr={10}>Edit</Button>
        <Button>Delete</Button>
      </Flex>
    ),
  },
  {
    no: 2,
    tittle: 'Kompetensi Profesional',
    profesi: 'Guru',
    status: 'Draft',
    action: (
      <Flex>
        <Button mr={10}>Edit</Button>
        <Button>Delete</Button>
      </Flex>
    ),
  },
  {
    no: 3,
    tittle: 'Kompetensi pedagogik',
    profesi: 'Guru',
    status: 'Draft',
    action: (
      <Flex>
        <Button mr={10}>Edit</Button>
        <Button>Delete</Button>
      </Flex>
    ),
  },
  {
    no: 4,
    tittle: 'Kompetensi Sosial',
    profesi: 'Guru',
    status: 'Draft',
    action: (
      <Flex>
        <Button mr={10}>Edit</Button>
        <Button>Delete</Button>
      </Flex>
    ),
  },
];
