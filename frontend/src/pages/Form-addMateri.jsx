import {
  Flex,
  Box,
  Stack,
  Link,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import Footer from '../component/Footer';
import Forminput from '../component/Forminput';
import useFormHook from '../hooks/useFormHook';

export default function AddMateri() {
  const { onChange, handleSubmit } = useFormHook();
  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('white', 'gray.700')}
      >
        <Stack mx={'auto'} maxW={'1000px'} w={'100%'} py={8} px={4}>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('gray.50', 'gray.800')}
            boxShadow={'lg'}
            p={16}
          >
            <Stack spacing={4} as="form" onSubmit={handleSubmit(onSubmit)}>
              <Forminput
                id="tittle"
                label="Tittle"
                type="text"
                onChange={onChange('tittle')}
              />
              <Forminput
                id="thumbnail"
                label="Thumbnail"
                //harusnya image ya?
                type="file"
                onChange={onChange('thumbnail')}
              />
              {/* <Textarea/> */}
              <Forminput
                id="description"
                label="Description"
                type="textarea"
                onChange={onChange('description')}
              />
              <Flex>
                <Forminput
                  id="tingkatan"
                  label="Tingkatan"
                  type="text"
                  onChange={onChange('tingkatan')}
                />
                <Forminput
                  id="kategori"
                  label="Kategori"
                  type="text"
                  onChange={onChange('kategori')}
                />
              </Flex>
              <Forminput
                id="konten"
                label="Konten"
                type="text"
                onChange={onChange('konten')}
              />
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
