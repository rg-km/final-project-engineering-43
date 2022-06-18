import { Box, Tag } from '@chakra-ui/react';

export default function Footer() {
  return (
    <Box
      width="100%"
      height="120px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="#36435A"
    >
      <Tag
        size="md"
        color="#37E2D5"
        fontSize="20px"
        fontWeight="bold"
        backgroundColor="#36435A"
      >
        Jendela
      </Tag>
      <Tag
        size="md"
        color="#ffffff"
        fontSize="16px"
        mt={3}
        backgroundColor="#36435A"
      >
        Copyright©jendela app 2022
      </Tag>
    </Box>
  );
}
