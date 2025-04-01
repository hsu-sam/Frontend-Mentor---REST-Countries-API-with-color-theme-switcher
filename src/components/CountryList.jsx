import { Link } from 'react-router-dom';
import { useCountry } from '../contexts/CountryContext';
import styles from './CountryList.module.css'; // Ensure correct import

function CountryList() {
  const { countries, isLoading, error } = useCountry();
  console.log(countries);

  if (isLoading) return <p className={styles.loading}>Loading...</p>;
  if (error) return <p className={styles.error}>{error}</p>;

  // if (noCountriesFound) return <p>No country found for this search.</p>;

  return (
    <section>
      {countries.length > 0 ? (
        <div className={styles.gridItem}>
          {countries.map((country) => (
            <Link
              to={`/countries/${country.cca3}`}
              className={styles.gridList}
              key={country.cca3}
            >
              <img
                src={country.flags.svg}
                alt={`${country.name.common} flag`}
                width="200"
              />
              <div className={styles.data}>
                <h2>{country.name.common}</h2>

                <p className={styles.para}>
                  <strong>Population: </strong>
                  {country.population.toLocaleString()}
                </p>

                <p className={styles.para}>
                  <strong>Region: </strong> {country.region}
                </p>

                <p className={styles.para}>
                  <strong>Capital: </strong> {country.capital?.[0] || 'N/A'}
                </p>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className={styles.noCountries}>No Countries Found</p>
      )}
    </section>
  );
}

export default CountryList;
