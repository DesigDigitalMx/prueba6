import React from "react";
import { FaFacebook } from "react-icons/fa";

function Contacto() {
  return (
    <div className="contacto">
      <h2 className="titulo_contacto">
        Nuestro <span className="style_span">Contacto</span>
      </h2>
      <div className="contacto_container style_general">
        <div className="contacto_ayudarte">
          <div className="text_content">
            <span className="style_titulo">
              ¡Nos encantaría{" "}
              <span className="style_span_general">Escucharte!</span>
            </span>
            <p>
              Si tienes alguna pregunta, comentario o sugerencia, <br /> no
              dudes en ponerte en contacto con nosotros.
            </p>
          </div>
          <div className="img_container_uno">
            <img
              src="https://scontent.fntr1-2.fna.fbcdn.net/v/t39.30808-6/373539997_122095313090036232_4477490864599760838_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=49d041&_nc_ohc=_xDA3Be_tgMAX-m4hQW&_nc_ht=scontent.fntr1-2.fna&oh=00_AfCpPQC2yMQdhB-840J0L0-AKsPEenNHT8gH7d69ctkxCA&oe=64FD29CC"
              alt=""
            />
          </div>
        </div>

        <footer className="footer" id="footer">
          <div className="footer_content">
            <div className="direccion">
              <h2 className="titulo_subs">Zona</h2>
              <div className="direccion_content">
                <p className="parrafo_subs">Dirección:</p>
                <p>Reynosa,Tamaulipas.Mexico</p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114722.28482037003!2d-98.37860382813638!3d26.031219734224123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866509e70b1ab591%3A0x4568c85f5cba4884!2sReynosa%2C%20Tamps.!5e0!3m2!1ses-419!2smx!4v1693956165077!5m2!1ses-419!2smx"
                  width="300"
                  height="200"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  className="mapa"
                ></iframe>
              </div>
            </div>
           <div className="contacto">
  <h2 className="titulo_contacto">Joslee Deliciosa comida en la comodida de tu hogar</h2>
  <h3 className="subtitulo_contacto">CONTACTANOS.</h3>
  <p className="numero_contacto">
    <a href="tel:+528999840089">(+52) 899-984-0089</a>
  </p>
  <a className="facebook" href="https://www.facebook.com/Joslee.Reynosa">
    <FaFacebook className="facebook_icon" />
    Visita Nuestro Facebook
  </a>
</div>
            <div className="horarios">
              <h2 className="titulo_horario">HORARIOS</h2>
              <div className="horarios_content">
                <p className="dia">Dom</p>
                <p className="hora">Cerrado</p>
              </div>
              <div className="horarios_content">
                <p className="dia">Lun a Sab</p>
                <p className="hora">09:00 am - 05:00 pm</p>
              </div>
            </div>
          </div>
          <div className="footer_copy">
            <p>
              ©2023 Todos los derechos reservados.
              <a
                target="_blank"
                href="https://www.facebook.com/DesignDigitalMx"
              >
                DesignDigitalMexico
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Contacto;
