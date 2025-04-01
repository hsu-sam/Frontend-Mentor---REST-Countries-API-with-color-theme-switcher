import { useCountry } from '../contexts/CountryContext';
import styles from './SearchInput.module.css';

function SearchInput() {
  const { searchQuery, setSearchQuery } = useCountry();

  return (
    <div className={styles.search}>
      <svg
        aria-hidden="true"
        width="20"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.searchsvg}
        viewBox="0 0 512 512"
      >
        <path
          d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
          fill="none"
          stroke="hsl(0, 0%, 52%)"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
        <path
          fill="none"
          stroke="hsl(0, 0%, 52%)"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
          d="M338.29 338.29L448 448"
        />
      </svg>
      <input
        type="text"
        value={searchQuery}
        placeholder="Search for a country..."
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
