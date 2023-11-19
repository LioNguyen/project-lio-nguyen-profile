import {
  AboutPage,
  AppContainer,
  ContactPage,
  Footer,
  HomePage,
  Navbar,
  QualificationPage,
  SkillsPage,
} from "@/components";

function App() {
  return (
    <>
      <Navbar />
      <AppContainer>
        <HomePage />
        <AboutPage />
        <SkillsPage />
        <QualificationPage />
        {/* <ContactPage /> */}
      </AppContainer>
      <Footer />
    </>
  );
}

export default App;
