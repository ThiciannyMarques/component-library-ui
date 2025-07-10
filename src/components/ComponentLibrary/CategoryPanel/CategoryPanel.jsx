import PropTypes from "prop-types";
import { FixedSizeList } from "react-window";
import { CategoryListItem } from "./CategoryListItem";
import "../../../styles/ComponentLibrary/CategoryPanel.css";

export const CategoryPanel = ({
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

CategoryPanel.propTypes = {
  categories: PropTypes.array.isRequired,
  counts: PropTypes.object.isRequired,
  selectedCategory: PropTypes.string,
  onSelectCategory: PropTypes.func.isRequired,
};