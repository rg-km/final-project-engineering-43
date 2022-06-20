import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from '@chakra-ui/react';
import Footer from '../component/Footer';
import Header from '../component/Header';

// bentar vina cape ngodinggg wkwkwk, nanti dilanjuttttt

export default function formAdd() {
  return (
    <>
      <Header />
      <FormControl>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input id="email" type="email" />
      </FormControl>
      <Footer />
    </>
  );
}
