# React + Guía 6: Desarrollo del Frontend - Sistema de Rastreo de Paquetes

## 📋 Descripción
Este repositorio contiene el desarrollo del frontend para el sistema de rastreo de paquetes, desarrollado como parte de la Guía 6 de la asignatura. La aplicación permite la gestión de paquetes a través de un panel de administración y ofrece una interfaz pública para el rastreo de envíos.

## 🚀 Tecnologías Utilizadas

### Principales
- **React 18+** - Biblioteca principal para la construcción de interfaces de usuario
- **Vite** - Herramienta de construcción y desarrollo
- **React Router DOM** - Para el enrutamiento de la aplicación
- **Leaflet + React-Leaflet** - Para la visualización de mapas interactivos
- **Tailwind CSS** - Para estilización y diseño responsivo
- **Axios** - Cliente HTTP para peticiones a la API

### Desarrollo
- ESLint - Para el análisis estático del código
- Prettier - Para el formateo de código consistente

## 🏗️ Estructura del Proyecto

```
/frontend
├── /public
│   └── favicon.ico
├── /src
│   ├── /assets          # Recursos estáticos (imágenes, fuentes)
│   ├── /components      # Componentes reutilizables
│   │   ├── common/      # Componentes UI comunes
│   │   ├── forms/       # Formularios
│   │   ├── maps/        # Componentes de mapas
│   │   └── ui/          # Elementos de UI atómicos
│   ├── /contexts        # Contextos de React
│   ├── /hooks           # Custom hooks
│   ├── /layouts         # Layouts de la aplicación
│   ├── /pages           # Páginas/views
│   │   ├── admin/       # Vistas del panel de administración
│   │   └── public/      # Vistas de acceso público
│   ├── /services        # Servicios API
│   ├── /utils           # Utilidades y helpers
│   ├── App.jsx          # Componente raíz
│   └── main.jsx         # Punto de entrada
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js
```

## 🛠️ Configuración del Entorno

### Requisitos Previos
- Node.js (v16 o superior)
- npm (v8 o superior) o Yarn

### Instalación
1. Clonar el repositorio
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd frontend
   ```

2. Instalar dependencias
   ```bash
   npm install
   # o
   yarn install
   ```

3. Configurar variables de entorno
   Crear un archivo `.env` en la raíz del proyecto:
   ```
   VITE_API_URL=http://localhost:3000/api
   VITE_MAPBOX_ACCESS_TOKEN=tu_token_de_mapa
   ```

4. Iniciar el servidor de desarrollo
   ```bash
   npm run dev
   # o
   yarn dev
   ```

5. Abrir en el navegador
   ```
   http://localhost:5173
   ```

## 🖥️ Características Implementadas

### Panel de Administración
- 📝 Formulario de registro de paquetes
- 📊 Tabla interactiva de paquetes
- 🗺️ Mapa de seguimiento de repartidores
- 🔄 Gestión de estados de paquetes

### Página Pública
- 🔍 Búsqueda de paquetes por número de guía
- 📱 Visualización del estado del envío
- 🗺️ Mapa de seguimiento en tiempo real

## 🎨 Diseño y Estilos
- Diseño responsivo que funciona en móviles, tablets y escritorio
- Paleta de colores accesible
- Componentes reutilizables
- Transiciones y animaciones suaves

## ⚙️ Scripts Disponibles
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "lint": "eslint . --ext .js,.jsx",
  "format": "prettier --write ."
}
```

## ♿ Accesibilidad
- Nivel AA de WCAG 2.1
- Navegación por teclado
- Contraste adecuado
- Soporte para lectores de pantalla

## 🌍 Despliegue
La aplicación puede ser desplegada en servicios como:
- Vercel
- Netlify
- GitHub Pages

## 📝 Licencia
Este proyecto está bajo la Licencia MIT.

---

## 📹 Demostración
[Enlace a la aplicación desplegada](#) | [Video demostrativo](#)

## ✨ Créditos
Desarrollado como parte de la Guía 6 - [Nombre de la asignatura]

## 🤝 Contribución
1. Haz un fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Haz push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request in your project.
