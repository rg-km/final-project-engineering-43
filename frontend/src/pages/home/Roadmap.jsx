import React from 'react';
import Footer from '../../component/Footer';
import { SearchIcon } from '@chakra-ui/icons';
import { Box, Text, Input, Container, Heading } from '@chakra-ui/react';
import Card from '../../component/Card-course';

/**
 * Halaman ini digunakan untuk menampilkan roadmap yg ada
 *
 */

export default function Roadmap() {
  return (
    <>
      <Container maxW="container.xl" my={16}>
        <Box mb={16}>
          <Heading as="h1" mb="4">
            Roadmap
          </Heading>
          <Input placeholder="Kamu mau jadi apa ?" />
        </Box>
        <Card />
      </Container>
      <Footer />
    </>
  );
}
