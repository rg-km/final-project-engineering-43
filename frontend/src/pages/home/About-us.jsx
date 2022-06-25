import React from 'react';
import Footer from '../../component/Footer';
import Header from '../../component/Header';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Grid,
  GridItem,
  Heading,
  Link,
  VStack,
  Container,
  Stack,
  Box,
  Button,
  Text,
  Image
} from '@chakra-ui/react';

export default function AboutUs(){
    return(
        <>
            <Stack direction='row' justify="center" mt={20}>
            <Box maxW='32rem'>
                <Heading mb={4}>Jendela</Heading>
                <Text fontSize='xl'>
                    Sebuah website yang membantu pelajar dan calon mahasiswa untuk menemukan passion serta 
                    alur pembelajaran yang jelas tentang profesi di dunia pekerjaan
                </Text>
                <Button size='lg' variant={'solid'}
                bg={'#36435A'}
                color={'white'} mt='24px'>
                    Back to Home
                </Button>
            </Box>
            <Image boxSize='200px' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
            </Stack>

            <Heading mt={10} mb={4} textAlign="center">Our Team</Heading>
            <Stack direction='row' justify="space-around" mt={20} mb={10}>
            
                <box>
                    <Image
                    borderRadius='full'
                    boxSize='200px'
                    src='https://media-exp2.licdn.com/dms/image/C5603AQEx0m_inWhazg/profile-displayphoto-shrink_800_800/0/1622333012890?e=1661385600&v=beta&t=0qKPISsx_zJXV1KIT2zjPmr5YWgsOo7bKGlodQSrr0I'
                    alt='Vina'
                    />
                    <Text textAlign='center' fontSize='sm' mt={5}>Anatasha Eka Syavina</Text>
                    <Text textAlign='center' fontSize='sm'>Universitas Brawijaya</Text>
                    <Text textAlign='center' fontSize='sm'>Front End developer</Text>
                </box>
                <box>
                <Image
                    borderRadius='full'
                    boxSize='200px'
                    src='https://media-exp2.licdn.com/dms/image/C5603AQGOw0cvXlEMZg/profile-displayphoto-shrink_800_800/0/1648115792990?e=1661385600&v=beta&t=jlPi5XPzA1z9xyJGjI39NFMWZTDSLHldcJUOOdWeHwg'
                    alt='Dika'
                    />
                    <Text textAlign='center' fontSize='sm' mt={5}>Dika Muharman</Text>
                    <Text textAlign='center' fontSize='sm'>Sekolah tinggi teknologi terpadu Nurul Fikri</Text>
                    <Text textAlign='center' fontSize='sm'>Front End developer</Text>
                </box>
                <box>
                <Image
                    borderRadius='full'
                    boxSize='200px'
                    src='https://media-exp2.licdn.com/dms/image/D5603AQGopmUG8g1o0g/profile-displayphoto-shrink_800_800/0/1643946299865?e=1661385600&v=beta&t=uafAHZ7ldVbbGRelZQnUx48roBIsR3tVh7TepgNewsA'
                    alt='Figo'
                    />
                    <Text textAlign='center' fontSize='sm' mt={5}>Muhammad Figo Mahendra</Text>
                    <Text textAlign='center' fontSize='sm'>Universitas Dian Nuswantoro</Text>
                    <Text textAlign='center' fontSize='sm'>Front End developer</Text>
                </box>
            </Stack>

            <Stack direction='row' justify="space-around" mt={20} mb={10}>
                <box>
                    <Image
                    borderRadius='full'
                    boxSize='200px'
                    src='https://media-exp2.licdn.com/dms/image/C4D03AQGmnEXr5kP5IA/profile-displayphoto-shrink_800_800/0/1655815452932?e=1661385600&v=beta&t=hndlKpqspIdzwtbtoPfQcVB8S_GpT-W-W3PM_HQHAPc'
                    alt='Dimas'
                    />
                    <Text textAlign='center' fontSize='sm' mt={5}>Dimas Ihdam Maulana</Text>
                    <Text textAlign='center' fontSize='sm'>Universitas AMIKOM Yogyakarta</Text>
                    <Text textAlign='center' fontSize='sm'>Front End developer</Text>
                </box>
                <box>
                <Image
                    borderRadius='full'
                    boxSize='200px'
                    src='https://media-exp2.licdn.com/dms/image/C4E03AQH_kn4Q02Gdrw/profile-displayphoto-shrink_800_800/0/1649384301473?e=1661385600&v=beta&t=JEcOwbYoEx5uVE3fWqJ9rZ5c5mglHoto8Q1cQUYU4vU'
                    alt='Ririn'
                    />
                    <Text textAlign='center' fontSize='sm' mt={5}>Ririn Salsa Andraini</Text>
                    <Text textAlign='center' fontSize='sm'>Universitas Andalas</Text>
                    <Text textAlign='center' fontSize='sm'>Back End developer</Text>
                </box>
                <box>
                <Image
                    borderRadius='full'
                    boxSize='200px'
                    src='https://bit.ly/dan-abramov'
                    alt='Hasan'
                    />
                    <Text textAlign='center' fontSize='sm' mt={5}>Hasan</Text>
                    <Text textAlign='center' fontSize='sm'>Universitas -</Text>
                    <Text textAlign='center' fontSize='sm'>Back End developer</Text>
                </box>
            </Stack>
        <Footer/>
        </>
    )
}