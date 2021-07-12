import Link from 'next/link';
import { Flex, Grid, Image, Icon } from '@chakra-ui/react';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { useRouter } from 'next/router';

export function Header() {
  const { asPath } = useRouter();
  const notHomePage = asPath !== '/';

  return (
    <Flex as="header" justifyContent="center" padding="7">
      <Grid
        h="100%"
        mx="auto"
        w="100%"
        maxW="1160px"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignSelf="start"
      >
        {notHomePage && (
          <Link href="/">
            <a>
              <Icon
                as={RiArrowLeftSLine}
                fontSize={[20, 40]}
                color="dark.heading"
                justifySelf="start"
              />
            </a>
          </Link>
        )}
        <Image
          src="/images/Logo.svg"
          alt="Logo Worldtrip"
          gridColumn="2"
          justifySelf="center"
        />
      </Grid>
    </Flex>
  );
}
