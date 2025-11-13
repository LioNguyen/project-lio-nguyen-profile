import React, { type ReactNode } from 'react';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from '@chakra-ui/react';

/**
 * Props for BaseDrawer component
 */
export interface BaseDrawerProps {
  /** Controls drawer open/close state */
  isOpen: boolean;
  /** Callback when drawer should close */
  onClose: () => void;
  /** Header content - can be string or custom React node */
  header?: ReactNode;
  /** Body content */
  children: ReactNode;
  /** Drawer size - responsive by default */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full' | Record<string, string>;
  /** Placement of drawer */
  placement?: 'top' | 'right' | 'bottom' | 'left';
  /** Show close button */
  showCloseButton?: boolean;
  /** Custom header styles */
  headerProps?: Record<string, any>;
  /** Custom body styles */
  bodyProps?: Record<string, any>;
  /** Overlay background color */
  overlayBg?: string;
}

/**
 * BaseDrawer - Reusable drawer component
 * 
 * Features:
 * - Configurable placement and size
 * - Customizable header and body
 * - Optional close button
 * - Responsive sizing
 * - Fast animations
 */
export const BaseDrawer: React.FC<BaseDrawerProps> = ({
  isOpen,
  onClose,
  header,
  children,
  size = { base: 'full', md: 'md' },
  placement = 'right',
  showCloseButton = true,
  headerProps = {},
  bodyProps = {},
  overlayBg = 'blackAlpha.400',
}) => {
  return (
    <Drawer 
      isOpen={isOpen} 
      placement={placement} 
      onClose={onClose} 
      size={size}
    >
      <DrawerOverlay 
        bg={overlayBg}
        sx={{
          // Fast, linear fade - no easing delay
          transition: 'opacity 0.05s linear !important',
        }}
      />
      <DrawerContent
        margin={{ base: 0, md: 4 }}
        maxHeight={{ base: '100vh', md: 'calc(100vh - 32px)' }}
        borderRadius={{ base: '0 0 16px 0', md: '16px' }}
        boxShadow="2xl"
        bg="white"
        sx={{
          // Fast, linear slide - no slow start
          transition: 'transform 0.12s linear !important',
        }}
      >
        {/* Close button - positioned absolutely at top-right */}
        {showCloseButton && (
          <Box
            position="absolute"
            top={4}
            right={4}
            zIndex={10}
            onClick={onClose}
            cursor="pointer"
            width="40px"
            height="40px"
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="md"
            bg="transparent"
          >
            <Text fontSize="24px" fontWeight="bold" color="white">
              ×
            </Text>
          </Box>
        )}
        
        {/* Header */}
        {header && (
          <DrawerHeader
            py={{ base: 3, md: 4 }}
            borderBottomWidth="1px"
            borderBottomColor="gray.200"
            borderTopRadius={{ base: 0, md: '16px' }}
            pr={{ base: 12, md: 6 }}
            {...headerProps}
          >
            {typeof header === 'string' ? (
              <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">
                {header}
              </Text>
            ) : (
              header
            )}
          </DrawerHeader>
        )}

        {/* Body */}
        <DrawerBody 
          py={{ base: 4, md: 5 }} 
          borderBottomRadius={{ base: '0 0 16px 0', md: '16px' }}
          px={{ base: 4, md: 5 }}
          {...bodyProps}
        >
          {children}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
