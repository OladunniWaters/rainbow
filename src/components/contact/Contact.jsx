 import './Contact.scss'
  import { useState, useEffect } from "react";
  import LoadingSpinner from "../loader/LoadingSpinner";

function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [formValues, setFormValues] = useState({});

  const [touched, setTouched] = useState({});

  //error
  const [formError, setFormError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });

    setTouched((prevState) => ({
      ...prevState,
      [e.target.name]: true,
    }));
  };

  const validate = (values) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }
    return errors;
  };

  useEffect(() => {
    validate(formValues);
    setFormError(validate(formValues));
  }, [formValues, touched]);

  const handlesubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    if (Object.keys(formError).length > 0) {
      setTouched({
        email: true,
      });
      setIsLoading(false);
    }
    if (Object.keys(formError).length === 0) {
      setTouched({
        email: false,
      });

      fetch("https://formsubmit.co/ajax/maikellljudge@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: formValues.email,
          name: formValues.name,
          phone: formValues.phone,
          comment: formValues.comment,
          _subject: `New form submitted  By ${formValues.email}`,
          _captcha: true,
          _blacklist: "spammy pattern, banned term, phrase",
          _template: "box",
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success === "true") {
            setFormValues({})
            setIsLoading(false)
           // alert("success");
          } else {
          //  alert("failure");
          setFormValues({})
          setIsLoading(false)
          }
        })
        .catch((error) => console.log(error));
    }
  };
  



  return (
  
    <div className="contact-cont">
      <div>
      <h1 className='contact-header'>Contact</h1>
      <p className='contact-p'>Please do not hestitate to reach out to us about any questions or concerns and we will respond within 24hours.</p>
      
      <form onSubmit={handlesubmit}>
        <div className='contact-section-1'>
          <input 
          className='form-input-1'
          placeholder="Email *"
          type="text"
          name="email"
          value={formValues.email} onChange={handleChange} />
          <div className="errorMsg">
            {touched.email && formError.email}
          </div>
          
            <input
            className='form-input-2'
            placeholder="Name"
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleChange}
            />
        </div>
        
      
   
        <div>
        
         <input
            className='form-input-3'
            placeholder="Phone Number"
            type="text"
            name="phone"
            value={formValues.phone}
            onChange={handleChange}
        />
      </div>
 
 
     <div>
         <input
            className='form-input-4'
            placeholder="Comment"
            type="text"
            name="comment"
            value={formValues.comment}
            onChange={handleChange}
        />
      
        </div>
        
        
        
   
        {isLoading ? (<LoadingSpinner />)
       : ( <button className='contact-button' type="submit">Send</button>) }
       
      </form>
    </div>
     </div>
  );
}

export default Contact;
