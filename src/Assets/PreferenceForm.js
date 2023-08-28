import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function PreferenceForm() {
  const [preferences, setPreferences] = useState({
    relationship: '',
    age: '',
    occasion: '',
    interests: '',
    priceRange: '',
  });

  const navigate = useNavigate();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    navigate(`/products?relationship=${preferences.relationship}&age=${preferences.age}&occasion=${preferences.occasion}&interests=${preferences.interests}&priceRange=${preferences.priceRange}`);
  };

  return (
    <div className="ai-Form">
      <div className="Form-tittle">
        <h1>AI Curated Gift Ideas</h1>
        <p className="Form-text">Our AI-powered tool will guide you in choosing the perfect gift when you're unsure about what to buy. Simply fill out the form below with information about the recipient and your budget, and we'll suggest a curated list of gifts!</p>
      </div>
      <div className="preference-form">

        <h2>Tell Us Your Preferences</h2>
        <form onSubmit={handleFormSubmit}>
          <label>
            Relationship:
            <select
              value={preferences.relationship}
              onChange={(e) => setPreferences({ ...preferences, relationship: e.target.value })}
              required
            >
              <option value="">Select</option>
              <option value="Family">Family</option>
              <option value="Friendships">Friendships</option>
              <option value="Acquaintances">Acquaintances</option>
              <option value="Romantic">Romantic</option>
              <option value="Sexual">Sexual</option> 
              <option value="Work">Work</option>

            
            </select>
          </label>

          <label>
            Age:
            <select
              value={preferences.age}
              onChange={(e) => setPreferences({ ...preferences, age: e.target.value })}
              required
            >
              <option value="">Select</option>
              <option value="Child">Child</option>
              <option value="Teenager">Teenager</option>
              <option value="Adult">Adult</option>
              <option value="Elderly">Elderly</option>
            </select>
          </label>

          <label>
            Occasion:
            <select
              value={preferences.occasion}
              onChange={(e) => setPreferences({ ...preferences, occasion: e.target.value })}
              required
            >
              <option value="">Select</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Graduation">Graduation</option>
              <option value="Others">Others</option>
            </select>
          </label>

          <label>
            Interests:
            <select
              value={preferences.interests}
              onChange={(e) => setPreferences({ ...preferences, interests: e.target.value })}
              required
            >
              <option value="">Select</option>
              <option value="Sports">Sports</option>
              <option value="Technology">Technology</option>
              <option value="Cooking">Cooking</option>
              <option value="Others">Others</option>
            </select>
          </label>

          <label>
            Select Price Range:
            <select
              value={preferences.priceRange}
              onChange={(e) => setPreferences({ ...preferences, priceRange: e.target.value })}
              required
            >
              <option value="">Select</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default PreferenceForm;
