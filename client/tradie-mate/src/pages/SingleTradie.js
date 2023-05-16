import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import "../components/Styles/main.css";
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_TRADIE } from '../utils/queries';

const SingleTradie = ({  name,  trade, location, email, phone, comments}) => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { tradieId: tradieId }  = useParams(':tradieId');
  console.log(tradieId)

  const { loading, data } = useQuery(QUERY_SINGLE_TRADIE, {
    // Pass the `thoughtId` URL parameter into query to retrieve this thought's data
    variables: {tradieId: tradieId},
  });

  const tradie = data?.tradie|| {  name,  trade, location, email, phone, comments};
  console.log(tradie)

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div  className=" container my-3" style={{ backgroundColor: '#787c8a ' }}>
      <h4 className="card-header-a bg-dark text-light p-2 m-0">
                    {tradie.name} <br />
                  </h4>

                  <ul className='ul-a'>
                    <li>Trade :- {tradie.trade} </li>
                    <li>Location :- {tradie.location}</li>
                    <li>Email :- {tradie.email}</li>
                    <li> Phone :- {tradie.phone}</li>
                  </ul>

      <div className=" card my-5">
        <CommentList comments={tradie.comments} />
      </div>
      <div className="card m-3 p-4" style={{ border: '2px solid #1a1a1a' }}>
        <CommentForm tradieId={tradie._id} />
      </div>
    </div>
  );
};

export default SingleTradie;
