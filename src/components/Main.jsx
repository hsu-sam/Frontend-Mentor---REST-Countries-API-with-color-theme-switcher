import Filter from './Filter';
import SearchInput from './SearchInput';
import CountryList from './CountryList';
import { CountryProvider } from '../contexts/CountryContext';
import styles from './Main.module.css';

function Main() {
  return (
    <CountryProvider>
      <main>
        <div className={styles.filter}>
          <SearchInput />
          <Filter />
        </div>
        <CountryList />
      </main>
    </CountryProvider>
  );
}

export default Main;
