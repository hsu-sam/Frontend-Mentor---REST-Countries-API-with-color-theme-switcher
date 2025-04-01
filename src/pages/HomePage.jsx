import Header from '../components/Header';
import Main from '../components/Main';
import { CountryProvider } from '../contexts/CountryContext';

function HomePage() {
  return (
    <CountryProvider>
      <Main />
    </CountryProvider>
  );
}

export default HomePage;
