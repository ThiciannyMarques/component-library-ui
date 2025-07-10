import PropTypes from "prop-types";
import { ComponentCard } from "./ComponentCard";
import "../../../styles/ComponentLibrary/ComponentGrid.css";

export const ComponentGrid = ({ components }) => (
  <div className="component-grid">
    {components.map((component) => (
      <ComponentCard key={component.Name} name={component.Name} />
    ))}
  </div>
);

ComponentGrid.propTypes = {
  components: PropTypes.array.isRequired,
};