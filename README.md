# # alumni.cmlp51.com

Sitio de miembros alumni con **landing personal** por persona, hecho con Gatsby.

## Características

- **Lista de miembros** en la página de inicio
- **Carpetas dinámicas**: cada miembro tiene su carpeta en `content/members/<slug>/` con un `member.json`
- **Landing personal** en `/m/<slug>` (ej: `/m/juan-perez`)
- **Tema claro/oscuro** con conmutador en la cabecera (persiste en `localStorage` y respeta `prefers-color-scheme`)
- **Diseño responsive** para móviles y escritorio

## Cómo añadir un miembro

1. Crear carpeta: `content/members/nombre-apellido/`
2. Dentro, crear `member.json` (ver ejemplo en `content/members/README.md`)

La URL de su landing será `https://alumni.cmlp51.com/m/nombre-apellido`.

## Desarrollo

```bash
npm install
npm run develop   # http://localhost:8000
npm run build    # generación estática
npm run serve    # servir build local
```