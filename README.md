# Umbral

Plataforma comercial para presentar aplicaciones, demos y servicios de desarrollo. Es independiente del perfil profesional en [andresfrias.dev](https://andresfrias.dev).

**Umbral es un nombre de trabajo.** El nombre comercial, el dominio y los perfiles sociales todavía no están definidos.

## Stack

- Angular 19, componentes standalone y TypeScript estricto
- Angular Router, Signals y `@defer` para demos, galería y video
- Tailwind CSS 4 y un tema daisyUI propio
- Lucide (`@lucide/angular`) para la iconografía
- Inter como tipografía

No hay backend ni base de datos. La aplicación se renderiza en el navegador. Los metadatos de cada ruta se actualizan con `Title` y `Meta` de Angular; un rastreador que no ejecute JavaScript verá el título inicial de `index.html`.

## Requisitos

- Node.js 22
- npm 10

## Desarrollo

```bash
npm install
npm start
```

Abre [http://localhost:4200](http://localhost:4200). El idioma inicial es español. El selector ES/EN guarda la preferencia en `localStorage` (`umbral-locale`).

## Compilar y desplegar

```bash
npm run build
```

El resultado queda en `dist/umbral/browser`. Sirve esa carpeta con cualquier hosting de archivos estáticos. `base href` es `/`.

Ejemplo con el servidor estático de Node, después del build:

```bash
npx --yes serve dist/umbral/browser
```

En un host estático, configura la ruta de respaldo hacia `index.html` para que `/apps/fintrack` y el resto de rutas del router respondan al refrescar.

No hace falta un proceso Node en producción mientras `contactFormUrl` esté vacío. El formulario prepara el mensaje en el correo de quien escribe.

## Configuración pendiente

Edita estos archivos y vuelve a compilar:

| Campo | Dónde | Estado |
| --- | --- | --- |
| `brand.name` | `src/app/core/config/brand.ts` | Provisional: Umbral |
| `brand.social` | `src/app/core/config/brand.ts` | Vacío. No hay perfiles publicados |
| `siteUrl` | `src/environments/environment.ts` y `environment.production.ts` | `http://localhost:4200` |
| `contactEmail` | Los mismos environments | `afriasdev@gmail.com`, el correo profesional ya publicado |
| `contactFormUrl` | Los mismos environments | Vacío. Sin envío automático |
| URLs de `public/sitemap.xml` y `public/robots.txt` | Esos archivos | Apuntan a localhost hasta que exista el dominio |

Si `contactFormUrl` tiene una URL, el navegador hace `POST` con este JSON y espera una respuesta `2xx`:

```json
{
  "name": "Ada",
  "email": "ada@example.com",
  "projectType": "custom",
  "budget": "",
  "message": "Descripción del proyecto",
  "locale": "es"
}
```

El proveedor tiene que permitir el origen del sitio (CORS). Si no hay URL, o el proveedor rechaza el mensaje, la web no simula un envío: muestra el texto para abrirlo o copiarlo en el correo.

## Añadir una aplicación

1. Añade un objeto al array de `src/app/core/data/products.ts`.
2. Rellena español e inglés en el mismo objeto.
3. Indica `platforms`, el estado y solo las funcionalidades confirmadas.
4. Pon `primaryAction` o `secondaryAction` únicamente si la URL o la ruta existe.
5. Las páginas `/`, `/apps` y `/apps/tu-slug` salen solas del array.

Estados: `available`, `coming-soon`, `in-development`.

## Videos y capturas

Vídeo local, dentro del producto:

```ts
video: {
  type: 'local',
  url: '/assets/videos/mi-producto.mp4',
  poster: '/assets/images/mi-producto-poster.jpg',
  aspectRatio: '16:9',
  title: { es: 'Recorrido', en: 'Tour' },
}
```

Deja el archivo en `src/assets/videos` y la portada en `src/assets/images`. El reproductor no descarga el vídeo hasta que alguien pulsa reproducir.

Para YouTube o Vimeo usa `type: 'external'` y el enlace de watch. Si el enlace no es de esos proveedores, se muestra como enlace externo y no como iframe.

Capturas:

```ts
screenshots: [{
  src: '/assets/images/mi-producto.png',
  alt: { es: '…', en: '…' },
  caption: { es: '…', en: '…' },
  width: 1200,
  height: 800,
}]
```

Sin `screenshots` ni `video`, esas secciones no se renderizan. La composición de la página es un mockup conceptual y está marcada como tal.

## Activar una demo

Dentro del producto:

```ts
demo: { type: 'internal', route: '/demos/mi-producto', enabled: true }
```

Hoy las demos internas son `fintrack`, `lunaveta` y `bloodconnectrd`. Para una demo nueva hace falta un componente y un caso en `ProductDemoComponent` y en la página `/demos/:slug`.

También puedes usar:

- `type: 'external'` con `url` y `enabled: true` para un enlace real.
- `type: 'iframe'` solo con una URL `https://` autorizada. El iframe usa `sandbox` y no se crea para direcciones arbitrarias.

Con `enabled: false`, o sin objeto `demo`, no aparece el botón ni la sección.

## Rutas

- `/` inicio
- `/apps` catálogo
- `/apps/fintrack`, `/apps/lunaveta`, `/apps/bloodconnectrd`, `/apps/comercia-multi-tenant`
- `/demos` y `/demos/:slug`
- `/services`
- `/contact`
- `/privacy`

## Qué está publicado y qué no

Revisado el 19 de octubre de 2026:

- **FinTrack** está en Google Play: `com.sentenciasql.fintrack`. La demo es un mes ficticio y no usa la API.
- **LunaVeta** está en [lunaveta.com](https://lunaveta.com). Los precios de esta web salen de esa página (Basic 19/190, Professional 39/390, Premium 69/690 USD). Confírmalos allí antes de una campaña: pueden cambiar. La demo no está conectada al producto.
- **BloodConnectRD** no tiene sitio público de uso. El recorrido no crea solicitudes ni muestra donantes.
- **Comercia Multi-Tenant** no tiene sitio, precio, módulos ni demo confirmados. La ficha solo describe la arquitectura compartida.
- No hay vídeos ni capturas oficiales. Los mockups están marcados como composición conceptual.
- No hay perfiles sociales hasta que se añadan a `brand.social`.
