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
import { useNavigate, NavLink as RouterLink } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Testimonials from "../components/testimonials";
import LoginModal from "../components/LoginModal";
import checkLogin from "../utils/checkLogin";

const productItems = [
  {
    id: 7663,
    imageSrc:
      "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/cocoa_vanilla.jpg",
  },

  {
    id: 7664,
    imageSrc:
      "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/lavenderrose.jpg",
  },
  {
    id: 7665,
    imageSrc:
      "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/lip_balm.jpg",
  },
  {
    id: 7608,
    imageSrc:
      "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/daliya.webp",
  },
  {
    id: 7522,
    imageSrc:
      "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/image/sose_new.jpg",
  },
  {
    id: 7607,
    imageSrc:
      "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/image/imgpsh_fullsize_anim.jpg",
  },
  {
    id: 7587,
    imageSrc:
      "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/image/imgpsh_fullsize_anim (1).jpg",
  },
  {
    id: 7586,
    imageSrc:
      "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/image/isabgol (1).jpg",
  },
  {
    id: 7566,
    imageSrc:
      "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/image/avi pattikar banner (1).jpg",
  },
  // {
  //   id: 7567,
  //   imageSrc: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/image/mahasudarshan churn banner (1).jpg",
  // },
  // { id: 7519, imageSrc: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/image/01.jpg" },
  // { id: 7518, imageSrc: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/image/03.jpg" },
];
const Diseases = [
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/shopbyDiseases/womens health  [5].png",
    alt: "women's health",
    href: "/shop?page=1&category=534&category_name=Women%27s%20Health",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/shopbyDiseases/02 (1).png",
    alt: "Fever & Immunity",
    href: "/shop?page=1&category=518&category_name=Fever%20&%20Immunity",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/shopbyDiseases/03.png",
    alt: "respiretory Health",
    href: "/shop?page=1&category=529&category_name=Respiratory%20Health",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/shopbyDiseases/05.png",
    alt: "Pitta Relif",
    href: "/shop?page=1&category=527&category_name=Pitta%20Relief",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/shopbyDiseases/07 (1).png",
    alt: "Heart Care",
    href: "/shop?page=1&category=521&category_name=Heart,%20BP%20&%20Cholesterol",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/shopbyDiseases/14.png",
    alt: "Join Care",
    href: "/shop?page=1&category=523&category_name=Joint,%20Muscle%20&%20Bone%20Care",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/shopbyDiseases/08 (1).png",
    alt: "Weight Loss",
    href: "/shop?page=1&category=533&category_name=Weight%20Loss",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/shopbyDiseases/10.png",
    alt: "Digestive Health",
    href: "/shop?page=1&category=515&category_name=Digestive%20Health",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/shopbyDiseases/11.png",
    alt: "Diabetes",
    href: "/shop?page=1&category=514&category_name=Diabetes",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/shopbyDiseases/12.png",
    alt: "Child Care",
    href: "/shop?page=1&category=513&category_name=Child%20Care",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/shopbyDiseases/133.png",
    alt: "Eye Care",
    href: "/shop?page=1&category=516&category_name=Eye%20care",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/shopbyDiseases/15.png",
    alt: "Kidney & liver Care",
    href: "/shop?page=1&category=525&category_name=Kidney%20&%20Liver%20care",
  },
];
const Grocery = [
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/Natural Grocery/G01.png",
    alt: "Grains & daliya",
    href: "/shop?page=1&category=585&category_name=Grains%20&%20Daliya",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/Natural Grocery/G02.png",
    alt: "Flours",
    href: "/shop?page=1&category=587&category_name=Flours%20-%20Atta",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/Natural Grocery/G03.png",
    alt: "Pulses & Dals",
    href: "/shop?page=1&category=589&category_name=Pulses%20&%20Dals",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/Natural Grocery/G04.png",
    alt: "Oils & Ghee ",
    href: "/shop?page=1&category=591&category_name=Oils%20&%20Ghee",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/Natural Grocery/G05 (1).png",
    alt: "Spices Whole",
    href: "/shop?page=1&category=767&category_name=Spices%20Whole%20&%20Powders",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/Natural Grocery/G06.png",
    alt: "Handmade Masala",
    href: "/shop?page=1&category=595&category_name=Handmade%20&%20Blended%20Spices",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/Natural Grocery/Jaggery.png",
    alt: "Jaggery",
    href: "/shop?page=1&category=757&category_name=Jaggery",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/Natural Grocery/G08 (1).png",
    alt: "Salt & Sugar",
    href: "/shop?page=1&category=754&category_name=Salt,%20Sugar%20&%20Jaggery",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/Natural Grocery/G09.png",
    alt: "Super Foods",
    href: "/shop?page=1&category=601&category_name=Super+Foods",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/Natural Grocery/Honey.png",
    alt: "Honey,Jam & Gulkand",
    href: "/shop?page=1&category=322&category_name=Honey,%20Jam%20&%20Gulkand",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/Natural Grocery/G11 (1).png",
    alt: "Dry Fruits",
    href: "/shop?page=1&category=759&category_name=Dryfruit,%20Saffron%20&%20Seeds",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/Natural Grocery/G12.png",
    alt: "International Cuisine",
    href: "/shop?page=1&category=599&category_name=Healthy%20International%20Cuisine",
  },
];
const brands = [
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/01.png",
    alt: "Gir Gauveda",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/02.png",
    alt: "So Good",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/03.png",
    alt: "Spices Board",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/04.png",
    alt: "Himalayan Mountain",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/05.png",
    alt: "CoffeeCo",
    href: "/shop?page=1&search=cof",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/06.png",
    alt: "Shishu veda",
    href: "/shop?page=1&search=yashoda",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/07.png",
    alt: "Vama Herbal",
    href: "/shop?page=1&search=VAMA",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/08.png",
    alt: "Kapita",
    href: "/shop?page=1&search=Kapita",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/09.png",
    alt: "Pureco",
    href: "/shop?page=1&search=pureco",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/10.png",
    alt: "Cocoa",
    href: "/shop?page=1&search=cocoa",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/11.png",
    alt: "Choci Logo",
    href: "/shop?page=1&search=choci",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/12.png",
    alt: "D'SOSE Logo",
    href: "/shop?page=1&search=d%27sose",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/18.webp",
    alt: "So Millet",
    href: "/shop?page=1&category=585&category_name=SO+Millet",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/14.png",
    alt: "OGS Logo",
    href: "/shop?page=1&category=288&category_name=Gifting",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/15.png",
    alt: "Sidha Kisan Se",
    href: "/shop?page=1&search=Sidha%20kisan%20se",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/16.png",
    alt: "Sose Pure Nature",
    href: "/shop?page=1&category=492&category_name=SOSE Pure Nature",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/17.png",
    alt: "Sweekies Logo",
    href: "/shop?page=1&search=sweekies",
  },
];
// const imageInfo = [
//   {
//     src: "https://www.pureco.shop/web/image/887231/icon_sose.png",
//     name: "NON-GMO Product",
//   },
//   {
//     src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/nongmo/Ethical & Natural.png",
//     name: "Ethical & Natural",
//   },
//   {
//     src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/nongmo/Vegetarian.png",
//     name: "Vegetarian",
//   },
//   {
//     src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/nongmo/Quality you'll Love Guaranteed.png",
//     name: "Quality you'll Love Guaranteed",
//   },
//   {
//     src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/nongmo/Minimum Order Value Rs.250.png",
//     name: "Minimum Order Value Rs.250",
//   },
//   {
//     src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/nongmo/Best Service.png",
//     name: "Best Service",
//   },
// ];

