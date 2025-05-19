import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  useToast,
  Box,
  Tooltip,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import client from "../setup/axiosClient";
import { useNavigate } from "react-router-dom";
import checkLogin from "../utils/checkLogin";
import LoginModal from "../components/LoginModal";
import MetaTags from "../context/MetaTagsContext";
import ReCAPTCHA from "react-google-recaptcha";
import useScrollRestoration from "../utils/useScrollRestoration";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const recaptchaRef = useRef();
  const toast = useToast();
  const navigate = useNavigate();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  useScrollRestoration();

  const RECAPTCHA_SITE_KEY = process.env.REACT_reCAPTCHA_KEY; // 🔐 Use your actual key in .env

  async function sendResetPasswordRequest() {
    try {
      const response = await client.post("/user/reset-password/", {
        email,
        recaptcha: recaptchaToken, // Send token to backend if required
      });

      if (response.data.status) {
        toast({
          title: response.data.message,
          position: "top-right",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
        setEmail("");
        setRecaptchaToken(null);
        recaptchaRef.current.reset();
        setIsLoginModalOpen(true);
      } else {
        toast({
          title: response.data.message,
          position: "top-right",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: error.response?.data?.message || "Something went wrong",
        position: "top-right",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      toast({
        title: "Please verify you are not a robot.",
        status: "warning",
        duration: 4000,
        position: "top-right",
        isClosable: true,
      });
      return;
    }

    setLoading(true);
    await sendResetPasswordRequest();
  };

  const pageUrl = "/reset-password";

  return (
    <>
      <MetaTags pageUrl={pageUrl} />
      <Navbar />
      <Container maxW="md" py={10}>
        <Box
          p={8}
          boxShadow="lg"
          borderRadius="xl"
          bg="white"
          border="1px solid"
          borderColor="gray.100"
        >
          <Box textAlign="center" mb={6}>
            <Heading size="lg" color="#5b5b5b">
              Forgot Password
            </Heading>
          </Box>
          <form onSubmit={handleSubmit}>
            <Stack spacing={5}>
              <FormControl id="email" isRequired>
                <FormLabel>Registered Email Address</FormLabel>
                <Input
                  type="email"
                  variant="filled"
                  focusBorderColor="green.500"
                  borderRadius="md"
                  placeholder="you@example.com"
                  autoComplete="username"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={setRecaptchaToken}
                onExpired={() => setRecaptchaToken(null)}
              />

              <Tooltip
                bgColor={"brand.500"}
                label={!recaptchaToken ? "Please complete ReCAPTCHA first" : ""}
                hasArrow
                isDisabled={!!recaptchaToken}
              >
                <Button
                  colorScheme="brand"
                  type="submit"
                  isLoading={loading}
                  loadingText="Sending..."
                  borderRadius="full"
                  isDisabled={!recaptchaToken}
                >
                  Send Reset Code
                </Button>
              </Tooltip>
            </Stack>
          </form>
        </Box>
      </Container>

      {!checkLogin().isLoggedIn && (
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
        />
      )}

      <Footer />
    </>
  );
}
