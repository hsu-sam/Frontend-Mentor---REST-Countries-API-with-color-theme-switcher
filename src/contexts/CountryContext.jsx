import { createContext, useContext, useEffect, useState } from 'react';

const CountryContext = createContext();

export function CountryProvider({ children }) {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [noCountryFound, setNoCountryFound] = useState('');

  useEffect(function () {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchCountries() {
      try {
        setIsLoading(true);
        setError('');

        const res = await fetch('https://restcountries.com/v3.1/all', {
          signal,
        });

        if (!res.ok) throw new Error('Failed to fetch countries');

        const data = await res.json();

        if (!data || data.length === 0) throw new Error('No countries found');

        const sortedData = data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );

        setCountries(sortedData);
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchCountries();

    return () => controller.abort();
  }, []);

  const filteredRegion =
    selectedRegion === 'All'
      ? countries
      : countries.filter((country) => country.region === selectedRegion);

  const searchedCountry =
    searchQuery.length > 0
      ? filteredRegion.filter((country) =>
          `${country.name.common} ${country.region}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : filteredRegion;

  return (
    <CountryContext.Provider
      value={{
        countries: searchedCountry,
        isLoading,
        error,
        searchQuery,
        setSearchQuery,
        filteredRegion,
        selectedRegion,
        setSelectedRegion,
        noCountryFound,
        setNoCountryFound,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}

export function useCountry() {
  const context = useContext(CountryContext);
  if (context === undefined) {
    throw new Error('useCountry must be used within a CountryProvider');
  }
  return context;
}
