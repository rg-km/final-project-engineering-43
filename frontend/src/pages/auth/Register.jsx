import {
  Flex,
  Box,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import useFormHook from '../../hooks/useFormHook';
import { Link as ReactLink } from 'react-router-dom';
import Forminput from '../../component/Forminput';

export default function Register() {
  const { onChange, handleSubmit } = useFormHook();

  const onSubmit = (value) => {
    console.log(value);
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'600px'} w={'100%'} py={8} px={4}>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={16}
        >
          <Stack align={'flex-start'} mb={8}>
            <Heading fontSize={'4xl'}>Register</Heading>
          </Stack>
          <Stack spacing={4} as="form" onSubmit={handleSubmit(onSubmit)}>
            <Forminput
              id="username"
              label="Username"
              type="text"
              onChange={onChange('username')}
            />
            <Forminput
              id="email"
              type="email"
              label="Email Address"
              onChange={onChange('email')}
            />
            <Forminput
              id="password"
              type="password"
              label="Password"
              onChange={onChange('password')}
            />
            <Forminput
              id="confirmPassword"
              type="password"
              label="Konfirmasi Password"
              onChange={onChange('confirmPassword')}
            />
            <Stack pt={0}>
              <Text align={'center'}>
                Sudah punya akun ?
                <Link as={ReactLink} to="/auth/login" color={'#37E2D5'}>
                  {' '}
                  Masuk
                </Link>
              </Text>
            </Stack>
            <Button
              bg={'#36435A'}
              color={'white'}
              _hover={{
                bg: '#8C8E93',
              }}
              type="submit"
            >
              Register
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
