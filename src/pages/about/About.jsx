import { Box, Heading, Text } from '@chakra-ui/react'

const About = () => {
    return (
        <Box p={4}>
            <Heading as="h2" size="lg" mb={4}>
                About
            </Heading>
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
            </Text>
        </Box>
    )
}

export default About
