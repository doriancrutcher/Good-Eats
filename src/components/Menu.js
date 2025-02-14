import React from 'react';
import './Menu.css';

const Menu = () => {
    const menuItems = [
        {
            name: 'Grilled Salmon',
            description: 'Freshly grilled salmon served with a lemon butter sauce and seasonal vegetables.',
            price: '$22.99',
        },
        {
            name: 'Caesar Salad',
            description: 'Crisp romaine lettuce, homemade croutons, and parmesan cheese tossed in Caesar dressing.',
            price: '$12.99',
        },
        {
            name: 'Margherita Pizza',
            description: 'Classic pizza topped with fresh mozzarella, tomatoes, and basil.',
            price: '$15.99',
        },
        {
            name: 'Spaghetti Carbonara',
            description: 'Spaghetti pasta with pancetta, egg, and parmesan cheese in a creamy sauce.',
            price: '$18.99',
        },
        {
            name: 'Chocolate Lava Cake',
            description: 'Decadent chocolate cake with a molten center, served with vanilla ice cream.',
            price: '$8.99',
        },
    ];

    return (
        <div className="menu">
            <h1>Our Menu</h1>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index} className="menu-item">
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <span>{item.price}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu; 