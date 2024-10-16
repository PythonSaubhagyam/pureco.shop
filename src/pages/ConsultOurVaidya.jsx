import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
    Box,
    Container,
    Flex,
    Image,
    Text,
    Button,
    HStack,
    useToast,
    Heading,
    Grid,
    GridItem
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import checkLogin from "../utils/checkLogin";
import { useLocation } from "react-router-dom";
import { HiInformationCircle } from "react-icons/hi";
import BreadCrumbCom from "../components/BreadCrumbCom";
import ScrollToTop from "../components/ScrollToTop";

export default function ConsultOurVaidya() {
    let { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const IsMobileView = searchParams.get("mobile") ?? "false";

    const toast = useToast();
    const navigate = useNavigate();

    function navigateToBooking() {
        const loginInfo = checkLogin();
        if (loginInfo.isLoggedIn === true) {
            navigate("/consult-our-vaidya/schedule-appointment");
        } else {
            toast({
                title: "Please login to book an appointment!",
                position: "top-right",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
            navigate("/login");
        }
    }

    return (
        <>
             {IsMobileView !== "true" && <Navbar />}
            <Container maxW="container.xl">
                <BreadCrumbCom
                    second={"Consult Our Vaidya"}
                    secondUrl={"/consult-our-vaidya"}
                />
            </Container>
            <Container maxW="container.xl" px={0}>
        <Box
          position="relative" // Set position relative for parent box
          display="flex"
          justifyContent="center"
          alignItems="center"
          py={20}
          h={{ lg: "600px", md: "350px" }}
          w={"100%"}
          mb={10}
        >
          {/* Background Image */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={1} // Set a lower zIndex for the background image
            bgImage={
              "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/vaidh-cover.webp"
            }
            bgSize="cover"
            bgPosition="center"
          />
          {/* Overlay */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            zIndex={2}
            bg="rgba(0, 0, 0, 0.5)"
          />

          <Text
            color={"#fff"}
            textAlign={"center"}
            zIndex={3}
            fontSize={{ lg: "5xl", md: "2xl" }}
          >
            Get Free Consultation with our Vaidya for Gau Adharit Diagnosis
          </Text>
        </Box>
      </Container>
            <Container maxW={"6xl"} py={15}>
            <Flex flexDirection={{ base: "column", lg: "row" }}>
                    <Flex direction={"column"} justify={"center"}>
                        <Box my="8">
                            <Text fontSize={"2xl"}>
                                Get Free Consultation with our Vaidya for Gau
                                Adharit Diagnosis over{" "}
                                <Text as={"span"} color={"brand.50"}>
                                    Chat, Voice & Video calls.{" "}
                                </Text>
                            </Text>
                        </Box>
                        <Box my="6">
                            <Button
                                onClick={navigateToBooking}
                                borderRadius="20px"
                                px="12"
                                bg={"brand.200"}
                                color={"white"}
                                _hover={{ bg: "brand.200" }}
                            >
                                Consult With Vaidya
                            </Button>
                        </Box>
                        <Box my="6">
                            <Image
                                src={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/ConsultOurvaidya/Consultation_banner.jpg"}
                                alt="Free consultation banner"
                            />
                        </Box>
                        <Box
                            bg={"brand.300"}
                            p="2"
                            borderRadius={"5"}
                            w={{ base: "100vw", md: "auto" }}
                        >
                            <HStack>
                                <HiInformationCircle />
                                <Text>
                                    We also conduct physical consultation at our
                                    stores. (Schedule...)
                                </Text>
                            </HStack>
                        </Box>
                    </Flex>
                    <Flex align={"center"}>
                        <Image
                            src={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/ConsultOurvaidya/Illustration1.jpg"}
                        />
                    </Flex>
                </Flex>
                <Box>
                    <Text fontSize={"2xl"}>
                        Consult With our Specialist Vaidya
                    </Text>
                </Box>
                {/* <Carousel /> */}
                <Flex justify={"center"} m={"8"}>
                    <Box>
                        <Text fontSize={"3xl"}>
                            How does online appointment system work?
                        </Text>
                    </Box>
                </Flex>
                <Flex p="8">
                    <Box p="3">
                        <Image
                            src={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/ConsultOurvaidya/Illustration2.jpg"}
                        />
                    </Box>
                    <Box p="3">
                        <Image
                            src={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/ConsultOurvaidya/Step1_info.jpg"}
                        />
                    </Box>
                </Flex>
                <Flex p="8">
                    <Box p="3">
                        <Image
                            src={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/ConsultOurvaidya/Step2_info.jpg"}
                        />
                    </Box>
                    <Box p="3">
                        <Image
                            src={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/ConsultOurvaidya/Illustration3.jpg"}
                        />
                    </Box>
                </Flex>
                <Flex p="8">
                    <Box p="3">
                        <Image
                            src={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/ConsultOurvaidya/Illustration4.jpg"}
                        />
                    </Box>
                    <Box p="3">
                        <Image
                            src={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/ConsultOurvaidya/Step3_info.jpg"}
                        />
                    </Box>
                </Flex>
                <Flex p="8">
                    <Box p="3">
                        <Image
                            src={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/ConsultOurvaidya/Step4_info.jpg"}
                        />
                    </Box>
                    <Box p="3">
                        <Image
                            src={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/ConsultOurvaidya/Illustration5.jpg"}
                        />
                    </Box>
                </Flex>
                <Heading fontSize={"27px"} textAlign={"center"} color={"text.500"}>
          OUR VAIDYA VIDEO
        </Heading>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
            lg: "repeat(2,1fr)",
          }}
          gap={7}
          my={6}
          mx={{ md: 20, base: 3 }}
        >
          <GridItem>
            <iframe
              width="100%"
              height="450"
              src="https://www.youtube.com/embed/qLs7KIs1iS4"
              title="Experience the power of ancient wisdom with Gau Based Aushadhi"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </GridItem>
          <GridItem>
            <Heading fontSize={"23px"} mb={3} color={"text.500"}>
              Experience the power of ancient wisdom with Gau Based Aushadhi
            </Heading>
            <Text fontSize={"19px"} color={"text.300"}>
              Experience the power of ancient wisdom with Gaumutra Based
              Aushadhi – a cherished treasure from our heritage. This natural
              remedy, distilled from cow urine, offers effective relief from
              conditions like obesity, urinary disorders, anemia, and even aids
              in fighting several diseases.
              <br />
              Our vaidyas are ever present with free consultation to guide you
              about the right kind of aushadhi that will be beneficial for your
              health.
              <br />
              Visit us today or order online for this authentic healing
              solution.
            </Text>
            <Button
              onClick={navigateToBooking}
              to={"/consult-our-vaidya/schedule-appointment"}
              borderRadius="25px"
              px="16"
              py={5}
              my={7}
              bg={"brand.200"}
              color={"white"}
              fontSize={"xl"}
              _hover={{ bg: "brand.200" }}
            >
              Consult With Vaidya
            </Button>
          </GridItem>
        </Grid>
                <Flex m={"10"}>
                    <Image
                        src={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/ConsultOurvaidya/Statistics.png"}
                    />
                </Flex>
                <Flex my={"10"} align="center" justify="center">
                    <Box>
                        <Image
                            src={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/ConsultOurvaidya/Footer_illustration.jpg"}
                        />
                    </Box>
                    <Box>
                        <Image
                            src={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/ConsultOurvaidya/Footer_illustration1.jpg"}
                        />
                    </Box>
                    <Box>
                        <Image
                            src={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/ConsultOurvaidya/Footer_illustration2.jpg"}
                        />
                    </Box>
                    <Box>
                        <Image
                            src={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/ConsultOurvaidya/Footer_illustration3.jpg"}
                        />
                    </Box>
                </Flex>
            </Container>
            <ScrollToTop/>
            {IsMobileView !== "true" && <Footer />}
        </>
    );
}
