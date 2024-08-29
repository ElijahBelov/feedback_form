import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
        rating: ''
    });

  const handleChange = (event) => {
    const fieldName = event.target.name;
    const newValue = event.target.value;

    setFormData({...formData, [fieldName]: newValue});
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const confirmationMessage = {...formData};
    let isConfirmed = false;
    const numStars = parseInt(formData.rating);
    const stars  = "⭐".repeat(numStars);

    isConfirmed = window.confirm(
        "Please confirm your details: \n" 
        + confirmationMessage.name + ": " 
        + confirmationMessage.email + " \n" +  stars + " \n" 
        + confirmationMessage.feedback);

    if(isConfirmed){
        console.log("---Feedback---\n", 
            confirmationMessage.name, " ", 
            confirmationMessage.email, "\n",
            stars, "\n",
            confirmationMessage.feedback);
        alert("Thank you for your submission");
        setFormData({name: '', email: '', feedback: '', rating: ''});
    }
  }

  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form className="feedback-form" onSubmit={handleSubmit}>
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        <input type='text' name='name' 
            placeholder='Your name' 
            onChange={handleChange}
            value={formData.name}/>
        <input type='email' name='email' 
            placeholder='example@website.com' 
            onChange={handleChange}
            value={formData.email}/>
        <p className='star-rating'>⭐  
            <span>Rate Us:</span>
            <div><input type='radio' name='rating' value='1'
                onChange={handleChange}/> 1</div>
            <div><input type='radio' name='rating' value='2'
                onChange={handleChange}/> 2</div>
            <div><input type='radio' name='rating' value='3'
                onChange={handleChange}/> 3</div>
            <div><input type='radio' name='rating' value='4'
                onChange={handleChange}/> 4</div>
            <div><input type='radio' name='rating' value='5'
                onChange={handleChange}/> 5</div>
        ⭐</p>
        <textarea name='feedback' 
            placeholder='Your feedback'
            onChange={handleChange}
            value={formData.feedback}/>
        <button type="submit">Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
