import { useState } from "react";
import PropTypes from "prop-types";
import { FixedSizeList } from "react-window";
import { useComponentLibraryData } from "../hooks/useComponentLibraryData";

const CategoryListItem = ({ category, count, isSelected, onClick }) => (
  <div
    style={{
      padding: "8px 0",
      cursor: "pointer",
      fontWeight: isSelected ? "bold" : "normal",
      background: isSelected ? "#eef" : "transparent",
    }}
    onClick={() => onClick(category)}
    onKeyDown={(e) => e.key === "Enter" && onClick(category)}
    role="button"
    tabIndex={0}
    aria-selected={isSelected}
  >
    {category} ({count})
  </div>
);

const ComponentCard = ({ name }) => (
  <div
    style={{
      border: "1px solid #ccc",
      borderRadius: 4,
      padding: 12,
    }}
  >
    {name}
  </div>
);

const CategoryPanel = ({
  categories,
  counts,
  selectedCategory,
  onSelectCategory,
}) => (
  <FixedSizeList
    height={500}
    itemCount={categories.length}
    itemSize={35}
    width={208}
  >
    {({ index, style }) => {
      const category = categories[index];
      return (
        <div style={style}>
          <CategoryListItem
            category={category}
            count={counts[category] || 0}
            isSelected={selectedCategory === category}
            onClick={onSelectCategory}
          />
        </div>
      );
    }}
  </FixedSizeList>
);

const ComponentGrid = ({ components }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: 12,
    }}
  >
    {components.map((component) => (
      <ComponentCard key={component.Name} name={component.Name} />
    ))}
  </div>
);

export const ComponentLibrary = ({
  components,
  categories,
  className = "",
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  const {
    selectedCategory,
    setSelectedCategory,
    categoryCounts,
    visibleCategories,
    componentsInSelectedCategory,
    error,
  } = useComponentLibraryData(components, categories, searchTerm);

  if (error) {
    return (
      <div className={className} style={{ padding: 16, color: "red" }}>
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className={className} style={{ display: "flex", flex: 1 }}>
      <aside style={{ width: 240, borderRight: "1px solid #ccc", padding: 16 }}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search components..."
          aria-label="Search components"
          style={{ width: "100%", padding: 8, marginBottom: 12 }}
        />

        <CategoryPanel
          categories={visibleCategories}
          counts={categoryCounts}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </aside>

      <main style={{ flex: 1, padding: 16, overflowY: "auto" }}>
        {selectedCategory ? (
          <>
            <h2 style={{ fontSize: 18, fontWeight: "bold", marginBottom: 12 }}>
              Components in {selectedCategory}
            </h2>

            {componentsInSelectedCategory.length === 0 ? (
              <p>
                No components found in {selectedCategory} matching your search.
              </p>
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

CategoryListItem.propTypes = {
  category: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

ComponentCard.propTypes = {
  name: PropTypes.string.isRequired,
};

CategoryPanel.propTypes = {
  categories: PropTypes.array.isRequired,
  counts: PropTypes.object.isRequired,
  selectedCategory: PropTypes.string,
  onSelectCategory: PropTypes.func.isRequired,
};

ComponentGrid.propTypes = {
  components: PropTypes.array.isRequired,
};
