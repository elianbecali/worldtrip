import { Flex } from '@chakra-ui/react';

import { TravelType } from './TravelType';

export function TravelTypes() {
  return (
    <Flex
      flexDirection="row"
      flexWrap="wrap"
      justifyContent={['center', 'space-between']}
      gridGap="6"
    >
      <TravelType icon="cocktail">Vida noturna</TravelType>
      <TravelType icon="surf">praia</TravelType>
      <TravelType icon="building">moderno</TravelType>
      <TravelType icon="museum">clássico</TravelType>
      <TravelType icon="earth">e mais...</TravelType>
    </Flex>
  );
}
