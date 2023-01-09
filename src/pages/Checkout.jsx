import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import "../styles/checkout.css";


const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 0;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };
  function finalizarCompra(){
      let perfil = JSON.parse(localStorage.getItem('cartItems'))
      let productosParaWsp = perfil
      let arraylength = productosParaWsp.length
  
      let today = new Date();
      let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      let print;
      let cadena = "";
      //logic to create the string
      if (arraylength>0){
          cadena=JSON.stringify(productosParaWsp[0].quantity)+" "+JSON.stringify(productosParaWsp[0].title)+'%20😊%20%24%20'+JSON.stringify(productosParaWsp[0].totalPrice)+'*%0A%20%20Precio%20unitario%20%24%20'+JSON.stringify(productosParaWsp[0].price)+'%0A'
      }
      else{
          cadena='no hay productos'
      }
  
      for (let i = 1; i < arraylength; i++) {
          cadena += '%0A-%20'+"*x"+JSON.stringify(productosParaWsp[i].quantity)+" "+JSON.stringify(productosParaWsp[i].title)+'%20😊%20%24%20'+JSON.stringify(productosParaWsp[i].totalPrice)+'*%0A%20%20Precio%20unitario%20%24%20'+JSON.stringify(productosParaWsp[i].price)+'%0A';
      }
      window.location.href = 
    'https://api.whatsapp.com/send?phone=573204831474&text=%0A%20📍%20*Envíanos tu nombre, tu ubicación o dirección y tu método de pago en un mensaje para coordinar tu entrega.*%0A%20*Gracias por preferirnos❤️*%0A'+'%0A👋%20Hola%2C%20vengo%20de%20*Arepitas%20Pues*%0A🗓'+(date)+'⏰%20'+(time)+'%0A%0A*Tipo%20de%20servicio%3A%20Domicilio*%0A'+'*💲%20Costos*%0ACosto%20de%20entrega%3A%20Monto%20por%20confirmar%0A*Total%20a%20pagar%3A%20%24%20'+totalAmount +'*'+ '%0A%20⚠️%20*Pendiente costo de envio*'+'%0A*📝%20Pedido*%0A%0A-%20*x'+
    cadena 
  }




    
    
  

  return (
    <Helmet title="Zona de Confirmacion">
      <CommonSection title="Pago" />
      <section>
        <Container>
          <Row>
          

            <Col lg="4" md="6">
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>${cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Envio: <span>${shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>${totalAmount}</span>
                  </h5>
                  <br />
                  <button onClick={finalizarCompra} className="addTOCart__btn whatsapp-btn " type="submit" >
                  Finalizar Compra por WhatsApp
                </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
