document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      id: "reindustrias",
      title: "REINDUSTRIAS",
      description: "Plataforma de gestión vehicular desarrollada para Reindustrias, que permite consultar, registrar y monitorear información de vehículos y clientes. Incluye módulos de inicio de sesión, panel administrativo, reportes y control de mantenimiento, con visualización de datos mediante tablas y gráficos.",
      images: [
        "src/Reindustrias1.jpg",
        "src/Reindustrias2.jpg",
        "src/Reindustrias3.jpg",
        "src/Reindustrias4.jpg"
      ],
      stack: ["Angular 12", "TypeScript", "Bootstrap Icons", "Chart.js (Graficas)", "SweetAlert2", "DataTables", "Laravel", "MySQL", "JWT Auth"]
    },
    {
      id: "indicadores",
      title: "Indicadores Institucionales",
      description: "Aplicación web desarrollada para la Corporación Universitaria del Huila (CORHUILA) que permite gestionar y visualizar el avance de indicadores institucionales mediante gráficos interactivos y paneles de control dinámicos.",
      images: [
        "src/PDI1.jpg",
        "src/PDI2.jpg",
        "src/PDI3.jpg",
        "src/PDI4.jpg"
      ],
      stack: ["Angular 12", "TypeScript", "Chart.js (gráficas)", "SweetAlert2", "DataTables", "Laravel 8", "PHP 8", "MySQL", "JWT Auth"]
    },
    {
      id: "fortalecimiento",
      title: "Fortalecimiento de Competencias",
      description: "Aplicación web desarrollada para la Corporación Universitaria del Huila (CORHUILA) que permite a los estudiantes consultar el reporte de resultados y el nivel de desempeño de un diagnóstico de competencias, con un detalle por módulos y componentes.",
      images: [
        "src/ReporteResultado1.jpg",
        "src/ReporteResultado2.jpg",
        "src/ReporteResultado3.jpg",
        "src/ReporteResultado4.jpg"
      ],
      stack: ["JavaScript", "HTML", "CSS", "PostgreSQL", "SweetAlert2", "PHP"]
    },
    {
      id: "sistema-entrevistas",
      title: "Sistema de Entrevistas CORHUILA",
      description: "Aplicación web desarrollada para la Corporación Universitaria del Huila (CORHUILA) que permite gestionar y registrar las Entrevistas de Admisión de aspirantes, distinguiendo entre el cuestionario Psicológico y el de Directores de Programa, además de permitir la consulta de los registros realizados.",
      images: [
        "src/EntrevistaCorhuila1.jpg",
        "src/EntrevistaCorhuila2.jpg",
        "src/EntrevistaCorhuila3.jpg",
        "src/EntrevistaCorhuila4.jpg"
      ],
      stack: ["JavaScript", "HTML", "CSS", "PostgreSQL", "SweetAlert2", "PHP"]
    },
    {
      id: "autoreporte-covid19",
      title: "Autoreporte de Síntomas COVID19",
      description: "Aplicación web desarrollada para la Corporación Universitaria del Huila (CORHUILA) que permite a los miembros de la comunidad realizar el autorreporte semanal de síntomas y estado de vacunación de COVID-19 para la gestión de riesgo institucional.",
      images: [
        "src/AutoReporteCovid1.jpg",
        "src/AutoReporteCovid2.jpg",
        "src/AutoReporteCovid3.jpg",
        "src/AutoReporteCovid4.jpg"
      ],
      stack: ["JavaScript", "HTML", "CSS", "PostgreSQL", "SweetAlert2", "PHP", "JWT Auth", "Google API Client", "Composer"]
    },
    {
      id: "reportes-covid19",
      title: "Reportes COVID19",
      description: "Aplicación web desarrollada para el área de Bienestar Institucional de la Corporación Universitaria del Huila (CORHUILA) que permite generar reportes estadísticos y consultar la información de personas registradas sobre el COVID-19, incluyendo estado de vacunación y síntomas asociados.",
      images: [
        "src/ReporteCovid1.jpg",
        "src/ReporteCovid2.jpg",
        "src/ReporteCovid3.jpg",
        "src/ReporteCovid4.jpg"
      ],
      stack: ["JavaScript", "HTML", "CSS", "PostgreSQL", "SweetAlert2", "PHP", "JWT Auth", "Google API Client", "Composer"]
    },
    {
      id: "cortina-inscripciones",
      title: "Cortina de Inscripciones",
      description: "Diseño de banner web implementado en el sitio oficial de la Corporación Universitaria del Huila (CORHUILA) para promover y dirigir las inscripciones abiertas del periodo académico 2022-B.",
      images: ["src/CortinaCorhuila.jpg"],
      stack: ["HTML", "CSS"]
    },
    {
      id: "registro-eventos-calificaciones",
      title: "Registro de Eventos y Calificaciones",
      description: "Aplicación web desarrollada para la Corporación Universitaria del Huila (CORHUILA) que permite a los organizadores registrar y gestionar eventos o reuniones, llevar el control de los asistentes y visualizar estadísticas, incluyendo la calificación o percepción de los mismos.",
      images: [
        "src/RegistroCalificacionEventos1.jpg",
        "src/RegistroCalificacionEventos2.jpg",
        "src/RegistroCalificacionEventos3.jpg",
        "src/RegistroCalificacionEventos4.jpg"
      ],
      stack: ["JavaScript", "HTML", "CSS", "PostgreSQL", "SweetAlert2", "PHP", "JWT Auth", "Google API Client", "Composer"]
    },
    {
      id: "autorizacion-permisos",
      title: "Autorización de Permisos CORHUILA",
      description: "Aplicación web desarrollada para la Corporación Universitaria del Huila (CORHUILA) que permite gestionar la autorización y el seguimiento de permisos solicitados por colaboradores, visualizar estadísticas de permisos y administrar las fechas electorales.",
      images: [
        "src/AutorizacionPermisos1.jpg",
        "src/AutorizacionPermisos2.jpg",
        "src/AutorizacionPermisos3.jpg",
        "src/AutorizacionPermisos4.jpg"
      ],
      stack: ["JavaScript", "HTML", "CSS", "PostgreSQL", "SweetAlert2", "PHP", "JWT Auth", "Google API Client", "Composer"]
    },
    {
      id: "programas-pregrado",
      title: "Programas Pregrado de CORHUILA",
      description: "Aplicación web desarrollada para la Corporación Universitaria del Huila (CORHUILA) con el fin de promocionar sus programas de pregrado y capturar datos de contacto de aspirantes interesados, facilitando la comunicación directa a través de WhatsApp.",
      images: [
        "src/ProgramasPregrado1.jpg",
        "src/ProgramasPregrado2.jpg",
        "src/ProgramasPregrado3.jpg",
        "src/ProgramasPregrado4.jpg"
      ],
      stack: ["JavaScript", "HTML", "CSS", "SweetAlert2", "PHP", "PHPMailer", "Composer"]
    },
    {
      id: "programas-posgrado",
      title: "Programas Posgrado de CORHUILA",
      description: "Aplicación web desarrollada para la Corporación Universitaria del Huila (CORHUILA) con el fin de promocionar sus programas de posgrado (especializaciones y maestrías) y capturar datos de contacto de aspirantes interesados, facilitando la comunicación directa a través de WhatsApp.",
      images: [
        "src/ProgramasPosgrados1.jpg",
        "src/ProgramasPosgrados2.jpg",
        "src/ProgramasPosgrados3.jpg",
        "src/ProgramasPosgrados4.jpg"
      ],
      stack: ["JavaScript", "HTML", "CSS", "SweetAlert2", "PHP", "PHPMailer", "Composer"]
    },
    {
      id: "banner-publicitario",
      title: "Banner Publicitario CORHUILA",
      description: "Diseño de banner web implementado en el sitio de la Corporación Universitaria del Huila (CORHUILA) para promocionar cursos de educación continua ('Cómo invertir en acciones' y 'Finanzas personales para el futuro'), facilitando la consulta de información de contacto.",
      images: ["src/BannerCorhuila.jpg"],
      stack: ["HTML", "CSS"]
    },
  ];

  const grid = document.getElementById("portfolioGrid");
  const modal = new bootstrap.Modal(document.getElementById("portfolioModal"));
  const modalInner = document.getElementById("modalCarouselInner");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalStacksContainer = document.getElementById("modalStacksContainer");

  // Crear los cards dinámicamente
  projects.forEach(proj => {
    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-4 mb-4";

    col.innerHTML = `
      <div class="card text-center" data-id="${proj.id}">
        <div id="carousel-${proj.id}" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            ${proj.images.map((src, i) => `
              <div class="carousel-item ${i === 0 ? 'active' : ''}">
                <img src="${src}" class="d-block w-100 imgConfigGeneral" alt="${proj.title}">
              </div>
            `).join('')}
          </div>
        </div>
        <div class="textCardPortafolio">${proj.title}</div>
      </div>
    `;

    // Modal
    col.querySelector(".card").addEventListener("click", () => {
      modalInner.innerHTML = proj.images.map((src, i) => `
        <div class="carousel-item ${i === 0 ? 'active' : ''}">
          <img src="${src}" class="d-block w-100 imgConfigGeneral" alt="${proj.title}">
        </div>
      `).join("");

      modalTitle.textContent = proj.title;
      modalDescription.textContent = proj.description || "";
      
      //Listar el stack de las tecnologias usadas
      modalStacksContainer.innerHTML = "";
      if (proj.stack && proj.stack.length > 0) {
        proj.stack.forEach(tech => {
          const badge = document.createElement("span");
          badge.className = "badge bg-dark me-2 mb-2";
          badge.textContent = tech;
          modalStacksContainer.appendChild(badge);
        });
      }

      modal.show();
    });

    grid.appendChild(col);
  });
});
