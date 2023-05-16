import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import "../components/Styles/main.css";
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import { REMOVE_TRADIE } from '../utils/mutations';
import { QUERY_SINGLE_TRADIE } from '../utils/queries';

const SingleTradie = ({  name,  trade, location, email, phone, comments}) => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { tradieId: tradieId }  = useParams(':tradieId');
  console.log(tradieId)

  const { loading, data } = useQuery(QUERY_SINGLE_TRADIE, {
    // Pass the `thoughtId` URL parameter into query to retrieve this thought's data
    variables: {tradieId: tradieId},
  })
  useMutation(REMOVE_TRADIE, {
    // Pass the `thoughtId` URL parameter into query to retrieve this thought's data
    variables: {tradieId: tradieId},
  });

  const tradie = data?.tradie|| {  name,  trade, location, email, phone, comments};
  console.log(tradie)

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div  className="my-3">
      <h4 className="card-header bg-dark text-light p-2 m-0">
                    {tradie.name} <br />
                  </h4>
                  <ul>
                    <li>{tradie.trade}</li>
                    <li>{tradie.location}</li>
                    <li>{tradie.email}</li>
                    <li>{tradie.phone}</li>
                  </ul>

      <div className="my-5">
        <CommentList comments={tradie.comments} />
      </div>
      <div className="m-3 p-4" style={{ border: '1px dotted #1a1a1a' }}>
        <CommentForm tradieId={tradie._id} />
      </div>
      <div className="col-12 col-lg-3">
              <button className="btn btn-primary btn-block py-3" type="submit">
                Delete
              </button>
            </div>
    </div>
  );
};

export default SingleTradie;
