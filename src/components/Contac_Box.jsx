import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";


export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_onjlnmr",
        "template_4tdktqg",
        form.current,
        "b3EnsOOq-IBFCRDPc"
      )
      .then(() => {
        alert("Mensaje enviado correctamente.");
        form.current.reset();
      })
      .catch(() => {
        alert("Ocurrió un error.");
      });
  };

  return (
    <section id="contacto" className="contact-section">
        <div className="contact-container">
            {/* Lado izquierdo */}
            <div className="contact-info">
                <div className="contact-header">
                    <div className="contact-icon">
                        <MessageCircle size={32}/>
                    </div>
                    <div>
                        <h1>Contacto</h1>
                    </div>
                </div>
                <div className="contact-items">
                    <div className="contact-item">
                        <MapPin />
                        <div>
                            <span>Ubicación</span>
                            <p>Cartagena, Colombia</p>
                        </div>
                    </div>

                    <a href="https://wa.me/573145645338" target="_blank" className="contact-item">
                        <Phone />
                        <div>
                            <span>Teléfono</span>
                            <p>+57 314 5645338</p>
                        </div>
                    </a>

                    <a href="mailto:juanmoreno8758@gmail.com" className="contact-item">
                        <Mail />
                        <div>
                            <span>Correo Personal</span>
                            <p>juanmoreno8758@gmail.com</p>
                        </div>
                    </a>
                    <a href="mailto:juamoreno@utb.edu.co" className="contact-item">
                        <Mail />
                        <div>
                            <span>Correo Educativo</span>
                            <p>juamoreno@utb.edu.co</p>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/juan-moreno-santos-9a223630a" target="_blank" className="contact-item">
                        <FaLinkedin />
                        <div>
                            <span>LinkedIn</span>
                            <p>Ver Perfil</p>
                        </div>
                    </a>
                </div>

            </div>
                {/* Lado derecho */}
            <div className="contact-form">
                <h2>
                    Envíame un mensaje
                </h2>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" placeholder="Digite su nombre" required/>

                    <input type="email" name="user_email" placeholder="Digite su correo electrónico" required/>

                    <textarea rows="6" name="message" placeholder="Tu mensaje..." required/>

                    <button type="submit">
                        Enviar Mensaje
                    </button>

                </form>
            </div>
        </div>
    </section>

  );
}