import Link from 'next/link';
import { Flex, Image } from '@chakra-ui/react';

export function Header() {
  return (
    <Flex as="header" justifyContent="center" padding="7">
      <Link href="/">
        <a>
          <Image src="/images/Logo.svg" alt="Logo Worldtrip" />
        </a>
      </Link>
    </Flex>
  );
}
