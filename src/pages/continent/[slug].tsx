import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';

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
