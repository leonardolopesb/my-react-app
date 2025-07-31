import Header from './components/header';
import Footer from './components/footer';
import './App.css';
import { Routes } from './routes';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </div>
  );
};

export default App;