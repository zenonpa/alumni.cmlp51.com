# Miembros (carpetas dinámicas)

Cada miembro tiene su **carpeta** con un archivo `member.json` y opcionalmente fotos.

## Añadir un miembro

1. Crear carpeta: `content/members/nombre-apellido/`
2. Dentro, crear `member.json` con este formato:

```json
{
  "name": "Nombre Completo",
  "role": "Título o rol",
  "bio": "Breve biografía.",
  "avatar": "avatar.jpg",
  "photos": [
    { "file": "foto1.jpg", "description": "Descripción de la foto" },
    { "file": "foto2.jpg", "description": "Otra descripción" }
  ],
  "links": [
    { "label": "LinkedIn", "url": "https://..." },
    { "label": "GitHub", "url": "https://..." }
  ],
  "email": "email@example.com"
}
```

- **avatar**: nombre del archivo en `static/members/nombre-apellido/` (ej. `avatar.jpg`) o una URL completa (ej. `https://...`).
- **photos**: lista de fotos con `file` (nombre en `static/members/nombre-apellido/`) y `description`. También se puede usar `url` en lugar de `file` para enlaces externos.

## Fotos locales

Para que las fotos y el avatar se vean, colócalas en:

```
static/members/nombre-apellido/
  avatar.jpg
  foto1.jpg
  foto2.jpg
```

El slug de la URL será el nombre de la carpeta (ej: `nombre-apellido` → `/m/nombre-apellido`).
