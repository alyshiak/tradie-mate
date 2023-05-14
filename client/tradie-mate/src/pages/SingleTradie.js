import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_TRADIE } from '../utils/queries';

const SingleTradie = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { tradieId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_TRADIE, {
    // pass URL parameter
    variables: { tradieId: tradieId },
  });

  const tradie = data?.tradie || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
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
    </div>
  );
};

export default SingleTradie;
