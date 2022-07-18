import { Box, Flex, Text } from '@chakra-ui/layout'
import { Icon, Image } from '@chakra-ui/react' // Better for avatars instead of image optimization.

const GradientLayout = ({
  color,
  children,
  image,
  icon,
  subtitle,
  title,
  description,
  roundImage,
}) => {
  return (
    <Box
      height="100%"
      overflowY="auto"
      bgGradient={`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0, 0, 0, 0.95) 75%)`}
    >
      <Flex bg={`${color}.600`} padding="40px" align="end">
        <Box padding="20px">
          {image && (
            <Image
              boxSize="160px"
              boxShadow="2xl"
              src={image}
              borderRadius={roundImage ? '100%' : '3px'}
            />
          )}
          {icon && (
            <Icon as={icon} color="white" width="160px" height="160px" />
          )}
        </Box>
        <Box padding="20px" lineHeight="40px" color="white">
          <Text fontSize="x-small" fontWeight="bold" casing="uppercase">
            {subtitle}
          </Text>
          <Text fontSize="7xl" fontWeight="bold">
            {title}
          </Text>
          <Text fontSize="x-small">{description}</Text>
        </Box>
      </Flex>
      <Box paddingY="10px">{children}</Box>
    </Box>
  )
}

export default GradientLayout
