import {ComponentLibrary} from './components/ComponentLibrary/ComponentLibrary';
import { Library } from './mocks/library';


export default function App() {
  const components = [...Library.Components];
  const categories = [...new Set(Library.Categories)];

  return (
    <div>
      <ComponentLibrary
        components={components}
        categories={categories}
      />
    </div>
  );
}