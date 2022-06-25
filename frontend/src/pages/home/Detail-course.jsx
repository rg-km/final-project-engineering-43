import React from 'react';
import Footer from '../../component/Footer';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Grid,
  GridItem,
  Heading,
  Link,
  VStack,
  Container,
} from '@chakra-ui/react';

/**
 * Halaman detail course
 * Halaman ini bisa di akses pengguna biasa dari halaman courses
 */

export default function DetailCourse() {
  return (
    <>
      <Container maxW="container.xl" mb={24} mt={8}>
        <Heading as="h1" mb="8">
          Dokter
        </Heading>
        <Grid
          gridTemplateColumns={{ base: '1fr', md: '350px 1fr' }}
          gap={{ base: 4, md: 8 }}
        >
          <GridItem w="100%">
            <Heading as="h2" fontSize="2xl" fontWeight="medium">
              Table content
            </Heading>
            <VStack
              alignItems="flex-start"
              my="4"
              p="8"
              bg="gray.50"
              borderRadius={4}
            >
              <Link>Anatomi tubuh</Link>
              <Link>Bio kimia</Link>
              <Link>Biologi sel dan molekuler</Link>
            </VStack>
          </GridItem>
          <GridItem
            w="100%"
            h="900"
            borderWidth={2}
            borderColor="gray.100"
            p={8}
            borderRadius={4}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
            voluptates adipisci maxime animi consectetur iusto in quas dolores
            pariatur totam enim molestias reprehenderit deserunt sit delectus
            vel, officia explicabo perferendis?
          </GridItem>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
