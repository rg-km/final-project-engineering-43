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
  HStack,
} from '@chakra-ui/react';
import Footer from '../component/Footer';
import Forminput from '../component/Forminput';
import { Link as ReactLink } from 'react-router-dom';
import useFormHook from '../hooks/useFormHook';
import FormInputFile from '../component/FormInputFile';

export default function FormAddProfesi() {
  const { onChange, handleSubmit } = useFormHook();

  const onSubmit = (value) => {
    console.log(value);
  };

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
        p={8}
      >
        <Heading>Tambah Profesi</Heading>
        <VStack as="form" onSubmit={handleSubmit(onSubmit)} mt="1rem" gap={2}>
          <FormInputFile
            label="Add thumbnail"
            onChange={onChange('thumbnail')}
          />
          <Forminput
            id="nama"
            label="Nama"
            type="text"
            onChange={onChange('nama')}
          />
          <FormControl>
            <FormLabel htmlFor="deskripsi">Deskripsi</FormLabel>
            <Textarea onChange={onChange('deskripsi')} />
          </FormControl>
          <HStack w={'full'} justifyContent="space-between">
            <Button variant="ghost" as={ReactLink} to="/roadmap/list">
              Kembali
            </Button>
            <Button variant="solid" bg="#36435A" color="white" type="submit">
              Tambah
            </Button>
          </HStack>
        </VStack>
      </Container>
      <Footer />
    </>
  );
}
