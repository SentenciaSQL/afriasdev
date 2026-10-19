import type { Service } from '../models/content.model';

/**
 * Para añadir un paquete con precio real:
 * empuja un objeto a `packages` con name, text, includes y, solo si el precio está confirmado, priceLabel.
 * Un array vacío no se muestra.
 */
export const services: Service[] = [
  {
    id: 'fullstack',
    title: { es: 'Desarrollo full stack', en: 'Full-stack development' },
    summary: {
      es: 'Aplicaciones web con interfaz, API y datos que se pueden mantener.',
      en: 'Web applications with an interface, an API, and data that can be maintained.',
    },
    problem: {
      es: 'El proceso del negocio ya no cabe en una hoja de cálculo ni en un sistema que nadie se atreve a tocar.',
      en: 'The business process no longer fits in a spreadsheet or in a system nobody dares to change.',
    },
    audience: {
      es: 'Equipos que necesitan una aplicación web propia: pantallas, servicios y una base de datos coherente.',
      en: 'Teams that need their own web application: screens, services, and a coherent database.',
    },
    deliverables: [
      { es: 'Aplicación web y su interfaz', en: 'A web application and its interface' },
      { es: 'Frontend con Angular o React', en: 'A frontend in Angular or React' },
      { es: 'Backend con Java, Spring Boot o .NET', en: 'A backend in Java, Spring Boot, or .NET' },
      { es: 'APIs REST y, cuando hace falta, microservicios', en: 'REST APIs and, when needed, microservices' },
      { es: 'Integraciones con sistemas que ya existen', en: 'Integrations with systems that already exist' },
      { es: 'Modelo de datos y trabajo de SQL', en: 'A data model and SQL work' },
    ],
    tools: ['Angular', 'React', 'TypeScript', 'Java', 'Spring Boot', '.NET', 'PostgreSQL', 'SQL Server'],
    packages: [],
  },
  {
    id: 'mobile',
    title: { es: 'Desarrollo móvil', en: 'Mobile development' },
    summary: {
      es: 'Aplicaciones Flutter y Android conectadas a servicios reales.',
      en: 'Flutter and Android applications connected to real services.',
    },
    problem: {
      es: 'El trabajo ocurre en la calle o en la clínica, y una web de escritorio no alcanza.',
      en: 'The work happens in the field or in the clinic, and a desktop website is not enough.',
    },
    audience: {
      es: 'Productos que necesitan una aplicación Android o multiplataforma, con publicación preparada y no solo un prototipo.',
      en: 'Products that need an Android or cross-platform app, prepared for release and not only a prototype.',
    },
    deliverables: [
      { es: 'Aplicación con Flutter', en: 'A Flutter application' },
      { es: 'Aplicación Android', en: 'An Android application' },
      { es: 'Integración con APIs', en: 'API integration' },
      { es: 'Autenticación y servicios externos', en: 'Authentication and external services' },
      { es: 'Preparación para publicar la aplicación', en: 'Preparation to publish the application' },
    ],
    tools: ['Flutter', 'Dart', 'Android', 'Kotlin'],
    packages: [],
  },
  {
    id: 'saas',
    title: { es: 'Desarrollo SaaS', en: 'SaaS development' },
    summary: {
      es: 'De un MVP a una plataforma de gestión con cuentas y panel.',
      en: 'From an MVP to a management platform with accounts and an admin panel.',
    },
    problem: {
      es: 'La idea tiene que funcionar como producto: varias organizaciones, un panel y una evolución, no como una entrega única.',
      en: 'The idea has to work as a product: multiple organizations, a panel, and a path forward, not a one-time delivery.',
    },
    audience: {
      es: 'Quienes quieren lanzar un producto digital, una plataforma de gestión o un servicio por suscripción.',
      en: 'People who want to launch a digital product, a management platform, or a subscription service.',
    },
    deliverables: [
      { es: 'MVP con el flujo principal usable', en: 'An MVP with the main flow usable' },
      { es: 'Plataforma de gestión y panel administrativo', en: 'A management platform and an admin panel' },
      { es: 'Modelo de suscripción cuando el cobro ya tiene proveedor', en: 'A subscription model once billing has a real provider' },
      { es: 'Integraciones con sistemas existentes', en: 'Integrations with existing systems' },
      { es: 'Arquitectura pensada para crecer', en: 'An architecture shaped to grow' },
    ],
    tools: ['Angular', 'React', 'Spring Boot', '.NET', 'PostgreSQL', 'Docker'],
    packages: [],
  },
  {
    id: 'ai',
    title: { es: 'Inteligencia artificial', en: 'Artificial intelligence' },
    summary: {
      es: 'Modelos de lenguaje integrados en productos y procesos que ya tienen reglas.',
      en: 'Language models integrated into products and processes that already have rules.',
    },
    problem: {
      es: 'Hay tareas de lectura, redacción o enrutado que una persona repite, y un flujo con modelos puede asistirlas sin convertir el producto en un chat genérico.',
      en: 'There is reading, writing, or routing work people repeat, and a model-backed flow can assist it without turning the product into a generic chat.',
    },
    audience: {
      es: 'Equipos que quieren incorporar modelos a un software existente o diseñar un asistente con un límite claro.',
      en: 'Teams that want to add models to existing software or design an assistant with a clear boundary.',
    },
    deliverables: [
      { es: 'Integración de modelos de lenguaje mediante APIs', en: 'Language-model integration through APIs' },
      { es: 'Asistentes conversacionales', en: 'Conversational assistants' },
      { es: 'Agentes con herramientas acotadas', en: 'Agents with bounded tools' },
      { es: 'Flujos con LangChain y LangGraph', en: 'Flows with LangChain and LangGraph' },
      { es: 'Incorporación en un producto que ya existe', en: 'Addition to a product that already exists' },
      { es: 'Automatización de un proceso de negocio', en: 'Automation of a business process' },
    ],
    tools: ['LangChain', 'LangGraph', 'LLM APIs', 'Python', 'Java', '.NET'],
    packages: [],
  },
  {
    id: 'modernization',
    title: { es: 'Modernización y optimización', en: 'Modernization and optimization' },
    summary: {
      es: 'Sistemas que hay que entender, aligerar, integrar y volver a desplegar.',
      en: 'Systems that need to be understood, lightened, integrated, and deployed again.',
    },
    problem: {
      es: 'El software responde, pero cada cambio cuesta demasiado, o quedó aislado de los demás sistemas.',
      en: 'The software responds, but every change costs too much, or it was left isolated from the other systems.',
    },
    audience: {
      es: 'Organizaciones con un sistema en uso que necesita refactorización, mejor rendimiento o una forma más clara de publicarse.',
      en: 'Organizations with a system in use that needs refactoring, better performance, or a clearer way to ship.',
    },
    deliverables: [
      { es: 'Modernización del sistema', en: 'System modernization' },
      { es: 'Refactorización', en: 'Refactoring' },
      { es: 'Optimización de rendimiento y de SQL', en: 'Performance and SQL optimization' },
      { es: 'Integraciones', en: 'Integrations' },
      { es: 'Automatización del proceso de entrega', en: 'Delivery automation' },
      { es: 'Docker, CI/CD y despliegue en la nube', en: 'Docker, CI/CD, and cloud deployment' },
    ],
    tools: ['Docker', 'GitHub Actions', 'AWS', 'SQL', 'Java', '.NET'],
    packages: [],
  },
];
