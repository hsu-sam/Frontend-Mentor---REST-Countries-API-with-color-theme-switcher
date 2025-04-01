import { useState } from 'react';
import styles from './Dropdown.module.css';

const Dropdown = ({ options, selectedValue, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = function () {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = function (value) {
    onSelect(value);
    setIsOpen(false);
    selectedValue(value);
  };

  return (
    <div className={styles.dropdown}>
      <button className={styles.dropdownBtn} onClick={toggleDropdown}>
        {selectedValue === 'All' ? 'Filter by Region' : selectedValue}

        <svg
          width="18"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="48"
            d="M112 184l144 144 144-144"
          />
        </svg>
      </button>
      {isOpen && (
        <ul className={styles.dropdownMenu}>
          {options.map((option) => (
            <li
              key={option}
              className={styles.dropdownItem}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
