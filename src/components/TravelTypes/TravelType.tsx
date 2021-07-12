import { Image, Text, VStack } from '@chakra-ui/react';

interface TravelTypeProps {
  children: string;
  icon: string;
}

export function TravelType({ children, icon }: TravelTypeProps) {
  return (
    <VStack>
      <Image src={`/images/icons/${icon}.svg`} size="85px" />
      <Text color="dark.heading" fontWeight="semibold" mt="2">
        {children}
      </Text>
    </VStack>
  );
}
