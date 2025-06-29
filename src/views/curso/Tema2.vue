<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Desafíos económicos del país'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 La economía colombiana, a pesar de haber mostrado avances importantes en el crecimiento, diversificación productiva y apertura internacional, continúa enfrentando una serie de desafíos estructurales que limitan su desarrollo sostenible y equitativo. Estos problemas no solo afectan la capacidad del país para generar bienestar, sino que también agudizan las brechas sociales y regionales.
      
      
          .bg-color-5.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Entre los principales desafíos se encuentra la persistente desigualdad social y los altos niveles de pobreza, fenómenos que afectan especialmente zonas rurales y poblaciones vulnerables. Asimismo, la informalidad laboral y el desempleo estructural representan obstáculos para el fortalecimiento del mercado laboral, afectando la productividad y la seguridad social de millones de trabajadores. 
      

      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")


      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Desigualdad social y pobreza

      p La superación de la desigualdad social y la pobreza constituye uno de los mayores retos para lograr un desarrollo económico verdaderamente inclusivo y sostenible.

      .bg-full-width.bg-color-2.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/3.png', alt='')
      
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Desigualdad social y pobreza 
              p.mb-4(data-aos="fade-right") En el PDF Desigualdad social y pobreza, se examinan las dimensiones estructurales de estos fenómenos en el contexto colombiano, identificando sus causas históricas, expresiones territoriales y consecuencias sociales más profundas. A través de datos recientes y reflexiones críticas, se analizan las limitaciones del crecimiento económico para mejorar las condiciones de vida de amplios sectores de la población, así como el impacto de eventos como la pandemia de Covid-19 en el agravamiento de las brechas sociales. Este documento busca fomentar una comprensión integral del problema y destacar la importancia de políticas públicas orientadas a la equidad y la justicia social.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Desigualdad social y pobreza


      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Informalidad laboral y desempleo estructural



      .bg-full-width.bg-color-3.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-6
              p(data-aos="fade-left").mb-4 Para conocer sobre esta temática, lo invitamos a escuchar el siguiente podcast.
              
              TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                texto="Informalidad laboral y desempleo estructural"
                tiempo
                :audio="require('../../assets/curso/podcast/podcast1.mp3')"
              )
      
            .col-lg-6
              figure
                img(src="@/assets/curso/tema2/4.svg", data-aos="zoom-in")

      
      
      
            



      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
                span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
