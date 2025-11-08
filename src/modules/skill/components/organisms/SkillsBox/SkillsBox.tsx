import { Box, BoxProps, Circle, Flex, Spacer, Text } from '@chakra-ui/react'
import { memo, useMemo } from 'react'
import { Utils } from 'react-minimist-utils'
import { motion } from 'framer-motion'
import type { FC } from 'react'

/**
 * SkillsBox Component
 * Displays a list of skills with rating indicators
 */
export interface SkillsBoxProps extends BoxProps {
  boxTitle: string
  data: SkillItem[]
}

export interface SkillItem {
  name: string
  rate: number
}

export const SkillsBox: FC<SkillsBoxProps> = memo(
  ({ boxTitle, className = '', data, ...props }) => {
    const sortedList = useMemo(() => {
      const { list } = Utils.Array.sortList({
        list: data,
        field: 'rate',
        sortType: 'desc',
      })
      return list
    }, [data])

    const renderRating = () => {
      return sortedList.map((item, index) => {
        return (
          <Flex
            key={item.name}
            alignItems="center"
            marginBottom="5px"
          >
            <Text fontSize={{ base: 'md', sm: 'lg', md: 'xl' }} fontWeight="medium">
              {item.name}
            </Text>
            <Spacer />

            <Flex gap="5px">
              {new Array(10).fill('').map((_, dotIndex) => {
                const MotionCircle = motion(Circle)
                const isFilled = dotIndex <= item.rate - 1
                
                return (
                  <MotionCircle
                    key={`${item.name}-circle-${dotIndex}`}
                    initial={{ scale: 1, backgroundColor: 'var(--chakra-colors-gray-300)' }}
                    animate={isFilled ? { 
                      scale: [1, 1.3, 1],
                      backgroundColor: 'var(--chakra-colors-gray-700)',
                    } : {}}
                    transition={{
                      delay: isFilled ? index * 0.1 + dotIndex * 0.08 : 0,
                      duration: 0.4,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    bg={isFilled ? 'gray.700' : 'gray.300'}
                    size={{ base: '10px', sm: '15px' }}
                  />
                )
              })}
            </Flex>
          </Flex>
        )
      })
    }

    return (
      <Box
        border="1px"
        borderRadius="8px"
        className={`skills-box ${className}`}
        maxWidth="420px"
        minWidth="300px"
        padding="15px 30px"
        textAlign="center"
        width="100%"
        height="auto"
        {...props}
      >
        <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="semibold" marginBottom="20px">
          {boxTitle}
        </Text>

        {renderRating()}
      </Box>
    )
  }
)

SkillsBox.displayName = 'SkillsBox'
