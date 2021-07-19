import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Image,
  Text,
  Tooltip
} from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { RiInformationLine } from 'react-icons/ri';

import { Header } from '../../components';

interface ContinentProps {
  continent: {
    slug: string;
  };
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Header />

      <Box
        w="100%"
        h={[150, 250, 400, 500]}
        display={['flex']}
        alignItems={['center', 'center', 'flex-end']}
        justifyContent={['center', 'center', 'initial']}
        pos="relative"
      >
        <Image src="/images/europe.png" objectFit="cover" w="100%" h="100%" />
        <Heading
          as="h1"
          pos="absolute"
          color="light.heading"
          ml={['0', '0', '12']}
          mb={['0', '0', '12']}
        >
          {continent.slug.charAt(0).toUpperCase() + continent.slug.slice(1)}
        </Heading>
      </Box>

      <Container
        d="flex"
        maxW="container.xl"
        justifyContent="space-between"
        alignItems="center"
        flexDirection={['column', 'column', 'column', 'column', 'row']}
        my="20"
      >
        <Text
          maxW="600"
          textAlign="justify"
          fontWeight="normal"
          fontSize="2xl"
          lineHeight="9"
        >
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <Flex
          alignItems="center"
          flexDirection={['column', 'row']}
          justifyContent="space-around"
          w="100%"
        >
          <Text
            display="flex"
            flexDirection="column"
            alignItems="center"
            fontWeight="medium"
            color="dark.heading"
            fontSize={['2xl', '2xl', '4xl']}
          >
            <Text as="span" color="highlight" fontSize={['2xl', '3xl', '5xl']}>
              50
            </Text>
            países
          </Text>
          <Text
            display="flex"
            flexDirection="column"
            alignItems="center"
            fontWeight="medium"
            color="dark.heading"
            fontSize={['2xl', '2xl', '4xl']}
          >
            <Text as="span" color="highlight" fontSize={['2xl', '3xl', '5xl']}>
              60
            </Text>
            línguas
          </Text>
          <Text
            display="flex"
            flexDirection="column"
            alignItems="center"
            fontWeight="medium"
            color="dark.heading"
            fontSize={['2xl', '2xl', '4xl']}
          >
            <Text as="span" color="highlight" fontSize={['2xl', '3xl', '5xl']}>
              27
            </Text>
            <Box>
              cidades +100
              <Tooltip
                hasArrow
                label="A Europa contempla com as 27 cidades dentre as 100 mais visitadas do mundo!"
                placement="top-start"
                bg="white"
                color="dark.heading"
              >
                <Text as="span">
                  <Icon
                    as={RiInformationLine}
                    color="dark.info"
                    fontSize="2xl"
                    opacity="0.5"
                    ml="2"
                  />
                </Text>
              </Tooltip>
            </Box>
          </Text>
        </Flex>
      </Container>

      <Container maxWidth="container.xl">
        <Heading color="dark.heading">Cidades +100</Heading>
        <Grid
          templateColumns={[
            '1fr',
            'repeat(2, 1fr)',
            'repeat(3, 1fr)',
            'repeat(4, 1fr)'
          ]}
          gap={10}
          mt="10"
          mb="48"
        >
          <GridItem bg="white" borderRadius="4">
            <Image
              src="https://source.unsplash.com/collection/2141901"
              borderTopRadius="4"
              objectFit="cover"
              w="full"
              maxH="44"
            />
            <Container
              d="flex"
              justifyContent="space-between"
              alignItems="center"
              mt="4"
            >
              <Box>
                <Text
                  fontSize="larger"
                  fontWeight="semibold"
                  color="dark.heading"
                >
                  Londres
                </Text>
                <Text
                  fontSize="1rem"
                  fontWeight="medium"
                  color="dark.info"
                  mt="3"
                >
                  Reino Unido
                </Text>
              </Box>
              <Image
                src="/images/icons/elipse-1.png"
                borderRadius="full"
                objectFit="cover"
                size="30"
              />
            </Container>
          </GridItem>
          <GridItem bg="white" borderRadius="4">
            <Image
              src="https://source.unsplash.com/collection/2141901"
              borderTopRadius="4"
              objectFit="cover"
              w="full"
              maxH="44"
            />
            <Container
              d="flex"
              justifyContent="space-between"
              alignItems="center"
              mt="4"
            >
              <Box>
                <Text
                  fontSize="larger"
                  fontWeight="semibold"
                  color="dark.heading"
                >
                  Londres
                </Text>
                <Text
                  fontSize="1rem"
                  fontWeight="medium"
                  color="dark.info"
                  mt="3"
                >
                  Reino Unido
                </Text>
              </Box>
              <Image
                src="/images/icons/elipse-1.png"
                borderRadius="full"
                objectFit="cover"
                size="30"
              />
            </Container>
          </GridItem>
          <GridItem bg="white" borderRadius="4">
            <Image
              src="https://source.unsplash.com/collection/2141901"
              borderTopRadius="4"
              objectFit="cover"
              w="full"
              maxH="44"
            />
            <Container
              d="flex"
              justifyContent="space-between"
              alignItems="center"
              mt="4"
            >
              <Box>
                <Text
                  fontSize="larger"
                  fontWeight="semibold"
                  color="dark.heading"
                >
                  Londres
                </Text>
                <Text
                  fontSize="1rem"
                  fontWeight="medium"
                  color="dark.info"
                  mt="3"
                >
                  Reino Unido
                </Text>
              </Box>
              <Image
                src="/images/icons/elipse-1.png"
                borderRadius="full"
                objectFit="cover"
                size="30"
              />
            </Container>
          </GridItem>
          <GridItem bg="white" borderRadius="4">
            <Image
              src="https://source.unsplash.com/collection/2141901"
              borderTopRadius="4"
              objectFit="cover"
              w="full"
              maxH="44"
            />
            <Container
              d="flex"
              justifyContent="space-between"
              alignItems="center"
              mt="4"
            >
              <Box>
                <Text
                  fontSize="larger"
                  fontWeight="semibold"
                  color="dark.heading"
                >
                  Londres
                </Text>
                <Text
                  fontSize="1rem"
                  fontWeight="medium"
                  color="dark.info"
                  mt="3"
                >
                  Reino Unido
                </Text>
              </Box>
              <Image
                src="/images/icons/elipse-1.png"
                borderRadius="full"
                objectFit="cover"
                size="30"
              />
            </Container>
          </GridItem>
          <GridItem bg="white" borderRadius="4">
            <Image
              src="https://source.unsplash.com/collection/2141901"
              borderTopRadius="4"
              objectFit="cover"
              w="full"
              maxH="44"
            />
            <Container
              d="flex"
              justifyContent="space-between"
              alignItems="center"
              mt="4"
            >
              <Box>
                <Text
                  fontSize="larger"
                  fontWeight="semibold"
                  color="dark.heading"
                >
                  Londres
                </Text>
                <Text
                  fontSize="1rem"
                  fontWeight="medium"
                  color="dark.info"
                  mt="3"
                >
                  Reino Unido
                </Text>
              </Box>
              <Image
                src="/images/icons/elipse-1.png"
                borderRadius="full"
                objectFit="cover"
                size="30"
              />
            </Container>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (req) => {
  const { slug } = req.params;

  return {
    props: {
      continent: {
        slug
      }
    }
  };
};
