import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import CarouselWithLinks from "../components/CarouselWithLinks";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ScrollToTop from "../components/ScrollToTop";
import SecondProductListSection from "../components/SecondProductListSection"

import {
  Container,
  Flex,
  Image,
  Heading,
  Stat,
  StatNumber,
  StatHelpText,
  SimpleGrid,
  Box,
  Link,
  Center,
  useMediaQuery,
  Text,
  Grid,
  GridItem,
  LinkBox,
  LinkOverlay,
  useBreakpointValue,
  Card,
  Skeleton,
  Button,
} from "@chakra-ui/react";
import client from "../setup/axiosClient";
import CheckOrSetUDID from "../utils/checkOrSetUDID";
import { useNavigate, NavLink as RouterLink, Link as ReactRouterLink } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Testimonials from "../components/testimonials";
import LoginModal from "../components/LoginModal";
import checkLogin from "../utils/checkLogin";
import { useDispatch, useSelector } from "react-redux"
import {
  initializeAppData
} from "../redux/slices/homeApi";
import { Helmet } from "react-helmet";
import MetaHome from "../components/MetaHome";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import BlogSliderHome from "../components/BlogSliderHome";


export default function Home() {
  const [isFullScreen] = useMediaQuery("(min-width: 768px)");
  const width = useBreakpointValue({ base: "100%", lg: "100%" });
  const height = useBreakpointValue({ base: "300", lg: "400" });
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [homeData, setHome] = useState({});
  const [sections, setSections] = useState([]);
  const loginInfo = checkLogin();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const checkOrSetUDIDInfo = CheckOrSetUDID();
  const [showPopup, setShowPopup] = useState(
    sessionStorage.getItem("hasShownPopup")
  );
  const isMobiles = width <= 768;
  const navigate = useNavigate();
  const [countUp, setCountUp] = useState(false)


  const dispatch = useDispatch();
  const {
    upperBanners,
    middleBanners,
    purecoSection,
    loader,
    blogs,
    statistics,
    lowerSection,
    hasFetched,
  } = useSelector((state) => state.home);

  const {
    ourAboutSection,
    ourCertificateSection,
    ourBestSellerSection,
    ourNonGmoSection,
  } = purecoSection;

  const {
    awardsSection,
    servicesSection,
    availableSection,
  } = lowerSection;

  useEffect(() => {
    if (!hasFetched) {
      dispatch(initializeAppData());
    }
  }, [dispatch, hasFetched]);

  useEffect(() => {
    const init = async () => {
      await CheckOrSetUDID();
    };
    init();
    if (showPopup === null && !loginInfo.isLoggedIn) {
      setIsLoginModalOpen(true);
    }
  }, []);


  const pageUrl = "/";
  return (
    <>
      <MetaHome pageUrl={pageUrl} />
      {/* <Helmet>
        <title>Pureco.shop - Home</title>
        <meta
          name="description"
          content=""
        />
      </Helmet> */}
      {/* {loading === true ? (
        <Center h="100vh" w="100vw" backgroundColor={"bg.500"}>
          <Loader site={true} />
        </Center>
      ) : (
        <> */}
      <Navbar />
      {/* <Container maxW={"container.xl"} px={0}>
        {loader === true ? (
          <Skeleton h={489}></Skeleton>
        ) : (
          <Carousel banners={puroco} />
        )}
      </Container> */}

      <Container maxW={"container.xl"} px={0}>
        {loader === true ? (
          <Skeleton h={489}></Skeleton>
        ) : (
          <Carousel banners={upperBanners?.length > 0 && upperBanners} />
        )}
        {/* <Image w={"100%"} h={489} src={require("../assets/Home/1.jpg")} /> */}
      </Container>

      {ourAboutSection?.length > 0 &&
        ourAboutSection[0]?.is_visible_on_website === true && (
          <>
            <Container maxW={"container.xl"} mb={8} px={0}>
              <Text
                as={"h1"}
                fontSize={{ base: "xl", sm: "2xl", xl: "2xl" }}
                fontWeight={500}
                bgColor={"bg.500"}
                textAlign={{ base: "center", md: "start" }}
                px={{ base: 2, md: 8 }}
                py={4}
              //my={3}
              >
                {ourAboutSection[0]?.label}
              </Text>
              <Text
                color={"text.300"}
                textAlign={"justify"}
                justifyContent={"justify"}
                px={{ base: 15, lg: 20 }}
                mt={12}
                fontSize={{ base: "sm", lg: "md" }}
                whiteSpace={"pre-line"}
              >
                {ourAboutSection[0]?.description}
              </Text>
            </Container>
            <Container centerContent>
              <Button
                variant={"outline"}
                borderColor={"text.500"}
                _hover={{ bgColor: "text.500", color: "white" }}
                borderRadius={"22px"}
                border={"1px"}
                onClick={() => navigate(`/about-us`)}
                color={"text.500"}
              >
                {" "}
                Read More{" "}
              </Button>
            </Container>
          </>
        )}

      {ourCertificateSection?.length > 0 &&
        ourCertificateSection[0]?.is_visible_on_website === true && (
          <Container mb={5} px={0} mt={12} maxW={"container.xl"} centerContent>
            <LazyLoadImage
              src={ourCertificateSection[0]?.image}
              alt=""
              style={{
                opacity: 1,
                transition: "opacity 0.7s", // Note the corrected syntax here
                width: "100%"
              }}
            />
          </Container>
        )}
      {ourBestSellerSection?.length > 0 &&
        ourBestSellerSection[0]?.is_visible_on_website === true && (
          <SecondProductListSection
            title={ourBestSellerSection[0]?.label}
            loader={loader}
            //image={new_arrival_gir_gauveda.image1}
            products={ourBestSellerSection[0]?.images}
            type={isMobile && "carousal"}
          />
        )}
      <Container maxW={"container.xl"} px={0}>
        {loader === true ? (
          <Skeleton h={489}></Skeleton>
        ) : (
          <Carousel banners={middleBanners?.length > 0 && middleBanners} />
        )}
        {/* <Image w={"100%"} h={489} src={require("../assets/Home/1.jpg")} /> */}
      </Container>

      <BlogSliderHome blogs={blogs} />

      {statistics?.length > 0 &&
        statistics[0]?.is_visible_on_website === true && (
          <Container maxW={"container.xl"} backgroundColor={"bg.500"} mt={3} py={2}>
            <SimpleGrid
              columns={[2, 3, null, 5]}
              px={6}
              maxW={"container.xl"}
              my={6}
              // backgroundColor={"bg.500"}
              align="center"
              spacingX={{ base: "10vw", md: "30px" }}
              spacingY="40px"
            >
              {statistics?.length > 0 &&
                statistics?.map((data) => (
                  <Stat>
                    <StatNumber fontSize={{ base: "3xl", md: "3xl" }} color="brand.500">
                      <ScrollTrigger
                        onEnter={() => setCountUp(true)}
                      // onExit={() => setCountUp(false)}
                      >
                        {countUp ? (
                          <CountUp
                            start={0}
                            end={Number(data.value.replace(/[^\d]/g, ''))}
                            duration={2}
                            delay={0}
                          />
                        ) : null}
                        {data?.name === "Positive Feedback" ? "%+" : data?.name === "Generation of Farmers" ? "th" : "+"}

                      </ScrollTrigger>
                    </StatNumber>
                    <StatHelpText color="gray.600">{data?.name}</StatHelpText>
                  </Stat>
                ))}

            </SimpleGrid>
          </Container>)}
      {awardsSection?.length > 0 &&
        awardsSection[0]?.is_visible_on_website === true && (
          <Container maxW={{ base: "100vw", md: "container.xl" }}>
            <Heading
              as={"h1"}
              color="brand.500"
              fontSize={{ md: 33, base: 20 }}
              mx="auto"
              align={"center"}
              mt={3}
              pb={"10px"}
            >
              {awardsSection[0]?.label}
            </Heading>

            <Text my={5} textAlign={"center"} color="text.300">
              We are committed to quality and each of our facilities is
              independently certified by an industry-accredited agency.
            </Text>
            <Flex
              justifyContent="space-evenly"
              direction={{ base: "column", md: "row" }}
              align="center"
              gap={12}
              pt={1}
              pb={6}
            >
              <LazyLoadImage
                src={awardsSection[0]?.images[0]?.image}
                alt="global-certificate"
                style={{
                  opacity: 1,
                  transition: "opacity 0.7s", // Note the corrected syntax here
                }}
              />
              <LazyLoadImage
                src={awardsSection[0]?.images[1]?.image}
                alt="ciolook-certificate"
                style={{
                  opacity: 1,
                  transition: "opacity 0.7s", // Note the corrected syntax here
                }}
              />
            </Flex>
          </Container>
        )}
      {ourNonGmoSection?.length > 0 &&
        ourNonGmoSection[0]?.is_visible_on_website === true && (
          <Container maxW={"5xl"} mt={5}>
            <Image src={ourNonGmoSection[0]?.image} />
          </Container>
        )}
      {servicesSection?.length > 0 &&
        servicesSection[0]?.is_visible_on_website === true && (
          <Container maxW={{ base: "100vw", md: "container.xl" }}>
            <Heading
              as={"h1"}
              color="brand.500"
              fontSize={{ md: 33, base: 20 }}
              mx="auto"
              align={"center"}
              my={"5"}
              pb={"10px"}
            >
              {servicesSection[0].label}
            </Heading>

            <Box display={"flex"} justifyContent={"center"}>
              <LazyLoadImage
                src={servicesSection[0]?.images[0].image}
                w={{ base: "100%", md: "100%" }}
                alt=""
                py={4}
                style={{
                  opacity: 1,
                  transition: "opacity 0.7s", // Note the corrected syntax here
                }}
              />
            </Box>
          </Container>
        )}
      {availableSection?.length > 0 &&
        availableSection[0]?.is_visible_on_website === true && (
          <Container maxW={"container.xl"} mb={5} px={0} centerContent>
            <Heading
              as={"h1"}
              color="brand.500"
              fontSize={{ md: 33, base: 22 }}
              mx="auto"
              align={"center"}
              my={"5"}
              pb={"10px"}
            >
              {availableSection[0].label}
            </Heading>

            <Image
              src={availableSection[0]?.images?.length > 0 && availableSection[0]?.images[0].image}
              w={"container.xl"}
              alt=""
              style={{
                opacity: 1,
                transition: "opacity 0.7s", // Note the corrected syntax here
              }}
            />
          </Container>
        )}
      {!checkLogin().isLoggedIn && (
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
        />
      )}
      <ScrollToTop />
      <Footer />
      {/* </>
      )} */}
    </>
  );
}
