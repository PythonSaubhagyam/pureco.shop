
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
import ProductCard from "./ProductCard";
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { useState } from "react";



export default function ProductListSection({ title, products, loading, type }) {
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [slider, setSlider] = useState(Slider | null)
    
    
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

  return (
    <>
      <Container maxW={"container.xl"} px={0} pb={6} position={"relative"} >
        <Text
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

        {type === "carousal" && products.length > 5 ? (
          <>

            <IconButton
              _hover={{ opacity: 0.5 }}
              position="absolute"
              top="60%"
              left={"20px"}
              translate="-50% -60%"
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
              top={"60%"}
              translate={"-50%, -60%"}
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
              top="60%"
              left={"20px"}
              translate="-50% -60%"
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
              top={"60%"}
              translate={"-50%, -60%"}
              zIndex={10}
              boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;"
              onClick={() => slider?.slickNext()}
              borderRadius={"50%"}
            />
          </>
        )
        }

        {type === "carousal" && products && products.length > 5 ? (
          <Container maxWidth={"container.xl"} px={10} mt={5}>

            <div className="slider-container">
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
                    <Box key={product.id} px={{ base: "20px", md: "20px" }} >
                      <ProductCard key={product.id} product={product} />
                    </Box>
                  ))}
              </Slider>
            </div>
          </Container>
        ) : (
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
              xl: "repeat(5, 1fr)",
            }}
            px={4}
            // justify={ "start"}
            justify="center"
            align="center"
            direction={{ base: "column", md: "row" }}
            // wrap={"wrap"}
            wrap={{ md: "wrap", lg: "nowrap" }}
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
                  <GridItem my={4} px={{ base: "40px", md: "20px" }} >
                    <ProductCard key={product.id} product={product} />
                  </GridItem>
                ))}
              </>
            )}
          </Grid>
        )}


      </Container>
    </>
  );
}
