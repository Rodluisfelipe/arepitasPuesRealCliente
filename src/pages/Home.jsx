import React, { useState, useEffect } from "react";

import Helmet from "../components/Helmet/Helmet.js";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import heroImg from "../assets/images/hero.png";
import "../styles/hero-section.css";

import { Link } from "react-router-dom";

import Category from "../components/UI/category/Category.jsx";

import "../styles/home.css";

import featureImg01 from "../assets/images/service-01.png";
import featureImg02 from "../assets/images/service-02.png";
import featureImg03 from "../assets/images/service-03.png";

import products from "../assets/fake-data/products.js";

import foodCategoryImg01 from "../assets/images/pizza.png";
import foodCategoryImg02 from "../assets/images/hamburger.png";
import foodCategoryImg03 from "../assets/images/fried-potatoes.png";

import ProductCard from "../components/UI/product-card/ProductCard.jsx";

import whyImg from "../assets/images/location.png";

import networkImg from "../assets/images/network.png";

import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

const featureData = [
  {
    title: "Variedad de Platos",
    imgUrl: featureImg01,
    desc: "Contamos con una carta muy amplia de platos que se ajustan a todos los gustos.",
  },

  {
    title: "Servicio",
    imgUrl: featureImg02,
    desc: "El servicio es muy rapido y eficiente, te atenderemos de la mejor manera posible,ome!",
  },
  {
    title: "Experiencia Culinaria",
    imgUrl: featureImg03,
    desc: "Nuestros platos son elaborados con los mejores ingredientes y con la mejor experiencia culinaria.",
  },
];

const Home = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  const [hotPizza, setHotPizza] = useState([]);

  useEffect(() => {
    const filteredPizza = products.filter((item) => item.category === "Pizza");
    const slicePizza = filteredPizza.slice(0, 4);
    setHotPizza(slicePizza);
  }, []);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }

    if (category === "AREPAS") {
      const filteredProducts = products.filter(
        (item) => item.category === "Arepas"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "COMETE ALGUITO") {
      const filteredProducts = products.filter(
        (item) => item.category === "Comete alguito"
      );

      setAllProducts(filteredProducts);
    }

    if (category === "BEBIDAS") {
      const filteredProducts = products.filter(
        (item) => item.category === "Bebidas"
      );

      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero__content  ">
                <h5 className="mb-3">La manera mas facil de pedir tu orden</h5>
                <h1 className="mb-4 hero__title">
                  <span>HAMBRIENTO?</span> Espera la <br /> comida en
                  <span>  tu puerta Ome!</span>
                </h1>

                <p>
                Tenemos opciones para todos los gustos, desde platos tradicionales hasta innovadoras creaciones culinarias. 
                </p>

                <div className="hero__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Ordena Ahora <i class="ri-arrow-right-s-line"></i>
                  </button>

                  <button className="all__foods-btn">
                    <Link to="/foods">Mirar todo el Menu</Link>
                  </button>
                </div>

                <div className=" hero__service  d-flex align-items-center gap-5 mt-5 ">
                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>{" "}
                    Bajo costo de envio
                  </p>

                  <p className=" d-flex align-items-center gap-2 ">
                    <span className="shipping__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>{" "}
                    Pago 100% seguro
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="hero__img">
                <img src={heroImg} alt="hero-img" className="w-100 , heroimg"  />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Category />
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">¿Que ofrecemos?</h5>
              <h2 className="feature__title">Contamos con ingredientes de</h2>
              <h2 className="feature__title">
                la mejor <span>calidad</span>
              </h2>
              <p className="mb-1 mt-4 feature__text">
              ¡Ven y disfruta de nuestro encantador restaurante en el corazón de la ciudad! Nuestra cocina ofrece una amplia variedad de opciones, desde platos tradicionales hasta innovadoras creaciones culinarias. Nuestro equipo de chefs altamente capacitados se esfuerza por ofrecer siempre platos frescos y deliciosos utilizando ingredientes de alta calidad. 
              </p>
              <p className="feature__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, eius.{" "}
              </p>
            </Col>

            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2>Menu</h2>
            </Col>

            <Col lg="12">
              <div className="food__category d-flex align-items-center justify-content-center gap-4">
                <button
                  className={`all__btn  ${
                    category === "ALL" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("ALL")}
                >
                  Todos
                </button>
                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "AREPAS" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("AREPAS")}
                >
                  <img src={foodCategoryImg01} alt="" />
                  Arepas
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "COMETE ALGUITO" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("COMETE ALGUITO")}
                >
                  <img src={foodCategoryImg02} alt="" />
                  Comete Alguito
                </button>

                <button
                  className={`d-flex align-items-center gap-2 ${
                    category === "BEBIDAS" ? "foodBtnActive" : ""
                  } `}
                  onClick={() => setCategory("BEBIDAS")}
                >
                  <img src={foodCategoryImg03} alt="" />
                  Bebidas
                </button>
              </div>
            </Col>

            {allProducts.map((item) => (
              <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="why__choose-us">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <img src={whyImg} alt="why-tasty-treat" className="w-100" />
            </Col>

            <Col lg="6" md="6">
              <div className="why__tasty-treat">
                <h2 className="tasty__treat-title mb-4">
                  ¿Por que <span>Arepitas Pues?</span>
                </h2>
                <p className="tasty__treat-desc">
                Hay muchas razones por las cuales elegir un restaurante local y paisa puede ser una excelente opción. En primer lugar, apoyar a negocios locales es importante para fomentar el crecimiento económico en la comunidad y ayudar a mantener vivos los negocios locales. Además, los restaurantes locales a menudo utilizan ingredientes frescos y de alta calidad procedentes de productores locales, lo que significa que la comida es más sabrosa y saludable. Además, el personal en un restaurante local suele ser más amable y atento, ya que está comprometido con su comunidad y ofrecer una excelente experiencia a sus clientes. Finalmente, visitar un restaurante local y paisa puede ser una excelente oportunidad para probar la deliciosa comida y la cultura de la región.
                </p>

                <ListGroup className="mt-4">
                

                  <ListGroupItem className="border-0 ps-0">
                    <p className="choose__us-title d-flex align-items-center gap-2 ">
                      <i class="ri-checkbox-circle-line"></i>Mezclas que llenan el alma{" "}
                    </p>
                    <p className="choose__us-desc">
                      Nustrea cocina mezcla sazon, tadicion y buenos ingredientes.
                    </p>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="testimonial ">
                <h5 className="testimonial__subtitle mb-4">Testimonios</h5>
                <h2 className="testimonial__title mb-4">
                  ¿Que estan <span>opinan</span> de nosotros?
                </h2>
                <p className="testimonial__desc">
                  Tu opinion siempre es importante, es por eso que la tenemos en cuenta al momento de mejorar nuestros servicio, muchas gracias por preferirnos

                </p>

                <TestimonialSlider />
              </div>
            </Col>

            <Col lg="6" md="6">
              <img src={networkImg} alt="testimonial-img" className="w-100" />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
