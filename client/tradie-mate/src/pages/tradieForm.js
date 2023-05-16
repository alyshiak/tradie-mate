import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_TRADIE } from '../utils/mutations';
import "../components/Styles/main.css";
import Auth from '../utils/auth';

const TradieForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    trade: '',
    location: '',
    email: '',
    phone: '',
  });
  const [addTradie, { error, data }] = useMutation(ADD_TRADIE);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addTradie({
        variables: { ...formState },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="container flex-row justify-center mb-4 " style={{ backgroundColor: '#787c8a' }}>
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Add a Tradie Mate</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your Name"
                  name="name"
                  type="text"
                  value={formState.name}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your Trade"
                  name="trade"
                  type="text"
                  value={formState.trade}
                  onChange={handleChange}
                />
                 <input
                  className="form-input"
                  placeholder="Your Location"
                  name="location"
                  type="text"
                  value={formState.location}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your Email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Phone Number"
                  name="phone"
                  type="text"
                  value={formState.phone}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="Submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default TradieForm;