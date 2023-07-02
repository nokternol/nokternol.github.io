import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { Header } from "../components/Header";
import { About } from "../components/About";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Container, Paper } from "@mantine/core";
import './App.css';

function App() {
  return (
    <div className="app">
      <ParallaxProvider>
        <Container size="xl" style={{ paddingTop: '2rem' }}>
          <Paper shadow="xs">
            <Parallax translateY={[-20, 20]}>
              <Header />
            </Parallax>
            <Parallax translateY={[-20, 20]}>
              <About />
            </Parallax>
            <Parallax translateY={[-20, 20]}>
              <Projects />
            </Parallax>
            <Contact />
          </Paper>
        </Container>
      </ParallaxProvider>
    </div>
  );
}
export default App;
