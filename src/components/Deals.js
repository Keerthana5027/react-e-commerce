import React from 'react';


const Deals = () => {
    const deals = [
        {
            id: 1,
            title: "Electronics",
            description: "Experience your favorite shows in stunning clarity with this 50-inch LED TV.",
            discount: 30,
            price: "$299.99",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsVRfKBB2QvCRXGCKBRkk5rHFPyqOmdCSt7A&s", // Replace with actual image URL
        },
        {
            id: 2,
            title: "Jewellery",
            description: "Elegant jewelry set perfect for any occasion.",
            discount: 20,
            price: "$49.99",
            image: "https://media.istockphoto.com/id/1047601114/photo/golden-bracelets-and-earrings-with-pearls-on-pink-and-white-background.jpg?s=612x612&w=0&k=20&c=Q4Q-J-pCtZRF06rnJYZbCQtn_fRVKXvX2HQhf4NgSfE=", // Replace with actual image URL
        },
        {
            id: 3,
            title: "Men's Clothing",
            description: "Stylish and comfortable men's clothing.",
            discount: 25,
            price: "$39.99",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWh1wZTh3N5rhOD6Vo1Q_zLCTxk3JmbmHNZQ&s", // Replace with actual image URL
        },
        {
            id: 4,
            title: "Women's Clothing",
            description: "Fashionable women's clothing for every season.",
            discount: 15,
            price: "$29.99",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSREOAcWneevsZ71TlmlEWcKd6xRD2wlcqVVw&s", // Replace with actual image URL
        },
    ];

    return (
        <div className="deals-container">
            {deals.map(deal => (
                <div key={deal.id} className="deal-card">
                    <img src={deal.image} alt={deal.title} />
                    <div className="deal-info">
                        <h3 className="deal-title">{deal.title}</h3>
                        <p className="deal-description">{deal.description}</p>
                        <p className="deal-discount">{deal.discount}% off</p>
                        <p className="deal-price">{deal.price}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Deals;
