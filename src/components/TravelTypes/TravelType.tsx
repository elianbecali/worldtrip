import { Image, Text, Flex, useBreakpointValue } from '@chakra-ui/react';

interface TravelTypeProps {
  children: string;
  icon: string;
}

export function TravelType({ children, icon }: TravelTypeProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true
  });

  return (
    <Flex
      flexDirection={['row', 'column']}
      alignItems="center"
      justifyContent="center"
    >
      {isMobile ? (
        <Image src={`/images/icons/${icon}.svg`} size="85px" />
      ) : (
        <Text color="highlight" fontSize="4xl" mr="2">
          .
        </Text>
      )}

      <Text
        color="dark.heading"
        fontWeight="medium"
        fontSize={['1.12rem', '1.5rem']}
        mt={['0', '2']}
      >
        {children}
      </Text>
    </Flex>
  );
}
