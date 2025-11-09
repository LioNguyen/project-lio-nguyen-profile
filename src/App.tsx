import { ChakraProvider, extendTheme, Tabs, TabPanels, TabPanel } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { QueryProvider } from '@/core/services';
import { Navbar } from '@/core/components/organisms/Navbar';
import { AppContainer } from '@/core/components/templates/AppContainer';
import { AboutPage } from '@/pages/About';
// import { ContactPage } from '@/pages/Contact';
import { HomePage } from '@/pages/Home';
import { JourneyPage } from '@/pages/Journey';
import { ProjectsPage } from '@/pages/Projects';
import { SkillsPage } from '@/pages/Skills';
import { DefaultTheme, Fonts } from '@/styles';

const theme = extendTheme({
  breakpoints: DefaultTheme.breakpoints,
  shadows: DefaultTheme.shadows,
  colors: DefaultTheme.colors,
  components: DefaultTheme.components,
  styles: {
    global: DefaultTheme.styles.global,
  },
});

// Map section names to tab indices
const sectionToIndex: Record<string, number> = {
  home: 0,
  skills: 1,
  journey: 2,
  projects: 3,
  about: 4,
};

const indexToSection: Record<number, string> = {
  0: 'home',
  1: 'skills',
  2: 'journey',
  3: 'projects',
  4: 'about',
};

function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  // State to control the active tab
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  // Read URL param on mount and when it changes
  useEffect(() => {
    const page = searchParams.get('p');
    if (page && sectionToIndex[page] !== undefined) {
      setActiveTabIndex(sectionToIndex[page]);
    }
  }, [searchParams]);

  // Handle tab change and update URL
  const handleTabChange = (index: number) => {
    setActiveTabIndex(index);
    const sectionName = indexToSection[index];
    if (sectionName) {
      setSearchParams({ p: sectionName });
    }
  };

  return (
    <QueryProvider>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Tabs index={activeTabIndex} onChange={handleTabChange} variant="unstyled">
          <Navbar />
          <AppContainer>
            <TabPanels>
              <TabPanel p={0}>
                <HomePage key={`home-${activeTabIndex === 0 ? Date.now() : 0}`} />
              </TabPanel>
              <TabPanel p={0}>
                <SkillsPage key={`skills-${activeTabIndex === 1 ? Date.now() : 0}`} />
              </TabPanel>
              <TabPanel p={0}>
                <JourneyPage key={`qualification-${activeTabIndex === 2 ? Date.now() : 0}`} />
              </TabPanel>
              <TabPanel p={0}>
                <ProjectsPage key={`projects-${activeTabIndex === 3 ? Date.now() : 0}`} />
              </TabPanel>
              <TabPanel p={0}>
                <AboutPage key={`about-${activeTabIndex === 4 ? Date.now() : 0}`} />
              </TabPanel>
            </TabPanels>
          </AppContainer>
        </Tabs>
      </ChakraProvider>
    </QueryProvider>
  );
}

export default App;
