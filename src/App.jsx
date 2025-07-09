import { useMemo } from 'react';
import {ComponentLibrary} from './components/ComponentLibrary';
import { Library, addBigData } from './data/library';

addBigData(30, 10000);

export default function App() {
  const components = useMemo(() => [...Library.Components], []);
  const categories = useMemo(() => [...new Set(Library.Categories)], []);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <ComponentLibrary
        components={components}
        categories={categories}
      />
    </div>
  );
}