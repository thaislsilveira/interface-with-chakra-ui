import { Flex, Image } from '@chakra-ui/react'

export function Header() {
  return (
    <Flex
      w="100%"
      h="100px"
      mx="auto"
      as="header"
      maxWidth={1440}
      align="center"
      justify="center"
    >
      <Image w="184" src="/images/logo.svg" alt="World Trip" />
    </Flex>
  )
}
