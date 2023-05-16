import React from 'react';

// Import the `useParams()` hook
import { useParams, Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import "../components/Styles/main.css";
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';
import { REMOVE_TRADIE } from '../utils/mutations';
import { QUERY_SINGLE_TRADIE,QUERY_TRADIES } from '../utils/queries';

const SingleTradie = ({  name,  trade, location, email, phone, comments}) => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { tradieId: tradieId }  = useParams(':tradieId');
  console.log(tradieId)
  const [removeTradie] = useMutation(REMOVE_TRADIE, 
    {
      update(cache, { data: { removeTradie }}) {
        console.log(removeTradie);
        cache.writeQuery({
          query: QUERY_SINGLE_TRADIE,
          data: { tradie: removeTradie },
        });
      }
    });

  const deleteTradieHandler = async (event) => {
    let tradieId = event.target.id;
    await removeTradie({
      variables: {
        tradieId: tradieId
      }
    })
  };


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
    <div  className=" container my-3" style={{ backgroundColor: '#787c8a ' }}>
      <h4 className="card-header-a bg-dark text-light p-2 m-0">
                    {tradie.name} <br />
                  </h4>

                  <ul className='ul-a'>
                    <li>Trade :- {tradie.trade} </li>
                    <li>Location :- {tradie.location}</li>
                    <li>Email :- {tradie.email}</li>
                    <li> Phone :- {tradie.phone}</li>

                    <Link to ="/"className='library-delete lib-button' id={tradieId} onClick={deleteTradieHandler}>DELETE</Link>
                  </ul>

      <div className=" card my-5">
        <CommentList comments={tradieId} />
      </div>
      <div className="card m-3 p-4" style={{ border: '2px solid #1a1a1a' }}>
        <CommentForm id={tradieId} />
      </div>
    </div>
    
  );
};

export default SingleTradie;
