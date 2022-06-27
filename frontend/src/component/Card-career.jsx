import React from "react";
import {
  Box,
  Image,
  Text,
  Flex,
  Link,
  Heading,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link as ReactLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAllRoadmap } from "../services/roadmapApi";

export default function Card() {
  const [roadmap, setRoadmap] = useState([]);
  const flexDirection = useBreakpointValue({ base: "column", md: "row" });
  const maxWidth = useBreakpointValue({ base: "400px", md: "280px" });

  useEffect(() => {
    const fetchRoadmap = async () => {
      const { error, response } = await getAllRoadmap();
      if (!error) {
        setRoadmap(response.data);
      }
    };
    fetchRoadmap();
  }, [roadmap]);

  return (
    <>
      <Flex flexDirection={flexDirection} gap="8" wrap="wrap">
        {roadmap.map((cardItem) => (
          <Box
            width="100%"
            maxWidth={maxWidth}
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
              src={cardItem.thumbnail}
            />
            <Box p="8">
              <Heading as="h2" mb="4" fontSize="2xl" fontWeight="medium">
                {cardItem.title}
              </Heading>
              <Text mb="8px" textAlign="left" color="gray.500" noOfLines={2}>
                {cardItem.description}
              </Text>
              <Text textAlign="right" mr={21} color="#37E2D5">
                <Link as={ReactLink} to={`/${cardItem.id}/course`}>
                  pelajari lanjut
                </Link>
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </>
  );
}

const CardItem = [
  {
    image:
      "https://lifepack.id/wp-content/uploads/2021/01/Mengenal_Lifepack_Aplikasi_Untuk_Konsultasi_Dokter1-768x512.jpg",
    profesi: "Dokter",
    desc: "Dokter bertugas melakukan pemeriksaan, pengobatan dan perawatan medis pada pasien dengan pengetahuan medis.",
  },
  {
    image:
      "https://media.suara.com/pictures/653x366/2019/12/24/78259-ilustrasi-guru-mengajar.jpg",
    profesi: "Guru",
    desc: "Guru menjunjung tinggi prinsip dan asas-asas keprofesionalitasan dalam melaksanakan kewajibannya dalam mendidik dan mengajar peserta didik.",
  },
  {
    image: "https://fakta.co.id/wp-content/uploads/2020/09/Akuntan.jpg",
    profesi: "Akuntan",
    desc: "Akuntan bertugas membuat catatan keuangan suatu badan, seperti badan pemerintah, badan usaha, atau organisasi.",
  },
  {
    image:
      "https://id.sharp/sites/default/files/uploads/image-artikel/Caranya%20Agar%20Hewan%20Peliharaan%20Tidak%20Menimbulkan%20Gangguan%205.jpg",
    profesi: "Dokter Hewan",
    desc: "Dokter hewan bertanggung jawab terhadap kesehatan hewan dan meningkatkan kesejahteraan hewan serta kesehatan masyarakat veteriner.",
  },
  {
    image:
      "https://news.unair.ac.id/wp-content/uploads/2019/08/lk6rrlbtrt5jndtr2vo3_19120.jpg",
    profesi: "Dokter Gigi",
    desc: "Dokter Gigi adalah tenaga medis yang sehari-hari bertugas melakukan pemeriksaan dan perawatan gigi dan mulut pasien.",
  },
  {
    image:
      "https://cdn-2.tstatic.net/tribunnews/foto/bank/images/ilustrasi-prospek-kerja-psikologi.jpg",
    profesi: "Psikolog",
    desc: "Profesi Psikolog bertugas menangani kasus- kasus kejiwaan, mendiagnosis gejala psikologis pasien, dan melakukan psikoterapi sebagai bentuk penanganannya.",
  },
  {
    image: "https://statik.tempo.co/data/2021/09/23/id_1053071/1053071_720.jpg",
    profesi: "Pengacara",
    desc: "Pengacara adalah seseorang yang memiliki profesi dan wewenang sebagai penegak hukum. Kedudukannya setara dengan jaksa, hakim, dan polisi.",
  },
  {
    image:
      "https://assets.kompasiana.com/items/album/2017/04/16/astronot2-58f320a2b67a61ec6de8eaca.jpg?t=o&v=740&x=416",
    profesi: "Astronot",
    desc: "Astronot merupakan sebutan untuk orang yang sudah memenuhi pelatihan penerbangan antariksa untuk memimpin, menerbangkan, atau jadi awak pesawat antariksa.",
  },
];
