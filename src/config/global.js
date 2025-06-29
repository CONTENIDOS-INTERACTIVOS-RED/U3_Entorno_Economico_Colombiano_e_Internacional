export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Economía colombiana en el contexto global',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Estructura económica de Colombia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Composición de los sectores productivos: primario, secundario y terciario',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Aportes al Producto Interno Bruto por sector económico, en el 2024',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Evolución histórica de la estructura económica colombiana',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Desafíos económicos del país',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Desigualdad social y pobreza',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Informalidad laboral y desempleo estructural',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Política económica colombiana',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Objetivos de la política económica colombiana',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Política fiscal en Colombia: ingresos, gastos y deuda pública',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Política monetaria y el papel del Banco de la República',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Relación de Colombia con organismos internacionales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Participación de Colombia en el FMI, Banco Mundial y el BID',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo:
              'Evaluación crítica de la dependencia financiera internacional',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo:
          'Impacto de los acuerdos de libre comercio en la economía colombiana',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Principales TLC firmados por Colombia',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo:
              'Efectos positivos del libre comercio: inversión y exportaciones',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo:
              'Efectos negativos: competencia externa y sectores vulnerables',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Leiteritz, R. J. J. Leiteritz, R. & Rettberg, A. (2018). ¿Diferentes recursos, conflictos distintos?: la economía política regional del conflicto armado y la criminalidad en Colombia: (ed.). Universidad de los Andes.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/70681',
    },
    {
      referencia: 'Begg, D. (2006). Economía: (8 ed.). McGraw-Hill España.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/50090?page=15',
    },
    {
      referencia:
        'Insignares Cera, S. Llain Arenilla, S. & Tole Martínez, J. (2016). Contrato de franquicia internacional en el marco del TLC Colombia-USA: perspectivas jurídicas y económicas: (ed.). Universidad del Norte.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/69978',
    },
    {
      referencia:
        'Bejarano Barrera, E. (2009). La agricultura colombiana y el TLC con Estados Unidos: (ed.). Red Oasis.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/22832',
    },
    {
      referencia:
        'C. Mason, A. (2009). El TLC y la seguridad en Colombia: (ed.). Red Colombia internacional.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/26657?page=3',
    },
  ],
  glosario: [
    {
      termino: 'Acuerdo de libre comercio',
      significado:
        'Tratado formal entre países que busca eliminar o reducir barreras comerciales como aranceles, con el fin de facilitar el intercambio de bienes y servicios.',
    },
    {
      termino: 'Balanza comercial',
      significado:
        'Diferencia entre el valor de las exportaciones y el de las importaciones de un país en un período determinado. Una balanza comercial positiva indica superávit; negativa, déficit.',
    },
    {
      termino: 'Desempleo estructural',
      significado:
        'Forma de desempleo causada por desajustes entre las habilidades laborales de la población y las necesidades del mercado, común en economías con baja innovación o cambios tecnológicos.',
    },
    {
      termino: 'Desigualdad social',
      significado:
        'Condición en la cual los recursos, oportunidades y beneficios económicos están distribuidos de manera inequitativa entre los distintos grupos de una sociedad.',
    },
    {
      termino: 'Economía informal',
      significado:
        'Conjunto de actividades económicas que no están reguladas ni registradas por el Estado, lo cual impide el acceso a derechos laborales y tributarios.',
    },
    {
      termino: 'Fondo Monetario Internacional',
      significado:
        'Organismo multilateral que brinda asistencia financiera, técnica y asesoría a países miembros con problemas de balanza de pagos o estabilidad macroeconómica.',
    },
    {
      termino: 'Inversión extranjera directa (IED)',
      significado:
        'Capital proveniente de otros países que se destina a establecer empresas o adquirir activos productivos en el territorio nacional.',
    },
    {
      termino: 'PIB',
      significado:
        'Valor total de todos los bienes y servicios producidos en un país durante un período determinado, usado como indicador de crecimiento económico.',
    },
    {
      termino: 'Política fiscal',
      significado:
        'Conjunto de decisiones del gobierno relacionadas con el gasto público y los ingresos fiscales, utilizadas para influir en la economía nacional.',
    },
    {
      termino: 'Sector vulnerable',
      significado:
        'Grupo económico o social que enfrenta mayores dificultades para competir en condiciones de mercado, debido a factores como falta de tecnología, capital o protección institucional.',
    },
  ],
}
