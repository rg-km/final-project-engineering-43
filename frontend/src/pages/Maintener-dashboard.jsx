import React from 'react'
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
} from '@chakra-ui/react'

export default function Maintener (){
    return(
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
                <Text ml="168px" mt="70px" fontSize="24px" fontWeight="bold">Admin Dashboard</Text>
                <Flex ml="168px" mt="27px">
                    <Text fontSize="20px">Materi</Text>
                    <Text ml={10} fontSize="20px" as='u'><Link>Perubahan Materi</Link></Text>
                </Flex>
                <TableContainer width="75%" ml="168px" mt="20px">
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>no</Th>
                            <Th>Perubahan</Th>
                            <Th>action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>1</Td>
                            <Td>Persamaan 2 variable</Td>
                            <Td color="#37E2D5"><Link>Detail</Link></Td>
                        </Tr>
                        <Tr>
                            <Td>2</Td>
                            <Td>Klasifikasi virus</Td>
                            <Td color="#37E2D5"><Link>Detail</Link></Td>
                        </Tr>
                        <Tr>
                            <Td>3</Td>
                            <Td>jenis - jenis batuan</Td>
                            <Td color="#37E2D5"><Link>Detail</Link></Td>
                        </Tr>
                        <Tr>
                            <Td>4</Td>
                            <Td>Parasitisme</Td>
                            <Td color="#37E2D5"><Link>Detail</Link></Td>
                        </Tr>
                        <Tr>
                            <Td>5</Td>
                            <Td>Aljabar Linear</Td>
                            <Td color="#37E2D5"><Link>Detail</Link></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            </Box>
            <Footer />
        </Box>
    )
}