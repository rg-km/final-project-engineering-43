import { Container, Button, Box, Image, Heading, Text } from '@chakra-ui/react';
import Navbar from './component/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Container maxW="container.xl">
        There are many benefits to a joint design and development system. Not
        only does it bring benefits to the design team, but it also brings
        benefits to engineering teams. It makes sure that our experiences have a
        consistent look and feel, not just in our design specs, but in
        production
        <Button colorScheme="blue">Button</Button>
      </Container>
      <Box backgroundColor="#FAFAFA" maxWidth={334}>
        <Image
          height="100px"
          width="100px"
          src="https://images.unsplash.com/photo-1654262475898-3338faa19a1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
        />
        <Heading mt={8} mb={3}>
          Contoh gambar tangan 3d
        </Heading>
        <Text mb={8}>Isi dari deskripsi gambar diatas</Text>
        <Button variant="solid" size="md">
          Pelajari
        </Button>
      </Box>
    </>
  );
}

export default App;
