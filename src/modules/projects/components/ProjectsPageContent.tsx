import { memo } from 'react';
import type { FC } from 'react';
import { SimpleGrid, Stack, VStack } from '@chakra-ui/react';
import type { StackProps } from '@chakra-ui/react';

import { useI18n } from '@/core/i18n';
import { Title } from '@/core/components/atoms';
import { ProjectCard, ProjectCardProps } from './organisms';

/**
 * ProjectsPageContent Component
 * Core content for the Projects page
 * Contains the header and project cards grid
 */
export interface ProjectsPageContentProps extends StackProps {}

export const ProjectsPageContent: FC<ProjectsPageContentProps> = memo((props) => {
  const { t } = useI18n();

  // Project data with i18n support
  const projects: ProjectCardProps[] = [
    {
      title: t('projects.aiNote.title'),
      description: t('projects.aiNote.description'),
      url: 'https://ainote.lionguyen.com/',
      githubUrl: 'https://github.com/LioNguyen/project-ai-note',
      logoUrl: 'https://ainote.lionguyen.com/logo.png',
      tags: ['Next.js', 'React', 'TypeScript', 'Clerk', 'Pinecone', 'Google Gemini', 'Tailwind CSS', 'shadcn/ui'],
    },
    {
      title: t('projects.movieBrowser.title'),
      description: t('projects.movieBrowser.description'),
      url: 'https://movie.lionguyen.com/',
      githubUrl: 'https://github.com/LioNguyen/project-movie',
      logoUrl: 'https://movie.lionguyen.com/logo.png',
      tags: ['React', 'TypeScript', 'Redux', 'Redux-Saga', 'SCSS', 'TMDB API', 'Vite'],
    },
    {
      title: t('projects.reactMinimistUtils.title'),
      description: t('projects.reactMinimistUtils.description'),
      url: 'https://www.npmjs.com/package/react-minimist-utils',
      githubUrl: 'https://github.com/LioNguyen/project-react-minimist-utils',
      logoUrl: new URL('/src/shared/assets/images/npm-logo.png', import.meta.url).href,
      tags: ['React', 'TypeScript', 'Utilities', 'Hooks', 'NPM Package'],
    },
  ];

  return (
    <Stack
      className="projects__content"
      height={'100%'}
      textAlign="center"
      {...props}
    >
      {/* START: Header */}
      <Title>
        {t('projects.title')}
      </Title>
      {/* END: Header */}

      {/* START: Body */}
      <Stack
        flex={1}
        justifyContent={{ base: 'flex-start', md: 'center' }}
        alignItems="center"
        marginTop="20px"
      >
        <VStack spacing={8} align="stretch" width="100%" maxW="container.xl">
          {/* Projects Grid */}
          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={6}
            w="full"
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                url={project.url}
                githubUrl={project.githubUrl}
                logoUrl={project.logoUrl}
                tags={project.tags}
              />
            ))}
          </SimpleGrid>
        </VStack>
      </Stack>
    </Stack>
  );
});

ProjectsPageContent.displayName = 'ProjectsPageContent';
