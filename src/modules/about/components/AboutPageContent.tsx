import { memo } from 'react';
import type { FC } from 'react';
import { Stack, Text } from '@chakra-ui/react';
import type { StackProps } from '@chakra-ui/react';

import ProfileImage_2 from '@/shared/assets/images/profile_2.jpeg';
import { AboutSection } from './organisms/AboutSection';

/**
 * AboutPageContent Component
 * Main content wrapper for the About page
 * Orchestrates profile image, stats, and descriptive content
 */
export interface AboutPageContentProps extends StackProps {}

export const AboutPageContent: FC<AboutPageContentProps> = memo((props) => {
  // Markdown content with paragraphs separated by double newlines
  const content = `During high school, I was part of the Informatics Talent Team at Trần Đại Nghĩa, one of Vietnam's top specialized schools. I reached the Olympic finals in programming competitions and earned my Microsoft Office Specialist certification. But when it came time for university, I chose a different path — studying Accounting & Auditing at Ho Chi Minh University of Banking. I thought I was being practical, choosing safety over passion.

For nearly 4 years, I worked as an accountant. The work was stable, but every day I felt the gap between what I was doing and what I wanted to do growing wider. I watched developers create products that touched millions while I reconciled spreadsheets. The fear of starting over at 26, with no formal CS degree, almost stopped me. "Am I too late? Can I really do this?" — these questions haunted me.

In 2020, I made the hardest decision of my life: I taught myself programming from zero. The first months were brutal. I spent nights debugging code that seemed impossible, watching tutorials on repeat, feeling like everyone else understood something I didn't. There were moments I wanted to quit — when a single bug took days to fix, when interviews rejected me for "lack of experience," when I questioned if I'd wasted years on the wrong path.

But I kept going. My accounting background, the thing I thought was a disadvantage, became my strength. I understood business requirements, user workflows, and system reliability in ways bootcamp grads didn't. I learned to break down complex problems into smaller pieces — the same skill I used balancing books. Slowly, one small win at a time, I built confidence. Each solved bug, each working feature, each "aha!" moment proved I could do this.

Today, 5+ years later, I architect enterprise solutions for global companies. But more importantly, I proved to myself that it's never too late. The journey from accounting to engineering wasn't about talent — it was about showing up every day, especially on days I didn't want to. If you're thinking about changing careers, learning something new, or chasing a dream that seems impossible: start messy, stay consistent, and trust the process. Your past doesn't limit you — it prepares you.`;

  // Keywords to highlight for inspiration
  const highlights = [
    // Background & Education
    'Informatics Talent Team', 'Trần Đại Nghĩa', 'Olympic finals',
    'Microsoft Office Specialist certification', 'Accounting & Auditing', 'Ho Chi Minh University of Banking',
    
    // Challenges & Emotions
    'safety over passion', 'gap growing wider', 'fear of starting over',
    'too late', 'hardest decision', 'brutal', 'impossible', 'wanted to quit',
    'lack of experience', 'questioned', 'wasted years',
    
    // Transformation & Growth
    'taught myself programming', 'kept going', 'strength', 'break down complex problems',
    'small win at a time', 'built confidence', 'proved I could do this',
    
    // Inspiration & Wisdom
    'never too late', 'showing up every day', 'start messy', 'stay consistent',
    'trust the process', 'past doesn\'t limit you', 'prepares you'
  ];

  return (
    <Stack className="about__content" height="100%" textAlign="center" {...props}>
      {/* START: Header */}
      <Text variant="title">
        About Me
      </Text>
      {/* END: Header */}

      {/* START: Body */}
      <Stack
        flex={1}
        justifyContent={{ base: 'flex-start', md: 'center' }}
        marginTop="20px"
      >
        <AboutSection
          profileImage={ProfileImage_2}
          profileImageAlt="My Profile"
          content={content}
          highlights={highlights}
        />
      </Stack>
      {/* END: Body */}
    </Stack>
  );
});

AboutPageContent.displayName = 'AboutPageContent';
