# Proyecto-IngeWeb-Entregas
Reepositorio dedicado a la entrega y presentacion del proyecto de ingenieria web grupo A3 de la UMB

Plataforma Web de Gestión y Rastreo de Envíos
=============================================

Repartos Rápidos SAS — Proyecto Full Stack
------------------------------------------

1\. Resumen Ejecutivo
---------------------

Esta documentación describe el diseño, estructura y funcionamiento del sistema web desarrollado para Repartos Rápidos SAS.El objetivo del proyecto es digitalizar la operación logística mediante una plataforma Full Stack que permita registrar, gestionar, asignar y rastrear envíos en tiempo real.

La solución utiliza:

*   React para la interfaz web
    
*   Node.js + Express para la API REST
    
*   MongoDB como base de datos
    
*   Leaflet/Mapbox para mapas
    

2\. Introducción y Contexto
---------------------------

Repartos Rápidos SAS opera actualmente con procesos manuales, lo cual genera errores, pérdida de información y falta de trazabilidad.Este proyecto implementa una solución moderna que centraliza la información, mejora la eficiencia y ofrece rastreo público para los clientes.

3\. Problema Actual
-------------------

*   Registros de paquetes escritos en cuadernos.
    
*   Asignación de repartidores por WhatsApp sin control.
    
*   Actualización de estados en Excel al final del día.
    
*   No existe rastreo público ni control en tiempo real de la flota.
    
*   Falta de auditoría y trazabilidad histórica.
    

4\. Objetivos del Proyecto
--------------------------

### Objetivo General

Desarrollar una plataforma web que permita gestionar y rastrear envíos en tiempo real.

### Objetivos Específicos

*   Digitalizar el registro de paquetes.
    
*   Implementar una API REST para gestionar paquetes y repartidores.
    
*   Integrar mapas para visualizar rutas y ubicaciones.
    
*   Crear una página pública de rastreo por número de guía.
    
*   Garantizar seguridad básica (JWT), validación y rendimiento aceptable.
    

5\. Alcance del Sistema
-----------------------

### Incluye

*   Panel administrativo.
    
*   CRUD de paquetes.
    
*   Gestión y visualización de repartidores.
    
*   Sistema de asignación.
    
*   Rastreo público.
    
*   Integración de mapas.
    

### No incluye (MVP)

*   Pasarelas de pago.
    
*   Notificaciones automáticas avanzadas.
    
*   Aplicación móvil.
    

6\. Arquitectura del Sistema
----------------------------

El sistema utiliza una arquitectura modulada donde:

*   El **frontend** gestiona la interfaz y la interacción con usuarios.
    
*   El **backend** implementa controladores, rutas y lógica de negocio.
    
*   Los **modelos** estructuran los datos usados por la API.
    

### Arquitectura del Backend (enfoque MVC donde corresponde)

**Modelos (Model):**Definen la estructura de datos y validaciones mediante Mongoose.

**Controladores (Controller):**Contienen la lógica de negocio vinculada a cada entidad.

**Rutas (parte funcional del controlador):**Canalizan las solicitudes hacia los controladores según el endpoint.

Este enfoque separa responsabilidades y facilita escalabilidad y mantenimiento.

7\. Estructura del Proyecto
---------------------------

### Estructura general FRONTEND (React)
```
FRONTEND/
├── public/
│   ├── favicon.ico               # Ícono del sitio
│   └── index.html                # Plantilla base de la SPA
│
├── src/
│   ├── assets/                   # Imágenes, logos, fuentes y recursos estáticos
│   │   └── (recursos gráficos del proyecto)
│   │
│   ├── components/               # Componentes reutilizables de UI y funcionalidad
│   │   ├── EstadoPaquete.jsx
│   │   ├── FormularioRastreo.jsx
│   │   ├── MapaRastreo.jsx
│   │   ├── MapaRepartidores.jsx
│   │   ├── PaqueteForm.jsx
│   │   ├── PaquetesTable.jsx
│   │   │
│   │   ├── layout/               # Estructura visual del panel administrativo
│   │   │   ├── MainLayout.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── Sidebar.jsx
│   │   │
│   │   └── ui/                   # Componentes atómicos reutilizables
│   │       ├── Button.jsx
│   │       ├── Card.jsx
│   │       └── FormInput.jsx
│   │
│   ├── hooks/                    # Hooks personalizados para lógica del frontend
│   │   ├── usePaquetes.js
│   │   └── useRepartidores.js
│   │
│   ├── pages/                    # Vistas asociadas a las rutas del sistema
│   │   ├── AdminDashboard.jsx
│   │   ├── Clientes.jsx
│   │   ├── Configuracion.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Incidencias.jsx
│   │   ├── Mapa.jsx
│   │   ├── PaginaRastreo.jsx
│   │   ├── Paquetes.jsx
│   │   ├── Rastreo.jsx
│   │   ├── Repartidores.jsx
│   │   └── Reportes.jsx
│   │
│   ├── services/                 # Servicios encargados de consumir la API REST
│   │   ├── api.js                # Configuración base de axios/fetch
│   │   ├── paquetesService.js
│   │   └── repartidoresService.js
│   │
│   ├── theme/                    # Configuración del tema visual
│   │   └── ThemeProvider.jsx
│   │
│   ├── App.jsx                   # Configuración de rutas principales
│   ├── App.css
│   ├── main.jsx                  # Punto de entrada de React
│   ├── index.css
│   └── vite-env.d.ts (si aplica)
│
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── eslint.config.js
└── README.md
```

