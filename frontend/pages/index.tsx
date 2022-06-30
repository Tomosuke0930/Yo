import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Spacer,
  Text,
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import { ConnectWallet } from '../components/ConnectWallet'
import { ArrowDownIcon, SettingsIcon } from '@chakra-ui/icons'
import { Header } from '../components/Header'
import { Layout } from '../layout'

const Home: NextPage = () => {
  return (
    <Layout color='base.dark'>
      <Box bg='#181B1E' mx='60' my='4' borderRadius='18'>
        {/* <Flex color='white' px='8' py='2'>
          <Box>Yo</Box>
          <Spacer />
          <SettingsIcon />
        </Flex> */}

        <Center pb='8' py='16'>
          <Button colorScheme='blue' px='36'>
            Mint
          </Button>
        </Center>
      </Box>
    </Layout>
  )
}

export default Home
