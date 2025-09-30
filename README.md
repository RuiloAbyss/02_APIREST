# APIREST02 - Gestión de Usuarios

## Portada

**Materia:** Servicios Web  
**Unidad:** 2  
**Proyecto:** APIREST02  
**Alumno:** [Tu Nombre]  
**Fecha:** 29 de septiembre de 2025

---

## Contenido

### Estructura del Proyecto

```
02_APIREST/
├── src/
│   ├── controllers/
│   │   └── user.controller.js
│   ├── models/
│   │   └── user.model.js
│   ├── routes/
│   │   └── user.routes.js
│   └── app.js
├── package.json
└── README.md
```

### Funcionalidades

- **GET /users**: Listar todos los usuarios.
- **GET /users/:id**: Obtener usuario por ID.
- **POST /users**: Crear usuario (con validaciones).
- **PUT /users/:id**: Actualizar usuario (con validaciones).
- **DELETE /users/:id**: Eliminar usuario.

### Validaciones Implementadas

- `name`: obligatorio, tipo string.
- `email`: obligatorio, tipo string.
- `age`: opcional, si existe debe ser número.
- `active`: opcional, debe ser booleano.

---
