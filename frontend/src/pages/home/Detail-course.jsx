import React from 'react';
import Footer from '../../component/Footer';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Box,
  Text,
  Button,
  Grid,
  GridItem,
  Heading,
  Link,
  Stack,
} from '@chakra-ui/react';

/**
 * Halaman detail course
 * Halaman ini bisa di akses pengguna biasa dari halaman courses
 */

export default function DetailCourse() {
  function Feature({ title, desc, filldesc, ...rest }) {
    return (
      <Box p={5} shadow="md" borderWidth="1px" {...rest} borderRadius="12px">
        <Heading fontSize="xl">{title}</Heading>
        <Text mt={4} fontSize="l">
          {desc}
        </Text>
        <Text mt={5} fontSize="l" marginLeft={10}>
          <p>{filldesc}</p>
        </Text>
      </Box>
    );
  }
  function TableContent({ title }) {
    return (
      <Box>
        <Heading fontSize="l">{title}</Heading>
      </Box>
    );
  }
  return (
    <>
      <Box
        marginLeft="2%"
        marginRight="4%"
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="left"
        pb={10}
      >
        <Grid
          templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
          gridTemplateRows={'50px 1fr 30px'}
          h="800px"
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
          <GridItem pl="3" area={'nav'} pr="10" width="250px">
            <Box>
              <Text mt={2} fontSize="30">
                Guru
              </Text>
            </Box>
            <Box>
              <Text mt={10} fontSize="l">
                Table Content
              </Text>
            </Box>
            <Box
              mt="15px"
              pl="10"
              display="flex"
              flexDirection="column"
              h="50%"
              w="100%"
              p="3"
              borderRadius="12px"
              boxShadow="0px 0px 10px rgba(0, 0, 0, 0.1)"
              color="BlackAlpha.700"
            >
              <Stack spacing={8} direction="row">
                <TableContent title="Kompetensi Sosial" />
              </Stack>
            </Box>
          </GridItem>

          <GridItem pl="2" area={'main'} mt={20}>
            <Box width="100%" height="100%">
              <Stack spacing={8} direction="row">
                <Feature
                  title="Save Money"
                  desc="Kompetensi kepribadian berkaitan dengan karakter guru dan wajib dimiliki agar menjadi teladan bagi para peserta didik. Selain itu, para guru juga harus mampu mendidik para muridnya agar membantu mereka memiliki kepribadian yang baik Terdapat beberapa kepribadian yang harus dimiliki guru antara lain;"
                  filldesc="Kompetensi kepribadian berkaitan"
                />
              </Stack>
            </Box>
          </GridItem>
          <GridItem pr="10" area={'footer'} colStart={3} colEnd={6}>
            <Link href="https://chakra-ui.com" isExternal mr="2">
              Chakra Design system <ExternalLinkIcon mx="2px" />
            </Link>
            <Button colorScheme="facebook" size="lg">
              Tanya Jawab
            </Button>
          </GridItem>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}
