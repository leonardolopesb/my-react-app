import Header from './components/header';
import Footer from './components/footer';
import { Routes } from './routes';

const App = () => {
  return (
    <div>
      <Header />

      <main>
        <Routes />
      </main>

      <Footer />
    </div>
  );
};

export default App;