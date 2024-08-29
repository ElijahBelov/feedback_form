import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {

    const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
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

    isConfirmed = window.confirm("Please confirm your details: \n" + confirmationMessage.name + ": " + confirmationMessage.email + " \n" +  confirmationMessage.feedback);

    if(isConfirmed){
        console.log("---Feedback---\n", confirmationMessage.name, " ", confirmationMessage.email, "\n",  confirmationMessage.feedback)
        alert("Thank you for your submission");
        setFormData({name: '', email: '', feedback: ''});
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
