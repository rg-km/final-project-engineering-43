import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Container,
  Text,
  Box,
  Heading,
  VStack,
  Textarea,
  Button,
} from '@chakra-ui/react';
import Footer from '../component/Footer';
import Forminput from '../component/Forminput';
import Header from '../component/Header';
import useFormHook from '../hooks/useFormHook';

export default function FormAddProfesi() {
  const { onChange, handleSubmit } = useFormHook();

  const onSubmit = (value) => {};

  return (
    <>
      <Container
        maxW={'container.lg'}
        width="full"
        mb="15rem"
        mt="5rem"
        rounded={'lg'}
        bg={'gray.50'}
        boxShadow={'lg'}
        p={16}
      >
        <Heading>Tambah Profesi</Heading>
        <VStack as="form" onSubmit={handleSubmit(onSubmit)} mt="1rem" gap={4}>
          <Forminput
            label="Thumbnail"
            type="text"
            onChange={onChange('Thumbnail')}
          />
          <Forminput label="Nama" type="text" onChange={onChange('nama')} />
          <FormControl>
            <FormLabel htmlFor="deskripsi">Deskripsi</FormLabel>
            <Textarea onChange={onChange('deskripsi')} />
          </FormControl>
          <Button></Button>
        </VStack>
      </Container>
      <Footer />
    </>
  );
}
