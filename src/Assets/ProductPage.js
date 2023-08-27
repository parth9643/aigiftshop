// components/ProductPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

function ProductPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const relationship = queryParams.get('relationship');
  const age = queryParams.get('age');
  const occasion = queryParams.get('occasion');
  const interests = queryParams.get('interests');
  const priceRange = queryParams.get('priceRange');

  // Simulated product data based on preferences
  const products = [
    {
      "name": "Shoes",
      "category": "Friendships",
      "age": "Adult",
      "occasion": "Anniversary",
      "interests": "Others",
      "price": "High"
   },
   {
      "name": "YogaMat",
      "category": "Romantic",
      "age": "Elderly",
      "occasion": "Others",
      "interests": "Sports",
      "price": "High"
   },
   {
      "name": "Smartphone",
      "category": "Acquaintances",
      "age": "Elderly",
      "occasion": "Others",
      "interests": "Cooking",
      "price": "Low"
   },
   {
      "name": "Bracelet",
      "category": "Sexual",
      "age": "Child",
      "occasion": "Anniversary",
      "interests": "Others",
      "price": "Low"
   },
   {
      "name": "Shoes",
      "category": "Sexual",
      "age": "Adult",
      "occasion": "Graduation",
      "interests": "Technology",
      "price": "High"
   },
   {
      "name": "YogaMat",
      "category": "Work",
      "age": "Adult",
      "occasion": "Graduation",
      "interests": "Cooking",
      "price": "High"
   },
   {
      "name": "Shoes",
      "category": "Friendships",
      "age": "Elderly",
      "occasion": "Graduation",
      "interests": "Cooking",
      "price": "High"
   },
   {
      "name": "MysteryNovel",
      "category": "Work",
      "age": "Adult",
      "occasion": "Anniversary",
      "interests": "Others",
      "price": "Medium"
   },
   {
      "name": "Dress",
      "category": "Work",
      "age": "Adult",
      "occasion": "Others",
      "interests": "Sports",
      "price": "Medium"
   },
   {
      "name": "Smartphone",
      "category": "Family",
      "age": "Elderly",
      "occasion": "Others",
      "interests": "Sports",
      "price": "Medium"
   },
   {
      "name": "Laptop",
      "category": "Sexual",
      "age": "Teenager",
      "occasion": "Birthday",
      "interests": "Technology",
      "price": "Medium"
   },
   {
      "name": "YogaMat",
      "category": "Family",
      "age": "Teenager",
      "occasion": "Birthday",
      "interests": "Sports",
      "price": "Medium"
   },
   {
      "name": "Laptop",
      "category": "Work",
      "age": "Teenager",
      "occasion": "Birthday",
      "interests": "Cooking",
      "price": "Low"
   },
   {
      "name": "MysteryNovel",
      "category": "Friendships",
      "age": "Teenager",
      "occasion": "Graduation",
      "interests": "Others",
      "price": "High"
   },
   {
      "name": "Bracelet",
      "category": "Acquaintances",
      "age": "Teenager",
      "occasion": "Graduation",
      "interests": "Technology",
      "price": "High"
   },
   {
      "name": "Bracelet",
      "category": "Family",
      "age": "Elderly",
      "occasion": "Birthday",
      "interests": "Sports",
      "price": "Medium"
   },
   {
      "name": "Bracelet",
      "category": "Friendships",
      "age": "Adult",
      "occasion": "Anniversary",
      "interests": "Technology",
      "price": "High"
   },
   {
      "name": "Tshirt",
      "category": "Sexual",
      "age": "Child",
      "occasion": "Others",
      "interests": "Technology",
      "price": "High"
   },
   {
      "name": "YogaMat",
      "category": "Romantic",
      "age": "Child",
      "occasion": "Anniversary",
      "interests": "Sports",
      "price": "High"
   },
   {
      "name": "Dress",
      "category": "Acquaintances",
      "age": "Child",
      "occasion": "Birthday",
      "interests": "Others",
      "price": "Low"
   },
   {
      "name": "YogaMat",
      "category": "Acquaintances",
      "age": "Elderly",
      "occasion": "Others",
      "interests": "Cooking",
      "price": "High"
   },
   {
      "name": "Laptop",
      "category": "Family",
      "age": "Elderly",
      "occasion": "Others",
      "interests": "Others",
      "price": "High"
   },
   {
      "name": "YogaMat",
      "category": "Romantic",
      "age": "Adult",
      "occasion": "Anniversary",
      "interests": "Sports",
      "price": "Low"
   },
   {
      "name": "Dress",
      "category": "Romantic",
      "age": "Teenager",
      "occasion": "Graduation",
      "interests": "Technology",
      "price": "Low"
   },
   {
      "name": "Dress",
      "category": "Family",
      "age": "Teenager",
      "occasion": "Others",
      "interests": "Others",
      "price": "Medium"
   },
   {
      "name": "Smartphone",
      "category": "Sexual",
      "age": "Teenager",
      "occasion": "Others",
      "interests": "Others",
      "price": "Low"
   },
   {
      "name": "Necklace",
      "category": "Family",
      "age": "Teenager",
      "occasion": "Graduation",
      "interests": "Sports",
      "price": "Medium"
   },
   {
      "name": "Laptop",
      "category": "Friendships",
      "age": "Child",
      "occasion": "Anniversary",
      "interests": "Technology",
      "price": "High"
   },
   {
      "name": "Shoes",
      "category": "Sexual",
      "age": "Child",
      "occasion": "Graduation",
      "interests": "Others",
      "price": "Low"
   },
   {
      "name": "Laptop",
      "category": "Family",
      "age": "Child",
      "occasion": "Others",
      "interests": "Cooking",
      "price": "Medium"
   },
   {
      "name": "Laptop",
      "category": "Work",
      "age": "Adult",
      "occasion": "Others",
      "interests": "Cooking",
      "price": "Low"
   },
   {
      "name": "Sofa",
      "category": "Acquaintances",
      "age": "Elderly",
      "occasion": "Others",
      "interests": "Others",
      "price": "High"
   },
   {
      "name": "Shoes",
      "category": "Romantic",
      "age": "Adult",
      "occasion": "Others",
      "interests": "Cooking",
      "price": "Medium"
   },
   {
      "name": "Shoes",
      "category": "Sexual",
      "age": "Child",
      "occasion": "Graduation",
      "interests": "Cooking",
      "price": "High"
   },
   {
      "name": "Cookbook",
      "category": "Work",
      "age": "Teenager",
      "occasion": "Birthday",
      "interests": "Sports",
      "price": "High"
   },
   {
      "name": "Sofa",
      "category": "Acquaintances",
      "age": "Teenager",
      "occasion": "Graduation",
      "interests": "Sports",
      "price": "Medium"
   },
   {
      "name": "Cookbook",
      "category": "Sexual",
      "age": "Adult",
      "occasion": "Others",
      "interests": "Technology",
      "price": "Low"
   },
   {
      "name": "MysteryNovel",
      "category": "Family",
      "age": "Teenager",
      "occasion": "Birthday",
      "interests": "Sports",
      "price": "Low"
   },
   {
      "name": "Necklace",
      "category": "Family",
      "age": "Child",
      "occasion": "Birthday",
      "interests": "Cooking",
      "price": "Medium"
   },
   {
      "name": "YogaMat",
      "category": "Family",
      "age": "Child",
      "occasion": "Birthday",
      "interests": "Cooking",
      "price": "High"
   },
   {
      "name": "Smartphone",
      "category": "Sexual",
      "age": "Teenager",
      "occasion": "Birthday",
      "interests": "Cooking",
      "price": "High"
   },
   {
      "name": "Cookbook",
      "category": "Family",
      "age": "Teenager",
      "occasion": "Anniversary",
      "interests": "Others",
      "price": "Low"
   },
   {
      "name": "Laptop",
      "category": "Sexual",
      "age": "Teenager",
      "occasion": "Birthday",
      "interests": "Cooking",
      "price": "Medium"
   },
   {
      "name": "MysteryNovel",
      "category": "Acquaintances",
      "age": "Teenager",
      "occasion": "Others",
      "interests": "Others",
      "price": "Low"
   },
   {
      "name": "Sofa",
      "category": "Family",
      "age": "Elderly",
      "occasion": "Birthday",
      "interests": "Others",
      "price": "Medium"
   },
   {
      "name": "Bracelet",
      "category": "Sexual",
      "age": "Teenager",
      "occasion": "Birthday",
      "interests": "Technology",
      "price": "Low"
   },
   {
      "name": "Necklace",
      "category": "Family",
      "age": "Child",
      "occasion": "Anniversary",
      "interests": "Sports",
      "price": "Low"
   },
   {
      "name": "Tshirt",
      "category": "Friendships",
      "age": "Elderly",
      "occasion": "Birthday",
      "interests": "Cooking",
      "price": "Medium"
   },
   {
      "name": "Tshirt",
      "category": "Acquaintances",
      "age": "Adult",
      "occasion": "Birthday",
      "interests": "Cooking",
      "price": "Medium"
   },
   {
      "name": "Tshirt",
      "category": "Friendships",
      "age": "Child",
      "occasion": "Others",
      "interests": "Cooking",
      "price": "High"
   },
   {
      "name": "Tshirt",
      "category": "Family",
      "age": "Elderly",
      "occasion": "Graduation",
      "interests": "Others",
      "price": "Medium"
   },
   {
      "name": "Cookbook",
      "category": "Work",
      "age": "Elderly",
      "occasion": "Anniversary",
      "interests": "Technology",
      "price": "Low"
   },
   {
      "name": "MysteryNovel",
      "category": "Family",
      "age": "Adult",
      "occasion": "Anniversary",
      "interests": "Technology",
      "price": "Low"
   },
   {
      "name": "Smartphone",
      "category": "Acquaintances",
      "age": "Elderly",
      "occasion": "Graduation",
      "interests": "Technology",
      "price": "Low"
   },
   {
      "name": "Laptop",
      "category": "Friendships",
      "age": "Elderly",
      "occasion": "Anniversary",
      "interests": "Technology",
      "price": "Low"
   },
   {
      "name": "DiningTable",
      "category": "Family",
      "age": "Adult",
      "occasion": "Birthday",
      "interests": "Others",
      "price": "Low"
   },
   {
      "name": "Dress",
      "category": "Acquaintances",
      "age": "Elderly",
      "occasion": "Anniversary",
      "interests": "Others",
      "price": "Medium"
   },
   {
      "name": "Bracelet",
      "category": "Acquaintances",
      "age": "Elderly",
      "occasion": "Birthday",
      "interests": "Technology",
      "price": "Medium"
   },
   {
      "name": "Sofa",
      "category": "Family",
      "age": "Child",
      "occasion": "Others",
      "interests": "Cooking",
      "price": "Medium"
   },
   {
      "name": "DiningTable",
      "category": "Romantic",
      "age": "Child",
      "occasion": "Anniversary",
      "interests": "Technology",
      "price": "Low"
   },
   {
      "name": "Smartphone",
      "category": "Sexual",
      "age": "Adult",
      "occasion": "Others",
      "interests": "Sports",
      "price": "Low"
   },
   {
      "name": "Sofa",
      "category": "Romantic",
      "age": "Child",
      "occasion": "Others",
      "interests": "Technology",
      "price": "High"
   },
   {
      "name": "Sofa",
      "category": "Romantic",
      "age": "Adult",
      "occasion": "Anniversary",
      "interests": "Cooking",
      "price": "High"
   },
   {
      "name": "Bracelet",
      "category": "Sexual",
      "age": "Elderly",
      "occasion": "Graduation",
      "interests": "Cooking",
      "price": "High"
   },
   {
      "name": "YogaMat",
      "category": "Work",
      "age": "Adult",
      "occasion": "Others",
      "interests": "Others",
      "price": "Low"
   },
   {
      "name": "Sofa",
      "category": "Romantic",
      "age": "Child",
      "occasion": "Others",
      "interests": "Sports",
      "price": "Low"
   },
   {
      "name": "Sofa",
      "category": "Sexual",
      "age": "Child",
      "occasion": "Anniversary",
      "interests": "Technology",
      "price": "Low"
   },
   {
      "name": "YogaMat",
      "category": "Acquaintances",
      "age": "Adult",
      "occasion": "Anniversary",
      "interests": "Sports",
      "price": "Low"
   },
   {
      "name": "Tshirt",
      "category": "Sexual",
      "age": "Child",
      "occasion": "Graduation",
      "interests": "Sports",
      "price": "Low"
   },
   {
      "name": "Sofa",
      "category": "Friendships",
      "age": "Adult",
      "occasion": "Birthday",
      "interests": "Technology",
      "price": "High"
   },
   {
      "name": "Tshirt",
      "category": "Acquaintances",
      "age": "Adult",
      "occasion": "Others",
      "interests": "Others",
      "price": "Low"
   },
   {
      "name": "YogaMat",
      "category": "Sexual",
      "age": "Child",
      "occasion": "Graduation",
      "interests": "Technology",
      "price": "High"
   },
   {
      "name": "MysteryNovel",
      "category": "Family",
      "age": "Elderly",
      "occasion": "Birthday",
      "interests": "Others",
      "price": "Medium"
   },
   {
      "name": "Necklace",
      "category": "Friendships",
      "age": "Teenager",
      "occasion": "Anniversary",
      "interests": "Sports",
      "price": "Low"
   },
   {
      "name": "Bracelet",
      "category": "Work",
      "age": "Adult",
      "occasion": "Graduation",
      "interests": "Sports",
      "price": "High"
   },
   {
      "name": "YogaMat",
      "category": "Work",
      "age": "Adult",
      "occasion": "Anniversary",
      "interests": "Others",
      "price": "High"
   },
   {
      "name": "Cookbook",
      "category": "Friendships",
      "age": "Elderly",
      "occasion": "Graduation",
      "interests": "Others",
      "price": "Medium"
   },
   {
      "name": "Laptop",
      "category": "Family",
      "age": "Teenager",
      "occasion": "Anniversary",
      "interests": "Cooking",
      "price": "Low"
   },
   {
      "name": "Bracelet",
      "category": "Sexual",
      "age": "Child",
      "occasion": "Graduation",
      "interests": "Sports",
      "price": "Medium"
   },
   {
      "name": "Sofa",
      "category": "Family",
      "age": "Elderly",
      "occasion": "Others",
      "interests": "Others",
      "price": "High"
   },
   {
      "name": "Smartphone",
      "category": "Romantic",
      "age": "Child",
      "occasion": "Graduation",
      "interests": "Technology",
      "price": "Low"
   },
   {
      "name": "Sofa",
      "category": "Friendships",
      "age": "Child",
      "occasion": "Birthday",
      "interests": "Technology",
      "price": "Medium"
   },
   {
      "name": "Cookbook",
      "category": "Friendships",
      "age": "Child",
      "occasion": "Anniversary",
      "interests": "Sports",
      "price": "Medium"
   },
   {
      "name": "Necklace",
      "category": "Romantic",
      "age": "Elderly",
      "occasion": "Birthday",
      "interests": "Sports",
      "price": "Medium"
   },
   {
      "name": "Bracelet",
      "category": "Friendships",
      "age": "Child",
      "occasion": "Anniversary",
      "interests": "Sports",
      "price": "Low"
   },
   {
      "name": "Smartphone",
      "category": "Work",
      "age": "Adult",
      "occasion": "Birthday",
      "interests": "Technology",
      "price": "High"
   },
   {
      "name": "DiningTable",
      "category": "Family",
      "age": "Elderly",
      "occasion": "Graduation",
      "interests": "Cooking",
      "price": "Medium"
   },
   {
      "name": "Sofa",
      "category": "Romantic",
      "age": "Elderly",
      "occasion": "Graduation",
      "interests": "Others",
      "price": "High"
   },
   {
      "name": "MysteryNovel",
      "category": "Friendships",
      "age": "Child",
      "occasion": "Anniversary",
      "interests": "Cooking",
      "price": "Low"
   },
   {
      "name": "DiningTable",
      "category": "Work",
      "age": "Elderly",
      "occasion": "Anniversary",
      "interests": "Cooking",
      "price": "Medium"
   },
   {
      "name": "Smartphone",
      "category": "Friendships",
      "age": "Teenager",
      "occasion": "Graduation",
      "interests": "Technology",
      "price": "Medium"
   },
   {
      "name": "Bracelet",
      "category": "Romantic",
      "age": "Child",
      "occasion": "Others",
      "interests": "Sports",
      "price": "High"
   },
   {
      "name": "Tshirt",
      "category": "Sexual",
      "age": "Teenager",
      "occasion": "Graduation",
      "interests": "Sports",
      "price": "Low"
   },
   {
      "name": "Tshirt",
      "category": "Romantic",
      "age": "Elderly",
      "occasion": "Birthday",
      "interests": "Technology",
      "price": "Low"
   },
   {
      "name": "Bracelet",
      "category": "Romantic",
      "age": "Child",
      "occasion": "Others",
      "interests": "Cooking",
      "price": "High"
   },
   {
      "name": "Necklace",
      "category": "Acquaintances",
      "age": "Child",
      "occasion": "Birthday",
      "interests": "Sports",
      "price": "Medium"
   },
   {
      "name": "Sofa",
      "category": "Romantic",
      "age": "Adult",
      "occasion": "Graduation",
      "interests": "Technology",
      "price": "Medium"
   },
   {
      "name": "MysteryNovel",
      "category": "Sexual",
      "age": "Teenager",
      "occasion": "Anniversary",
      "interests": "Sports",
      "price": "Low"
   },
   {
      "name": "Sofa",
      "category": "Work",
      "age": "Child",
      "occasion": "Birthday",
      "interests": "Cooking",
      "price": "High"
   },
   {
      "name": "DiningTable",
      "category": "Romantic",
      "age": "Elderly",
      "occasion": "Anniversary",
      "interests": "Others",
      "price": "Low"
   }
    //You can add more products here
  ];

  const filteredProducts = products.filter(
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
        <p>No products match your preferences.</p>
      ) : (
        <div className="product-list">
          {filteredProducts.map((product, index) => (
            <div key={index} className="product">
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
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
