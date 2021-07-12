import { Box, Container, Heading, Image, Text } from '@chakra-ui/react';

export function Banner() {
  return (
    <Box
      h="21rem"
      bg="url('/images/Background.png')"
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      <Container
        display="flex"
        height="full"
        alignItems="center"
        justifyContent="space-between"
        maxW="container.xl"
      >
        <Box maxW="524">
          <Heading
            as="h1"
            lineHeight={['8', '10']}
            fontWeight="medium"
            color="#F5F8FA"
          >
            5 Continentes, <br />
            infinitas possibilidades.
          </Heading>
          <Text
            color="light.info"
            lineHeight={['6', '10']}
            fontSize="larger"
            mt="5"
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>

        <Image
          display={['none', 'none', 'initial']}
          src="/images/Airplane.svg"
          w="96"
          transform="translateY(26%)"
        />
      </Container>
    </Box>
  );
}
