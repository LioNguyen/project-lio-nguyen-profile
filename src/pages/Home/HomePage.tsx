import ProfileImage_1 from '@/shared/assets/images/profile_1.jpeg'
import { Center, Container, ContainerProps, Divider, Image, Stack, Text } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import type { FC } from 'react'
import { memo, useState } from 'react'
// import { BiMouse } from 'react-icons/bi'
// import { FaArrowDown } from 'react-icons/fa6'
import { CgFileDocument } from 'react-icons/cg'
// import { Hooks } from 'react-minimist-utils'
import { Utils } from 'react-minimist-utils'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'

import { CustomButton } from '@/core/components/atoms'
import { SocialWidget } from '@/core/components/organisms'
import { HAND_ICON_URL, CV_URL } from '@/core/config/constants'

/**
 * HomePage Component
 * Landing page with introduction and profile image
 */
export interface HomePageProps extends ContainerProps {}

const profileAnimate = keyframes`
  0% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
  50% {
    border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
  }
`

const profileAnimation = `${profileAnimate} 8s ease-in-out infinite alternate;`

// const downAnimate = keyframes`
//   0% {
//     transform: translateY(-3px);
//   }
//   100% {
//     transform: translateY(3px);
//   }
// `

// const arrowAnimation = `${downAnimate} 0.8s ease-in-out infinite alternate;`

export const HomePage: FC<HomePageProps> = memo((props) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  // const { scrollTo} = Hooks.Window.useScrollTo()

  const descriptionText = "Coding is not just a skill. It's my avenue for expressing creativity and turning ideas into reality.";

  return (
    <Container
      height={{ base: 'unset', sm: '100vh' }}
      id="home"
      minH={{ base: 'unset', sm: '700px' }}
      variant="pageLayout"
      {...props}
    >
      {/* Content section */}
      <Stack
        alignItems="center"
        className="home__content"
        flexDirection={{ base: 'column-reverse', sm: 'row' }}
        gap={6}
        height="100%"
        paddingLeft={{ base: 0, sm: 20 }}
        position="relative"
      >
        <SocialWidget />

        {/* Left side */}
        <Stack
          alignItems="flex-start" 
          className="home__left" 
          flex={1} 
          gap={5}
        >
          <Stack
            alignItems="center" 
            direction="row" 
            gap={4} 
            width="100%"
          >
            <Text variant="title" whiteSpace="nowrap">
              Nghi Nguyen
            </Text>
            <Image
              alt="hand-icon" 
              src={HAND_ICON_URL} 
            />
          </Stack>

          <Stack
            alignItems="center" 
            direction="row" 
            gap={4} 
            width="100%"
          >
            <Divider
              borderBottomWidth={2}
              display={{ base: 'none', md: 'block' }}
              width={{ base: 0, sm: '50px' }}
            />
            <Text
              color="default.titleDark"
              variant="subtitle"
              whiteSpace={{ base: 'unset', md: 'nowrap' }}
            >
              Software Engineer (Frontend)
            </Text>
          </Stack>

          <Text
            color="default.text" 
            fontSize={{ base: 'sm', sm: 'md' }}
          >
            <TypeAnimation
              sequence={[descriptionText]}
              wrapper="span"
              speed={50}
              style={{ 
                fontSize: 'inherit',
                color: 'inherit',
                display: 'inline-block'
              }}
              cursor={true}
              repeat={0}
            />
          </Text>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <CustomButton
              onClick={() => Utils.Data.downloadFile(CV_URL)}
              rightIcon={<CgFileDocument color="white" size={25} />}
              transformOrigin="center"
            >
              Download CV
            </CustomButton>
          </motion.div>
        </Stack>

        {/* Right side */}
        <Center className="home__right" flex={1}>
          <Image
            alt="My Profile"
            animation={profileAnimation}
            borderRadius="full"
            boxShadow="dark-lg"
            boxSize={{ base: 150, sm: 320, md: 420 }}
            display={isImageLoaded ? 'block' : 'none'}
            fallbackSrc="https://via.placeholder.com/150"
            margin="auto"
            objectFit="cover"
            onLoad={() => setIsImageLoaded(true)}
            src={ProfileImage_1}
          />
        </Center>
      </Stack>

      {/* Arrow down section */}
      {/* <Stack
        alignItems="center"
        as="button"
        bottom={50}
        display={{ base: 'none', sm: 'flex' }}
        flexDirection="row"
        left={3}
        onClick={() => scrollTo(window.innerHeight || 1000, 0)}
        position="absolute"
        sx={{
          '.arrow-down': {
            animation: arrowAnimation,
          },
        }}
      >
        <BiMouse size={50} /> <Text>Scroll Down</Text>{' '}
        <FaArrowDown className="arrow-down" size={20} />
      </Stack> */}
    </Container>
  )
})

HomePage.displayName = 'HomePage'
