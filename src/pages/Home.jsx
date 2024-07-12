import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import Services from "../service/Services";
import ProductsList from "../components/UI/ProductsList";
import products from "../assets/data/products";
import Clock from "../components/UI/Clock";
import counterImg from "../assets/images/counter-timer-img.png";
import heroImg from "../assets/images/hero-img.png";

const Home = () => {
    const [trendingProducts, setTrendingProducts] = useState([]);
    const [bestSaleProducts, setBestSaleProducts] = useState([]);
    const [mobileProducts, setMobileProducts] = useState([]);
    const [wirelessProducts, setWirelessProducts] = useState([]);
    const [popularProducts, setPopularProducts] = useState([]);

    useEffect(() => {
        const filteredTrendingProducts = products.filter(item => item.category === "chair");
        const filteredBestSaleProducts = products.filter(item => item.category === "sofa");
        const filteredMobileProducts = products.filter(item => item.category === "mobile");
        const filteredWirelessProducts = products.filter(item => item.category === "wireless");
        const filteredPopularProducts = products.filter(item => item.category === "watch");

        setTrendingProducts(filteredTrendingProducts);
        setBestSaleProducts(filteredBestSaleProducts);
        setMobileProducts(filteredMobileProducts);
        setWirelessProducts(filteredWirelessProducts);
        setPopularProducts(filteredPopularProducts);
    }, []);

    return (
        <Helmet title={"Inicio"}>
            <section className="hero__section">
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="hero__content">
                                <p className="hero__subtitle">
                                    Producto de tendencia en
                                </p>
                                <h2>Haz que tu interior sea más minimalista y moderno</h2>
                                <p>Descubre una nueva forma de expresar tu estilo con muebles diseñados para el confort y la elegancia. Transforma tu espacio con nuestras colecciones exclusivas que combinan funcionalidad y diseño vanguardista.</p>
                                <br />
                                <motion.button whileTap={{ scale: 1.2 }} className="buy__btn">
                                    <Link to="/shop">COMPRAR AHORA</Link>
                                </motion.button>
                            </div>
                        </Col>
                        <Col lg="6" md="6">
                            <div className="hero__img">
                                <motion.img whileHover={{ scale: 1.2 }} src={heroImg} alt="Imagen de héroe" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <Services />
            <br />
            <br />
            <br />
            <section className="trending__products">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2 className="section__title">Productos de Tendencia</h2>
                        </Col>
                        <ProductsList data={trendingProducts} />
                    </Row>
                </Container>
            </section>
            <br />
            <br />
            <br />
            <section className="best__sale">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center ">
                            <h2 className="section__title">Más vendidos</h2>
                        </Col>
                        <ProductsList data={bestSaleProducts} />
                    </Row>
                </Container>
            </section>
            <br />
            <br />
            <br />
            <section className="timer__count">
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="clock__top-content mb-5">
                                <h4 className="text-white fs-5 mb-3">Ofertas Limitadas</h4>
                                <h3 className="text-white fs-6 mb-2">Sillones de calidad</h3>
                            </div>
                            <Clock />
                            <motion.button whileTap={{scale: 1.2}} className="buy__btn store__btn"><Link to="/shop">Visitar la tienda</Link></motion.button>
                        </Col>
                        <Col lg="6" md="6" className="text-end">
                            <img src={counterImg} alt="Contador de tiempo" />
                        </Col>
                    </Row>
                </Container>
            </section>
            <br />
            <br />
            <br />
            <section className="new__arrivals">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center mb-5">
                            <h2 className="section__title">Recién llegados</h2>
                        </Col>
                        <ProductsList data={mobileProducts} />
                        <ProductsList data={wirelessProducts} />
                    </Row>
                </Container>
            </section>
            <br />
            <br />
            <br />
            <section className="popular__category">
            <Container>
                    <Row>
                        <Col lg="12" className="text-center mb-5">
                            <h2 className="section__title">Destacados</h2>
                        </Col>
                        <ProductsList data={popularProducts} />
                    </Row>
                </Container>
            </section>
            <br />
            <br />
        </Helmet>
    );
};

export default Home;
