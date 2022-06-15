import {
    Box,
    Text,
    Flex,
    Link,
    Button
} from '@chakra-ui/react'

export default function Header(){
    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            backgroundColor="#F3EFE0"
            m={0}
            pl={10}
            pr={10}
            pt={5}
            pb={5}
            width="100%"
            height="100px"
        >
            <Text ml={5} color="#37E2D5" fontSize="20px" fontWeight="semibold">jendela</Text>
            <Flex justifyContent="flex-start" alignItems="center">
                {Navbar.map((navItem) => (
                <Box>
                <Link ml="16px" fontWeight="medium" href={navItem.href} fontSize="md">{navItem.name}</Link>
                </Box>
                ))}
                <Button 
                width={90}
                height={42}
                color="#C2DED1"
                ml="16px"
                bgColor="#36435A"
                colorScheme="teal"
                borderRadius={6}
                >Sign in</Button>
            </Flex>
        </Box>
    )
}

const Navbar =[
    {
        name: 'Home',
        href: '#'
    },
    {
        name: 'Courses',
        href: '#'
    },
    {
        name: 'How to Contribute',
        href: '#'
    },
    {
        name: 'Become Maintener',
        href: '#'
    }
]