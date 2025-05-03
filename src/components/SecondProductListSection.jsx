import React, { useState } from 'react'
import {
  Container,
  Text,
  Flex,
  useMediaQuery,
  Box,
  Skeleton,
  SkeletonText,
  Grid,
  GridItem,
  IconButton,
} from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons
import SecondProductCard from './SecondProductCard';
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <Box
      className="slick-arrow slick-prev"
      onClick={onClick}
      style={{ left: "40px" }}
      zIndex={1}
    >
      <FaChevronLeft />
    </Box>
  );
};

// Custom arrow component for next button
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <Box
      className="slick-arrow slick-next"
      onClick={onClick}
      style={{ right: "40px" }}
      zIndex={1}
    >
      <FaChevronRight />
    </Box>
  );
};

const SecondProductListSection = ({ title, products, loading, type }) => {
  // console.log("product",products)
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [slider, setSlider] = useState(Slider | null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    // centerMode: true,
    // centerPadding: "5%",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          // centerMode: true,
          // centerPadding: "20%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          // centerMode: true,
          // centerPadding: "20%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          // centerMode: true,
          // centerPadding: "20%",
        },
      },
    ],
  };


  return (
    <>
      <Container maxW={"container.xl"} px={0} pt={4} pb={6} position={"relative"} >
        <Text
          as={"h1"}
          fontSize={{ base: "xl", sm: "2xl", xl: "3xl" }}
          bgColor={"bg.500"}
          px={{ base: 2, md: 8 }}
          py={4}
          mb={8}
          textAlign={{ base: "center", md: "start" }}
          fontWeight={500}
        >
          {title}
        </Text>

        {type === "carousal" && products.length > 2 ? (
          <>

            <IconButton
              _hover={{ opacity: 0.5 }}
              position="absolute"
              top="50%"
              left={"20px"}
              translate="-50% -50%"
              zIndex="100"
              borderRadius="50%"
              boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;"
              colorScheme="brand"
              size={"sm"}
              onClick={() => slider?.slickPrev()}
              //icon={<FaArrowUp size={24}/>}
              icon={<RiArrowLeftSLine size={25} />}
            />
            <IconButton
              aria-label="right-arrow"
              icon={<RiArrowRightSLine style={{ fontSize: 24 }} />}
              _hover={{ opacity: 0.5 }}
              colorScheme="brand"
              size="sm"
              position="absolute"
              right={"20px"}
              top={"50%"}
              translate={"-50%, -50%"}
              zIndex={10}
              boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;"
              onClick={() => slider?.slickNext()}
              borderRadius={"50%"}
            />
          </>
        ) : (
          <>

            <IconButton
              _hover={{ opacity: 0.5 }}
              position="absolute"
              top="50%"
              left={"20px"}
              translate="-50% -50%"
              zIndex="100"
              borderRadius="50%"
              boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;"
              colorScheme="brand"
              size={"sm"}
              display={"none"}
              onClick={() => slider?.slickPrev()}
              //icon={<FaArrowUp size={24}/>}
              icon={<RiArrowLeftSLine size={25} />}
            />
            <IconButton
              aria-label="right-arrow"
              icon={<RiArrowRightSLine style={{ fontSize: 24 }} />}
              _hover={{ opacity: 0.5 }}
              display={"none"}
              colorScheme="brand"
              size="sm"
              position="absolute"
              right={"20px"}
              top={"50%"}
              translate={"-50%, -50%"}
              zIndex={10}
              boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;"
              onClick={() => slider?.slickNext()}
              borderRadius={"50%"}
            />
          </>
        )
        }

        {type === "carousal" && products.length > 3 ? (
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {loading === true
              ? [0, 1, 2, 3, 4].map((index) => (
                <Box
                  key={index}
                  padding="6"
                  boxShadow="lg"
                  bg="white"
                  w={{ base: "80vw", sm: "3xs", lg: "2xs" }}
                >
                  <Skeleton width={150} mx={"auto"} height={150} />
                  <SkeletonText
                    my="4"
                    noOfLines={1}
                    spacing="4"
                    skeletonHeight="2"
                  />
                  <Skeleton mx="auto" width={100} height={5} />
                </Box>
              ))
              : products?.map((product) => (
                <Box key={product.id} px={{ base: "60px", md: "20px" }} >
                  <SecondProductCard key={product.id} product={product} />
                </Box>
              ))}
          </Slider>
        ) : (
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)"

            }}
            //justify={ "start"}
            justify="center"
            align="center"
            direction={{ base: "column", md: "row" }}
            // wrap={"wrap"}
            wrap={{ md: "wrap", lg: "nowrap" }}
            px={5}
            gap={6}
          >
            {loading === true ? (
              <>
                {[0, 1, 2, 3, 4].map(() => (
                  <Box
                    padding="6"
                    boxShadow="lg"
                    bg="white"
                    w={{ base: "80vw", sm: "3xs", lg: "2xs" }}
                  >
                    <Skeleton width={150} mx={"auto"} height={150} />
                    <SkeletonText
                      my="4"
                      noOfLines={1}
                      spacing="4"
                      skeletonHeight="2"
                    />
                    <Skeleton mx="auto" width={100} height={5} />
                  </Box>
                ))}
              </>
            ) : (
              <>
                {products?.map((product) => (
                  <GridItem my={4} px={{ base: "60px", md: "20px" }}>
                    <SecondProductCard key={product.id} product={product} />
                  </GridItem>
                ))}
              </>
            )}
          </Grid>
        )}
      </Container>
    </>
  )
}

export default SecondProductListSection
