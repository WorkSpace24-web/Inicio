import React from "react";
import ProductsCart from "./ProductsCart";

const ProductsList = ({ data }) => {
    return (
        <>
            {data?.map(item => (
                <ProductsCart key={item.id} item={item} />
            ))}
        </>
    );
};

export default ProductsList;
