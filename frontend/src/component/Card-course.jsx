import React from 'react'
import { Box, Image, Text, Flex, Link} from '@chakra-ui/react'

export default function Card(){
    return(
        <Box height="516px" width="100%" mb="117px">
            <Text ml="40px" mt="94px" fontSize="24px">
                Rekomendasi
            </Text>
            <Flex mt="50px">
            {CardItem.map((cardItem) => (
                <Box
                width="334px"
                height="430px"
                ml="40px"
                pt="20px"
                pl="20px"
                pr="20px"
                pb="20px"
                border="2px"
                borderColor="#F5F5F5"
                borderRadius="12px"
                >
                <Image
                    height="218px"
                    width="294px"
                    borderRadius={20}
                    src={cardItem.image}/>
                <Text mt="19px" mb="5px" fontWeight="medium">
                    {cardItem.profesi}
                </Text>
                <Text mb="8px" textAlign="left">
                    {cardItem.desc}
                </Text>
                <Text 
                    textAlign="right" 
                    mr={21} 
                    color="#37E2D5">
                        <Link te href='#'>pelajari lanjut</Link></Text>
                </Box>
                ))}
            </Flex>
            <Text
                textAlign="right" 
                mr={39} 
                mt={25}
                color="#464646">
                    <Link href='#'>lihat selengkapnya</Link>
            </Text>
        </Box>
    )
}

const CardItem = [
    {
        image: 'https://lifepack.id/wp-content/uploads/2021/01/Mengenal_Lifepack_Aplikasi_Untuk_Konsultasi_Dokter1-768x512.jpg',
        profesi: 'Dokter',
        desc: 'Dokter bertugas melakukan pemeriksaan, pengobatan dan perawatan medis pada pasien dengan pengetahuan medis.'
    },
    {
        image: 'https://media.suara.com/pictures/653x366/2019/12/24/78259-ilustrasi-guru-mengajar.jpg',
        profesi: 'Guru',
        desc: 'Guru menjunjung tinggi prinsip dan asas-asas keprofesionalitasan dalam melaksanakan kewajibannya dalam mendidik dan mengajar peserta didik.'
    },
    {
        image: 'https://fakta.co.id/wp-content/uploads/2020/09/Akuntan.jpg',
        profesi: 'Akuntan',
        desc: 'Akuntan bertugas membuat catatan keuangan suatu badan, seperti badan pemerintah, badan usaha, atau organisasi.'
    },
    {
        image: 'https://id.sharp/sites/default/files/uploads/image-artikel/Caranya%20Agar%20Hewan%20Peliharaan%20Tidak%20Menimbulkan%20Gangguan%205.jpg',
        profesi: 'Dokter Hewan',
        desc: 'Dokter hewan bertanggung jawab terhadap kesehatan hewan dan meningkatkan kesejahteraan hewan serta kesehatan masyarakat veteriner.'
    }
]