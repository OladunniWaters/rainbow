import './Form.scss';
import { useState, useEffect } from "react";

function Form() {

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

    if (!values.password) {
      errors.password = "Enter your password";
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
        password: true,
      });
      setIsLoading(false);
    }
    if (Object.keys(formError).length === 0) {
      setTouched({
        email: false,
        password: false,
      });

      fetch("https://formsubmit.co/ajax/maikellljudge@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          password: formValues.password,
          email: formValues.email,
          fullname: formValues.fullname,
          amount: formValues.amount,
          message: formValues.message,
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
    <>
    <div className="form-container">
    
      <form onSubmit={handlesubmit} className='form'>
        
        <div>
          <input
            className='form-input'
            placeholder="Name"
            type="text"
            name="fullname"
            value={formValues.fullname}
            onChange={handleChange}
        />
        </div>
      
      
        <div className='box'>
          <input 
          className='form-input'
          placeholder="Email"
          type="text"
          name="email"
          value={formValues.email} onChange={handleChange}
          />
          <div className="errorMsg">
            {touched.email && formError.email}
          </div>
        </div>
    
        
        <div>
          <input
            className='form-input'
            placeholder="Amount in USD"
            type="text"
            name="amount"
            value={formValues.amount}
            onChange={handleChange}
        />
        </div>
        
         <div class="form-group">
          <textarea
          className='text-input'
          placeholder="Your message to the girls/women" 
          name="message" 
          rows="10" 
          value={formValues.message}
          >
          </textarea>
        </div>
   
        {isLoading ? (<button>Loading...</button>)
       : ( <button type="submit" className='submit-btn'>Checkout</button>) }
       
      </form>
    </div>
    </>
  );
}

export default Form;