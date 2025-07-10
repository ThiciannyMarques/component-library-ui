import { useState } from "react";
import PropTypes from "prop-types";
import { useComponentLibraryMock } from "../../hooks/useComponentLibraryMock";
import { CategoryPanel } from "./CategoryPanel/CategoryPanel";
import { ComponentGrid } from "./ComponentGrid/ComponentGrid";
import "../../styles/ComponentLibrary/ComponentLibrary.css";

export const ComponentLibrary = ({ components, categories, className = "" }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    selectedCategory,
    setSelectedCategory,
    categoryCounts,
    visibleCategories,
    componentsInSelectedCategory,
    error,
  } = useComponentLibraryMock(components, categories, searchTerm);

  if (error) {
    return <div className={`error-message ${className}`}>Error: {error.message}</div>;
  }

  return (
    <div className={`component-library ${className}`}>
      <aside>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search components..."
          aria-label="Search components"
        />

        <CategoryPanel
          categories={visibleCategories}
          counts={categoryCounts}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </aside>

      <main>
        {selectedCategory ? (
          <>
            <h2>Components in {selectedCategory}</h2>

            {componentsInSelectedCategory.length === 0 ? (
              <p>No components found in {selectedCategory} matching your search.</p>
            ) : (
              <ComponentGrid components={componentsInSelectedCategory} />
            )}
          </>
        ) : (
          <p>Select a category to view components</p>
        )}
      </main>
    </div>
  );
};

ComponentLibrary.propTypes = {
  components: PropTypes.arrayOf(
    PropTypes.shape({
      Name: PropTypes.string.isRequired,
      Categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string,
};