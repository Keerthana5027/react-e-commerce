function Delete(productId, setProducts) {
    fetch(`https://fakestoreapi.com/products/${productId}`, {
      method: "DELETE",
    })
      .then(res => res.json())
      .then(() => {
        // Remove the deleted product from the state
        setProducts(prevProducts => prevProducts.filter(product => product.id !== productId));
        console.log(`Product with ID ${productId} deleted successfully.`);
        alert(`Product with ID ${productId} deleted successfully.`)
      })
      .catch(error => console.error('Error deleting product:', error));
  }
  
  export default Delete;
