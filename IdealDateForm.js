import React, { useState } from 'react';

function IdealDateForm() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            {step === 1 && (
                <div>
                    <h2>Step 1</h2>
                    <label>
                        Is this your first date?
                        <br />
                        <input type="radio" name="firstDate" value="yes" onChange={handleChange} />
                        Yes
                        <br />
                        <input type="radio" name="firstDate" value="no" onChange={handleChange} />
                        No
                    </label>
                    <br />
                    <button type="button" onClick={() => setStep(2)}>Next</button>
                </div>
            )}
            {step === 2 && (
                <div>
                    <h2>Step 2</h2>
                    <label>
                        How well do you know each other?
                        <br />
                        <select name="knowEachOther" value={formData.knowEachOther || ''} onChange={handleChange}>
                            <option value="">Select an option</option>
                            <option value="justMet">We just met</option>
                            <option value="acquaintances">We're acquaintances</option>
                            <option value="friends">We're friends</option>
                            <option value="closeFriends">We're close friends</option>
                            <option value="dating">We're already dating</option>
                        </select>
                    </label>
                    <br />
                    <button type="button" onClick={() => setStep(1)}>Back</button>
                    <button type="button" onClick={() => setStep(3)}>Next</button>
                </div>
            )}
            {step === 3 && (
                <div>
                    <h2>Step 3</h2>
                    <label>
                        What type of date are you looking for?
                        <br />
                        <input type="checkbox" name="typeOfDate[]" value="romantic" onChange={handleChange} />
                        Romantic
                        <br />
                        <input type="checkbox" name="typeOfDate[]" value="adventurous" onChange={handleChange} />
                        Adventurous
                        <br />
                        <input type="checkbox" name="typeOfDate[]" value="casual" onChange={handleChange} />
                        Casual
                        <br />
                        <input type="checkbox" name="typeOfDate[]" value="formal" onChange={handleChange} />
                        Formal
                    </label>
                    <br />
                    <button type="button" onClick={() => setStep(2)}>Back</button>
                    <button type="button" onClick={() => setStep(4)}>Next</button>
                </div>
            )}
            {step === 4 && (
                <div>
                    <h2>Step 4</h2>
                    <label>
                        Do you prefer indoor or outdoor activities?
                        <br />
                        <select name="indoorOrOutdoor" value={formData.indoorOrOutdoor || ''} onChange={handleChange}>
                            <option value="">Select an option</option>
                            <option value="indoor">Indoor</option>
                            <option value="outdoor">Outdoor</option>
                            <option value="either">Either</option>
                        </select>
                    </label>
                    <br />
                    <button type="button" onClick={() => setStep(3)}>Back</button>
                    <button type="button" onClick={() => setStep(5)}>Next</button>

                </div>
                )}
            {step === 5 && (
                <div>
                    <h2>Step 5</h2>
                    <label>
                        How important is music to you on a date?
                        <br />
                        <select name="musicPreference" value={formData.musicPreference || ''} onChange={handleChange}>
                            <option value="">Select an option</option>
                            <option value="veryImportant">Very important</option>
                            <option value="somewhatImportant">Somewhat important</option>
                            <option value="notImportant">Not important</option>
                        </select>
                    </label>
                    <br />
                </div>
            )}
            {step === 6 && (
                <div>
                    <h2>Step 6</h2>
                    <label>
                        What's your budget for the date?
                        <br />
                        <input type="number" name="budget" min="0" step="0.01" placeholder="Enter budget" onChange={handleChange} />
                    </label>
                    <br />
                    <label>
                        What's your preferred cuisine?
                        <br />
                        <input type="text" name="cuisinePreference" placeholder="Enter cuisine preference" onChange={handleChange} />
                    </label>
                </div>
            )}
            {step === 8 && (
                <div>
                    <h2>Step 8</h2>
                    <label>
                        What's your budget for the date?
                        <br />
                        <input type="radio" name="budget" value="low" onChange={handleChange} />
                        Low ($)
                        <br />
                        <input type="radio" name="budget" value="medium" onChange={handleChange} />
                        Medium ($$)
                        <br />
                        <input type="radio" name="budget" value="high" onChange={handleChange} />
                        High ($$$)
                    </label>
                    <br />
                </div>
            )}
        </form>
    );
}

export default IdealDateForm;




