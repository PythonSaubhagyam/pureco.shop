import Footer from "../components/Footer";
import BreadCrumbCom from "../components/BreadCrumbCom";
import Navbar from "../components/Navbar";
import { Box, Container, VStack, Image, Text, Link } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
const AboutUs = () => {
  let { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const IsMobileView = searchParams.get("mobile") ?? "false";
  return (
    <>
      {IsMobileView !== "true" && <Navbar />}
      <Container maxW={"container.xl"} alignContent={"flex-start"}>
        <BreadCrumbCom second={"About Us"} secondUrl={"/about-us"} />{" "}
      </Container>
      <Container maxW={"container.xl"} py={8} px={0} position="relative">
        <Image src="https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/aboutUs.jpg" />

        <Text
          pb={2}
          color={"brand.100"}
          textAlign={"center"}
          fontSize={{ lg: "7xl", md: "5xl", base: "xl" }}
          fontWeight="600"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex="1"
          // Optional: Add background to improve text readability
        >
          About Us
        </Text>
      </Container>
      <Container maxW={"6xl"} mb={4} px={{ md: 0, base: 7 }} centerContent>
        <VStack>
          {/* <Image
            src="https://www.pureco.shop/web/image/321079/about%20Pureco.png"
            alt="about pureco"
          /> */}

          <Box textAlign={"justify"} fontSize={16} mt={10}>
            PURECO believes that ancient Bharat holds the key to many challenges
            humanity is facing today. We produce daily essential materials using
            natural wood or leaves. Our products are designed to be durable and
            made of natural wood, which varies in color, making each piece
            unique. All our products are natural and food safe. PURECO essential
            products are traditionally handmade by village workers. When you buy
            this product, you contribute to rural and local workers, who strive
            to keep you healthy and prosperous.
            <br />
            <br />
            Inspired by Bansi Gir Gaushala, which is declared as the #1 Gaushala
            in Bharat, with the purity and authenticity of the divine atmosphere
            in the presence of Gir Gaumata.
            <br />
            <br />
            Bansi Gir Gaushala works as a living laboratory to revive Bharat's
            ancient Vedic "Gau Sanskriti" and introduce time-tested Vedic
            paradigms in all aspects of modern life.{" "}
            <Link to="https://www.bansigir.in/" color="#5C8A41">
              Know More (www.bansigir.in)
            </Link>
            <br />
            <br />
            Supporting "Sidha Kisan Se" (Directly from Ethical Farmers)
            movement, whose aim is 'Samruddh Kisan, Samruddh Bharat.' When you
            buy this product, you directly help the farmers who are ethically
            growing and nurturing the products & bringing you good health &
            prosperity.{" "}
            <Link to="https://www.sidhakisanse.com" color="#5C8A41">
              {" "}
              Know More (www.bansigir.in)
            </Link>
          </Box>
        </VStack>
      </Container>
      {IsMobileView !== "true" && <Footer />}
    </>
  );
};

export default AboutUs;
