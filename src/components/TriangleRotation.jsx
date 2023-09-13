import { Box, Container, Image, chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

export default function TriangleRotation() {
  return (
    <Container h="70vh" display="flex" alignItems="center" justifyContent="center">
      <ChakraBox
        animate={{
          rotate: [0,90, 180, 270, 360, 360,270,180,90,0],
        }}
        // @ts-ignore no problem in operation, although type error appears.
        transition={{
          duration: 10,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop",
        }}
       
      >
         <Box mt={'6rem'} boxSize='sm'>
            <Image src='./images/icon.svg' alt='Icon' />
          </Box>
      </ChakraBox>
    </Container>
  )
}