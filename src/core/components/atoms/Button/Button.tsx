import { Button, ButtonProps } from '@chakra-ui/react'
import { memo } from 'react'
import type { FC } from 'react'

/**
 * CustomButton Component
 * A reusable button component with consistent styling and behavior
 */
export interface CustomButtonProps extends ButtonProps {
  href?: string
}

export const CustomButton: FC<CustomButtonProps> = memo(
  ({ children, className, href, ...props }) => {
    return (
      <Button
        as="a"
        className={className}
        href={href}
        marginTop={{ base: 5, sm: 10 }}
        transform={{ base: 'scale(0.8)', sm: 'none' }}
        transformOrigin="left"
        {...props}
      >
        {children}
      </Button>
    )
  }
)

CustomButton.displayName = 'CustomButton'
