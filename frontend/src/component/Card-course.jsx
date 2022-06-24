import React from 'react';
import {
  Box,
  Image,
  Text,
  Flex,
  Link,
  Container,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

export default function Card() {
  const flexDirection = useBreakpointValue({ base: 'column', md: 'row' });

  return (
    <>
      <Text fontSize="24px">Rekomendasi</Text>
      <Flex mt="50px" flexDirection={flexDirection} gap="8" wrap="wrap">
        {CardItem.map((cardItem) => (
          <Box
            width="100%"
            maxWidth="280px"
            minHeight="400px"
            border="2px"
            borderColor="#F5F5F5"
            borderRadius="12px"
          >
            <Image
              borderTopEndRadius={8}
              borderTopStartRadius={8}
              width="100%"
              height={200}
              fit="cover"
              src={cardItem.image}
            />
            <Box p="8">
              <Heading as="h2" mb="4" fontSize="2xl" fontWeight="medium">
                {cardItem.profesi}
              </Heading>
              <Text mb="8px" textAlign="left" color="gray.500" noOfLines={2}>
                {cardItem.desc}
              </Text>
              <Text textAlign="right" mr={21} color="#37E2D5">
                <Link as={ReactLink} to="/12/course">
                  pelajari lanjut
                </Link>
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>
      <Text textAlign="right" mr={39} mt={25} color="#464646">
        <Link href="#">lihat selengkapnya</Link>
      </Text>
    </>
  );
}

const CardItem = [
  {
    image:
      'https://lifepack.id/wp-content/uploads/2021/01/Mengenal_Lifepack_Aplikasi_Untuk_Konsultasi_Dokter1-768x512.jpg',
    profesi: 'Dokter',
    desc: 'Dokter bertugas melakukan pemeriksaan, pengobatan dan perawatan medis pada pasien dengan pengetahuan medis.',
  },
  {
    image:
      'https://media.suara.com/pictures/653x366/2019/12/24/78259-ilustrasi-guru-mengajar.jpg',
    profesi: 'Guru',
    desc: 'Guru menjunjung tinggi prinsip dan asas-asas keprofesionalitasan dalam melaksanakan kewajibannya dalam mendidik dan mengajar peserta didik.',
  },
  {
    image: 'https://fakta.co.id/wp-content/uploads/2020/09/Akuntan.jpg',
    profesi: 'Akuntan',
    desc: 'Akuntan bertugas membuat catatan keuangan suatu badan, seperti badan pemerintah, badan usaha, atau organisasi.',
  },
  {
    image:
      'https://id.sharp/sites/default/files/uploads/image-artikel/Caranya%20Agar%20Hewan%20Peliharaan%20Tidak%20Menimbulkan%20Gangguan%205.jpg',
    profesi: 'Dokter Hewan',
    desc: 'Dokter hewan bertanggung jawab terhadap kesehatan hewan dan meningkatkan kesejahteraan hewan serta kesehatan masyarakat veteriner.',
  },
];
