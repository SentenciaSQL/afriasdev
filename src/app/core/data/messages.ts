import type { Copy } from '../models/content.model';

export const messages = {
  skip: { es: 'Saltar al contenido', en: 'Skip to content' },
  nav: {
    home: { es: 'Inicio', en: 'Home' },
    apps: { es: 'Aplicaciones', en: 'Apps' },
    demos: { es: 'Demos', en: 'Demos' },
    services: { es: 'Servicios', en: 'Services' },
    contact: { es: 'Contacto', en: 'Contact' },
    privacy: { es: 'Privacidad', en: 'Privacy' },
    primary: { es: 'Explorar aplicaciones', en: 'Explore applications' },
    language: { es: 'Idioma', en: 'Language' },
    openMenu: { es: 'Abrir menú', en: 'Open menu' },
    closeMenu: { es: 'Cerrar menú', en: 'Close menu' },
    menu: { es: 'Menú', en: 'Menu' },
    main: { es: 'Principal', en: 'Main' },
    mobile: { es: 'Móvil', en: 'Mobile' },
    newTab: { es: 'Se abre en una pestaña nueva', en: 'Opens in a new tab' },
  },
  footer: {
    explore: { es: 'Explorar', en: 'Explore' },
    services: { es: 'Servicios', en: 'Services' },
    contact: { es: 'Contacto', en: 'Contact' },
    provisional: {
      es: 'Umbral es el nombre de trabajo de esta plataforma. El nombre comercial, el dominio y los perfiles sociales todavía no están definidos.',
      en: 'Umbral is the working name of this platform. The commercial name, domain, and social profiles are not defined yet.',
    },
    independent: {
      es: 'Sitio comercial independiente del perfil profesional.',
      en: 'A commercial site, separate from the professional profile.',
    },
    portfolio: { es: 'Perfil profesional', en: 'Professional profile' },
  },
  status: {
    available: { es: 'Disponible', en: 'Available' },
    'coming-soon': { es: 'Próximamente', en: 'Coming soon' },
    'in-development': { es: 'En desarrollo', en: 'In development' },
  },
  platforms: {
    web: { es: 'Web', en: 'Web' },
    mobile: { es: 'Móvil', en: 'Mobile' },
    desktop: { es: 'Escritorio', en: 'Desktop' },
  },
  home: {
    kicker: { es: 'Productos digitales', en: 'Digital products' },
    title: {
      es: 'Aplicaciones diseñadas para resolver problemas reales.',
      en: 'Applications designed to solve real problems.',
    },
    subtitle: {
      es: 'Descubre herramientas digitales, aplicaciones móviles y plataformas empresariales creadas para simplificar procesos y mejorar la productividad.',
      en: 'Discover digital tools, mobile applications, and business platforms built to simplify work and improve productivity.',
    },
    primary: { es: 'Explorar aplicaciones', en: 'Explore applications' },
    secondary: { es: 'Ver demostraciones', en: 'View demonstrations' },
    note: {
      es: 'Las demos usan datos ficticios. No sustituyen a las aplicaciones publicadas ni guardan información en un servidor.',
      en: 'Demos use fictional data. They do not replace published apps and they do not store information on a server.',
    },
    catalogKicker: { es: 'Aplicaciones', en: 'Applications' },
    catalogTitle: { es: 'Un catálogo que crece desde la configuración.', en: 'A catalog that grows from configuration.' },
    catalogText: {
      es: 'Cada producto tiene su estado real, sus plataformas y solo los enlaces que existen hoy.',
      en: 'Each product shows its real status, its platforms, and only the links that exist today.',
    },
    demoKicker: { es: 'Demos', en: 'Demos' },
    demoTitle: { es: 'Demos que se usan, no capturas disfrazadas.', en: 'Demos you can use, not screenshots dressed up as demos.' },
    demoText: {
      es: 'FinTrack y LunaVeta se pueden recorrer en el navegador con datos inventados. BloodConnectRD tiene un recorrido ilustrativo: no envía solicitudes ni muestra donantes.',
      en: 'FinTrack and LunaVeta can be tried in the browser with invented data. BloodConnectRD has an illustrated tour: it does not submit requests or show donors.',
    },
    servicesKicker: { es: 'Servicios', en: 'Services' },
    servicesTitle: { es: 'Software a medida, con alcance definido por el proyecto.', en: 'Custom software, scoped by the actual project.' },
    servicesText: {
      es: 'No hay tarifas publicadas. El precio, el plazo y los entregables se acuerdan después de entender el problema.',
      en: 'There are no published fees. Price, timing, and deliverables are agreed after the problem is understood.',
    },
    servicesCta: { es: 'Ver servicios', en: 'View services' },
    finalTitle: {
      es: '¿Tienes una idea o necesitas una solución de software para tu negocio?',
      en: 'Do you have an idea, or do you need software for your business?',
    },
    finalText: {
      es: 'Cuéntala con el formulario. Si todavía no hay un servicio de formularios conectado, el mensaje se prepara en tu correo y el envío lo confirmas tú.',
      en: 'Tell us through the form. Until a form service is connected, the message is prepared in your email app and you confirm the send.',
    },
    finalCta: { es: 'Escribir una consulta', en: 'Write an inquiry' },
  },
  catalog: {
    kicker: { es: 'Aplicaciones', en: 'Apps' },
    title: { es: 'Productos con identidad, estado y siguiente paso propios.', en: 'Products with their own identity, status, and next step.' },
    lede: {
      es: 'Cada aplicación vive en una página propia. Los botones solo aparecen cuando hay un destino real: descarga, sitio publicado, demo o una consulta.',
      en: 'Each application has its own page. Buttons appear only when there is a real destination: a download, a published site, a demo, or an inquiry.',
    },
  },
  product: {
    problem: { es: 'El problema', en: 'The problem' },
    value: { es: 'La propuesta', en: 'The offer' },
    features: { es: 'Funcionalidades confirmadas', en: 'Confirmed capabilities' },
    platforms: { es: 'Dónde está', en: 'Where it runs' },
    demo: { es: 'Demo', en: 'Demo' },
    demoNote: {
      es: 'Esto es una demostración en el navegador, con datos ficticios. No es la aplicación de producción.',
      en: 'This is an in-browser demonstration with fictional data. It is not the production application.',
    },
    video: { es: 'Video', en: 'Video' },
    gallery: { es: 'Capturas', en: 'Screenshots' },
    pricing: { es: 'Precio publicado', en: 'Published pricing' },
    faq: { es: 'Preguntas frecuentes', en: 'Frequently asked questions' },
    related: { es: 'También en la plataforma', en: 'Also on the platform' },
    details: { es: 'Ver detalles', en: 'View details' },
    openDemo: { es: 'Abrir demo', en: 'Open demo' },
    stack: { es: 'Base técnica publicada', en: 'Published technical base' },
    mediaLater: {
      es: 'Las capturas y el video se mostrarán en esta página cuando existan archivos reales.',
      en: 'Screenshots and video will appear on this page when real files exist.',
    },
    comingDemo: {
      es: 'La demo interactiva estará disponible próximamente.',
      en: 'The interactive demo will be available soon.',
    },
  },
  mockup: {
    conceptual: {
      es: 'Composición conceptual. No es una captura del producto.',
      en: 'Conceptual composition. Not a product screenshot.',
    },
    fictional: { es: 'Datos ficticios', en: 'Fictional data' },
    balance: { es: 'Balance de ejemplo', en: 'Sample balance' },
    income: { es: 'Ingresos', en: 'Income' },
    expense: { es: 'Gastos', en: 'Expenses' },
    schedule: { es: 'Agenda de ejemplo', en: 'Sample schedule' },
    shared: { es: 'Plataforma compartida', en: 'Shared platform' },
    workspace: { es: 'Espacio', en: 'Workspace' },
    emptyWorkspace: { es: 'Sin módulos publicados', en: 'No published modules' },
  },
  demos: {
    kicker: { es: 'Demos', en: 'Demos' },
    title: { es: 'Prueba el flujo principal sin crear una cuenta.', en: 'Try the main flow without creating an account.' },
    lede: {
      es: 'Nada de lo que escribas aquí sale de tu navegador. BloodConnectRD no acepta solicitudes de sangre: su recorrido solo explica el proyecto.',
      en: 'Nothing you type here leaves your browser. BloodConnectRD does not accept blood requests: its tour only explains the project.',
    },
    back: { es: 'Volver al producto', en: 'Back to the product' },
    empty: {
      es: 'Todavía no hay una demo publicada para este producto.',
      en: 'There is no published demo for this product yet.',
    },
    unavailableTitle: { es: 'Demo próximamente', en: 'Demo coming soon' },
  },
  gallery: {
    open: { es: 'Ampliar captura', en: 'Enlarge screenshot' },
    close: { es: 'Cerrar imagen', en: 'Close image' },
    prev: { es: 'Imagen anterior', en: 'Previous image' },
    next: { es: 'Imagen siguiente', en: 'Next image' },
    dialog: { es: 'Captura ampliada', en: 'Enlarged screenshot' },
  },
  video: {
    play: { es: 'Reproducir video', en: 'Play video' },
    close: { es: 'Cerrar video', en: 'Close video' },
    external: { es: 'Abrir el video en su proveedor', en: 'Open the video on its provider' },
    dialog: { es: 'Reproductor de video', en: 'Video player' },
  },
  services: {
    kicker: { es: 'Servicios', en: 'Services' },
    title: { es: 'Desarrollo de software para productos y sistemas que tienen que durar.', en: 'Software development for products and systems that have to last.' },
    lede: {
      es: 'El trabajo cubre web, móvil, SaaS, inteligencia artificial aplicada y modernización. El alcance, los plazos y el precio dependen de cada encargo. No hay paquetes con precio cerrado mientras no existan.',
      en: 'The work covers web, mobile, SaaS, applied AI, and modernization. Scope, timing, and price depend on each engagement. There are no fixed-price packages until real ones exist.',
    },
    problem: { es: 'Qué problema aborda', en: 'The problem it addresses' },
    audience: { es: 'Tipo de cliente', en: 'Who it is for' },
    deliverables: { es: 'Entregables posibles', en: 'Possible deliverables' },
    tools: { es: 'Tecnologías habituales', en: 'Typical technologies' },
    cta: { es: 'Solicitar una propuesta', en: 'Request a proposal' },
    packages: { es: 'Paquetes', en: 'Packages' },
    processKicker: { es: 'Proceso', en: 'Process' },
    processTitle: { es: 'Cinco pasos, y ninguno promete un plazo fijo.', en: 'Five steps, and none of them promise a fixed timeline.' },
    processIntro: {
      es: 'El alcance, los plazos y el precio dependen de los requisitos concretos. Un producto pequeño y un sistema empresarial no se estiman igual.',
      en: 'Scope, timing, and price depend on the specific requirements. A small product and an enterprise system are not estimated the same way.',
    },
  },
  contact: {
    kicker: { es: 'Contacto', en: 'Contact' },
    title: {
      es: '¿Tienes una idea o necesitas una solución de software para tu negocio?',
      en: 'Do you have an idea, or do you need software for your business?',
    },
    lede: {
      es: 'Escribe qué quieres construir. La respuesta usa el correo que indiques. Este formulario no crea una cuenta ni guarda el mensaje en una base de datos.',
      en: 'Describe what you want to build. The reply uses the email you provide. This form does not create an account or store the message in a database.',
    },
    direct: { es: 'También puedes escribir directo', en: 'You can also write directly' },
    name: { es: 'Nombre', en: 'Name' },
    email: { es: 'Correo electrónico', en: 'Email' },
    type: { es: 'Tipo de proyecto', en: 'Project type' },
    budget: { es: 'Presupuesto aproximado', en: 'Approximate budget' },
    budgetHint: {
      es: 'Opcional. Es un rango de tu parte, no una tarifa de esta plataforma.',
      en: 'Optional. This is your range, not a fee from this platform.',
    },
    description: { es: 'Descripción del proyecto', en: 'Project description' },
    namePlaceholder: { es: 'Tu nombre…', en: 'Your name…' },
    emailPlaceholder: { es: 'tu@correo.com', en: 'you@email.com' },
    descriptionPlaceholder: { es: 'Qué problema quieres resolver…', en: 'Which problem you want to solve…' },
    submit: { es: 'Preparar mensaje', en: 'Prepare message' },
    sending: { es: 'Procesando…', en: 'Working…' },
    errors: {
      name: { es: 'Escribe tu nombre.', en: 'Enter your name.' },
      email: { es: 'Escribe un correo válido.', en: 'Enter a valid email.' },
      type: { es: 'Elige un tipo de proyecto.', en: 'Choose a project type.' },
      description: {
        es: 'Describe el proyecto con al menos 20 caracteres.',
        en: 'Describe the project in at least 20 characters.',
      },
      summary: { es: 'Revisa los campos marcados.', en: 'Check the highlighted fields.' },
      rejected: { es: 'No se pudo preparar el mensaje.', en: 'The message could not be prepared.' },
      upstream: {
        es: 'El servicio de formularios no aceptó el mensaje. Puedes escribir al correo de contacto.',
        en: 'The form service did not accept the message. You can write to the contact email.',
      },
    },
    preparedTitle: { es: 'El mensaje está listo para enviarse desde tu correo.', en: 'The message is ready to send from your email.' },
    preparedText: {
      es: 'Esta web no lo ha enviado. Ábrelo en tu aplicación de correo y confírmalo allí, o cópialo si prefieres pegarlo tú.',
      en: 'This website has not sent it. Open it in your email app and confirm it there, or copy it if you prefer to paste it yourself.',
    },
    openMail: { es: 'Abrir el correo', en: 'Open email' },
    copy: { es: 'Copiar mensaje', en: 'Copy message' },
    copied: { es: 'Mensaje copiado.', en: 'Message copied.' },
    copyFailed: {
      es: 'No se pudo copiar automáticamente. Selecciona el texto y cópialo.',
      en: 'Automatic copy failed. Select the text and copy it.',
    },
    sentTitle: { es: 'Mensaje enviado.', en: 'Message sent.' },
    sentText: {
      es: 'El servicio de formularios lo recibió. La respuesta irá al correo que escribiste.',
      en: 'The form service received it. The reply will go to the email you entered.',
    },
    another: { es: 'Escribir otro mensaje', en: 'Write another message' },
    privacy: {
      es: 'El mensaje se usa para responder a tu consulta. Esta versión no instala analítica ni cookies de seguimiento.',
      en: 'The message is used to reply to your inquiry. This version does not install analytics or tracking cookies.',
    },
    subject: { es: 'Consulta comercial', en: 'Commercial inquiry' },
    unsaved: {
      es: 'El mensaje todavía no se ha preparado. ¿Quieres salir de todos modos?',
      en: 'The message has not been prepared yet. Leave anyway?',
    },
    choose: { es: 'Elige una opción…', en: 'Choose an option…' },
  },
  privacy: {
    kicker: { es: 'Privacidad', en: 'Privacy' },
    title: { es: 'Qué hace este sitio con la información.', en: 'What this site does with information.' },
    paragraphs: [
      {
        es: 'Esta plataforma presenta aplicaciones y servicios. No hay cuentas de usuario ni un panel de clientes en esta versión.',
        en: 'This platform presents applications and services. This version has no user accounts and no client dashboard.',
      },
      {
        es: 'El idioma elegido se guarda en tu navegador. No se envía a un servidor.',
        en: 'Your language choice is stored in your browser. It is not sent to a server.',
      },
      {
        es: 'El formulario de contacto entrega el mensaje a un servicio externo solo si contactFormUrl está definido en la configuración de build. Si no lo está, el mensaje se prepara en tu propio correo y no queda almacenado aquí.',
        en: 'The contact form delivers a message to an external service only when contactFormUrl is set in the build configuration. Otherwise the message is prepared in your own email app and is not stored here.',
      },
      {
        es: 'No hay analítica ni cookies no esenciales activas. Si más adelante se añade seguimiento, deberá pedir consentimiento antes de cargar esas herramientas.',
        en: 'No analytics and no non-essential cookies are active. If tracking is added later, it should ask for consent before those tools load.',
      },
      {
        es: 'Las demos generan datos ficticios en el navegador. No las uses con información financiera, médica o de clientes reales.',
        en: 'Demos create fictional data in the browser. Do not use them with real financial, medical, or customer information.',
      },
    ] as Copy[],
  },
  process: [
    {
      title: { es: 'Descubrimiento', en: 'Discovery' },
      text: {
        es: 'Se define el problema, quién lo usa y qué queda fuera de la primera versión.',
        en: 'The problem, who uses it, and what stays out of the first version are defined.',
      },
    },
    {
      title: { es: 'Propuesta', en: 'Proposal' },
      text: {
        es: 'Se acuerda una solución y un alcance. Sin ese acuerdo no hay un precio serio.',
        en: 'A solution and a scope are agreed. Without that agreement there is no serious price.',
      },
    },
    {
      title: { es: 'Diseño y desarrollo', en: 'Design and build' },
      text: {
        es: 'El trabajo avanza por iteraciones, con algo usable para revisar antes del final.',
        en: 'The work moves in iterations, with something usable to review before the end.',
      },
    },
    {
      title: { es: 'Validación y entrega', en: 'Validation and delivery' },
      text: {
        es: 'Se comprueba que lo acordado funciona y se entrega con lo necesario para operarlo.',
        en: 'The agreed work is checked and handed over with what is needed to operate it.',
      },
    },
    {
      title: { es: 'Despliegue y evolución', en: 'Deployment and evolution' },
      text: {
        es: 'Cuando el proyecto lo requiere, se publica y se sigue evolucionando. No todos los encargos incluyen esta fase.',
        en: 'When the project needs it, the product is deployed and continues to evolve. Not every engagement includes this phase.',
      },
    },
  ] as { title: Copy; text: Copy }[],
  notFound: {
    title: { es: 'Esta página no está publicada.', en: 'This page is not published.' },
    text: {
      es: 'El enlace no corresponde a una sección del sitio.',
      en: 'The link does not match a section of the site.',
    },
    cta: { es: 'Volver al inicio', en: 'Back to home' },
  },
  meta: {
    homeTitle: {
      es: 'Umbral — Aplicaciones diseñadas para resolver problemas reales',
      en: 'Umbral — Applications designed to solve real problems',
    },
    homeDescription: {
      es: 'Plataforma comercial para conocer aplicaciones, demos con datos ficticios y servicios de software. FinTrack, LunaVeta, BloodConnectRD y Comercia Multi-Tenant.',
      en: 'A commercial platform for applications, fictional-data demos, and software services. FinTrack, LunaVeta, BloodConnectRD, and Comercia Multi-Tenant.',
    },
    appsTitle: { es: 'Aplicaciones — Umbral', en: 'Applications — Umbral' },
    appsDescription: {
      es: 'Catálogo de aplicaciones web y móviles, con estado, plataformas y enlaces reales.',
      en: 'A catalog of web and mobile applications, with status, platforms, and real links.',
    },
    demosTitle: { es: 'Demos — Umbral', en: 'Demos — Umbral' },
    demosDescription: {
      es: 'Demostraciones en el navegador con datos ficticios. No se conectan a cuentas reales.',
      en: 'In-browser demonstrations with fictional data. They do not connect to real accounts.',
    },
    servicesTitle: { es: 'Servicios — Umbral', en: 'Services — Umbral' },
    servicesDescription: {
      es: 'Desarrollo web, móvil, SaaS, inteligencia artificial aplicada y modernización. Sin tarifas publicadas.',
      en: 'Web, mobile, SaaS, applied AI, and modernization. No published fees.',
    },
    contactTitle: { es: 'Contacto — Umbral', en: 'Contact — Umbral' },
    contactDescription: {
      es: 'Consulta comercial. El mensaje se envía solo si hay un proveedor de formularios configurado.',
      en: 'Commercial inquiry. The message is sent only when a form provider is configured.',
    },
    privacyTitle: { es: 'Privacidad — Umbral', en: 'Privacy — Umbral' },
    privacyDescription: {
      es: 'Qué información guarda este sitio y cómo funciona el formulario de contacto.',
      en: 'What this site stores and how the contact form works.',
    },
  },
} as const;

