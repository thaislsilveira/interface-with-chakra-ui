import { Box, Flex } from '@chakra-ui/react'

import { Header } from '../components/Header'

import { Dashboard } from '../components/Dashboard'

export default function Home() {
  return (
    <Box>
      <Header />
      <Flex direction="column" pb="40px">
        <Dashboard />
      </Flex>
    </Box>
  )
}
