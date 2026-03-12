# Fotos de miembros

Coloca aquí las imágenes de cada miembro, en una carpeta con el **mismo slug** que en `content/members/`.

Ejemplo:

```
static/members/
  juan-perez/
    avatar.jpg
    foto1.jpg
    foto2.jpg
  ana-garcia/
    avatar.png
```

En `member.json` referencia por nombre de archivo: `"avatar": "avatar.jpg"` y `"photos": [{ "file": "foto1.jpg", "description": "..." }]`.
