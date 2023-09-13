'use client'

import { AbsoluteCenter, Box, Center, Flex, HStack, Heading, Image, Spacer, Stack, Text, VStack } from "@chakra-ui/react"
import TriangleRotation from "../components/TriangleRotation"
export default function Home() {
  return (
    <>
      <Center mt={'5rem'} alignItems={'center'} >
      
      <VStack  align={'start'}>

        <Text fontWeight={'semibold'} fontSize={'2x1'}>Olá,sou</Text>
       
        <HStack spacing='0px'>

          
          <Heading color={'gargoyle'}>Davi Ga</Heading>
          <Heading>ldino</Heading>

        </HStack>

        <Text align={'center'} fontWeight={'semibold'} >Site em construção</Text>

     
     
        <TriangleRotation/>
        </VStack>
      </Center>
    </>
  )
}
