'use client'

import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue('gargoyle', 'raisin')} px={4}>
        <Flex h={'4rem'} alignItems={'center'} justifyContent={'space-between'}>
        <Box boxSize='2rem'>
          <Image src='./images/icon.svg' alt='Icon' />
        </Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button backgroundColor={'gargoyle'} onClick={toggleColorMode}>
                {colorMode === 'light' ? <SunIcon /> : <MoonIcon /> }
              </Button>

              
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
