import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCountry } from '../contexts/CountryContext';
import styles from './DetailPage.module.css';

function DetailPage() {
  const { countryCode } = useParams();
  const { countries } = useCountry();

  // Find the selected country by `cca3` code
  const country = countries.find((c) => c.cca3 === countryCode);
  console.log(country);
  const navigate = useNavigate();

  const getNativeName = (country) => {
    if (!country.name.nativeName) return 'No Native Name';

    const nativeLangKey = Object.keys(country.name.nativeName)[0];
    return country.name.nativeName[nativeLangKey].common;
  };

  if (!country) return <p>Country not found! 🚩</p>;

  const borderCountries = country.borders
    ? country.borders
        .map((borderCode) => countries.find((coun) => coun.cca3 === borderCode))
        .filter(Boolean)
    : [];

  return (
    <>
      <button className={styles.back} onClick={() => navigate(-1)}>
        <svg
          width="22"
          height="22"
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="24"
            d="M244 400L100 256l144-144M120 256h292"
          />
        </svg>
        Back
      </button>
      <section className={styles.details}>
        <div className={styles.detailsContainer}>
          <img src={country.flags.svg} alt={`${country.name.common} flag`} />

          <div className={styles.detailsList}>
            <h1>{country.name.common}</h1>

            <div>
              <p className={styles.detailsPara}>
                <strong>Native Name:</strong> {getNativeName(country)}
              </p>

              <p className={styles.detailsPara}>
                <strong>Population:</strong> {country.population}
              </p>

              <p className={styles.detailsPara}>
                <strong>Region:</strong> {country.region}
              </p>

              <p className={styles.detailsPara}>
                <strong>Sub Region:</strong> {country.subregion}
              </p>

              <p className={styles.detailsPara}>
                <strong>Capital:</strong> {country.capital?.[0] || 'N/A'}
              </p>
            </div>
          </div>

          <div className={styles.moreDetails}>
            <p className={styles.detailsPara}>
              <strong>Top Level Domain:</strong>{' '}
              {country.tld ? country.tld.join(', ') : 'N/A'}
            </p>

            <p className={styles.detailsPara}>
              <strong>Currencies:</strong>{' '}
              {country.currencies
                ? Object.values(country.currencies)
                    .map((currency) => currency.name)
                    .join(', ')
                : 'No Currencies'}
            </p>

            <p className={styles.detailsPara}>
              <strong>Languages:</strong>{' '}
              {country.languages
                ? Object.values(country.languages).join(', ')
                : 'No Languages'}
            </p>
          </div>
        </div>

        <div>
          <p className={styles.borderCountries}>Bordering Countries:</p>
          {borderCountries.length > 0 ? (
            <div className={styles.borders}>
              {borderCountries.map((borderCountry) => (
                <Link
                  className={styles.link}
                  key={borderCountry.cca3}
                  to={`/countries/${borderCountry.cca3}`}
                >
                  {borderCountry.name.common}
                </Link>
              ))}
            </div>
          ) : (
            <p className={styles.detailsPara}>
              This country has no bordering countries.
            </p>
          )}
        </div>
      </section>
    </>
  );
}

export default DetailPage;

{
  /* {borderCountries.length > 0 ? (
            <div>
              {borderCountries.map((borderCountry) => (
                <Link
                  key={borderCountry.cca3}
                  to={`/countries/${borderCountry.cca3}`}
                >
                  {borderCountry.name.common}
                </Link>
              ))}
       styles.     </div>
          ) : (
            <p className={detailsPara}>This country has no bordering countries.</p>
          )} */
}