export default function Home() {
  const [isFullScreen] = useMediaQuery("(min-width: 768px)");
  const width = useBreakpointValue({ base: "100%", lg: "100%" });
  const height = useBreakpointValue({ base: "300", lg: "400" });
  const [banners, setBanners] = useState([]);
  const [Mbanners, setMBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [homeData, setHome] = useState({});
  const [sections, setSections] = useState([]);
  const [awardsSection, setAwardSection] = useState([]);
  const [servicesSection, setServicesSection] = useState([]);
  const [availableSection, setAvailableSection] = useState([]);
  const [CertificateSection, setCertificateSection] = useState([]);
  const [NonGmoSection, setNonGmoSection] = useState([]);
  const [BestsallerSection, setBestsallerSection] = useState([]);
  const loginInfo = checkLogin();
  const [AboutSection, setAboutSection] = useState([]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const checkOrSetUDIDInfo = CheckOrSetUDID();
  const [showPopup, setShowPopup] = useState(
    sessionStorage.getItem("hasShownPopup")
  );
  // let [isFull] = useMediaQuery("(max-width:1920px)");
  const [blogs, setBlogs] = useState([]);
  const [statisticsSection, setStatisticsSection] = useState([]);
  const isMobiles = width <= 768;
  const navigate = useNavigate();
  useEffect(() => {
    const init = async () => {
      await CheckOrSetUDID();
    };

    init();

    //getHomePageData();
    getBanners();
    getMBanners();
    getBlogs();
    setLoading(false);
    getLowerSection();
    getUpper();
    getStatisticsSection();
    if (showPopup === null && !loginInfo.isLoggedIn) {
      setIsLoginModalOpen(true);
    }
  }, []);

  async function getStatisticsSection() {
    const params = {};
    const response = await client.get("/statistics-section/", {
      params: params,
    });
    if (response.data.status === true) {
      setStatisticsSection(response?.data?.data);
    }
  }
  async function getBanners() {
    setLoading(true);
    try {
      const response = await client.get("/ecommerce/banners/?sequence=Upper");

      if (response.data.status === true) {
        setBanners(response?.data?.banner);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  }

  async function getMBanners() {
    setLoading(true);
    try {
      const response = await client.get("/ecommerce/banners/?sequence=Middle");

      if (response.data.status === true) {
        setMBanners(response?.data?.banner);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  }

  async function getBlogs() {
    const params = {};
    const response = await client.get("/home/blogs/", {
      params: params,
    });
    if (response.data.status === true) {
      setBlogs(response.data.blogs);
    }
  }
  async function getLowerSection() {
    const params = {};
    const response = await client.get("/lower-section/", {
      params: params,
    });
    if (response.data.status === true) {
      setSections(response.data.data);

      const ourServicesSection = response.data.data?.filter(
        (section) => section.id === 2
      );
      const availableAtSection = response.data.data?.filter(
        (section) => section.id === 3
      );
      const ourAwardsSection = response.data.data?.filter(
        (section) => section.id === 1
      );

      setAwardSection(ourAwardsSection);
      setServicesSection(ourServicesSection);
      setAvailableSection(availableAtSection);
    }
  }

  const getUpper = async () => {
    const response = await client.get("/pureco-section");
    if (response.data.status === true) {
      setSections(response.data.data);
      const ourAboutSection = response.data.data?.filter(
        (section) => section.id === 1
      );
      const ourCertificateSection = response.data.data?.filter(
        (section) => section.id === 2
      );
      const ourBestsallerSection = response.data.data?.filter(
        (section) => section.id === 3
      );
      const ourNonGmoSection = response.data.data?.filter(
        (section) => section.id === 4
      );

      setAboutSection(ourAboutSection);
      setCertificateSection(ourCertificateSection);
      setBestsallerSection(ourBestsallerSection);
      setNonGmoSection(ourNonGmoSection);
    }
  };

  const new_arrival_gir_gauveda = [
    // {
    //   image1: "./Pureco/Home/Pureco Disposable 3 C.P.jpg",
    //   src: "disposable",
    //   name: "Disposable Square Plate",
    //   id: 1749,
    // },
    {
      image1: "./Pureco/Home/wood comb.jpg",
      src: "disposable",
      name: "Neem Wood Comb",
      id: 1757,
    },
    {
      image1: "./Pureco/Home/wood comb handle.jpg",
      src: "Wood Comb",
      name: "Neem Wood Comb - Handle",
      id: 1756,
    },
    {
      image1: "./Pureco/Home/Pureco Neem Wood Tooth Brush (1 pcs).jpg",
      src: "Toothbrush",
      name: "Neem Wood Toothbrush",
      id: 1761,
    },
    {
      image1: "./Pureco/Home/Bamboo_Tooth_Brush.jpg",
      src: "Tooth Brush",
      name: "Bamboo Tooth Brush",
      id: 1755,
    },
  ];

  return (
    <>
      {/* {loading === true ? (
        <Center h="100vh" w="100vw" backgroundColor={"bg.500"}>
          <Loader site={true} />
        </Center>
      ) : (
        <> */}
      <Navbar />
      {/* <Container maxW={"container.xl"} px={0}>
        {loading === true ? (
          <Skeleton h={489}></Skeleton>
        ) : (
          <Carousel banners={puroco} />
        )}
      </Container> */}

      <Container maxW={"container.xl"} px={0}>
        {loading === true ? (
          <Skeleton h={489}></Skeleton>
        ) : (
          <Carousel banners={banners?.length > 0 && banners} />
        )}
        {/* <Image w={"100%"} h={489} src={require("../assets/Home/1.jpg")} /> */}
      </Container>

      {AboutSection?.length > 0 &&
        AboutSection[0]?.is_visible_on_website === true && (
          <>
          <Container maxW={"container.xl"} mb={8} px={0}>
            <Text
              fontSize={{ base: "xl", sm: "2xl", xl: "2xl" }}
              fontWeight={500}
              bgColor={"bg.500"}
              textAlign={{ base: "center", md: "start" }}
              px={{ base: 2, md: 8 }}
              py={4}
              //my={3}
            >
              {AboutSection[0]?.label}
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
              {AboutSection[0]?.description}
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
      
      {CertificateSection?.length > 0 &&
        CertificateSection[0]?.is_visible_on_website === true && (
          <Container mb={5} px={0} mt={12} maxW={"container.xl"} centerContent>
            <LazyLoadImage
              src={CertificateSection[0]?.image}
              alt=""
              style={{
                opacity: 1,
                transition: "opacity 0.7s", // Note the corrected syntax here
              }}
            />
          </Container>
        )}
      {BestsallerSection?.length > 0 &&
        BestsallerSection[0]?.is_visible_on_website === true && (
          <SecondProductListSection
            title={BestsallerSection[0]?.label}
            loading={loading}
            //image={new_arrival_gir_gauveda.image1}
            products={BestsallerSection[0]?.images}
            type={isMobile && "carousal"}
          />
        )}
      <Container maxW={"container.xl"} px={0}>
        {loading === true ? (
          <Skeleton h={489}></Skeleton>
        ) : (
          <Carousel banners={Mbanners?.length > 0 && Mbanners} />
        )}
        {/* <Image w={"100%"} h={489} src={require("../assets/Home/1.jpg")} /> */}
      </Container>

      <Container maxW={"container.xl"}>
        <Heading color="brand.500" size="lg" mx="auto" align={"center"} mt={3}>
          BLOGS
        </Heading>

        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(4,1fr)",
          }}
          px={2}
          py={3}
          spacing="40px"
        >
          {blogs?.slice(0, 8).map((blog) => (
            <GridItem key={blog.id} m={4}>
              <Card>
                <LinkBox h={400}>
                  <Image
                    src={blog.banner}
                    w="100%"
                    h="300px"
                    loading="lazy"
                    objectFit={"cover"}
                    borderRadius={5}
                    style={{
                      opacity: 1,
                      transition: "opacity 0.7s", // Note the corrected syntax here
                    }}
                  />
                  <LinkOverlay
                    _hover={{ color: "brand.500" }}
                    href={`/blogs/${blog.id}/`}
                  >
                    <Heading size="sm" fontWeight={500} m={2}>
                      {blog.title}
                    </Heading>
                  </LinkOverlay>
                </LinkBox>
                <Flex m={2} justifyContent={"space-between"}>
                  <Text fontSize={"sm"} color="brand.500">
                    {new Intl.DateTimeFormat("en-CA", {
                      dateStyle: "long",
                      timeZone: "Asia/Kolkata",
                    }).format(new Date(blog.published_at))}
                  </Text>
                  <Text
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"brand.500"}
                    onClick={() => navigate(`/blogs/${blog.id}/`)}
                    cursor={"pointer"}
                  >
                    Read more
                    <ChevronRightIcon />
                  </Text>
                </Flex>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </Container>
      {statisticsSection?.length > 0 &&
        statisticsSection[0]?.is_visible_on_website === true && (
      <Container maxW={"container.xl"} backgroundColor={"bg.500"} mt={3} py={2}>
        <SimpleGrid
          columns={[2, 3, null, 4]}
          px={6}
          maxW={"container.xl"}
          my={6}
          // backgroundColor={"bg.500"}
          align="center"
          spacingX={{ base: "10vw", md: "30px" }}
          spacingY="40px"
        >
          {statisticsSection?.length > 0 &&
                statisticsSection?.map((data) => (
                  <Stat>
                    <StatNumber
                      color="brand.400"
                      fontSize={{ base: "3xl", md: "3xl" }}
                    >
                      {data?.value}
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
      {NonGmoSection?.length > 0 &&
        NonGmoSection[0]?.is_visible_on_website === true && (
          <Container maxW={"5xl"} mt={5}>
            <Image src={NonGmoSection[0]?.image} />
          </Container>
        )}
      {servicesSection?.length > 0 &&
        servicesSection[0]?.is_visible_on_website === true && (
          <Container maxW={{ base: "100vw", md: "container.xl" }}>
            <Heading
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
