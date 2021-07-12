import { Box, Heading, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';

SwiperCore.use([Pagination, Navigation]);

export function Slider() {
  return (
    <Box my="14">
      <Swiper color="#e7eb00" pagination={{ type: 'bullets' }} navigation>
        {[2382954, 353827, 1155121, 2547625, 4363630].map((key) => (
          <SwiperSlide key={key}>
            <Box position="relative">
              <Box position="relative">
                <Image
                  w="100%"
                  h="100%"
                  maxH={450}
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
                transform="translate(-50%, 10%)"
                textAlign="center"
                zIndex="overlay"
              >
                <Link href="/continent">
                  <a>
                    <Heading as="h3" color="light.heading">
                      Europa
                    </Heading>
                    <Text fontSize="3xl" fontWeight="bold" color="#DADADA">
                      O continente europeu
                    </Text>
                  </a>
                </Link>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
