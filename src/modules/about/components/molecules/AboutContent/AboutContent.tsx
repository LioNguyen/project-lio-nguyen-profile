import { memo, Fragment } from 'react';
import type { FC } from 'react';
import { Stack } from '@chakra-ui/react';
import type { StackProps } from '@chakra-ui/react';

import { SectionText } from '../../atoms/SectionText';

/**
 * AboutContent Component
 * Displays text content (intro + description) in a consistent layout
 */
export interface AboutContentProps extends StackProps {
  /** First paragraph of content */
  text1: string;
  /** Second paragraph of content */
  text2: string;
  /** Third paragraph of content (optional) */
  text3?: string;
  /** Fourth paragraph of content (optional) */
  text4?: string;
  /** Fifth paragraph of content (optional) */
  text5?: string;
}

export const AboutContent: FC<AboutContentProps> = memo(({ text1, text2, text3, text4, text5, ...props }) => {
  // Define keywords to highlight for each paragraph
  const highlights1 = ['Informatics Talent Team', 'Trần Đại Nghĩa', 'programming olympiads', 'Microsoft Office Specialist', 'Accounting & Auditing', 'Ho Chi Minh University of Banking'];
  const highlights2 = ['accounting', 'ITL Corp', 'Fram^', 'create', 'build', 'solve problems'];
  const highlights3 = ['2020', 'taught myself programming', 'JavaScript', 'React', 'TypeScript', 'accounting background', 'secret weapon', 'business logic'];
  const highlights4 = ['5+ years', 'Frontend Engineer', 'Bosch', 'PwC', 'Nestlé', 'carbon footprint dashboards', 'license management systems', 'white-label SaaS platforms'];
  const highlights5 = ['career transformation', 'programming olympiads', 'balancing books', 'React applications', 'dedication', 'curiosity', 'courage'];

  return (
    <Stack
      justifyContent={{ base: 'flex-start', md: 'space-between' }}
      alignItems={{ base: 'center', md: 'unset' }}
      gap={{ base: 5, md: 'none' }}
      height="100%"
      {...props}
    >
      <SectionText highlights={highlights1}>
        {text1}
      </SectionText>
      <br />
      <SectionText highlights={highlights2}>
        {text2}
      </SectionText>
      {text3 && (
        <Fragment>
          <br />
          <SectionText highlights={highlights3}>
            {text3}
          </SectionText>
        </Fragment>
      )}
      {text4 && (
        <Fragment>
          <br />
          <SectionText highlights={highlights4}>
            {text4}
          </SectionText>
        </Fragment>
      )}
      {text5 && (
        <Fragment>
          <br />
          <SectionText highlights={highlights5}>
            {text5}
          </SectionText>
        </Fragment>
      )}
    </Stack>
  );
});

AboutContent.displayName = 'AboutContent';
