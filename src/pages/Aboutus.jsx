import Footer from "../components/Footer";
import BreadCrumbCom from "../components/BreadCrumbCom";
import Navbar from "../components/Navbar";
import { Box, Container, VStack, Image, Text, Link } from "@chakra-ui/react";
import {  useLocation } from "react-router-dom";
const Aboutus = () => {
  let { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const IsMobileView = searchParams.get("mobile") ?? "false";
  return (
    <>
      {IsMobileView !== "true" && <Navbar />}
      <Container maxW={"container.xl"} alignContent={"flex-start"}>
        <BreadCrumbCom second={"About Us"} secondUrl={"/about-us"} />{" "}
      </Container>
      <Container maxW={"container.xl"} mb={4} px={0} centerContent>
        <Box
          w={"100%"}
          bgImage={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/aboutUs.jpg"}
          bgSize="cover"
          bgPosition="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={"-10px"}
          py={20}
          boxShadow={"0px 0px 0px 0px"}
          height={"550px"}
          mb={10}
        // filter="brightness(200%)"
        // style={{ backdropFilter: "blur(10px)" }}
        >
          <Text
            pb={2}
            color={"brand.100"}
            textAlign={"center"}
            fontSize="7xl"
            fontWeight="600"
          >
            About Us
          </Text>

          {/* <Text
            pb={2}
            color={"brand.100"}
            textAlign={"center"}
            textShadow={"1px 1px 2px lightgreen"}
            fontSize="7xl"
            fontWeight="black"
          >
            About us
          </Text> */}
        </Box>
        <VStack>
          <Image src="https://www.pureco.shop/web/image/321079/about%20Pureco.png" alt="" w="25%" />


          <Box maxW={"6xl"} textAlign={"justify"} fontSize={16} mt={10}>
            PURECO believes that ancient Bharat holds the key to many challenges humanity is facing today. We produce daily essential materials using natural wood or leaves. Our products are designed to be durable and made of natural wood, which varies in color, making each piece unique. All our products are natural and food safe. PURECO essential products are traditionally handmade by village workers. When you buy this product, you contribute to rural and local workers, who strive to keep you healthy and prosperous.

          </Box>

          <Box maxW={"6xl"} textAlign={"justify"} fontSize={16} mt={2}>
            Inspired by Bansi Gir Gaushala, which is declared as the #1 Gaushala in Bharat, with the purity and authenticity of the divine atmosphere in the presence of Gir Gaumata.
          </Box>
          <Text maxW={"6xl"} textAlign={"justify"} fontSize={16} mt={2} >
            Bansi Gir Gaushala works as a living laboratory to revive Bharat's ancient Vedic "Gau Sanskriti" and introduce time-tested Vedic paradigms in all aspects of modern life.  <Link to="https://www.bansigir.in/" color="#5C8A41" >Know More (www.bansigir.in)</Link>
          </Text>


          <Box maxW={"6xl"} textAlign={"justify"} fontSize={16} mt={2}>
            Supporting "Sidha Kisan Se" (Directly from Ethical Farmers) movement, whose aim is 'Samruddh Kisan, Samruddh Bharat.' When you buy this  product, you directly help the farmers who are ethically growing and nurturing the products & bringing you good health & prosperity.  <Link to="https://www.sidhakisanse.com" color="#5C8A41" > Know More (www.bansigir.in)</Link>
          </Box>

          {/* <Box
            maxW={"6xl"}
            fontWeight={"600"}
            color="#436131"
            fontSize={{ base: "20px", lg: "30px" }}
          >
            For farmers, we are...
          </Box> */}
          {/* <Box maxW={"6xl"}>
            <Image
              src={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/aboutus/about2.jpg"}
              alt="For farmers, we are..."
            />
          </Box> */}
          {/* <Box maxW={"6xl"} textAlign={"justify"}>
            Resourceful knowledge partners helping them turn to organic farming
            or improve their farm productivity, We are inspired by the mission
            of and work closely with Bansi Gir Gaushala, which helps farmers
            with knowledge and materials required for Gopalan as well as organic
            farming using traditional Vedic methods. For smaller farmers, we
            help them acquire organic certifications and get their produce
            tested in a laboratory if required. Our commitment to farmers
            springs from our vision of ”samruddh Kissan, samruddh Bharat”. Our
            knowledge of organic farming coupled with sensible intelligence of
            the organic foods market is formidable assets that we put at the
            disposal of our farmer partners whenever required. <br />
            <br />
            Reliable market makers and buyers to help them find the best prices
            for their organic produce. We have loyal retail customers visiting
            our SOSE Organic boutiques, and we can also arrange bulk buyers. Our
            efforts are aimed at reducing market uncertainties for our farmers,
            so that they can do what they do best - grow the most nutritious
            organic produce. We help farmers develop their business with new
            products and marketing.
          </Box> */}
          {/* <br />
          <Box
            fontWeight={"600"}
            color="#436131"
            fontSize={{ base: "20px", lg: "30px" }}
          >
            For consumers & re-sellers, we are...
          </Box>
          <Box maxW={"6xl"}>
            <Image
              src={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/aboutus/about3.jpg"}
              alt="For consumers & re-sellers, we are..."
            />
          </Box>
          <Box maxW={"6xl"} textAlign={"justify"}>
            Extremely dependable suppliers to help them lead an organic
            lifestyle. We care for our own health and similarly want our farmers
            and consumers to be happy and healthy. Our commitment to organic
            sourcing springs from our mission to revive Bharat’s ancient roots,
            our Vedic “Gau Sanskriti”, and our vision of “Swasth Nagarik, Swasth
            Parivar, Swasth Bharat”. We often go out of our way, often at a
            significant cost to us and beyond regulatory or legal requirements
            to determine if the products we offer are truly natural and organic.
            We don’t just go by the letter of law and ask for organic
            certification from our suppliers. We insist on solid proof that what
            they are supplying is truly organic in nature. In case of doubts, we
            often get the products tested in an independent laboratory
            ourselves. So when consumers buy from us, they are assured of the
            purity and authenticity of what they buy. When our resellers stock
            our products, they can be similarly confident that they are
            partnering with the best in the organic products segment.
            <br />
            <br />
            Creative knowledge partners to help consumers enhance their
            well-being in line with Bharat’s ancient Vedic traditions. We are
            inspired by Bansi Gir Gaushala, and take full advantage of The
            Gaushala’s rich knowledge base and experience of Vedic nutritional &
            medical practices to help consumers. We design new products which
            are in line with ancient Ayurvedic philosophy, while still being
            appealing to modern youth. We also distribute the Gaushala’s full
            range products, including “Gau Veda” herbal medicines and
            supplements that exploit synergies between Gopalan and Ayurveda. We
            also wish to influence a change in society, to rouse in people a
            curiosity for what they have inherited from their ancient
            forefathers, but have so far failed to appreciate. We work to make a
            positive difference to the way people think about food.
            <br />
            <br />
            Today we have a huge product line of Natural, Organic & Ayurvedic
            Product over 550+ natural or organic products available at the
            stores or online. Our customer base, stores and farmers network
            continue to grow as we seek solutions to modern day problems by
            looking back to our ancient Bharatiya "Gau Sanskriti".{" "}
          </Box> */}
        </VStack>
      </Container>
      {IsMobileView !== "true" && <Footer />}
    </>
  );
};

export default Aboutus;
