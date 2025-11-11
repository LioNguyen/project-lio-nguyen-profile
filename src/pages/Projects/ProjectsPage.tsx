import { Container } from '@chakra-ui/react'
import { memo } from 'react'
import type { FC } from 'react'

import { ProjectsPageContent } from '@/modules/projects/components'

/**
 * ProjectsPage Component
 * Displays projects showcase with interactive project cards
 */
export const ProjectsPage: FC = memo(() => {
  return (
    <Container id="projects" variant="pageLayout">
      <ProjectsPageContent />
    </Container>
  )
})

ProjectsPage.displayName = 'ProjectsPage'
