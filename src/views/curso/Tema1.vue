<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'6. Estructura económica de Colombia'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema6/1.png', alt='')
        .col-lg
          .p-4
            p.text-white.mb-0(data-aos="fade-up") El estudio de la estructura económica de Colombia, permite comprender cómo se distribuyen y articulan los sectores productivos que conforman el sistema económico nacional. Esta estructura se compone fundamentalmente de 3 grandes sectores: primario, secundario y terciario, cada uno con características, niveles de productividad e impactos distintos sobre el desarrollo económico del país. Conocer la participación relativa de estos sectores en el producto interno bruto, así como su evolución histórica resulta esencial para analizar el funcionamiento y la dinámica del sistema productivo colombiano.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/2.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Durante las últimas décadas, Colombia ha transitado por diversas transformaciones estructurales que han reconfigurado su economía, pasando de una fuerte dependencia del sector agropecuario a un creciente protagonismo de los servicios y el comercio. No obstante, persisten profundas desigualdades regionales y retos estructurales como la concentración del ingreso, la informalidad y la vulnerabilidad frente a choques externos, los cuales limitan el crecimiento inclusivo y sostenible del país.
    
        .bg-color-2.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema6/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Al abordar este tema, se busca que el estudiante identifique la composición sectorial de la economía colombiana, reconozca los factores históricos y políticos que han moldeado su evolución, y analice la distribución regional de la actividad económica, entendiendo cómo esta incide en los niveles de desarrollo de las diferentes zonas del territorio nacional.
    

    #t_6_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 6.1] Composición de los sectores productivos: primario, secundario y terciario
    
    p.mb-4 La economía colombiana está estructurada en torno a 3 grandes sectores productivos: el primario, el secundario y el terciario. Cada uno de estos sectores agrupa diferentes actividades económicas con características particulares en términos de generación de valor agregado, empleo y participación en el Producto Interno Bruto (PIB). El análisis de esta composición permite identificar la evolución de la economía y las áreas de mayor dinamismo o rezago, así como comprender la especialización regional y los desafíos estructurales del desarrollo económico nacional.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema6/4.png")
            .col-lg-7
              h5 Sector primario
              p Abarca las actividades relacionadas con la explotación directa de los recursos naturales. En Colombia, este sector incluye la agricultura, la ganadería, la pesca, la silvicultura y la minería. Históricamente, fue el eje central de la economía nacional, especialmente en el siglo xix y buena parte del xx, cuando la economía rural sostenía la gran parte del empleo y la producción. Sin embargo, aunque ha disminuido su participación en el pib en los últimos años, sigue siendo estratégico por su papel en la seguridad alimentaria, la balanza comercial (gracias a productos como el café, el banano y el petróleo) y su presencia dominante en muchas regiones rurales.
    
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema6/5.png")
            .col-lg-7
              h5 Sector secundario
              p Comprende la transformación de materias primas en bienes de consumo o capital. Incluye actividades industriales manufactureras y de construcción. En Colombia, este sector ha tenido un desarrollo desigual, influenciado por políticas de sustitución de importaciones, apertura económica y tratados de libre comercio. Aunque ha enfrentado procesos de desindustrialización y pérdida de competitividad frente a economías más desarrolladas, aún representa una porción importante del valor agregado nacional, especialmente en subsectores como alimentos procesados, textiles, cemento y petroquímica. También es clave en la generación de empleo urbano y en el encadenamiento productivo con otros sectores.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img(src="@/assets/curso/tema6/6.png")
            .col-lg-7
              h5 Sector terciario
              p El sector terciario, o sector de servicios, incluye actividades como el comercio. El transporte, las telecomunicaciones, la educación, la salud, la banca, el turismo y los servicios públicos. Actualmente, el sector terciario es el de mayor participación en el pib colombiano, reflejando una tendencia mundial hacia la terciarización de las economías. Su crecimiento ha sido impulsado por el aumento de la demanda de servicios, el avance tecnológico y la urbanización. A pesar de su dinamismo, el sector enfrenta retos como la informalidad laboral y las desigualdades en acceso a servicios de calidad, especialmente en zonas rurales.

    p.mb-4 Gaviria Mahecha, R. A. Guardiola Esmeral, A. R. & Ríos Giraldo, A. L. D. L. en su libro “Sectores económicos en Colombia y su impacto en el comercio internacional” expresa lo siguiente sobre el sector primario, secundario y terciario: 


    .row.justify-content-center
      .col-lg-11
        .row.justify-content-center.mb-5
          .col-lg-12.position-relative
            .avatar
              figure
                img(src="@/assets/curso/tema6/7.svg", alt="alt").img250
            .crd.crd--avatarHorizontal.crd--first.py-4
              .row
                .col-lg-11
                  .bloque-texto-b.p-5
                    i.fas.fa-quote-left
                    h3.mb-0 “En consecuencia, el sector primario se caracterizó porque los bienes producidos por hora-hombre están limitados por factores de crecimiento naturales; el sector secundario se determinó alrededor de factores mecánicos y el sector terciario estuvo mediado por la habilidad humana relativamente sin ayuda” (pág. 21).
            .crd.crd--avatarHorizontal.py-4
              .row
                .col-lg-10.px-5
                  p.mb-0 Esta composición sectorial varía de manera significativa entre regiones. Mientras zonas como Bogotá, Medellín o Cali concentran buena parte del sector terciario e industrial, departamentos como Caquetá, Guaviare o la Guajira dependen en gran medida del sector primario. 
    
    .bg-full-width.bg-color-4.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema6/8.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0.text-white Esta disparidad territorial en la estructura económica evidencia los desequilibrios del desarrollo regional y la necesidad de políticas públicas diferenciadas que promuevan el crecimiento equitativo y sostenible en todo el país. 

    #t_6_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 6.2] Aportes al Producto Interno Bruto por sector económico, en el 2024
    
    p Para el desarrollo de este tema se va a basar en datos del boletín técnico del DANE correspondiente al cuarto trimestre del 2024.
    P.MB-4 El Producto Interno Bruto (PIB) de Colombia, para el año 2024, muestra una dinámica particular en cuanto a los aportes sectoriales. Según el enfoque de la producción, el PIB a precios corrientes presentó un crecimiento del 7,6 % frente al año 2023. Este comportamiento fue impulsado, principalmente, por 3 sectores: administración pública, comercio y agricultura, los cuales representan los mayores aportes al valor agregado de la economía nacional.

    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/9.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Administración pública")
            p El sector de administración pública, defensa, educación y salud registró un crecimiento del 13,1 % y contribuyó con 2,1 puntos porcentuales al incremento anual del pib. Esta cifra refleja el papel del estado como dinamizador del crecimiento económico mediante el gasto público social y la expansión de servicios esenciales como salud y educación. Este comportamiento también está vinculado a la recuperación de la inversión pública post pandemia y al fortalecimiento institucional en varios niveles de gobierno.
    
          .div(titulo="Sector de comercio")
            p El sector de comercio, transporte, alojamiento y servicios de comida experimentó un crecimiento del 8,8 % aportando 1,8 puntos porcentuales al pib. Este incremento evidencia la recuperación del consumo interno y del turismo, así como la estabilización del transporte y la cadena logística nacional. Esta rama es esencial para la economía, dado que actúa como intermediaria entre la producción y el consumo, movilizando mercancías y generando empleo en todo el territorio.
    
          .div(titulo="Sector agropecuario")
            p El sector agropecuario también tuvo un desempeño sobresaliente. Con un crecimiento del 13,2 % contribuyó con 1,3 puntos porcentuales al pib. Dentro de este sector, destacan el cultivo permanente de café, que creció un 33,2 % y la ganadería, que aumentó un 6,6 %. Estos resultados muestran la importancia estratégica del sector rural, especialmente en regiones donde la agricultura es el principal sustento económico.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema6/10.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-6.p-4.mb-3(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema6/11.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Cabe señalar que otros sectores también presentaron dinámicas positivas, aunque con menor contribución porcentual. Por ejemplo, las actividades artísticas, recreativas y otros servicios crecieron un 12,7 %, mientras que la construcción aumentó un 9,4 % y el suministro de electricidad y gas lo hizo en un 10,9 %. No obstante, algunos sectores enfrentaron desafíos, como la explotación de minas y canteras, que decreció un 3,7 % en el cuarto trimestre del 2024, reflejando las dificultades de la industria extractiva frente a factores como precios internacionales y restricciones ambientales.

        p(data-aos="fade-left") En conclusión, los aportes al PIB por sector económico durante el año 2024, reflejan una economía colombiana que, si bien muestra signos de recuperación y dinamismo en varios frentes, aún enfrenta retos estructurales que requieren atención. La diversificación sectorial, la inversión en sectores estratégicos y el fortalecimiento institucional seguirán siendo claves para sostener un crecimiento económico inclusivo y sostenible.
    
       
    #t_6_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 6.3] Evolución histórica de la estructura económica colombiana
    
    p.mb-4 La comprensión del desarrollo económico de un país exige una mirada retrospectiva que permita identificar los cambios estructurales que han dado forma a su sistema productivo.

    .bg-full-width.bg-color-2.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center
          .col-lg-7.order-2
            h2.mb-4(data-aos="flip-up") Evolución histórica de la estructura económica colombiana
            p.mb-4(data-aos="fade-right") En el PDF <b>Evolución histórica de la estructura económica colombiana</b>, se presenta un recorrido analítico por los principales hitos que han transformado la economía nacional, desde el modelo agroexportador del siglo XIX hasta la consolidación del sector terciario en el siglo XXI. Este análisis contextualiza los factores internos y externos que han influido en dicha evolución, permitiendo al lector reconocer cómo las políticas públicas, las crisis económicas y los procesos de globalización han modelado las dinámicas sectoriales del país..
    
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Evolución histórica de la estructura económica colombiana.
    
          .col-lg-5.order-1.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema6/12.png', alt='')




    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=xdg0cnIb3hI" target="_blank" rel="noopener noreferrer") Economía en Cuarentena. (2020, 3 de diciembre). Los Sectores Económicos. Situación en España [Vídeo]. YouTube.  

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
