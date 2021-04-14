import { useState } from 'react'

import { Box, Text } from '@chakra-ui/react'

import { Banner } from './Banner'
import { TravelTypes } from '../TravelTypes'
import { Divider } from './Divider'
import { Carousel } from './Carousel'

interface Slider {
  image: string
  title: string
  subtitle: string
}

export function Dashboard() {
  const [continets] = useState<Slider[]>([
    {
      image:
        'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'Europa',
      subtitle: 'O continente mais antigo'
    },
    {
      image:
        'https://images.pexels.com/photos/161963/chicago-illinois-skyline-skyscrapers-161963.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'América',
      subtitle: 'Diversidade linguística'
    },
    {
      image:
        'https://images.pexels.com/photos/59989/elephant-herd-of-elephants-african-bush-elephant-africa-59989.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'África',
      subtitle: 'Marcado por dois grandes desertos'
    }
  ])
  return (
    <>
      <Banner />
      <Box
        w="100%"
        mt={{
          base: '90px',
          lg: '114px'
        }}
        mx="auto"
        maxW={1440}
      >
        <TravelTypes />
        <Divider mt="80px" mb="50px" />
        <Text
          textAlign="center"
          color="gray.600"
          fontSize={{
            base: '20px',
            lg: '36px'
          }}
          fontWeight="500"
          mb="52px"
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Text>
        <Carousel sliders={continets} />
      </Box>
    </>
  )
}
