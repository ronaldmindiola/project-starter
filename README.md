<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" class="logo" width="120"/>

## 🚀 Introducción

Este boilerplate te ofrece una base profesional y moderna para iniciar proyectos web con:

- **Astro** como framework estático/metaframework
- **Tailwind CSS** para estilos utilitarios
- **shadcn/ui** para componentes UI accesibles y personalizables
- **TypeScript** para tipado seguro

## ✨ Características principales

- Configuración lista para usar: Astro + Tailwind + shadcn/ui
- Tipado estricto con TypeScript
- Estructura modular y escalable
- Soporte para Markdown/MDX
- Optimización automática de assets
- Ruteo basado en archivos
- SEO optimizado por defecto
- Scripts para linting y formateo

## 📦 Instalación rápida

1. Clona el repositorio:

```bash
git clone https://github.com/ronaldmindiola/project-starter.git
cd project-starter
```

2. Instala las dependencias:

```bash
npm install
# o
yarn
# o
pnpm install
```

## 🛠️ Comandos útiles

| Comando           | Descripción                           |
| :---------------- | :------------------------------------ |
| npm run dev       | Inicia el servidor de desarrollo      |
| npm run build     | Construye el proyecto para producción |
| npm run preview   | Previsualiza el build localmente      |
| npm run format    | Formatea el código con Prettier       |
| npm run lint      | Ejecuta ESLint                        |
| npm run astro ... | Ejecuta comandos de Astro CLI         |

## 🎨 Estructura del proyecto

```
├── public/           # Assets estáticos
├── src/
│   ├── components/   # Componentes reutilizables
│   ├── layouts/      # Layouts de página
│   ├── pages/        # Páginas de la aplicación
│   ├── styles/       # Estilos globales
│   └── utils/        # Utilidades y helpers
├── astro.config.mjs  # Configuración de Astro
├── tailwind.config.cjs # Configuración de Tailwind
├── tsconfig.json     # Configuración de TypeScript
└── package.json
```

## 🧩 Componentes UI con shadcn/ui

El proyecto incluye componentes preconfigurados de shadcn/ui. Para agregar más:

```bash
npx shadcn-ui@latest add [component-name]
```

Los nuevos componentes se ubican en `src/components/ui`.

## 🌍 Variables de entorno

Crea un archivo `.env` en la raíz del proyecto:

```
# Ejemplo:
PUBLIC_SITE_URL=https://mi-sitio.com
```

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Abre un issue o PR con tus sugerencias.

## 📄 Licencia

MIT © [Tu Nombre]
