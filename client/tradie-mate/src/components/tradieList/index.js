import React from 'react';
import { Link, UNSAFE_LocationContext } from 'react-router-dom';
import CommentList from '../CommentList';
import CommentForm from '../CommentForm';

const TradieList = ({ tradies, name, trade, location, email, phone }) => {
    if (!tradies.length) {
      return <h3>No Tradies Yet</h3>;
    }
  
    return (
      <div>
        <h3 className="text-primary">{name}</h3>
        <div className="flex-row justify-space-between my-4">
          {tradies &&
            tradies.map((tradie) => (
              <div key={tradie._id} className="col-12 col-xl-6">
                <div className="card mb-3">
                  <h4 className="card-header bg-dark text-light p-2 m-0">
                    {tradie.name} <br />
                  </h4>
                  <ul>
                    <li>{tradie.trade}</li>
                    <li>{tradie.location}</li>
                    <li>{tradie.email}</li>
                    <li>{tradie.phone}</li>
                  </ul>
                  <Link
                    className="btn btn-block btn-squared btn-light text-dark"
                    to={`/tradies/${tradie._id}`}
                  >
                    Save to favourite Tradie Mates.
                  </Link>
                  <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/tradies/${tradie._id}`}
            >
              Add a review on this Tradie Mate.
            </Link>
    </div>
                </div>
              
            ))}
        </div>
      </div>
    );
  };

  console.log(TradieList)
  
  export default TradieList;