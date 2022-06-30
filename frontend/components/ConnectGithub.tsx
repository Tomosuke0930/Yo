import { useEffect } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Web3Provider } from '@ethersproject/providers'
import { InjectedConnector } from '@web3-react/injected-connector'
import { Box, Button, Flex, Text } from '@chakra-ui/react'
import { shortenAddress } from '../lib'

export const ConnectGithub = () => {
  return (
    <Flex>
      <Button colorScheme='gray' border='2px' borderColor='white'>
        Connect Github
      </Button>
    </Flex>
  )
}
