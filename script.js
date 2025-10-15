document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      id: "reindustrias",
      title: "REINDUSTRIAS",
      description: "Diseño de piezas gráficas para la plataforma REINDUSTRIAS en CORHUILA.",
      images: [
        "../src/Reindustrias1.jpg",
        "../src/Reindustrias2.jpg",
        "../src/Reindustrias3.jpg",
        "../src/Reindustrias4.jpg"
      ],
      stack: ["Angular 12", "TypeScript", "Bootstrap Icons", "Chart.js (Graficas)", "SweetAlert2", "DataTables", "Laravel", "MySQL", "JWT Auth"]
    },
    {
      id: "indicadores",
      title: "Indicadores Institucionales",
      description: "Diseño de piezas gráficas para la presentación de indicadores institucionales en CORHUILA.",
      images: [
        "../src/PDI1.jpg",
        "../src/PDI2.jpg",
        "../src/PDI3.jpg",
        "../src/PDI4.jpg"
      ],
      stack: ["Angular", "Laravel"]
    },
    {
      id: "fortalecimiento",
      title: "Fortalecimiento de Competencias",
      description: "Diseño de piezas gráficas para el fortalecimiento de competencias en CORHUILA.",
      images: [
        "../src/ReporteResultado1.jpg",
        "../src/ReporteResultado2.jpg",
        "../src/ReporteResultado3.jpg",
        "../src/ReporteResultado4.jpg"
      ],
      stack: ["Angular", "Laravel"]
    },
    {
      id: "sistema-entrevistas",
      title: "Sistema de Entrevistas CORHUILA",
      description: "Diseño de piezas gráficas para el sistema de entrevistas en CORHUILA.",
      images: [
        "../src/EntrevistaCorhuila1.jpg",
        "../src/EntrevistaCorhuila2.jpg",
        "../src/EntrevistaCorhuila3.jpg",
        "../src/EntrevistaCorhuila4.jpg"
      ],
      stack: ["Angular", "Laravel"]
    },
    {
      id: "autoreporte-covid19",
      title: "Autoreporte de Síntomas COVID19",
      description: "Diseño de piezas gráficas para el autoreporte de síntomas relacionados con COVID19 en CORHUILA.",
      images: [
        "../src/AutoReporteCovid1.jpg",
        "../src/AutoReporteCovid2.jpg",
        "../src/AutoReporteCovid3.jpg",
        "../src/AutoReporteCovid4.jpg"
      ],
      stack: ["Angular", "Laravel"]
    },
    {
      id: "reportes-covid19",
      title: "Reportes COVID19",
      description: "Diseño de piezas gráficas para la elaboración de reportes sobre COVID19 en CORHUILA.",
      images: [
        "../src/ReporteCovid1.jpg",
        "../src/ReporteCovid2.jpg",
        "../src/ReporteCovid3.jpg",
        "../src/ReporteCovid4.jpg"
      ],
      stack: ["Angular", "Laravel"]
    },
    {
      id: "cortina-inscripciones",
      title: "Cortina de Inscripciones",
      images: ["../src/CortinaCorhuila.jpg"],
      stack: ["Angular", "Laravel"]
    },
    {
      id: "registro-eventos-calificaciones",
      title: "Registro de Eventos y Calificaciones",
      description: "Diseño de piezas gráficas para el registro de eventos y calificaciones en CORHUILA.",
      images: [
        "../src/RegistroCalificacionEventos1.jpg",
        "../src/RegistroCalificacionEventos2.jpg",
        "../src/RegistroCalificacionEventos3.jpg",
        "../src/RegistroCalificacionEventos4.jpg"
      ],
      stack: ["Angular", "Laravel"]
    },
    {
      id: "autorizacion-permisos",
      title: "Autorización de Permisos CORHUILA",
      description: "Diseño de piezas gráficas para la autorización de permisos en CORHUILA.",
      images: [
        "../src/AutorizacionPermisos1.jpg",
        "../src/AutorizacionPermisos2.jpg",
        "../src/AutorizacionPermisos3.jpg",
        "../src/AutorizacionPermisos4.jpg"
      ],
      stack: ["Angular", "Laravel"]
    },
    {
      id: "programas-pregrado",
      title: "Programas Pregrado de CORHUILA",
      description: "Diseño de piezas gráficas para la promoción de los programas de pregrado ofrecidos por CORHUILA.",
      images: [
        "../src/ProgramasPregrado1.jpg",
        "../src/ProgramasPregrado2.jpg",
        "../src/ProgramasPregrado3.jpg",
        "../src/ProgramasPregrado4.jpg"
      ],
      stack: ["Angular", "Laravel"]
    },
    {
      id: "programas-posgrado",
      title: "Programas Posgrado de CORHUILA",
      description: "Diseño de piezas gráficas para la promoción de los programas de posgrado ofrecidos por CORHUILA.",
      images: [
        "../src/ProgramasPosgrados1.jpg",
        "../src/ProgramasPosgrados2.jpg",
        "../src/ProgramasPosgrados3.jpg",
        "../src/ProgramasPosgrados4.jpg"
      ],
      stack: ["Angular", "Laravel"]
    },
    {
      id: "banner-publicitario",
      title: "Banner Publicitario CORHUILA",
      description: "Diseño de un banner publicitario para la promoción de CORHUILA.",
      images: ["../src/BannerCorhuila.jpg"],
      stack: ["Angular", "Laravel"]
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
