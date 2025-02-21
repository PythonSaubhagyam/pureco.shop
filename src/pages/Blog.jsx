import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useParams } from "react-router-dom";
import client from "../setup/axiosClient";
import {
  Container,
  Heading,
  Image,
  Text,
  Flex,
  Box,
  ButtonGroup,
  IconButton,
  Icon,
  AspectRatio,
} from "@chakra-ui/react";
import { TimeIcon } from "@chakra-ui/icons";
import { FaFacebookSquare, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import dompurify from "dompurify";
import ScrollToTop from "../components/ScrollToTop";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { CgMenuGridO } from "react-icons/cg";

function Blog() {
  const [blogData, setBlogData] = useState(null);
  const [nextPost, setNextPost] = useState(null);
  const [prevPost, setprevPost] = useState(null);
  const { blogId } = useParams();

  useEffect(() => {
    getBlog();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); // eslint-disable-next-line
  }, [blogId]);

  async function getBlog() {
    const response = await client.get(`/blogs/${blogId}/`);
    if (response.data.status === true) {
      setBlogData(response.data.blogData);
      if (response.data.nextPost) {
        setNextPost(response.data.nextPost);
        setprevPost(response.data.previousPost)
      } else {
        setNextPost(null);
      }
    }
  }

  return (
    <>
      <Navbar />
      <Container maxW="6xl" my={10}>
        <Heading fontWeight={300} lineHeight={1.25} mb={4} ml={9}>
          {blogData?.title}
        </Heading>
        <Text color="gray.500" fontSize={"sm"} ml={9}>
          <TimeIcon me={2} />{" "}
          {blogData?.published_at &&
            new Intl.DateTimeFormat("en-CA", {
              dateStyle: "long",
              timeZone: "Asia/Kolkata",
            }).format(new Date(blogData?.published_at))}
        </Text>
        <Image
          src={blogData?.banner_url}
          w="100%"
          //  maxH="400px"
          my={3}
          objectFit={"cover"}
          objectPosition={"center"}
          mb={8}
          display={"block"}
          m={"auto"}
          p={8}
          maxWidth="100%"
        />
        <Flex
          gap={16}
          justify="space-between"
          pb={6}
          borderBottom={"1px"}
          borderColor="gray.300"
          direction={{ base: "column", md: "row" }}
          textAlign="center"
          justifyContent="center"
        >
          <Box
            w={{ base: "100%", lg: "70%" }}
            fontSize="xl"
            whiteSpace={"pre-line"}
            lineHeight={1.5}
            textAlign="justify"
            dangerouslySetInnerHTML={{
              __html: dompurify.sanitize(blogData?.content),
            }}
          />
          <Flex direction={"column"} gap={16}>
            <Box borderLeft={"1px"} borderColor={"brand.900"} p={3} >
              <Image
                src={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/suryan organic inline.png"}
              />
              <Text fontSize={"xs"} color="gray.500" mt={2}>
                {blogData?.published_at &&
                  new Intl.DateTimeFormat("en-CA", {
                    dateStyle: "long",
                    timeZone: "Asia/Kolkata",
                  }).format(new Date(blogData?.published_at))}
              </Text>
            </Box>
            <Box>
              <Heading
                size="xs"
                borderBottom={"1px"}
                borderColor="gray.300"
                pb={4}

              >
                SHARE THIS POST
              </Heading>
              <ButtonGroup p={4} gap={2}>
                <a href="https://www.facebook.com/soseorganic/" target="_blank" rel="noopener noreferrer">
                  <IconButton
                    isRound
                    border="1px"
                    borderColor="gray.300"
                    icon={<Icon as={FaFacebookSquare} color="facebook.600" />}
                  />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <IconButton
                    isRound
                    border="1px"
                    borderColor="gray.300"
                    icon={<Icon as={FaTwitter} color="twitter.500" />}
                  />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <IconButton
                    isRound
                    border="1px"
                    borderColor="gray.300"
                    icon={<Icon as={FaLinkedinIn} color="linkedin.900" />}
                  />
                </a>
              </ButtonGroup>
            </Box>
          </Flex>
        </Flex>
        <Container
          maxW={{ base: "full", xl: "container.xl" }}
          mt={2}
          gap={10}
          display="flex"
          px={0}
          alignItems="center"
          justifyContent="center"
        >
          {/* Left Arrow - Disable if prevPost.id is 1 */}
          <Box
            as={Link}
            to={prevPost?.id ? `/blogs/${prevPost.id}/${prevPost.title.replace(/\s+/g, "-")}` : "#"}
            cursor={prevPost?.id > blogData?.id ? "not-allowed" : "pointer"}
            opacity={prevPost?.id > blogData?.id ? 0.5 : 1}
            pointerEvents={prevPost?.id > blogData?.id ? "none" : "auto"} // Prevent clicking if disabled
          >
            <RiArrowLeftSLine size={35} color="#436131" />
          </Box>

          {/* Menu Grid Icon */}
          <Box as={Link} to={`/blogs/`}>
            <CgMenuGridO size={35} color="#436131" />
          </Box>

          {/* Right Arrow - Disable if nextPost.id is 42 */}
          <Box
            as={Link}
            to={nextPost?.id ? `/blogs/${nextPost.id}/${nextPost.title.replace(/\s+/g, "-")}` : "#"}
            cursor={nextPost?.id < blogData?.id ? "not-allowed" : "pointer"}
            opacity={nextPost?.id < blogData?.id ? 0.5 : 1}
            pointerEvents={nextPost?.id < blogData?.id ? "none" : "auto"} // Prevent clicking if disabled
          >
            <RiArrowRightSLine size={35} color="#436131" />
          </Box>
        </Container>
      </Container>
      <ScrollToTop />
      <Footer />
    </>
  );
}

export default Blog;