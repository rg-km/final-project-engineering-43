import React from 'react';
import Footer from '../../component/Footer';

import {
  Button,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Container,
  Heading,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
} from '@chakra-ui/react';
/**
 * Halaman maintener
 * Halaman ini diguanakan untuk mengelola setiap perubahan yang ada
 */

export default function Maintener() {
  return (
    <>
      <Container maxW="container.xl" my={16} minH="100vh">
        <Heading as="h1" fontSize="24px" mb="16px">
          Maintener Dashboard
        </Heading>
        <Tabs>
          <TabList>
            <Tab>Perubahan materi</Tab>
            <Tab>Manage user</Tab>
          </TabList>

          <TabPanels mt={8}>
            <TabPanel p={0}>
              <TableContainer>
                <Table variant="striped">
                  <Thead>
                    <Th>No</Th>
                    <Th>Materi</Th>
                    <Th>Action</Th>
                  </Thead>
                  <Tbody>
                    {itemTable.map((item, i) => (
                      <Tr>
                        <Td>{i + 1}</Td>
                        <Td>{item.materi}</Td>
                        <Td>
                          <Button mr={10} bgColor={'white'} color={'teal.300'}>
                            Detail
                          </Button>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel p={0}>
              <TableContainer>
                <Table variant="striped">
                  <Thead>
                    <Th>No</Th>
                    <Th>Username</Th>
                    <Th>Role</Th>
                    <Th>Action</Th>
                  </Thead>
                  <Tbody>
                    {users.map((user, i) => (
                      <Tr>
                        <Td>{i + 1}</Td>
                        <Td>{user.name}</Td>
                        <Td>{user.role}</Td>
                        <Td>
                          <Flex>
                            <Button
                              mr={10}
                              bgColor={'white'}
                              color={'teal.300'}
                            >
                              Edit
                            </Button>
                            <Button bgColor={'white'} color={'red'}>
                              Delete
                            </Button>
                          </Flex>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
      <Footer />
    </>
  );
}

const users = [
  {
    id: 1,
    name: 'John',
    role: 'user',
  },
  {
    id: 2,
    name: 'Lucas',
    role: 'teacher',
  },
];

const itemTable = [
  {
    no: 1,
    materi: 'Persamaan 2 variable',
    action: 'Detail',
  },
  {
    no: 2,
    materi: 'Kerangka Manusia',
    action: 'Detail',
  },
];
