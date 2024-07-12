import React from "react";
import productImg from "../../assets/images/arm-chair-01.jpg";
import { motion } from "framer-motion";
import "../../styles/product-card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";

const ProductsCart = ({item}) => {
    return (
        <Col lg="3" md="4" className="mb-2">
            <div className="product__item">
                <div className="product__img">
                    <motion.img whileHover={{ scale: 1.2 }} src={item.imgUrl} alt="" />
                </div>
                <div className="p-2 product__info">
                    <h3 className="product__name">
                        <Link to="/shop/id" className="product__link">{item.productName}</Link>
                    </h3>
                    <span>{item.category}</span>
                </div>
                <div className="product__cart-bottom d-flex align-items-center justify-content-between p-2">
                    <span className="price">${item.price}</span>
                    <motion.span whileTap={{ scale: 1.5 }} className="icon"><i className="ri-add-circle-fill"></i></motion.span>
                </div>
            </div>
        </Col>
    );
};

export default ProductsCart;
