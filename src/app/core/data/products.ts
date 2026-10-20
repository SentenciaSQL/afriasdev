import type { Product } from '../models/content.model';

/**
 * Catálogo central. Para añadir una aplicación:
 * 1. Añade un objeto Product a este array.
 * 2. Coloca logotipo y medios en src/assets/images o src/assets/videos.
 * 3. Rellena platforms, features confirmadas y enlaces reales.
 * 4. Activa demo o video solo cuando el destino exista.
 * Las páginas de inicio, catálogo y detalle se generan desde este array.
 */
export const products: Product[] = [
  {
    id: 'fintrack',
    slug: 'fintrack',
    name: 'FinTrack',
    status: 'available',
    accent: '#6ee7b7',
    category: { es: 'Finanzas personales', en: 'Personal finance' },
    shortDescription: {
      es: 'Aplicación de finanzas personales para organizar ingresos, gastos y movimientos financieros.',
      en: 'A personal finance app for organizing income, expenses, and financial activity.',
    },
    description: {
      es: 'FinTrack es una aplicación de finanzas personales publicada en Google Play. Sirve para anotar ingresos y gastos, revisar el balance y entender el mes con presupuestos, metas e informes.',
      en: 'FinTrack is a personal finance app published on Google Play. It records income and expenses, shows the balance, and explains the month through budgets, goals, and reports.',
    },
    problem: {
      es: 'Cuando los movimientos viven en notas sueltas, es difícil saber si el mes cierra, qué categoría se lleva el dinero y si una meta de ahorro avanza.',
      en: 'When transactions live in scattered notes, it is hard to know whether the month closes, which category takes the money, and whether a savings goal is moving.',
    },
    value: {
      es: 'Un registro claro, en español o inglés, con importes en DOP, USD o EUR. La información de la aplicación publicada queda asociada a la cuenta de cada persona.',
      en: 'A clear record, in Spanish or English, with amounts in DOP, USD, or EUR. In the published app, the information stays tied to each person’s account.',
    },
    platforms: ['mobile'],
    platformNotes: [
      { es: 'Android, en Google Play.', en: 'Android, on Google Play.' },
      {
        es: 'No hay un enlace de App Store publicado en esta plataforma.',
        en: 'No App Store link is published on this platform.',
      },
    ],
    stack: ['Flutter', 'Dart', 'ASP.NET Core', 'PostgreSQL'],
    demo: { type: 'internal', route: '/demos/fintrack', enabled: true },
    features: [
      {
        title: { es: 'Ingresos y gastos', en: 'Income and expenses' },
        text: {
          es: 'Registro por categoría, con notas y método de pago en cada movimiento.',
          en: 'Category tracking, with notes and a payment method on each transaction.',
        },
      },
      {
        title: { es: 'Búsqueda y orden', en: 'Search and sort' },
        text: {
          es: 'Los movimientos se pueden buscar, filtrar y ordenar.',
          en: 'Transactions can be searched, filtered, and sorted.',
        },
      },
      {
        title: { es: 'Presupuestos con alerta', en: 'Budgets with alerts' },
        text: {
          es: 'Presupuestos mensuales por categoría y avisos al acercarse al límite o superarlo.',
          en: 'Monthly budgets by category, with alerts when you near or pass the limit.',
        },
      },
      {
        title: { es: 'Metas de ahorro', en: 'Savings goals' },
        text: {
          es: 'Metas con aportes registrados para ver el avance.',
          en: 'Goals with recorded contributions so progress stays visible.',
        },
      },
      {
        title: { es: 'Movimientos recurrentes', en: 'Recurring transactions' },
        text: {
          es: 'Transacciones semanales, quincenales, mensuales o anuales.',
          en: 'Weekly, biweekly, monthly, or yearly transactions.',
        },
      },
      {
        title: { es: 'Balance e informes', en: 'Balance and reports' },
        text: {
          es: 'Balance, actividad reciente, resumen mensual, gráficos e informes.',
          en: 'Balance, recent activity, a monthly summary, charts, and reports.',
        },
      },
      {
        title: { es: 'Idioma, tema y moneda', en: 'Language, theme, and currency' },
        text: {
          es: 'Español o inglés. Tema claro, oscuro o el del sistema. Importes en DOP, USD o EUR.',
          en: 'Spanish or English. Light, dark, or system theme. Amounts in DOP, USD, or EUR.',
        },
      },
      {
        title: { es: 'Cuenta propia', en: 'A private account' },
        text: {
          es: 'Los datos quedan asociados a la cuenta. La ficha de Play ofrece acceso con Google, indica cifrado en tránsito y la posibilidad de solicitar la eliminación de los datos.',
          en: 'Data stays tied to the account. The Play listing offers Google sign-in, states that data is encrypted in transit, and says deletion can be requested.',
        },
      },
    ],
    faqs: [
      {
        q: { es: '¿La demo usa mis cuentas reales?', en: 'Does the demo use my real accounts?' },
        a: {
          es: 'No. Muestra un mes inventado y no pide credenciales. La aplicación de Google Play es otra cosa: allí los datos van a tu cuenta.',
          en: 'No. It shows an invented month and does not ask for credentials. The Google Play app is separate: there, data goes to your account.',
        },
      },
      {
        q: { es: '¿En qué monedas trabaja?', en: 'Which currencies does it use?' },
        a: {
          es: 'La ficha pública indica DOP, USD y EUR.',
          en: 'The public listing states DOP, USD, and EUR.',
        },
      },
      {
        q: { es: '¿Puedo descargarla para iPhone?', en: 'Can I download it for iPhone?' },
        a: {
          es: 'El único enlace de descarga publicado aquí es el de Google Play para Android.',
          en: 'The only download link published here is Google Play for Android.',
        },
      },
    ],
    primaryAction: {
      external: true,
      url: 'https://play.google.com/store/apps/details?id=com.sentenciasql.fintrack',
      label: { es: 'Descargar en Google Play', en: 'Download on Google Play' },
    },
    secondaryAction: {
      url: '/demos/fintrack',
      label: { es: 'Probar la demo', en: 'Try the demo' },
    },
  },
  {
    id: 'lunaveta',
    slug: 'lunaveta',
    name: 'LunaVeta',
    status: 'available',
    accent: '#93c5fd',
    category: { es: 'Gestión veterinaria', en: 'Veterinary practice' },
    shortDescription: {
      es: 'Solución digital orientada a la gestión veterinaria y a las necesidades de las clínicas veterinarias.',
      en: 'A digital product for veterinary management and the needs of veterinary clinics.',
    },
    description: {
      es: 'LunaVeta es un software de gestión para clínicas veterinarias. Reúne la operación diaria, las mascotas, los propietarios y la información médica en un solo lugar, con acceso web y móvil según su sitio.',
      en: 'LunaVeta is practice-management software for veterinary clinics. It brings daily operations, pets, owners, and medical information into one place, with web and mobile access according to its site.',
    },
    problem: {
      es: 'Si la agenda, las fichas y los datos de los tutores viven en sitios distintos, el equipo pierde tiempo buscando lo que ya debería estar a mano.',
      en: 'If the schedule, charts, and owner details live in different places, the team loses time looking up what should already be at hand.',
    },
    value: {
      es: 'Una operación más ordenada para el equipo de la clínica. La suscripción se contrata en lunaveta.com, no en este sitio.',
      en: 'A more orderly operation for the clinic team. The subscription is purchased on lunaveta.com, not on this site.',
    },
    platforms: ['web', 'mobile'],
    platformNotes: [
      { es: 'Web, en lunaveta.com.', en: 'Web, at lunaveta.com.' },
      {
        es: 'Hay aplicación móvil. Comprar, cambiar o cancelar la suscripción se hace en la aplicación web.',
        en: 'There is a mobile app. Buying, changing, or canceling a subscription happens in the web app.',
      },
    ],
    demo: { type: 'internal', route: '/demos/lunaveta', enabled: true },
    features: [
      {
        title: { es: 'Mascotas y tutores', en: 'Pets and owners' },
        text: {
          es: 'Perfiles, información médica, vacunas e historial, con los propietarios ligados a sus mascotas.',
          en: 'Profiles, medical information, vaccinations, and history, with owners linked to their pets.',
        },
      },
      {
        title: { es: 'Citas', en: 'Appointments' },
        text: {
          es: 'Agenda para organizar las citas de la clínica.',
          en: 'A schedule for organizing the clinic’s appointments.',
        },
      },
      {
        title: { es: 'Historias clínicas', en: 'Medical records' },
        text: {
          es: 'La información veterinaria queda reunida y accesible para el equipo.',
          en: 'Veterinary information stays together and accessible for the team.',
        },
      },
      {
        title: { es: 'Clínica y roles', en: 'Clinic and roles' },
        text: {
          es: 'Gestión de la operación diaria y acceso de varias personas con roles. El cupo de sucursales, veterinarios y personal depende del plan.',
          en: 'Day-to-day clinic management and multi-person access with roles. Branch, veterinarian, and staff limits depend on the plan.',
        },
      },
      {
        title: { es: 'Reportes, archivos y mensajes', en: 'Reports, files, and messages' },
        text: {
          es: 'Reportes, almacenamiento de archivos y mensajería con un tope mensual. Laboratorio y más capacidad entran en Professional y Premium.',
          en: 'Reports, file storage, and messaging with a monthly cap. Laboratory results and higher capacity come with Professional and Premium.',
        },
      },
    ],
    pricing: {
      sourceLabel: { es: 'Ver precios en LunaVeta', en: 'See pricing on LunaVeta' },
      sourceUrl: 'https://lunaveta.com/pricing',
      note: {
        es: 'Precios en USD publicados en lunaveta.com el 19 de octubre de 2026. La suscripción mensual se cobra allí; el anual, cuando se muestra, está en la aplicación web. Esta página no inicia un pago. Conviene confirmar el precio vigente antes de suscribirse.',
        en: 'USD prices published on lunaveta.com on October 19, 2026. The monthly subscription is billed there; the annual price, where shown, is in the web app. This page does not start a payment. Confirm the current price before subscribing.',
      },
      plans: [
        {
          name: 'Basic',
          price: { es: '19 USD', en: 'USD 19' },
          cadence: { es: 'al mes, o 190 USD al año', en: 'per month, or USD 190 per year' },
          detail: {
            es: 'Para clínicas que necesitan lo esencial. Hay 14 días de prueba en la primera suscripción mensual Basic.',
            en: 'For clinics that need the essentials. A 14-day trial is available on the first Basic monthly subscription.',
          },
          items: [
            { es: 'Mascotas, propietarios, historias, vacunas y citas', en: 'Pets, owners, records, vaccinations, and appointments' },
            { es: '1 sucursal, hasta 2 veterinarios y 5 cuentas de personal', en: '1 branch, up to 2 veterinarians and 5 staff accounts' },
            { es: 'Reportes, 1 GB y hasta 200 mensajes al mes', en: 'Reports, 1 GB, and up to 200 messages per month' },
            { es: 'Acceso web y móvil', en: 'Web and mobile access' },
          ],
        },
        {
          name: 'Professional',
          price: { es: '39 USD', en: 'USD 39' },
          cadence: { es: 'al mes, o 390 USD al año', en: 'per month, or USD 390 per year' },
          detail: {
            es: 'Para clínicas que necesitan más capacidad de operación.',
            en: 'For clinics that need more operational capacity.',
          },
          items: [
            { es: 'Todo lo de Basic', en: 'Everything in Basic' },
            { es: 'Hasta 3 sucursales, 8 veterinarios y 20 cuentas de personal', en: 'Up to 3 branches, 8 veterinarians, and 20 staff accounts' },
            { es: 'Resultados de laboratorio', en: 'Laboratory results' },
            { es: '10 GB y hasta 2.000 mensajes al mes', en: '10 GB and up to 2,000 messages per month' },
          ],
        },
        {
          name: 'Premium',
          price: { es: '69 USD', en: 'USD 69' },
          cadence: { es: 'al mes, o 690 USD al año', en: 'per month, or USD 690 per year' },
          detail: {
            es: 'Para clínicas que necesitan una operación más amplia.',
            en: 'For clinics that need a wider operation.',
          },
          items: [
            { es: 'Todo lo de Professional', en: 'Everything in Professional' },
            { es: 'Hasta 15 sucursales, 40 veterinarios y 100 cuentas de personal', en: 'Up to 15 branches, 40 veterinarians, and 100 staff accounts' },
            { es: '100 GB y hasta 20.000 mensajes al mes', en: '100 GB and up to 20,000 messages per month' },
          ],
        },
      ],
    },
    faqs: [
      {
        q: { es: '¿Esta web cobra la suscripción?', en: 'Does this website charge the subscription?' },
        a: {
          es: 'No. Suscribirse, cambiar o cancelar el plan se hace en la aplicación web de LunaVeta después de iniciar sesión. Los pagos los procesa Paddle.',
          en: 'No. Subscribing, changing, or canceling a plan happens in the LunaVeta web app after you sign in. Payments are processed by Paddle.',
        },
      },
      {
        q: { es: '¿Un tutor puede comprar un plan?', en: 'Can a pet owner buy a plan?' },
        a: {
          es: 'No. LunaVeta indica que los propietarios son clientes de la clínica y no compran estos planes ni usan una cuenta de personal.',
          en: 'No. LunaVeta states that owners are clients of the clinic and do not buy these plans or use a staff account.',
        },
      },
      {
        q: { es: '¿La demo es mi clínica?', en: 'Is the demo my clinic?' },
        a: {
          es: 'No. Es una clínica inventada, desconectada de lunaveta.com. No inicies sesión ni cargues pacientes reales.',
          en: 'No. It is an invented clinic, disconnected from lunaveta.com. Do not sign in or load real patients.',
        },
      },
      {
        q: { es: '¿Cómo pido una demostración comercial?', en: 'How do I request a commercial demonstration?' },
        a: {
          es: 'Desde el contacto de esta plataforma, eligiendo LunaVeta. El correo público del producto es supportlunaveta@gmail.com.',
          en: 'Through this platform’s contact form, choosing LunaVeta. The product’s public email is supportlunaveta@gmail.com.',
        },
      },
    ],
    primaryAction: {
      external: true,
      url: 'https://lunaveta.com',
      label: { es: 'Conocer LunaVeta', en: 'Visit LunaVeta' },
    },
    secondaryAction: {
      url: '/contact?interes=lunaveta-demo',
      label: { es: 'Solicitar una demostración', en: 'Request a demonstration' },
    },
  },
  {
    id: 'bloodconnectrd',
    slug: 'bloodconnectrd',
    name: 'BloodConnectRD',
    status: 'in-development',
    accent: '#f0a8a0',
    category: { es: 'Proyecto social', en: 'Social project' },
    shortDescription: {
      es: 'Plataforma orientada a conectar a personas que necesitan donantes de sangre con posibles donantes.',
      en: 'A platform aimed at connecting people who need blood donors with possible donors.',
    },
    description: {
      es: 'BloodConnectRD es un proyecto orientado a la donación de sangre en República Dominicana. Esta página explica su propósito. No recibe solicitudes, no muestra donantes y no sustituye a un banco de sangre ni a un servicio de salud.',
      en: 'BloodConnectRD is a project focused on blood donation in the Dominican Republic. This page explains its purpose. It does not accept requests, show donors, or replace a blood bank or health service.',
    },
    problem: {
      es: 'Encontrar un donante compatible y un centro donde donar suele depender de cadenas de mensajes. La información se pierde y no queda claro a quién acudir.',
      en: 'Finding a compatible donor and a place to donate often depends on message chains. Information gets lost and it is unclear where to turn.',
    },
    value: {
      es: 'Un lugar pensado para ordenar donantes, solicitudes, compatibilidad y centros. Hoy el proyecto no está ofrecido como servicio abierto.',
      en: 'A place designed to organize donors, requests, compatibility, and centers. Today the project is not offered as an open service.',
    },
    platforms: ['web', 'mobile'],
    platformNotes: [
      {
        es: 'Sin publicación pública confirmada. No hay descarga ni sitio de uso.',
        en: 'No confirmed public release. There is no download or live site.',
      },
    ],
    stack: ['Java', 'Spring Boot', 'Angular', 'Flutter', 'PostgreSQL'],
    demo: { type: 'internal', route: '/demos/bloodconnectrd', enabled: true },
    features: [
      {
        title: { es: 'Registro de donantes', en: 'Donor registry' },
        text: {
          es: 'El proyecto contempla un registro de personas dispuestas a donar. Aquí no hay un formulario de alta.',
          en: 'The project includes a registry of people willing to donate. There is no signup form here.',
        },
      },
      {
        title: { es: 'Solicitudes', en: 'Requests' },
        text: {
          es: 'El alcance describe solicitudes de sangre. Esta web no las crea ni las transmite.',
          en: 'The scope describes blood requests. This website does not create or transmit them.',
        },
      },
      {
        title: { es: 'Búsqueda de compatibilidad', en: 'Compatibility search' },
        text: {
          es: 'El proyecto incluye búsqueda de donantes compatibles. El recorrido no publica un inventario ni una recomendación médica.',
          en: 'The project includes compatible-donor search. The tour does not publish an inventory or medical advice.',
        },
      },
      {
        title: { es: 'Centros de donación', en: 'Donation centers' },
        text: {
          es: 'También contempla centros de donación, hospitales, clínicas y bancos de sangre como parte del mapa del problema. No se listan centros como aliados.',
          en: 'It also includes donation centers, hospitals, clinics, and blood banks as part of the problem map. No centers are listed as partners.',
        },
      },
    ],
    faqs: [
      {
        q: { es: '¿Puedo pedir un donante desde aquí?', en: 'Can I request a donor from here?' },
        a: {
          es: 'No. Este sitio no procesa solicitudes de sangre ni muestra personas disponibles. Si necesitas atención, acude a un centro de salud.',
          en: 'No. This site does not process blood requests or show available people. If you need care, go to a health center.',
        },
      },
      {
        q: { es: '¿El servicio ya está en línea?', en: 'Is the service already online?' },
        a: {
          es: 'No hay un enlace público confirmado. El estado en esta plataforma es “en desarrollo”.',
          en: 'There is no confirmed public link. The status on this platform is “in development”.',
        },
      },
      {
        q: { es: '¿Los nombres del recorrido son reales?', en: 'Are the names in the tour real?' },
        a: {
          es: 'No hay nombres de donantes. El recorrido es un esquema del flujo, marcado como ilustración.',
          en: 'There are no donor names. The tour is a diagram of the flow, marked as an illustration.',
        },
      },
    ],
    primaryAction: {
      url: '/demos/bloodconnectrd',
      label: { es: 'Ver el recorrido', en: 'View the tour' },
    },
    secondaryAction: {
      url: '/contact?interes=bloodconnectrd',
      label: { es: 'Escribir sobre el proyecto', en: 'Write about the project' },
    },
  },
  {
    id: 'comercia-multi-tenant',
    slug: 'comercia-multi-tenant',
    name: 'Comercia Multi-Tenant',
    status: 'in-development',
    accent: '#c4b5fd',
    category: { es: 'Plataforma comercial', en: 'Commercial platform' },
    shortDescription: {
      es: 'Plataforma web multi-tenant orientada a ofrecer funcionalidades comerciales a diferentes negocios mediante una arquitectura compartida.',
      en: 'A multi-tenant web platform aimed at offering commercial capabilities to different businesses through a shared architecture.',
    },
    description: {
      es: 'Comercia Multi-Tenant se presenta como una plataforma web compartida para distintos negocios. Esta página no publica módulos, precios ni un sitio de acceso: ese detalle todavía no está confirmado.',
      en: 'Comercia Multi-Tenant is presented as a shared web platform for different businesses. This page does not publish modules, prices, or an access site: that detail is not confirmed yet.',
    },
    problem: {
      es: 'Un producto comercial que debe servir a varios negocios necesita una arquitectura compartida sin mezclar la operación de cada uno. El alcance concreto de Comercia aún no está publicado aquí.',
      en: 'A commercial product that must serve several businesses needs a shared architecture without mixing each business’s operation. Comercia’s concrete scope is not published here yet.',
    },
    value: {
      es: 'Una sola plataforma, pensada para varios negocios. Hasta que exista un enlace o una lista de funcionalidades confirmadas, el siguiente paso es una consulta comercial.',
      en: 'One platform, intended for several businesses. Until a link or a confirmed feature list exists, the next step is a commercial inquiry.',
    },
    platforms: ['web'],
    platformNotes: [
      {
        es: 'Aplicación web. No hay un sitio público ni una descarga confirmados.',
        en: 'Web application. There is no confirmed public site or download.',
      },
    ],
    features: [
      {
        title: { es: 'Arquitectura compartida', en: 'Shared architecture' },
        text: {
          es: 'La descripción publicada es una plataforma que puede atender a diferentes negocios desde una misma base. No se enumeran módulos.',
          en: 'The published description is a platform that can serve different businesses from one base. Modules are not listed.',
        },
      },
      {
        title: { es: 'Uso comercial', en: 'Commercial use' },
        text: {
          es: 'El propósito es ofrecer funcionalidades comerciales. Cuáles están implementadas se documentará cuando estén confirmadas.',
          en: 'The purpose is to offer commercial capabilities. Which ones are implemented will be documented when they are confirmed.',
        },
      },
    ],
    architecture: {
      title: { es: 'Arquitectura multi-tenant', en: 'Multi-tenant architecture' },
      intro: {
        es: 'Estos puntos describen la intención de la arquitectura, no pantallas ni precios ya publicados.',
        en: 'These points describe the architecture’s intent, not screens or prices already published.',
      },
      points: [
        {
          es: 'Una misma aplicación puede atender a varios negocios.',
          en: 'One application can serve several businesses.',
        },
        {
          es: 'Cada negocio debería operar en su propio espacio. Esta página no publica cómo se separan los datos.',
          en: 'Each business should operate in its own space. This page does not publish how the data is separated.',
        },
        {
          es: 'Las funcionalidades comerciales concretas se añadirán a esta ficha cuando estén confirmadas.',
          en: 'Concrete commercial capabilities will be added to this page when they are confirmed.',
        },
      ],
    },
    faqs: [
      {
        q: { es: '¿Dónde pruebo Comercia?', en: 'Where do I try Comercia?' },
        a: {
          es: 'No hay una demo ni un sitio público configurados. Puedes escribir desde el contacto.',
          en: 'There is no demo and no public site configured. You can write through the contact form.',
        },
      },
      {
        q: { es: '¿Hay un precio?', en: 'Is there a price?' },
        a: {
          es: 'No hay un precio publicado en esta plataforma.',
          en: 'There is no price published on this platform.',
        },
      },
    ],
    primaryAction: {
      url: '/contact?interes=comercia-multi-tenant',
      label: { es: 'Consultar el proyecto', en: 'Ask about the project' },
    },
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug || product.id === slug);
}

export function relatedProducts(slug: string): Product[] {
  return products.filter((product) => product.slug !== slug).slice(0, 3);
}

export function productsWithDemo(): Product[] {
  return products.filter((product) => product.demo?.enabled);
}
