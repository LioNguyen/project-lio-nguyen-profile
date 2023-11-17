import {
  AboutPage,
  AppContainer,
  ContactPage,
  HomePage,
  Navbar,
  QualificationPage,
  SkillsPage,
} from "@/components";

function App() {
  return (
    <AppContainer>
      <Navbar />
      <HomePage />
      <AboutPage />
      <SkillsPage />
      <QualificationPage />
      <ContactPage />
    </AppContainer>
  );
}

export default App;
