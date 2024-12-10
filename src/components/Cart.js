import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetchItems from './useFetchItems';

function Cart() {
  const { id } = useParams();
  // const [item, setItem] = useState(null);

  const [data]=useFetchItems((`https://fakestoreapi.com/products/${id}`),[id])
  const [showAlert, setShowAlert] = useState(false);

  // useEffect(() => {
  //   if (id) {
  //     // Fetch data for the specific item
  //     fetch(`https://fakestoreapi.com/products/${id}`)
  //       .then(res => res.json())
  //       .then(json => setItem(json))  // Update the state with fetched data
  //       .catch(error => console.error('Error fetching item:', error));
  //   }
  // }, [id]);

  const handleBuyNow = () => {
     setShowAlert(true); 
     setTimeout(() => setShowAlert(false), 3000);
  }    // Hide alert after 3 seconds };

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="single-card">
      <h3>ID={data.id}</h3>
      <hr />
      <h2>{data.title}</h2>
      <img src={data.image} alt={data.title} className="item-image" />
      <p>{data.description}</p>
      <p>Price: ${data.price}</p>
      <button className="btn btn-success" onClick={handleBuyNow}>Buy now</button>
      {showAlert && ( 
        <div className="alert alert-success" role="alert"> Purchase Successful! </div> 
      )}
    </div>
  );
}

export default Cart
