import PropTypes from "prop-types";
import "../../../styles/ComponentLibrary/ComponentGrid.css";

export const ComponentCard = ({ name }) => (
  <div className="component-card">
    {name}
  </div>
);

ComponentCard.propTypes = {
  name: PropTypes.string.isRequired,
};