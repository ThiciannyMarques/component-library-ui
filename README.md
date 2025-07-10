# Component Library UI - Frontend Technical Test

## 🎯 Test Objectives

Implement an interactive component library UI that:
- Displays categories with component counts
- Filters components by search term
- Shows only relevant categories during search
- Handles large datasets efficiently

## 🏗️ Project Structure

```sh
src/
├── components/
│   └── ComponentLibrary/
│       ├── ComponentLibrary.jsx        # Main container
│       ├── CategoryPanel/             # Left sidebar
│       │   ├── CategoryPanel.jsx      # Scrollable category list
│       │   └── CategoryListItem.jsx   # Individual category items
│       └── ComponentGrid/             # Right content area
│           ├── ComponentGrid.jsx      # Grid layout
│           └── ComponentCard.jsx      # Individual component cards
├── hooks/
│   └── useComponentLibraryData.js     # Business logic & filtering
├── mocks/
│   └── library.js                     # Sample mock
└── styles/
    └── ComponentLibrary/              # Component-specific styles
        ├── ComponentLibrary.css
        ├── CategoryPanel.css
        └── ComponentGrid.css
```

## ✨ Key Features

- **Dynamic Category Filtering**  
  Automatically shows/hides empty categories during search

- **Real-time Search**  
  Filters components instantly on each keystroke

- **Performance Optimized**  
  Uses `react-window` for efficient rendering of large lists

- **Clean Architecture**  
  Separation of concerns with dedicated hooks and components

## 🛠️ Tech Stack

| Category       | Technologies                  |
|----------------|-------------------------------|
| Core           | React, PropTypes, react-window|
| Styling        | Plain CSS (no CSS-in-JS)      |
| Tooling        | Vite, Prettier, ESLint        |
| Testing        | (Future: Jest, React Testing Library) |

## 🚀 Getting Started

### Prerequisites
- Node.js LTS (18+)
- Git

### Installation
```bash
git clone https://github.com/ThiciannyMarques/component-library-ui.git
cd component-library-ui
npm install
```

## 🧪 Testing Large Datasets
The mock data generator can create stress-test scenarios:

```js
// In mocks/library.js(in use)
addBigData(30, 10000); // Creates 30 categories with 10,000 components
```

## 🏆 Implementation Highlights

1. **Efficient Rendering**  
   - Virtualized lists for optimal performance
   - Memoized calculations for frequent operations

2. **Clean Component Design**  
   - Single Responsibility Principle
   - PropType validation for all components

3. **Search Behavior**  
   ```text
   Default State → Shows all categories
   └── Empty categories visible
   
   Search Active → Filters dynamically
   └── Only matching categories shown
   └── Selection auto-clears when invalid
   ```

## 📅 Future Roadmap

- [ ] TypeScript migration
- [ ] Comprehensive test coverage
- [ ] Accessibility audit
- [ ] Storybook documentation
- [ ] CSS Modules implementation
- [ ] Performance benchmarking
- [ ] Testing

## 📝 Test Requirements Checklist

| Requirement                      | Status  |
|----------------------------------|---------|
| Category list with counts        | ✅ Done |
| Search filters components        | ✅ Done |
| Empty categories hidden in search| ✅ Done |
| No search debouncing             | ✅ Done |
| Large dataset support            | ✅ Done |
| Clean component structure        | ✅ Done |

## Component Library Preview
![Component Library Screenshot](https://github.com/user-attachments/assets/6e146b95-f890-44ea-a4f6-52a0a4070c98)


---

*Developed by Thicianny Marques*