export const inquiries: { id: string; label: Copy }[] = [
  { id: 'custom', label: { es: 'Desarrollo a medida', en: 'Custom development' } },
  { id: 'custom-web', label: { es: 'Desarrollo full stack', en: 'Full-stack development' } },
  { id: 'mobile', label: { es: 'Desarrollo móvil', en: 'Mobile development' } },
  { id: 'saas', label: { es: 'Producto SaaS', en: 'SaaS product' } },
  { id: 'ai', label: { es: 'Inteligencia artificial aplicada', en: 'Applied AI' } },
  { id: 'modernization', label: { es: 'Modernización de un sistema', en: 'System modernization' } },
  { id: 'fintrack', label: { es: 'FinTrack', en: 'FinTrack' } },
  { id: 'lunaveta-demo', label: { es: 'LunaVeta — solicitud de demostración', en: 'LunaVeta — demo request' } },
  { id: 'bloodconnectrd', label: { es: 'BloodConnectRD', en: 'BloodConnectRD' } },
  { id: 'comercia-multi-tenant', label: { es: 'Comercia Multi-Tenant', en: 'Comercia Multi-Tenant' } },
  { id: 'other', label: { es: 'Otra consulta', en: 'Another inquiry' } },
];

export const budgets: { id: string; label: Copy }[] = [
  { id: '', label: { es: 'Prefiero no indicarlo', en: 'Prefer not to say' } },
  { id: 'undecided', label: { es: 'Todavía no está definido', en: 'Not defined yet' } },
  { id: 'lt2', label: { es: 'Menos de 2.000 USD', en: 'Under USD 2,000' } },
  { id: '2to8', label: { es: '2.000–8.000 USD', en: 'USD 2,000–8,000' } },
  { id: '8to20', label: { es: '8.000–20.000 USD', en: 'USD 8,000–20,000' } },
  { id: 'gt20', label: { es: 'Más de 20.000 USD', en: 'Over USD 20,000' } },
];

export const serviceInquiry: Record<string, string> = {
  fullstack: 'custom-web',
  mobile: 'mobile',
  saas: 'saas',
  ai: 'ai',
  modernization: 'modernization',
};
