import React from 'react';
import Footer from '../../component/Footer';
import { Box,Link,Text, Container, Heading } from '@chakra-ui/react';
import Card from '../../component/Card-career';

/**
 * Halaman ini digunakan untuk menampilkan course career yg ada
 *
 */

export default function Roadmap() {
  return (
    <>
      <Container maxW="container.xl" my={16}>
        <Box mb={16}>
          <Heading as="h1" mb="4">
            Career Path
          </Heading>
          <Text fontSize={20} mt={10}>
            <Link>list roadmap</Link>
            </Text>
        </Box>
        <Card />
      </Container>
      <Footer />
    </>
  );
}
