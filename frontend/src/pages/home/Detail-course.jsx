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
              <Link>Virus</Link>
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
            <Heading mb="8">Virus</Heading>
            Menurut keadaan fisiknya benda dibedakan menjadi dua macam yaitu
            benda mati (abiotik) dan benda hidup (biotik). Biotik dapat
            melakukan metabolisme di antaranya sintesis, nutrisi, ekskresi,
            reproduksi, respon terhadap rangsang, regulasi. Adapun abiotik tidak
            dapat melakukan metabolisme. Virus oleh para ilmuwan dikatakan
            sebagai benda mati, jika virus tersebut di luar sel hidup. Namun,
            jika virus mendapatkan tempat pada sel hidup/organisme, virus akan
            menunjukkan aktivitas layaknya sel hidup, yaitu mampu bereproduksi
            sehingga dapat bertambah banyak. Dengan demikian virus dapat
            dikategorikan sebagai bentuk peralihan antara benda mati dengan
            makhluk hidup.
          </GridItem>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}
