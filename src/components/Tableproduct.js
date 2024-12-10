import React, { useState, useEffect } from 'react';
import Delete from './Delete';
import Edit from './Edit';
import { useNavigate } from 'react-router-dom';
import Cart from './Cart'

function Tableproduct() {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [limit, setLimit] = useState(5); // Default limit
    const [search, setSearch] = useState(''); // State for search input
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products?limit=${limit}`)
            .then(res => res.json())
            .then(json => {
                setProducts(json);
                setFilteredProducts(json);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, [limit]);

    useEffect(() => {
        const filtered = products.filter(product => 
            product.title.toLowerCase().startsWith(search.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [search, products]);

    const handleAddToCart = (itemId) => {
        navigate(`/cart/${itemId}`);
      };

    return (
        <>
        <div className='search-bar'>
            <input
                type="text"
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {filteredProducts.map((product) => (
                    <tr key={product.id} onClick={()=>handleAddToCart(product.id)}>
                        <td>{product.id}</td>
                        <td>{product.title}</td>
                        <td>
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className="product-image" 
                                style={{ width: '50px', height: '50px' }}
                                />
                        </td>
                        <td>{product.description}</td>
                        <td>${product.price}</td>
                        <td>
                            <button className='btn' onClick={() => Delete(product.id, setProducts)}>Delete</button>
                            <br />
                            <br />
                            <button className='btn' onClick={() => Edit(product.id)}>Update</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className='limit-item'>
            <label htmlFor="limit-select">Show items:</label>
            <select 
                id="limit-select" 
                value={limit} 
                onChange={(e) => setLimit(e.target.value)}>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="20">20</option>
            </select>
        </div>
      </>
    );
}

export default Tableproduct;

