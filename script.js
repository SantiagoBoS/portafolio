document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      id: "reindustrias",
      title: "REINDUSTRIAS",
      images: [
        "../src/Reindustrias1.jpg",
        "../src/Reindustrias2.jpg",
        "../src/Reindustrias3.jpg",
        "../src/Reindustrias4.jpg"
      ]
    },
    {
      id: "indicadores",
      title: "Indicadores Institucionales",
      images: [
        "../src/PDI1.jpg",
        "../src/PDI2.jpg",
        "../src/PDI3.jpg",
        "../src/PDI4.jpg"
      ]
    },
    {
      id: "fortalecimiento",
      title: "Fortalecimiento de Competencias",
      images: [
        "../src/ReporteResultado1.jpg",
        "../src/ReporteResultado2.jpg",
        "../src/ReporteResultado3.jpg",
        "../src/ReporteResultado4.jpg"
      ]
    },
    {
      id: "sistema-entrevistas",
      title: "Sistema de Entrevistas CORHUILA",
      images: [
        "../src/EntrevistaCorhuila1.jpg",
        "../src/EntrevistaCorhuila2.jpg",
        "../src/EntrevistaCorhuila3.jpg",
        "../src/EntrevistaCorhuila4.jpg"
      ]
    },
    {
      id: "autoreporte-covid19",
      title: "Autoreporte de Síntomas COVID19",
      images: [
        "../src/AutoReporteCovid1.jpg",
        "../src/AutoReporteCovid2.jpg",
        "../src/AutoReporteCovid3.jpg",
        "../src/AutoReporteCovid4.jpg"
      ]
    },
    {
      id: "reportes-covid19",
      title: "Reportes COVID19",
      images: [
        "../src/ReporteCovid1.jpg",
        "../src/ReporteCovid2.jpg",
        "../src/ReporteCovid3.jpg",
        "../src/ReporteCovid4.jpg"
      ]
    },
    {
      id: "cortina-inscripciones",
      title: "Cortina de Inscripciones",
      images: ["../src/CortinaCorhuila.jpg"]
    },
    {
      id: "registro-eventos-calificaciones",
      title: "Registro de Eventos y Calificaciones",
      images: [
        "../src/RegistroCalificacionEventos1.jpg",
        "../src/RegistroCalificacionEventos2.jpg",
        "../src/RegistroCalificacionEventos3.jpg",
        "../src/RegistroCalificacionEventos4.jpg"
      ]
    },
    {
      id: "autorizacion-permisos",
      title: "Autorización de Permisos CORHUILA",
      images: [
        "../src/AutorizacionPermisos1.jpg",
        "../src/AutorizacionPermisos2.jpg",
        "../src/AutorizacionPermisos3.jpg",
        "../src/AutorizacionPermisos4.jpg"
      ]
    },
        {
      id: "programas-pregrado",
      title: "Programas Pregrado de CORHUILA",
      images: [
        "../src/ProgramasPregrado1.jpg",
        "../src/ProgramasPregrado2.jpg",
        "../src/ProgramasPregrado3.jpg",
        "../src/ProgramasPregrado4.jpg"
      ]
    },
    {
      id: "programas-posgrado",
      title: "Programas Posgrado de CORHUILA",
      images: [
        "../src/ProgramasPosgrados1.jpg",
        "../src/ProgramasPosgrados2.jpg",
        "../src/ProgramasPosgrados3.jpg",
        "../src/ProgramasPosgrados4.jpg"
      ]
    },
    {
      id: "banner-publicitario",
      title: "Banner Publicitario CORHUILA",
      images: ["../src/BannerCorhuila.jpg"]
    },
  ];

  const grid = document.getElementById("portfolioGrid");
  const modal = new bootstrap.Modal(document.getElementById("portfolioModal"));
  const modalInner = document.getElementById("modalCarouselInner");

  // Crear las cards dinámicamente
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

    // Al hacer clic, abrir el modal con las imágenes
    col.querySelector(".card").addEventListener("click", () => {
      modalInner.innerHTML = proj.images.map((src, i) => `
        <div class="carousel-item ${i === 0 ? 'active' : ''}">
          <img src="${src}" class="d-block w-100 imgConfigGeneral" alt="${proj.title}">
        </div>
      `).join("");
      modal.show();
    });

    grid.appendChild(col);
  });
});
