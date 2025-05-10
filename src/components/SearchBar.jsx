import React from 'react';
import './SearchBar.css';

export default function SearchBar() {
  return (
    <div className="search-bar-container">
      <input
        className="search-bar-input"
        type="text"
        placeholder="Customize your theme menu here"
      />
      <span className="search-bar-icon">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.232 2.23205C15.6131 1.85099 16.2206 1.85099 16.6017 2.23205L17.7679 3.39823C18.149 3.77929 18.149 4.38683 17.7679 4.76789L6.56066 15.9751C6.37219 16.1636 6.12064 16.2929 5.84853 16.3416L3 16.8333L3.49168 13.9851C3.54039 13.713 3.6697 13.4614 3.85817 13.2729L15.232 2.23205Z" stroke="#222" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </div>
  );
} 