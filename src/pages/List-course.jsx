import React from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { SearchIcon } from "@chakra-ui/icons";
import { Box, Grid, GridItem, Text, Input } from "@chakra-ui/react";
import Card from "../component/Card-course";

export default function List() {
  return (
    <>
      <Header />
      <Box>
        <Text ml="40px" mt="94px" fontSize="24px" mb="10px">
          Courses
        </Text>
        <Box pl="10">
          <Input placeholder="Cari Profesi" width="10%" />{" "}
          <SearchIcon type="search" />
        </Box>
      </Box>
      <Box
        marginLeft="0%"
        marginRight="2%"
        height="50%"
        display="flex"
        justifyContent="center"
        pb={10}
      >
        <Card />
      </Box>
      <Footer />
    </>
  );
}
