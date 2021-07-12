import { Container, Divider, Text } from '@chakra-ui/react';
import Head from 'next/head';

import { Banner, Header, Slider, TravelTypes } from '../components';

export default function Home() {
  return (
    <>
      <Head>
        <title>Worldtrip</title>
      </Head>
      <Header />

      <Banner />

      <Container maxW="container.xl" mt="5rem">
        <TravelTypes />

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
