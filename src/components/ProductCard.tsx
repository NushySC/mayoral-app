import React from 'react';

interface Product {
    name: string;
    image: string;
    price: number;
    discount_percentage?: number;
    price_with_discount: number;
    options?: string[];
    sale?: boolean;
    stock?: boolean;
}

interface Props {
    product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
    return (
        <div className={`card ${product.stock === false ? 'out-of-stock' : ''}`}>
            {product.sale && <span className='card__sale'>SALE!</span>}
            <div className="card__image">
                <img src={product.image} alt={product.name} />
            </div>
            <div className="card__body">
                <h3 className="card__title">{product.name}</h3>
                {product.options && (
                    <div className="card__options">
                        {product.options.map((option, index) => (
                            <div key={index} className={`card__option ${option}`}>
                                {option}
                            </div>
                        ))}
                    </div>
                )}
                {product.discount_percentage ? (
                    <>
                        <p className="card__discount">
                            ${product.price} - {product.discount_percentage}%
                        </p>
                        <p className="card__price">
                            ${product.price_with_discount.toFixed(2)}
                        </p>
                    </>
                ) : (
                    <p className="card__price">${product.price}</p>
                )}
            </div>
            <button className="card__cta">Add to Cart</button>
        </div>
    );
};

export default ProductCard;
