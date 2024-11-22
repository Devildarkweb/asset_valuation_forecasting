import React, { useState } from 'react';
import './Registration.css';

const Registration = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phone_number: '',
    company_name: '',
    stock_quantity: '',
    purchase_date: '',
    purchase_price: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        {Object.keys(form).map((key) => (
          <div className="form-group" key={key}>
            <label>{key.replace('_', ' ').toUpperCase()}</label>
            <input
              type={key === 'password' ? 'password' : 'text'}
              name={key}
              value={form[key]}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
