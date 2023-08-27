import React, { useState } from 'react';

function GiftForm() {
    const [formData, setFormData] = useState({
        relationship: '',
        age: '',
        occasion: '',
        interests: '',
        budget: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
    };

    return (
        <div className="container">
            <div className="Form-tittle">
                <h1>AI Curated Gift Ideas</h1>
                <p className="Form-text">Our AI-powered tool will guide you in choosing the perfect gift when you're unsure about what to buy. Simply fill out the form below with information about the recipient and your budget, and we'll suggest a curated list of gifts!</p>
            </div>

            <div className="Form-cont">
                <div>
                    <h4 className="cont-tittle">Gift Details</h4>

                    <form className="needs-validation" action="/gifts" method="post" noValidate>
                        <div className="cont-que">
                            <div className="cont-que1">
                                <label htmlFor="relationship" className="form-label">
                                    Relationship
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="relationship"
                                    name="relationship"
                                    placeholder=""
                                    value={formData.relationship}
                                    onChange={handleInputChange}
                                    required
                                />
                                <div className="invalid-feedback">Relationship information is required.</div>
                            </div>
                            <div className="cont-que1">
                                <label htmlFor="age" className="form-label">
                                    Age
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="age"
                                    name="age"
                                    placeholder=""
                                    value={formData.age}
                                    onChange={handleInputChange}
                                    required
                                />
                                <div className="invalid-feedback">Age information is required.</div>
                            </div>


                            <div className="cont-que1">
                                <label htmlFor="occasion" className="form-label">
                                    Occasion
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="occasion"
                                    name="occasion"
                                    placeholder=""
                                    value={formData.occasion}
                                    onChange={handleInputChange}
                                    required
                                />
                                <div className="invalid-feedback">Occasion information is required.</div>
                            </div>

                            <div className="cont-que1">
                                <label htmlFor="interests" className="form-label">
                                    Interests
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="interests"
                                    name="interests"
                                    placeholder=""
                                    value={formData.interests}
                                    onChange={handleInputChange}
                                    required
                                />
                                <div className="invalid-feedback">Interest information is required.</div>
                            </div>

                            <div className="cont-que1">
                                <label htmlFor="budget" className="form-label">
                                    Budget
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="budget"
                                    name="budget"
                                    placeholder=""
                                    value={formData.budget}
                                    onChange={handleInputChange}
                                    required
                                />
                                <div className="invalid-feedback">Budget information is required.</div>
                            </div>
                        </div>
                        <button className="w-100 btn btn-primary btn-lg" type="submit" onClick={handleSubmit}>
                            Get Gift Suggestions
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default GiftForm;
