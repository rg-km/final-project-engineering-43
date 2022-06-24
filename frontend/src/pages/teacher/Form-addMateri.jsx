import {
  Flex,
  Box,
  Container,
  Stack,
  Link,
  Button,
  useColorModeValue,
  FormControl,
  FormLabel,
  Textarea,
  Heading,
  Select,
} from '@chakra-ui/react';
import Footer from '../../component/Footer';
import Forminput from '../../component/Forminput';
import FormInputFile from '../../component/FormInputFile';
import useFormHook from '../../hooks/useFormHook';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { useEffect } from 'react';

/**
 *
 * Halaman add materi
 * Halaman ini bisa di akses dari dashboard, halaman ini digunakan untuk menambahkan materi berdasarkan profesi
 */

export default function FormAddMateri() {
  const { quill, quillRef } = useQuill();
  const { onChange, handleSubmit } = useFormHook();
  const onSubmit = (value) => {
    console.log(value);
  };

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        console.log(quill.root.innerHTML);
      });
    }
  }, [quill]);

  return (
    <>
      <Flex
        minH={'100vh'}
        justify={'center'}
        bg={useColorModeValue('white', 'gray.700')}
      >
        <Stack mx={'auto'} maxW={'1000px'} w={'100%'} py={8} px={4}>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('gray.50', 'gray.800')}
            boxShadow={'lg'}
            p={8}
          >
            <Heading mb="8">Tambah materi</Heading>
            <Stack spacing={4} as="form" onSubmit={handleSubmit(onSubmit)}>
              <FormInputFile
                id="thumbnail"
                label="Thumbnail"
                //harusnya image ya?
                type="file"
                onChange={onChange('thumbnail')}
              />
              <Forminput
                id="judul"
                label="Judul"
                type="text"
                onChange={onChange('judul')}
              />
              {/* <Textarea/> */}
              <FormControl>
                <FormLabel>Pilih profesi</FormLabel>
                <Select placeholder="Profesi">
                  <option value="1">Dokter</option>
                  <option value="2">Insinyur</option>
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="deskripsi">Deskripsi</FormLabel>
                <Textarea onChange={onChange('deskripsi')} />
              </FormControl>
              <FormControl>
                <FormLabel>Content</FormLabel>
                <div ref={quillRef} />
              </FormControl>
              <Stack spacing={10}>
                <Flex justify={'space-between'}>
                  <Link mr={10} color={'#36435A'} type="submit">
                    Save as draft
                  </Link>
                  <Button
                    bg={'#36435A'}
                    color={'white'}
                    _hover={{
                      bg: '#8C8E93',
                    }}
                    type="submit"
                  >
                    Publish
                  </Button>
                </Flex>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>

      <Footer />
    </>
  );
}
