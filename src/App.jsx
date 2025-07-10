import {ComponentLibrary} from './components/ComponentLibrary/ComponentLibrary';
import { Library, addBigData } from './mocks/library';

addBigData(30, 10000);

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