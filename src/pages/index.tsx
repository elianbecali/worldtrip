import {
  Box,
  Container,
  Divider,
  Heading,
  Image,
  Text,
  HStack,
  VStack
} from '@chakra-ui/react';
import Head from 'next/head';

import { Header, Slider } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Worldtrip</title>
      </Head>
      <Header />
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
              lineHeight="3.3rem"
              fontWeight="medium"
              color="#F5F8FA"
            >
              5 Continentes, <br />
              infinitas possibilidades.
            </Heading>
            <Text
              color="light.info"
              lineHeight="1.8rem"
              fontSize="larger"
              mt="5"
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou.
            </Text>
          </Box>

          <Image
            src="/images/Airplane.svg"
            w="96"
            transform="translateY(26%)"
          />
        </Container>
      </Box>

      <Container maxW="container.xl" mt="5rem">
        <HStack justifyContent="space-between">
          <VStack>
            <Image src="/images/icons/cocktail.svg" />
            <Text color="dark.heading" fontWeight="semibold" mt="2">
              vida noturna
            </Text>
          </VStack>
          <VStack>
            <Image src="/images/icons/surf.svg" />
            <Text color="dark.heading" fontWeight="semibold" mt="2">
              praia
            </Text>
          </VStack>
          <VStack>
            <Image src="/images/icons/building.svg" />
            <Text color="dark.heading" fontWeight="semibold" mt="2">
              moderno
            </Text>
          </VStack>
          <VStack>
            <Image src="/images/icons/museum.svg" />
            <Text color="dark.heading" fontWeight="semibold" mt="2">
              clássico
            </Text>
          </VStack>
          <VStack>
            <Image src="/images/icons/earth.svg" />
            <Text color="dark.heading" fontWeight="semibold" mt="2">
              e mais...
            </Text>
          </VStack>
        </HStack>

        <Divider
          borderWidth={2}
          width={90}
          mx="auto"
          borderColor="dark.heading"
          mt="5rem"
        />

        <Text
          textAlign="center"
          fontWeight="medium"
          fontSize="2.3rem"
          lineHeight="3.3rem"
          color="dark.heading"
          mt="3.3rem"
        >
          Vamos nessa? <br />
          Então escolha seu continente
        </Text>

        <Slider />
      </Container>
    </>
  );
}
