import {
  Container,
  Divider,
  Image,
  Text,
  HStack,
  VStack
} from '@chakra-ui/react';
import Head from 'next/head';

import { Banner, Header, Slider } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Worldtrip</title>
      </Head>
      <Header />

      <Banner />

      <Container maxW="container.xl" mt="5rem">
        <HStack
          flexWrap="wrap"
          justifyContent={['center', 'space-between']}
          gridGap="6"
        >
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
