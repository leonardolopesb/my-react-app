import Header from './components/header';
import Footer from './components/footer';
import { Routes } from './routes';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Routes />

        <p>Welcome to your mobile-first React app!</p>

        <p>This is a simple example of a React application.</p>

        <p>Feel free to explore and modify the code.</p>

        <p>Enjoy building with React!</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;