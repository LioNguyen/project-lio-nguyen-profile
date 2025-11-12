import { memo, useMemo } from 'react';
import type { FC } from 'react';
import { Stack } from '@chakra-ui/react';
import type { StackProps } from '@chakra-ui/react';

import ProfileImage_2 from '@/shared/assets/images/profile_2.jpeg';
import { useI18n } from '@/core/i18n';
import { Title } from '@/core/components/atoms';
import { AboutSection, ContactSection } from './organisms';

/**
 * AboutPageContent Component
 * Main content wrapper for the About page
 * Orchestrates profile image, stats, and descriptive content
 */
export interface AboutPageContentProps extends StackProps {}

export const AboutPageContent: FC<AboutPageContentProps> = memo((props) => {
  const { t } = useI18n();

  // Build content from paragraphs with double newlines separator
  const content = useMemo(() => {
    return [
      t('about.paragraph1'),
      t('about.paragraph2'),
      t('about.paragraph3'),
      t('about.paragraph4'),
      t('about.paragraph5'),
    ].join('\n\n');
  }, [t]);

  // Keywords to highlight for inspiration
  const highlights = [
    // Background & Education (English)
    'Informatics Talent Team', 'Trần Đại Nghĩa', 'Olympic finals',
    'Microsoft Office Specialist certification', 'Accounting & Auditing', 'Ho Chi Minh University of Banking',
    
    // Challenges & Emotions (English)
    'safety over passion', 'gap growing wider', 'fear of starting over',
    'too late', 'hardest decision', 'brutal', 'impossible', 'wanted to quit',
    'lack of experience', 'questioned', 'wasted years',
    
    // Transformation & Growth (English)
    'taught myself programming', 'kept going', 'strength', 'break down complex problems',
    'small win at a time', 'built confidence', 'proved I could do this',
    
    // Inspiration & Wisdom (English)
    'never too late', 'showing up every day', 'start messy', 'stay consistent',
    'trust the process', 'past doesn\'t limit you', 'prepares you',

    // Vietnamese keywords - Education & Background
    'đội tuyển Tin học', 'THPT chuyên Trần Đại Nghĩa',
    'vòng chung kết kỳ thi Olympic Tin học', 'chứng chỉ Microsoft Office Specialist',
    'Kế toán & Kiểm toán', 'Đại học Ngân hàng TP.HCM',
    
    // Vietnamese keywords - Challenges & Emotions
    'an toàn thay vì đam mê', 'khoảng cách', 'xa xôi', 'nỗi sợ hãi',
    'quá muộn', 'quyết định khó khăn', 'tàn khốc', 'bất khả thi',
    'muốn buông xuôi', 'thiếu kinh nghiệm thực tế', 'sự lãng phí',
    'ám ảnh', 'thức trắng', 'liên tục từ chối',
    
    // Vietnamese keywords - Transformation & Growth
    'tự học lập trình', 'không dừng lại', 'vũ khí bí mật',
    'chia nhỏ vấn đề', 'chiến thắng nhỏ', 'xây dựng lại niềm tin',
    'minh chứng', 'eureka', 'làm được',
    
    // Vietnamese keywords - Inspiration & Wisdom
    'không bao giờ là quá muộn', 'không bỏ cuộc', 'xuất hiện mỗi ngày',
    'bắt đầu dù lộn xộn', 'kiên trì dù khó khăn', 'tin vào quá trình',
    'không giới hạn', 'tôi luyện', 'chuẩn bị', 'tỏa sáng',
    'theo đuổi điều mình yêu thích', 'hành trình', 'chạm đến hàng triệu con tim',
  ];

  return (
    <Stack className="about__content" height="100%" textAlign="center" {...props}>
      {/* START: Header */}
      <Title>
        {t('about.title')}
      </Title>
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

      {/* START: Contact Section */}
      <ContactSection marginTop="60px" />
      {/* END: Contact Section */}
    </Stack>
  );
});

AboutPageContent.displayName = 'AboutPageContent';
