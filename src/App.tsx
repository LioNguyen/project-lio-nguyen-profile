import { ChakraProvider, extendTheme, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { useEffect, useState, type ComponentType } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Navbar } from '@/core/components/organisms/Navbar';
import { AppContainer } from '@/core/components/templates/AppContainer';
import { QueryProvider } from '@/core/services';
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

/**
 * Tab Configuration Interface
 */
interface TabConfig {
  path: string;
  component: ComponentType;
  key: string;
}

/**
 * Tab configuration array
 * Maps routes to their corresponding page components
 */
const TAB_CONFIG: TabConfig[] = [
  {
    path: '/',
    component: HomePage,
    key: 'home',
  },
  {
    path: '/journey',
    component: JourneyPage,
    key: 'journey',
  },
  {
    path: '/skills',
    component: SkillsPage,
    key: 'skills',
  },
  {
    path: '/projects',
    component: ProjectsPage,
    key: 'projects',
  },
  {
    path: '/about',
    component: AboutPage,
    key: 'about',
  },
];

/**
 * Create path-to-index and index-to-path mappings from TAB_CONFIG
 */
const pathToIndex = TAB_CONFIG.reduce<Record<string, number>>((acc, tab, index) => {
  acc[tab.path] = index;
  return acc;
}, {});

const indexToPath = TAB_CONFIG.reduce<Record<number, string>>((acc, tab, index) => {
  acc[index] = tab.path;
  return acc;
}, {});

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  // State to control the active tab
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  // Read URL path on mount and when it changes
  useEffect(() => {
    const currentPath = location.pathname;
    const tabIndex = pathToIndex[currentPath];
    if (tabIndex !== undefined) {
      setActiveTabIndex(tabIndex);
    }
  }, [location.pathname]);

  // Handle tab change and update URL path
  const handleTabChange = (index: number) => {
    setActiveTabIndex(index);
    const path = indexToPath[index];
    if (path) {
      navigate(path);
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
              {TAB_CONFIG.map((tab, index) => {
                const Component = tab.component;
                return (
                  <TabPanel key={tab.key} p={0}>
                    <Component key={`${tab.key}-${activeTabIndex === index ? Date.now() : 0}`} />
                  </TabPanel>
                );
              })}
            </TabPanels>
          </AppContainer>
        </Tabs>
      </ChakraProvider>
    </QueryProvider>
  );
}

export default App;
