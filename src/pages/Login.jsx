import {
  Flex,
  Box,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';
import Forminput from '../component/Forminput';
import useFormHook from '../hooks/useFormHook';

export default function Login() {
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
      <Stack mx={'auto'} maxW={'600px'} w={'100%'} py={8} px={4}>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={16}
        >
          <VStack align={'flex-start'} mb={8}>
            <Heading fontSize={'4xl'}>Log in</Heading>
          </VStack>
          <Stack spacing={4} as="form" onSubmit={handleSubmit(onSubmit)}>
            <Forminput
              id="email"
              label="Email"
              type="email"
              onChange={onChange('email')}
            />
            <Forminput
              id="password"
              label="Password"
              type="password"
              onChange={onChange('password')}
            />
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Remember me</Checkbox>
                <Link color={'#37E2D5'}>Forgot password?</Link>
              </Stack>
              <Button
                bg={'#36435A'}
                color={'white'}
                _hover={{
                  bg: '#8C8E93',
                }}
                type="submit"
              >
                Log in
              </Button>
              <Text>
                Belum punya akun ?{' '}
                <Link as={ReactLink} to="/auth/register " color={'#37E2D5'}>
                  Sign up
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