### Explicación

**assets/**Imágenes, logos, fuentes y recursos estáticos.

**components/**Elementos reutilizables como tablas, formularios, mapas y componentes UI.

**layout/**Estructura visual del panel administrativo (sidebar, navbar).

**pages/**Vistas independientes asociadas a rutas del sistema.

**services/**Capa que interactúa con la API REST.

**hooks/**Encapsulan lógica de estado, peticiones y actualizaciones periódicas.

**theme/**Gestión del tema visual y configuraciones globales.

### Estructura general SERVER (Node.js + Express)
```
SERVER/
├── config/                       # Configuraciones globales del backend
│   └── db.js                     # Conexión a MongoDB
│
├── controllers/                  # Controladores (arquitectura MVC donde aplica)
│   ├── dashboard.controller.js
│   ├── paquetes.controller.js
│   └── repartidor.controller.js
│
├── models/                       # Modelos Mongoose que definen la estructura de datos
│   ├── paquete.model.js
│   └── repartidor.model.js
│
├── routes/                       # Rutas de la API REST
│   ├── dashboard.routes.js
│   ├── paquetes.routes.js
│   └── repartidor.routes.js
│
├── index.js                      # Punto de entrada del servidor Express
├── package.json
└── README.md
```

### Explicación

**index.js**Configura Express, conecta a la base de datos y monta las rutas.

**config/db.js**Mantenimiento centralizado de conexión con MongoDB.

**controllers/**Lógica de negocio para paquetes, repartidores y dashboard.

**models/**Modelos Mongoose que definen datos y validaciones.

**routes/**Define los endpoints de la API y los conecta con sus controladores.

Esta estructura promueve una organización clara entre datos, lógica y endpoints.

8\. Flujo del Sistema
---------------------

1.  El usuario interactúa con el frontend (React).
    
2.  La vista envía solicitudes HTTP al backend.
    
3.  Las rutas reciben la petición.
    
4.  Llaman al controlador correspondiente.
    
5.  El controlador usa el modelo para acceder a la base de datos.
    
6.  Se retorna una respuesta JSON al frontend.
    
7.  React actualiza la interfaz con los nuevos datos.
    

Representación en texto:

`   Frontend (React) -> API (Rutas) -> Controlador -> Modelo -> MongoDB  Frontend <- JSON <- Controlador   `

9\. Contrato de la API (Resumen)
--------------------------------

### POST /api/paquetes

Crea un paquete.

### GET /api/paquetes

Devuelve todos los paquetes con filtros.

### GET /api/paquetes/:id

Retorna un paquete específico.

### PUT /api/paquetes/:id

Actualiza estado o asignación.

### GET /api/repartidores/ubicaciones

Devuelve ubicaciones actuales.

10\. Modelado de Datos
----------------------

### Paquete

*   numeroGuia
    
*   remitente
    
*   destinatario
    
*   dimensiones
    
*   estado
    
*   repartidorId
    
*   historialEstados
    

### Repartidor

*   nombre
    
*   teléfono
    
*   estado operativo
    
*   ubicación actual
    

### Usuario (administrador)

*   email
    
*   passwordHash
    
*   rol
    

11\. Integración Full Stack
---------------------------

*   Axios para comunicación entre React y la API.
    
*   Uso de JWT en los headers para endpoints protegidos.
    
*   Mapas conectados al backend mediante endpoints de ubicaciones.
    
*   Actualización de datos mediante polling o WebSockets.
    

12\. Wireframes (Descripción)
-----------------------------

*   Login.
    
*   Dashboard con métricas y mapa.
    
*   Tabla de paquetes.
    
*   Formulario de registro y edición.
    
*   Vista de repartidores en mapa.
    
*   Página pública para rastreo.
    

13\. Sprint Cero
----------------

*   Inicializar repositorios.
    
*   Configurar base de datos y entorno.
    
*   Crear modelos.
    
*   Implementar autenticación.
    
*   Definir API y estructura del proyecto.
    

14\. Conclusiones
-----------------

El sistema propuesto moderniza por completo las operaciones de Repartos Rápidos SAS, digitalizando la gestión de envíos y habilitando trazabilidad en tiempo real.La arquitectura modular utilizada facilita el mantenimiento y crecimiento del proyecto.

15\. Trabajo Futuro
-------------------

*   Notificaciones automáticas.
    
*   Aplicación móvil para repartidores.
    
*   Ruteo inteligente.
    
*   Contenedores con Docker.
    
*   Métricas, analítica y logs avanzados.
