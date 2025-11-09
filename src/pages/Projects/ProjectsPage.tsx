import { Container } from '@chakra-ui/react'
import { memo } from 'react'
import type { FC } from 'react'

import { ComingSoon } from '@/core/components/molecules'

/**
 * ProjectsPage Component
 * Displays projects showcase (coming soon)
 */
export const ProjectsPage: FC = memo(() => {
  return (
    <Container id="projects" variant="pageLayout">
      <ComingSoon 
        titleKey="projects.comingSoonTitle"
        descriptionKey="projects.comingSoonDescription"
      />
    </Container>
  )
})

ProjectsPage.displayName = 'ProjectsPage'
