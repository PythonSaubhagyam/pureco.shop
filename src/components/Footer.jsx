import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Image,
  Flex,
  Grid,
} from "@chakra-ui/react";
import { FaFacebookF, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FiInstagram } from "react-icons/fi";
import { useNavigate, NavLink as RouterLink } from "react-router-dom";
import { IoMail } from "react-icons/io5";
const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={1} color="brand.100">
      {children}
    </Text>
  );
};

export default function Footer() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);
  const [isMobiles, setIsMobiles] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
      setIsMobiles(window.innerWidth <= 600);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [RouterLink]);
  return (
    <>
      <hr />
      <Container maxW={"container.xl"}>
        <Box className="scrolling-text-container">
          <Text
            align={"center"}
            color="brand.900"
            pt={4}
            px={4}
            fontSize={{ base: "sm", lg: "md" }}
            className="scrolling-text"
          >
            For Deliveries in America, Canada, Europe, UAE, Singapore, etc Email
            us on
            <Link
              target="_blank"
              href="mailto:export@suryanorganic.com"
              isExternal
              fontWeight={"bold"}
            >
              export@suryanorganic.com
            </Link>{" "}
            or Whatsapp on{" "}
            <Link
              target="_blank"
              href="https://wa.me/+916354800089?text=Hello%2C%20this%20is%20a%20test%20message"
              fontWeight={"bold"}
            >
              +91-6354-8000-89
            </Link>
          </Text>
        </Box>
        <Container as={Stack} maxW={"6xl"} pt={10} pb={2}>
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 4 }}
            // spacing={8}
            spacingY="8px"
          >
            {/* <Stack align={"flex-start"} color="brand.900"> */}

            {/* <SimpleGrid columns={{ base: 1, md: 3 }}> */}
            <Stack color="text.300">
              <Stack
                ml={{ md: "50%" }}
                align={{ md: "flex-start", base: "center" }}
              >
                <ListHeader style={{ color: "text.500" }}>
                  Quick Links
                </ListHeader>
              </Stack>
              <Link
                textDecoration="none"
                _hover={{ color: "text.500" }}
                as={RouterLink}
                to={"/shop"}
              >
                Shop
              </Link>
              <Link
                textDecoration="none"
                _hover={{ color: "text.500" }}
                as={RouterLink}
                to={"/blogs?page=1"}
              >
                Blogs
              </Link>
              <Link
                textDecoration="none"
                _hover={{ color: "text.500" }}
                as={RouterLink}
                to={"/about-us"}
              >
                About Us
              </Link>
              <Link
                textDecoration="none"
                _hover={{ color: "text.500" }}
                as={RouterLink}
                to={"/organic-living"}
              >
                Organic Living
              </Link>
              <Link
                textDecoration="none"
                _hover={{ color: "text.500" }}
                as={RouterLink}
                to={"/resources"}
              >
                Resources
              </Link>
              <Link
                textDecoration="none"
                _hover={{ color: "text.500" }}
                as={RouterLink}
                to={"/appreciation"}
              >
                Appreciation
              </Link>
              <Link
                textDecoration="none"
                _hover={{ color: "text.500" }}
                as={RouterLink}
                to={"/testimonials"}
              >
                Testimonials
              </Link>
            </Stack>
            <Stack align={"flex-start"} color="text.300">
              {!isMobile && <ListHeader>&nbsp;</ListHeader>}
              {/* <Link
                textDecoration="none"
                _hover={{ color: "text.500" }}
                as={RouterLink}
                to={"/store-locator"}
              >
                Store Locator
              </Link>
              <Link
                textDecoration="none"
                _hover={{ color: "text.500" }}
                as={RouterLink}
                to={"/contact-us"}
              >
                Contact Us
              </Link> */}

              <>
                {isMobiles ? (
                  <>
                    <Grid
                      align={"flex"}
                      position={"absolute"}
                      marginTop={"-220px"}
                      marginLeft={"140px"}
                      flexDirection={"column"}
                    >
                      {!isMobile && <ListHeader>&nbsp;</ListHeader>}
                      <Link
                        textDecoration="none"
                        _hover={{ color: "text.500" }}
                        as={RouterLink}
                        marginTop={2}
                        to={"/store-locator"}
                      >
                        Store Locate
                      </Link>
                      <Link
                        textDecoration="none"
                        _hover={{ color: "text.500" }}
                        as={RouterLink}
                        marginTop={2}
                        to={"/contact-us"}
                      >
                        Contact Us
                      </Link>
                      <Link
                        textDecoration="none"
                        _hover={{ color: "text.500" }}
                        as={RouterLink}
                        marginTop={2}
                        to={"/faq"}
                      >
                        FAQ
                      </Link>
                      <Link
                        textDecoration="none"
                        _hover={{ color: "text.500" }}
                        as={RouterLink}
                        marginTop={2}
                        to={"/terms-and-conditions"}
                      >
                        Terms & Conditions
                      </Link>
                      <Link
                        textDecoration="none"
                        _hover={{ color: "text.500" }}
                        as={RouterLink}
                        marginTop={2}
                        to={"/shipping-policy"}
                      >
                        Shipping Policy
                      </Link>
                      <Link
                        textDecoration="none"
                        _hover={{ color: "text.500" }}
                        as={RouterLink}
                        marginTop={2}
                        to={"/return-and-refund-policy"}
                      >
                        Return & Refund Policy
                      </Link>
                      <Link
                        textDecoration="none"
                        _hover={{ color: "text.500" }}
                        as={RouterLink}
                        marginTop={2}
                        to={"/inspire-and-support"}
                      >
                        Inspire & Support
                      </Link>
                    </Grid>
                  </>
                ) : (
                  <>
                    <Link
                      textDecoration="none"
                      _hover={{ color: "text.500" }}
                      as={RouterLink}
                      to={"/store-locator"}
                    >
                      Store Locator
                    </Link>
                    <Link
                      textDecoration="none"
                      _hover={{ color: "text.500" }}
                      as={RouterLink}
                      to={"/contact-us"}
                    >
                      Contact Us
                    </Link>
                    <Link
                      textDecoration="none"
                      _hover={{ color: "text.500" }}
                      as={RouterLink}
                      to={"/faq"}
                    >
                      FAQ
                    </Link>
                    <Link
                      textDecoration="none"
                      _hover={{ color: "text.500" }}
                      as={RouterLink}
                      to={"/terms-and-conditions"}
                    >
                      Terms & Conditions
                    </Link>
                    <Link
                      textDecoration="none"
                      _hover={{ color: "text.500" }}
                      as={RouterLink}
                      to={"/shipping-policy"}
                    >
                      Shipping Policy
                    </Link>
                    <Link
                      textDecoration="none"
                      _hover={{ color: "text.500" }}
                      as={RouterLink}
                      to={"/return-and-refund-policy"}
                    >
                      Return & Refund Policy
                    </Link>
                    <Link
                      textDecoration="none"
                      _hover={{ color: "text.500" }}
                      as={RouterLink}
                      to={"/inspire-and-support"}
                    >
                      Inspire & Support
                    </Link>
                  </>
                )}
              </>
            </Stack>
            {/* </SimpleGrid> */}
            {/* </Stack> */}
            {/* <Stack color="text.300" mt={{ md: 3 }}>
              <Stack>
                <ListHeader gap={"3"}>Partner With Us</ListHeader>
                <Link
                  textDecoration="none"
                  _hover={{ color: "text.500" }}
                  as={RouterLink}
                  alignItems={"center"}
                  to={"/franchise"}
                >
                  SOSE - Franchise
                </Link>
              </Stack> */}
            {/* <Stack>
                <ListHeader>Connect With Us</ListHeader>
                <Flex
                  gap="3"
                  sx={{ direction: "column", alignItems: "center" }}
                >
                  <Link
                    isExternal={true}
                    _hover={{ color: "text.500" }}
                    as={RouterLink}
                    to={"https://www.facebook.com/SoseOrganicAndNaturalStore/"}
                  >
                    <FaFacebookF fontSize={"1.5rem"} />
                  </Link>
                  <Link
                    _hover={{ color: "text.500" }}
                    isExternal={true}
                    as={RouterLink}
                    to={"https://www.instagram.com/sose_organic/"}
                  >
                    <FiInstagram fontSize={"1.7rem"} />
                  </Link>
                  <Link
                    _hover={{ color: "text.500" }}
                    isExternal={true}
                    as={RouterLink}
                    to={
                      "https://api.whatsapp.com/send/?phone=7405095969&text&type=phone_number&app_absent=0"
                    }
                  >
                    <FaWhatsapp fontSize={"1.7rem"} />
                  </Link>
                  <Link
                    _hover={{ color: "text.500" }}
                    isExternal={true}
                    as={RouterLink}
                    to={
                      "https://www.youtube.com/channel/UCCpb64CX-rqBBZaWpHsNCHw"
                    }
                  >
                    <TfiYoutube fontSize={"1.7rem"} />
                  </Link>
                </Flex>
              </Stack> */}
            {/* </Stack> */}
            <Stack color="text.300" mt={{ md: 3 }}>
              <Stack align={{ md: "flex-start", base: "center" }}>
                <ListHeader gap={"3"}>Customer Support</ListHeader>
              </Stack>
              <Link
                textDecoration="none"
                _hover={{ color: "text.500" }}
                target="_blank"
                href={"tel:917405095969"}
                display={"flex"}
                flexDirection={"row"}
              >
                <FaPhoneAlt
                  alignItems={"center"}
                  size={16}
                  style={{ marginRight: 8 }}
                />{" "}
                +91 74050 95969
              </Link>
              <Link
                display={"flex"}
                flexDirection={"row"}
                textDecoration="none"
                _hover={{ color: "text.500" }}
                target="_blank"
                // alignItems={"center"}
                href={"mailto:care@suryanorganic.com"}
              >
                <IoMail
                  alignItems={"center"}
                  size={18}
                  style={{ marginRight: 6 }}
                />{" "}
                care@suryanorganic.com
              </Link>
            </Stack>
            <Stack align={"center"} mt={{ md: 3 }}>
              {/* <ListHeader align={"flex-start"}>Talk To Our Vaidya</ListHeader>
              <Link
                textDecoration="none"
                _hover={{ color: "text.500" }}
                target="_blank"
                href={"tel:+916351979706"}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
              >
                <FaPhoneAlt size={16} style={{ marginRight: 8 }} /> +91 6351
                9797 06
              </Link>
              <Link
                textDecoration="none"
                _hover={{ color: "text.500" }}
                target="_blank"
                href={"tel:+916351979712"}
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
              >
                <FaPhoneAlt size={16} style={{ marginRight: 8 }} />
                +91 6351 9797 12
              </Link> */}
              {/* </Stack>

            <Stack align={"flex-start"} gap={"3"} ml={{ lg: 10 }} color="brand.900"> */}
              <ListHeader align={"flex-start"} marginBottom={5}>
                We Accepts Payments via
              </ListHeader>
              <Image
                src={
                  "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/footer/payment method.png hnghngh.png"
                }
              />
              {/* <ListHeader>Download App</ListHeader>
              <Link
                target="blank"
                href="https://play.google.com/store/apps/details?id=com.sose.main&pcampaignid=web_share"
              >
                <Image
                  src={playstore}
                  alt="google-app-sose"
                  style={{ height: "78px", width: "150px" }}
                />
              </Link> */}
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={4}>
          <Text pt={6} fontSize={"sm"} textAlign={"center"} color={"brand.100"}>
            Copyright © Suryan Organic
          </Text>
        </Box>
      </Container>
    </>
  );
}
