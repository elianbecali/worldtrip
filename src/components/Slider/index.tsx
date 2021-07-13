import { Box, Container, Heading, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Pagination, Navigation]);

export function Slider() {
  return (
    <Container my="14" maxWidth={['100%', 'container.xl']} px={['0', '4']}>
      <Swiper
        slidesPerView={1}
        navigation
        pagination={{ type: 'bullets', clickable: true }}
        autoplay={{
          delay: 4000
        }}
      >
        {[2382954, 353827, 1155121, 2547625, 4363630].map((key) => (
          <SwiperSlide key={key}>
            <Box position="relative">
              <Box position="relative">
                <Image
                  w="100%"
                  h="100%"
                  maxH={['250px', '450px']}
                  objectFit="cover"
                  src={`https://source.unsplash.com/collection/${key}`}
                />
                <Box
                  position="absolute"
                  top="0"
                  right="0"
                  bottom="0"
                  left="0"
                  bg=" linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35))"
                />
              </Box>
              <Box
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -30%)"
                textAlign="center"
                zIndex="overlay"
              >
                <Link href="/continent">
                  <a>
                    <Heading
                      as="h3"
                      color="light.heading"
                      fontSize={['1.5rem', '3rem']}
                    >
                      Europa
                    </Heading>
                    <Text
                      fontSize={['0.87rem', '1.5rem']}
                      fontWeight="bold"
                      color="#DADADA"
                    >
                      O continente europeu
                    </Text>
                  </a>
                </Link>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
