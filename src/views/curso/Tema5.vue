<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'5. Impacto de los acuerdos de libre comercio en la economía colombiana'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema8/1.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") En el marco de la globalización económica, los Tratados de Libre Comercio (TLC), se han convertido en una estrategia clave para promover la integración de los países en los mercados internacionales. 
    
        .bg-color-6.p-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema8/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Colombia, como parte del comercio global, ha suscrito diversos tratados bilaterales y multilaterales con el objetivo de dinamizar su economía, ampliar mercados para sus productos, atraer inversión extranjera y mejorar su competitividad. Estos acuerdos han transformado significativamente la estructura comercial y productiva del país, generando impactos diversos tanto en sectores productivos como en la población.
    
    .bg-color-2.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema8/3.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Analizar el impacto de los TLC firmados por Colombia, es fundamental para comprender cómo han influido en el comportamiento de las exportaciones, la inversión extranjera directa, la diversificación de mercados y la productividad interna. A su vez, permite identificar los desafíos que enfrenta el país frente a la apertura económica, tales como la pérdida de competitividad de ciertos sectores vulnerables, el cierre de industrias locales, la presión sobre la producción agrícola y los retos regulatorios y laborales asociados.

    #t_5_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.1] Principales TLC firmados por Colombia
    
    p Colombia ha adoptado una estrategia de inserción en la economía global mediante la firma de múltiples tratados de libre comercio (TLC), con el objetivo de diversificar sus mercados, atraer inversión extranjera y fortalecer su competitividad. Actualmente el país cuenta con 17 acuerdos comerciales vigentes, que incluyen tanto TLC como acuerdos de alcance parcial, abarcando relaciones con 65 países y brindando acceso preferencial a más de 1.500 millones de consumidores en diversas regiones del mundo.
    p.mb-4 Entre los principales TLC firmados por Colombia, se destacan:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema8/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Tratado de Libre Comercio con Estados unidos
              p Firmado en el 2006 y en vigor desde el 2012; este acuerdo ha sido fundamental para consolidar a Estados Unidos como el principal socio comercial de Colombia. Ha facilitado el acceso de productos colombianos al mercado estadounidense, especialmente en sectores como flores, café y confecciones.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema8/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Tratado de Libre Comercio con la Unión Europea
              p Este acuerdo, entró en vigor desde el 2013; ha permitido a Colombia ampliar sus exportaciones hacia los países europeos, beneficiando a sectores como el banano, el café y los productos industriales. Además, ha promovido la cooperación en áreas como derechos humanos y desarrollo sostenible.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema8/6.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Tratado de Libre Comercio con Canadá
              p Este acuerdo entró en vigor en el año 2011; este tratado ha fortalecido las relaciones comerciales entre ambos países, facilitando el intercambio de bienes y servicios y promoviendo la inversión extranjera.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema8/7.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Tratado de Libre Comercio con Corea del Sur
              p Entró en vigor en el 2016; este acuerdo ha abierto oportunidades para la exportación de productos agrícolas e industriales colombianos al mercado asiático, al tiempo que ha permitido la importación de tecnología y bienes de capital surcoreanos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema8/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Acuerdo de Libre Comercio con los países de la Asociación Europea de Libre Comercio (EFTA)
              p Ese acuerdo, que incluye a Suiza, Noruega, Islandia y Liechtenstein, ha estado en vigor desde el 2011 y ha facilitado el comercio de bienes y servicios entre Colombia y estos países europeos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema8/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Tratado de Libre Comercio con el Triángulo Norte de Centroamérica
              p Firmado con Guatemala, El Salvador y Honduras; este acuerdo ha estado en vigor desde el 2009 y ha promovido el comercio regional y la integración económica en Centroamérica.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema8/10.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Acuerdo de Complementación Económica con el MERCOSUR
              p Este acuerdo ha permitido a Colombia establecer relaciones comerciales preferenciales con países como Argentina, Brasil, Paraguay y Uruguay, facilitando el intercambio de productos y servicios.

    .bg-full-width.bg-color-1.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema8/11.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Además de los anteriores tratados, Colombia ha firmado acuerdos con países como Chile, México, Perú, Costa Rica, Cuba y Panamá, entre otros, consolidando una red de acuerdos comerciales que le permite acceder a diversos mercados y fortalecer su presencia en la economía mundial. 
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema8/12.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Vieira Posada, E. en su libro “El TLC Colombia Estados Unidos: una nueva relación para el siglo XXI” nos da una de las razones por las que se realizó el TLC con estados unidos:
    
        .bg-color-5.p-4(data-aos="fade-left")

          .bloque-texto-c.p-4
            i.fas.fa-quote-left
            h3.mb-0 “Si bien antes de firmar el TLC con Estados Unidos, Colombia se beneficiaba de los beneficios en regímenes como ATPA-ATPDEA, era deseable contar con unas reglas de juego más claras, mayor estabilidad y menores riesgos que generaran las inversiones necesarias para incrementar y diversificar efectivamente las exportaciones” (pág. 17).
    
    p.mb-4 El tratado de libre comercio con Canadá, también aportó a varios aspectos no comerciales como lo indica Vieira Posada, E. en su libro “El TLC Colombia Canadá: nuevo escenario para el comercio y la inversión”:

    .row.mb-5
      .col-lg-5.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema8/13.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-4.p-4.h-100(data-aos="fade-left")
          p.mb-0.text-white “Al haber incluido a Colombia como un país focal para la cooperación, Canadá ha enfocado sus esfuerzos en lograr ciertas metas de desarrollo y cooperación; así, bajo este programa Canadá ha entrenado en derecho humanitario y en los derechos de los niños a más de 20.000 miembros de las Fuerzas Armadas y de la Policía Nacional colombianas. De la misma manera, ha instruido a través de diversos talleres y actividades a más de 6.400 niños, adolescentes y adultos en la importancia de la protección de la niñez, de los derechos y de la igualdad de género. Asimismo, Canadá ha entrenado más de 1.800 profesores en nuevas prácticas de enseñanza, logrando un mejor desarrollo educacional, así como a más de 1.500 jóvenes en actividades de generación de capital. 
    
    .bg-full-width.bg-color-6.mb-5
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema8/14.svg", style="max-width: 190px").mx-auto
          .col-lg
            p Canadá mantiene un programa de cooperación para la nutrición de la infancia, ayudando a más de 2.300 niños a tener acceso permanente a una dieta nutricional balanceada de alimentos frescos, a la vez que ha entrenado a cerca de 5.000 personas en agro-ecología, procesos organizacionales y conservación ambiental” (p 40).
            p.mb-0 Esto da a entender que el acuerdo con Canadá ha promovido la cooperación en áreas como derechos humanos y la disminución de desigualdad.
    
    #t_5_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.2] Efectos positivos del libre comercio: inversión y exportaciones
    
    p El libre comercio ha sido una herramienta estratégica para Colombia en su proceso de integración con la economía global. A través de la firma de tratados bilaterales y multilaterales, el país ha buscado ampliar su acceso a mercados internacionales, diversificar su oferta exportadora y atraer inversión extranjera directa (IED). Uno de los efectos más destacados del libre comercio ha sido el incremento sostenido de las exportaciones no tradicionales, particularmente en sectores como flores, frutas, café industrializado, textiles y confecciones.

    .row.align-items-start.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema8/15.png", alt="").mb-4.mb-lg-0
      .col-lg-8.order-lg-1
    
        AcordionA(tipo="b")
          .div(titulo="Inversión")
            p En términos de inversión, los tratados de libre comercio han proporcionado un marco de seguridad jurídica y estabilidad para los inversionistas extranjeros. Esto ha sido clave para fomentar la llegada de capital extranjero en sectores estratégicos como infraestructura, manufactura, tecnologías de la información, servicios financieros y energías renovables. Por ejemplo, tras la entrada en vigencia del TLC con Estados Unidos en 2012, Colombia experimentó un aumento en la inversión de empresas estadounidenses, principalmente en el sector minero-energético y servicios empresariales.
    
          .div(titulo="Inversión extranjera directa")
            p De acuerdo con cifras del Banco de la República, la inversión extranjera directa ha fluctuado, pero sigue siendo un componente importante del crecimiento económico. En 2022, la IED alcanzó los USD 17.048 millones, y cerca del 70 % se concentró en el sector de petróleo, minería y energía. Sin embargo, también se ha registrado un aumento progresivo en áreas como servicios y agroindustria, lo cual refleja el potencial de los TLC para diversificar las fuentes de capital externo.
    
          .div(titulo="Exportaciones")
            p En cuanto a las exportaciones, los tratados han facilitado el acceso preferencial a nuevos mercados, reduciendo o eliminando aranceles que anteriormente limitaban la competitividad de los productos colombianos. En el caso del TLC con la Unión Europea, se han abierto oportunidades para el banano, las flores y el café colombiano, productos que actualmente gozan de reconocimiento en estos mercados gracias a su calidad y sostenibilidad.
    
    .row.align-items-start.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema8/16.png", alt="").mb-4.mb-lg-0
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Procesos productivos")
            p Además de los beneficios comerciales y de inversión, el libre comercio ha incentivado mejoras en los procesos productivos, la calidad de los bienes exportados y la adopción de estándares internacionales. Esto ha impulsado la modernización de las empresas colombianas, especialmente de aquellas que han logrado integrarse en cadenas globales de valor. De esta forma, el país ha fortalecido su competitividad y capacidad para generar empleo formal en algunos sectores claves.
    
          .div(titulo="Impacto sobre las regiones")
            p Otro aspecto positivo ha sido el impacto sobre las regiones. El comercio exterior ha promovido la dinamización económica en zonas con potencial agrícola y exportador, como el Eje Cafetero, el Valle del Cauca y algunas regiones del Caribe y los Llanos Orientales. Esta expansión ha permitido que más pequeños y medianos productores se integren al comercio internacional, mejorando sus ingresos y condiciones de vida.
    
    .bg-full-width.bg-color-2.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema8/17.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 El <b>libre comercio</b> ha traído efectos positivos significativos para Colombia en términos de atracción de inversión extranjera y crecimiento de las exportaciones. Si bien estos beneficios no han sido homogéneos ni exentos de desafíos, se reconoce que la apertura comercial ha sido un motor para la modernización productiva, el acceso a mercados y la internacionalización de la economía nacional.
    
    #t_5_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 5.3] Efectos negativos: competencia externa y sectores vulnerables
    
    p A pesar de los beneficios asociados al libre comercio, también existen múltiples efectos adversos que deben ser reconocidos, especialmente en el contexto colombiano. Uno de los principales desafíos ha sido la competencia desigual que enfrentan sectores productivos nacionales frente a bienes importados que ingresan al país con menores aranceles o con subsidios estatales desde sus países de origen. Este fenómeno ha impactado negativamente a productores agrícolas, pequeños industriales y sectores tradicionales que no cuentan con la capacidad tecnológica ni financiera para competir en igualdad de condiciones.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema8/18.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Sector agropecuario
              p Un caso representativo ha sido el sector agropecuario, particularmente los productores de maíz, arroz y leche. Tras la entrada en vigencia de tratados como el TLC con Estados Unidos, se ha observado un aumento considerable en la importación de estos productos, lo que ha provocado una caída en los precios internos y ha desplazado la producción nacional. Según informes del Ministerio de Agricultura, muchas fincas pequeñas han tenido que cerrar o cambiar de actividad, generando desempleo rural y pérdida de autonomía alimentaria.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema8/19.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Vulnerabilidad de las pequeñas y medianas empresas
              p La vulnerabilidad de las pequeñas y medianas empresas (Pymes), también se ha evidenciado, dado que muchas no han logrado adaptarse a los estándares internacionales exigidos por los mercados con los cuales se firmaron tratados. Esto ha llevado al cierre de empresas y a la pérdida de empleos formales. Además, se han reportado efectos de desindustrialización en algunas regiones, especialmente en sectores como el textil y el calzado, donde la producción nacional ha sido sustituida por importaciones más baratas provenientes de Asia y otros países con menores costos laborales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema8/20.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Efectos ambientales y sociales
              p Otra consecuencia importante se relaciona con los efectos ambientales y sociales. los acuerdos de libre comercio han impulsado actividades extractivas que ponen en riesgo la biodiversidad, como la expansión de monocultivos, la minería a gran escala y la presión sobre territorios indígenas y campesinos. En muchos casos, la apertura comercial ha favorecido la inversión en estos sectores sin una adecuada regulación ambiental, generando conflictos sociales y deterioro ecológico (Gómez Lee, 2009).
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema8/21.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Impacto desigual entre regiones del país
              p Además, el libre comercio ha tenido un impacto desigual entre regiones del país. Las zonas con mayor infraestructura, acceso a mercados y apoyo institucional han logrado aprovechar mejor las oportunidades del comercio exterior, mientras que regiones más apartadas, como algunas zonas del Pacífico y la Amazonía, han quedado rezagadas, profundizando las brechas regionales. Esto ha generado desequilibrios en el desarrollo económico y social del país.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema8/22.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5 Cláusulas de propiedad intelectual estrictas
              p También es necesario mencionar que algunos tratados, al incluir cláusulas de propiedad intelectual estrictas, han limitado el acceso a tecnologías, medicamentos genéricos y semillas para la agricultura local. Esto ha generado tensiones entre la soberanía alimentaria y los intereses de grandes corporaciones, afectando a comunidades rurales y a productores tradicionales que ahora enfrentan mayores restricciones para conservar sus prácticas productivas.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema8/23.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-10.p-4.h-100(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema8/24.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En resumen, si bien el libre comercio ha traído ciertos beneficios en términos de exportaciones e inversión, también ha generado impactos negativos significativos en sectores vulnerables de la economía colombiana. Estos efectos deben ser considerados para formular políticas públicas más equilibradas, que garanticen la protección de la producción nacional, la equidad social y la sostenibilidad ambiental. Es fundamental diseñar estrategias de acompañamiento a los sectores afectados, con enfoque territorial y de inclusión productiva.

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://es.wikipedia.org/wiki/Anexo:Tratados_de_libre_comercio_de_Colombia" target="_blank" rel="noopener noreferrer") colaboradores de Wikipedia. (s. f.-b). Anexo: Tratados de libre comercio de Colombia - Wikipedia, la enciclopedia libre.  

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=lc7dIF7hrCQ" target="_blank" rel="noopener noreferrer") Giraldo, C. (2013, 4 de julio). ¿Es bueno o malo para Colombia los TLC Tratados de Libre Comercio? [Vídeo]. YouTube.  

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema5',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes sectores aporta mayor valor al PIB colombiano según el último boletín del DANE?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Sector primario', esCorrecta: false },
              { id: 'b', texto: 'Sector agropecuario', esCorrecta: false },
              { id: 'c', texto: 'Sector terciario', esCorrecta: true },
              { id: 'd', texto: 'Sector industrial', esCorrecta: false },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto: '¿Qué caracteriza al desempleo estructural en Colombia?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Surge por despidos masivos en temporada alta',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Se debe a la falta de correspondencia entre habilidades laborales y demanda del mercado',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Es causado únicamente por la inflación',
                esCorrecta: false,
              },
              { id: 'd', texto: 'Es temporal y estacional', esCorrecta: false },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'Uno de los principales efectos negativos del libre comercio en Colombia ha sido:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Disminución de la inflación',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Expansión del empleo formal rural',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Afectación de sectores vulnerables como el agrícola y textil',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Incremento de la producción local',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'El Banco de la República tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aumentar las exportaciones nacionales',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Regular los tratados de libre comercio',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Preservar la capacidad adquisitiva de la moneda',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Financiar el gasto público del gobierno',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'Colombia es miembro de organismos multilaterales como el FMI y el Banco Mundial principalmente para:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Exportar sus recursos naturales',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Obtener apoyo financiero y técnico',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Controlar el tipo de cambio',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Fijar políticas arancelarias para la región',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
