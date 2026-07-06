import { useState } from "react";
import { projects } from "./data/projects";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero.jsx";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import Contact_Box from "./components/Contac_Box.jsx";
import "./CSS/Contac_Box.css";
import "./CSS/App.css";

function App() {
  const [selectedProject, setSelectedProject] = 
    useState(null);
  
  return (
  <>
    <Navbar />
    <Hero />
    <section id="experiencia" className="experience-section pt-24 scroll-mt-24" >
      <h2 className="title">
        Experiencia
        </h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-icon">💼</div>

          <div className="timeline-content">
            <div className="job-header">
              <h3>
                Analista Transformacion Digital
              </h3>
            </div>

            <p className="company">
              Torbull SAS · Obra: Practicas Profesionales
            </p>

            <p className="date">
              Agosto 2025 - Febrero 2026
            </p>

            <p className="description">
              Gestión y optimización de plataformas digitales empresariales, 
              incluyendo la administración de sitios web en Shopify, la gestión 
              de procesos de facturación y control financiero mediante Zoho Books, 
              y la integración de herramientas CRM como Kommo y WhatsApp Business. 
              Participación en proyectos de transformación digital orientados a la 
              automatización de procesos, mejora de la productividad, fortalecimiento 
              de la atención al cliente y soporte tecnológico para la modernización 
              de las operaciones empresariales.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-icon">📄</div>

          <div className="timeline-content">
            <h3>Desarrollador de Software - Prueba Tecnica</h3>

            <p className="company">
              CHATTERNOW · Marzo 2025 - Abril 2025
            </p>
        
            <p className="description"> 
              <strong>· Desarrollo Front-end y UX: </strong>
              Creación y construcción de interfaces de 
              usuario visualmente atractivas, modernas, eficientes y fáciles de usar. 
              Se desarrollaron funcionalidades para aplicaciones web utilizando Angular 
              y Tailwind CSS, garantizando la alineación con los requerimientos y 
              expectativas de los usuarios para mejorar su experiencia final.
              <strong>· Desarrollo de Base de Datos: </strong>
              Implementación y gestión de bases de datos 
              mediante Supabase, incorporando funcionalidades específicas en tiempo real (Realtime).
            </p>
          </div>
        </div>

        
        <div className="timeline-item">
          <div className="timeline-icon">🔐</div>

          <div className="timeline-content">
            <div className="job-header">
              <h3>Proyecto de Grado</h3>
            </div>

            <p className="company">
              SYSNET SAS · Obra: Proyecto de Grado - Implementacion Wazuh (SIEM)
            </p>

            <p className="date">
              Septiembre 2024 - Mayo 2025
            </p>

            <p className="description">
              <strong>· Diseño e Infraestructura Cloud: </strong>
              Diseño e implementación de una arquitectura completa 
              Wazuh SIEM para la empresa SYSNET, planificando y 
              automatizando su despliegue en la nube mediante 
              Azure DevOps.
              <strong>· Detección y Monitoreo: </strong>
              Configuración de reglas de alerta en tiempo real 
              para la detección temprana de amenazas y eventos 
              anómalos.             
              <strong>· Documentación Técnica: </strong>
              Elaboración de un informe detallado de todo el 
              proceso para asegurar futuras referencias, 
              actualizaciones y mantenimientos.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="proyectos" className="projects-section pt-24 scroll-mt-24">
      <h2 className="title">
        Proyectos
      </h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() =>
            setSelectedProject(project)
            } 
          />
        ))}
      </div>
    </section>
      {
        selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() =>
            setSelectedProject(null)
            }
          />
        )
      }
    
    <section id="sobre-mi" className="about-section pt-24 scroll-mt-24">

      <h2 className="about-title">
        👤 Sobre mí
      </h2>

      <p className="about-text">
        Soy <strong>Ingeniero en Sistemas y Computación</strong> con conocimientos en 
        desarrollo de software, desarrollo web, ciberseguridad e infraestructura tecnológica. 
        Tengo experiencia en el desarrollo de aplicaciones web utilizando tecnologías como 
        Angular, React, JavaScript, TypeScript, Python, HTML, CSS y Tailwind CSS, además de 
        conocimientos en bases de datos SQL y NoSQL, computación en la nube y administración 
        de sistemas Linux.
      </p>

      <p className="about-text">
        Actualmente soy egresado de la Universidad Tecnológica de Bolívar. Me caracterizo 
        por ser una persona proactiva, responsable y con facilidad para trabajar en equipo. 
        Siempre estoy dispuesto a asumir nuevos retos, adquirir nuevos conocimientos y 
        contribuir de manera positiva en entornos colaborativos.      
      </p>

      <h3 className="section-title blue">
        🎓 Educación
      </h3>

      <ul className="about-list">
          <li>
              <strong>Ingeniería en Sistemas y Computación</strong> —
              Universidad Tecnológica de Bolívar (2021 - 2026)
          </li>

          <li>
              <strong>Ciberseguridad - Nivel Básico 159 horas</strong> —
              Universidad Tecnológica de Bolívar (Etapa lectiva finalizada en 2024)
          </li>

          <li>
              <strong>Bachiller Académico</strong> —
              Institución Educativa San Jose de Turbaco
              (2015 - 2020)
          </li>
      </ul>

      <h3 className="section-title green">
          {"</>"} Habilidades Técnicas
      </h3>

      <div className="skills-grid">

        {/* Lenguajes */}
        <span>Java</span>
        <span>JavaScript</span>
        <span>Python</span>

        {/* Frontend */}
        <span>React</span>
        <span>Angular</span>

        {/* Backend */}
        <span>Node.js</span>
        <span>Express</span>

        {/* Bases de datos */}
        <span>PostgreSQL</span>
        <span>SQL Server</span>
        <span>Supabase</span>

        {/* DevOps y Control de Versiones */}
        <span>Docker</span>
        <span>Azure DevOps</span>
        <span>Git</span>
        <span>GitHub</span>

        {/* Sistemas Operativos */}
        <span>Linux</span>
        <span>Kali Linux</span>

        {/* Ciberseguridad */}
        <span>Wazuh SIEM</span>

        {/* CMS y CRM */}
        <span>Shopify</span>
        <span>WordPress</span>
        <span>Kommo CRM</span>

        {/* Virtualización */}
        <span>Virtual Machine</span>

      </div>

      <h3 className="section-title red">
          🌐 Idiomas
      </h3>

      <ul className="about-list">
          <li><strong>文 Español</strong> — Nativo</li>
          <li><strong>文 Inglés</strong> — Intermedio (B1)</li>
      </ul>
    </section >
    <Contact_Box />
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-copy">
          © {new Date().getFullYear()} <strong>Juan Moreno</strong>. Desarrollado con
          <span className="heart"> 💙</span>
        </p>
        <div className="footer-links">
          <a href="https://github.com/JuanMoreno1902" target="_blank" rel="noopener noreferrer">
            <FaGithub />
            <span>Github</span>
          </a>
          <a href="https://www.linkedin.com/in/juan-moreno-santos-9a223630a" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  </>
  );
}

export default App;