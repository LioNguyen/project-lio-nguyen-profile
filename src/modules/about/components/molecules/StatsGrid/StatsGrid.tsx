import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { Stack } from '@chakra-ui/react';
import type { StackProps } from '@chakra-ui/react';

import { StatBox } from '../../atoms/StatBox';

/**
 * StatsGrid Component
 * Displays a grid of statistics (experience, projects completed, etc.)
 */
export interface StatsGridProps extends StackProps {
  /** Array of stat items, each with icon, label, and value */
  stats: Array<{
    icon: ReactNode;
    label: string;
    value: string;
  }>;
}

export const StatsGrid: FC<StatsGridProps> = memo(({ stats, ...props }) => {
  return (
    <Stack
      flexDirection="row"
      justifyContent="space-between"
      width="100%"
      {...props}
    >
      {stats.map((stat, index) => (
        <StatBox
          key={index}
          icon={stat.icon}
          label={stat.label}
          value={stat.value}
        />
      ))}
    </Stack>
  );
});

StatsGrid.displayName = 'StatsGrid';
