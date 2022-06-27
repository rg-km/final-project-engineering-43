import React from 'react';
import Footer from '../../component/Footer';
import bg from '../../assets/bg.png';
import CardCourse from '../../component/Card-course';
import { Box, Text, Button, Container } from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

export default function Landing() {
  return (
    <Box>
      <Box
        height="710px"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        bgImage={bg}
      >
        <Container
          maxW="container.md"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Text
            mt="253px"
            fontSize="40px"
            backgroundColor="#ffffff"
            borderRadius="6px"
            pr={4}
            pl={4}
            fontWeight="medium"
          >
            Belajar dan berbagi dengan komunitas
          </Text>
          <Text fontSize="18px" mt="23px">
            platform berbagi materi gratis. Dibuat, di rancang dan di rawat
            komunitas
          </Text>
          <Button
            variant="solid"
            size="md"
            backgroundColor="#36435A"
            color="#ffffff"
            height={42}
            width={185}
            mt="35px"
            colorScheme="teal"
            as={ReactLink}
            to="/roadmap/list"
          >
            Lihat semua materi
          </Button>
        </Container>
      </Box>
      <Container maxW="container.xl" my="16">
        <CardCourse />
      </Container>
      <Footer />
    </Box>
  );
}
