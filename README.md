# APIREST02 - Gestión de Usuarios

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

- **GET /api/users**: Listar todos los usuarios.
- **GET /api/users/:id**: Obtener usuario por ID.
- **POST /api/users**: Crear usuario (con validaciones).
- **PUT /api/users/:id**: Actualizar usuario (con validaciones).
- **DELETE /api/users/:id**: Eliminar usuario.

### Validaciones Implementadas

- `name`: obligatorio, tipo string.
- `email`: obligatorio, tipo string.
- `age`: opcional, si existe debe ser número.
- `active`: opcional, debe ser booleano.

---
