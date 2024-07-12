import React from "react";
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {

    const year = new Date().getFullYear

    return (
        <footer>
            <br />
            <Container>
                <Row>
                    <Col lg="4">
                        <div className="logo">
                            <h1 className="text-white">WorkSpace</h1>
                        </div>
                        <p className="footer__text mt-4">
                        Descubre un mundo de estilo y funcionalidad en nuestro sitio especializado en muebles para interiores de estilo minimalista. También ofrecemos una amplia selección de productos como celulares, auriculares, relojes y más, diseñados para complementar tu espacio con elegancia y modernidad.
                        </p>
                    </Col>
                    <Col lg="3">
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Categorías Principales</h4>
                            <ListGroup>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Celulares</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Sofá Modernos</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Sillón</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Reloj Inteligente</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg="2">
                        <div className="footer__quick-links">
                            <h4 className="quick__links-title">Enlaces útiles</h4>
                            <ListGroup>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="/shop">Tienda</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="/cart">Carrito</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="/login">Acceso</Link>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0">
                                    <Link to="#">Privacy policy</Link>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg="3">
                    <div className="footer__quick-links">
                            <h4 className="quick__links-title">Contacto</h4>
                            <ListGroup className="footer__contact">
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span><i class="ri-map-pin-line"></i></span>
                                    <p>568 Gral. Mitre, Salta. Argentina</p>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span><i class="ri-phone-line"></i></span>
                                    <p>+549-3875-468-614</p>
                                </ListGroupItem>
                                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                                    <span><i class="ri-mail-line"></i></span>
                                    <p>workspace@gmail.com</p>
                                </ListGroupItem>
                            </ListGroup>
                        </div>
                    </Col>
                    <Col lg="12">
                    <p className="footer__copyright">
                    © {year} WorkSpace. Todos los derechos reservados.
                    </p></Col>
                </Row>
            </Container>
            <br />
        </footer>
    );
};

export default Footer;
