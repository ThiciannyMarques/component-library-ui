import PropTypes from "prop-types";
import "../../../styles/ComponentLibrary/CategoryPanel.css";

export const CategoryListItem = ({ category, count, isSelected, onClick }) => (
  <div
    className={`category-list-item ${isSelected ? 'selected' : ''}`}
    onClick={() => onClick(category)}
    onKeyDown={(e) => e.key === "Enter" && onClick(category)}
    role="button"
    tabIndex={0}
    aria-selected={isSelected}
  >
    {category} ({count})
  </div>
);

CategoryListItem.propTypes = {
  category: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};