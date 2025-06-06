# Boilerplate Astro + Tailwind CSS + shadcn/ui

## 🚀 Introducción

Este boilerplate proporciona una base profesional para iniciar proyectos web modernos utilizando:

- **Astro** como framework estático/metaframework
- **Tailwind CSS** para estilos utilitarios
- **shadcn/ui** para componentes UI accesibles y personalizables

## ✨ Características

- ✅ Configuración preestablecida de Astro + Tailwind
- ✅ Integración con shadcn/ui para componentes reutilizables
- ✅ Tipado con TypeScript
- ✅ Estructura de proyecto organizada
- ✅ Soporte para Markdown/MDX
- ✅ Optimización de assets automática
- ✅ Ruteo basado en archivos
- ✅ SEO-friendly por defecto

## 📦 Instalación

1. Clona este repositorio:

```bash
git clone https://github.com/tu-usuario/astro-tailwind-shadcn-boilerplate.git
cd astro-tailwind-shadcn-boilerplate
Instala las dependencias:

bash
npm install
# o
yarn
# o
pnpm install
🛠️ Comandos disponibles
Comando	Descripción
npm run dev	Inicia servidor de desarrollo
npm run build	Construye para producción
npm run preview	Previsualiza build localmente
npm run format	Formatea código con Prettier
npm run lint	Ejecuta ESLint
npm run astro ...	Ejecuta comandos de Astro CLI
🎨 Estructura del proyecto
text
├── public/              # Assets estáticos
├── src/
│   ├── components/      # Componentes reutilizables
│   ├── layouts/         # Layouts de página
│   ├── pages/           # Páginas de la aplicación
│   ├── styles/          # Estilos globales
│   └── utils/           # Utilidades y helpers
├── astro.config.mjs     # Configuración de Astro
├── tailwind.config.cjs  # Configuración de Tailwind
├── tsconfig.json        # Configuración de TypeScript
└── package.json
🧩 Componentes UI con shadcn/ui
Este proyecto incluye componentes preconfigurados de shadcn/ui. Para añadir más componentes:

bash
npx shadcn-ui@latest add [component-name]
Los componentes se añadirán a src/components/ui.

🌍 Variables de entorno
Crea un archivo .env en la raíz con:

env
# Ejemplo:
PUBLIC_SITE_URL=https://mi-sitio.com
🤝 Contribuciones
Las contribuciones son bienvenidas. Por favor abre un issue o PR con tus sugerencias.

📄 Licencia
MIT © [Tu Nombre]
```
