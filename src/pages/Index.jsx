import React from "react";
import { ChakraProvider, Box, VStack, Heading, Text, Button, Image, Input, useToast } from "@chakra-ui/react";
import { FaImage } from "react-icons/fa";

const Index = () => {
  const toast = useToast();
  const [imageUrl, setImageUrl] = React.useState("");

  const generateImage = () => {
    // Simulate image generation
    const query = "generated art";
    const newImageUrl = `https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHwlMjQlN0JxdWVyeSU3RHxlbnwwfHx8fDE3MDg2NDQ1NzZ8MA&ixlib=rb-4.0.3&q=80&w=1080`;
    setImageUrl(newImageUrl);
    toast({
      title: "Image generated!",
      description: "We've created a new image for you.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <ChakraProvider>
      <VStack p={8} spacing={5} align="center">
        <Heading as="h1">Image Generator Site</Heading>
        <Text>Generate beautiful images using AI</Text>
        <Box boxSize="sm">
          {imageUrl ? (
            <Image src={imageUrl} alt="Generated" />
          ) : (
            <Box p={20} bg="gray.100" borderRadius="md">
              <Text textAlign="center" color="gray.500">
                No image generated yet
              </Text>
            </Box>
          )}
        </Box>
        <Button leftIcon={<FaImage />} colorScheme="teal" onClick={generateImage}>
          Generate Image
        </Button>
      </VStack>
    </ChakraProvider>
  );
};

export default Index;
