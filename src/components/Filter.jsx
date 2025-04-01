import { useCountry } from '../contexts/CountryContext';
import Dropdown from './Dropdown';

function Filter() {
  const { selectedRegion, setSelectedRegion } = useCountry();
  console.log(selectedRegion);
  const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  return (
    <div>
      <Dropdown
        options={regions}
        selectedValue={selectedRegion}
        onSelect={setSelectedRegion}
      />
    </div>
  );
}

export default Filter;
