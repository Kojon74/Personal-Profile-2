import { useState } from "react";
import "./Projects.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const FILTERS = {
  "Experience Type": {
    "Work Experience": false,
    Hackathon: false,
    "Personal Project": false,
    "Class Project": false,
  },
  "Project Type": {
    "Full Stack": false,
    Frontend: false,
    "Machine Learning": false,
    "Data Science": false,
    Hardware: false,
  },
  "Programming Language": {
    Python: false,
    React: false,
    "React Native": false,
    TypeScript: false,
    "Node.js": false,
    Swift: false,
  },
};

const Filter = () => {
  const [filters, setFilters] = useState(FILTERS);
  // const [show, setShow] = useState(false);
  return (
    <section className="filter">
      <div className="filter-title">
        <h2>Filter Experiences</h2>
        <FontAwesomeIcon icon={faFilter} />
      </div>
      <div className="filter-cont">
        {Object.keys(filters).map((filterType) => (
          <div className="filter-col">
            <h3>{filterType}</h3>
            {Object.keys(filters[filterType]).map((filterItem) => (
              <button
                onClick={() =>
                  setFilters((prev) => !prev[filterType][filterItem])
                }
              >
                {filterItem}
              </button>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Filter;
