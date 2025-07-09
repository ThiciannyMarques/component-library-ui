import { useMemo, useEffect, useState } from "react";

const filterComponentsByName = (components, searchTerm) => {
  try {
    const searchLower = searchTerm.toLowerCase();
    return components.filter((component) =>
      component?.Name?.toLowerCase().includes(searchLower)
    );
  } catch (error) {
    console.error("Filter error:", error);
    return [];
  }
};

const calculateCategoryCounts = (categories, filteredComponents) => {
  const counts = Object.fromEntries(
    categories.map((category) => [category, 0])
  );

  filteredComponents.forEach((component) => {
    component.Categories?.forEach((category) => {
      if (counts[category] !== undefined) counts[category]++;
    });
  });

  return counts;
};

const getVisibleCategories = (categories, searchTerm, counts) => {
  return searchTerm === ""
    ? categories
    : categories.filter((category) => counts[category] > 0);
};

const getComponentsByCategory = (components, category) => {
  return category
    ? components.filter((component) => component.Categories.includes(category))
    : [];
};

export function useComponentLibraryData(components, categories, searchTerm) {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [error] = useState(null);

  const filteredComponents = useMemo(
    () => filterComponentsByName(components, searchTerm),
    [searchTerm, components]
  );

  const categoryCounts = useMemo(
    () => calculateCategoryCounts(categories, filteredComponents),
    [filteredComponents, categories]
  );

  const visibleCategories = useMemo(
    () => getVisibleCategories(categories, searchTerm, categoryCounts),
    [searchTerm, categories, categoryCounts]
  );

  const componentsInSelectedCategory = useMemo(
    () => getComponentsByCategory(filteredComponents, selectedCategory),
    [filteredComponents, selectedCategory]
  );

  useEffect(() => {
    const shouldClearSelection =
      searchTerm && selectedCategory && categoryCounts[selectedCategory] === 0;

    if (shouldClearSelection) {
      setSelectedCategory(null);
    }
  }, [searchTerm, categoryCounts, selectedCategory]);

  useEffect(() => {
    const shouldSelectFirstCategory =
      visibleCategories.length > 0 && !selectedCategory && !searchTerm;

    if (shouldSelectFirstCategory) {
      setSelectedCategory(visibleCategories[0]);
    }
  }, [visibleCategories, selectedCategory, searchTerm]);

  return {
    selectedCategory,
    setSelectedCategory,
    categoryCounts,
    visibleCategories,
    componentsInSelectedCategory,
    error,
  };
}
