import React from 'react';
import { useLocation } from 'react-router-dom';

import data from './data';

function generateCombinations(attributes) {
  const attributeKeys = Object.keys(attributes);
  const attributeValues = attributeKeys.map((key) => attributes[key]);

  const combinations = [];

  function recursiveCombinationGenerator(index, currentCombination) {
    if (index === attributeValues.length) {
      combinations.push(currentCombination);
      return;
    }

    const currentAttributeValues = attributeValues[index];

    for (const value of currentAttributeValues) {
      recursiveCombinationGenerator(
        index + 1,
        { ...currentCombination, [attributeKeys[index]]: value }
      );
    }
  }

  recursiveCombinationGenerator(0, {});

  return combinations;
}

function ProductPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const relationship = queryParams.get('relationship');
  const age = queryParams.get('age');
  const occasion = queryParams.get('occasion');
  const interests = queryParams.get('interests');
  const priceRange = queryParams.get('priceRange');

  const attributes = {
    name: ['Shoes', 'Tshirt', 'Cookbook', 'Smartphone', 'YogaMat', 'Sofa', 'DiningTable', 'MysteryNovel', 'Dress', 'Bracelet'],
    price: ['Low', 'Medium', 'High'],
    age: ['Adult', 'Child', 'Teenager', 'Elderly'],
    occasion: ['Birthday', 'Anniversary', 'Graduation', 'Others'],
    interests: ['Sports', 'Technology', 'Cooking', 'Others'],
    category: ['Family', 'Friendships', 'Acquaintances', 'Romantic', 'Sexual', 'Work'],
  };

  const combinations = generateCombinations(attributes);

  const filteredProducts = data.filter(
    (product) =>
      product.category === relationship &&
      product.age === age &&
      product.occasion === occasion &&
      product.interests === interests &&
      product.price === priceRange
  );

  return (
    <div className="product-page">
      <h2>Products Matching Your Preferences</h2>
      {filteredProducts.length === 0 ? (
        <p>No products match your preferences. Please try again later. We are coming with more products.</p>
      ) : (
        <div className="product-list">
          {filteredProducts.map((product, index) => (
            <div key={index} className="product">
              <h3>{product.name}</h3>
              <p>Relationship: {product.category}</p>
              <p>Price Range: {product.price}</p>
              <p>Age: {product.age}</p>
              <p>Occasion: {product.occasion}</p>
              <p>Interests: {product.interests}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductPage;
