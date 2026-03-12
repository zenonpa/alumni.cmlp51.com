/**
 * Resuelve la URL de una imagen de miembro.
 * - Si value es una URL (http/https), se devuelve tal cual.
 * - Si no, se asume nombre de archivo en static/members/<slug>/
 */
export function getMemberImageUrl(value, slug) {
  if (!value || !slug) return null
  if (typeof value === "string" && (value.startsWith("http://") || value.startsWith("https://"))) {
    return value
  }
  return `/members/${slug}/${value}`
}

/**
 * Resuelve la URL de una foto de la galería.
 * Acepta { file: "x.jpg", description: "..." } o { url: "https://...", description: "..." }
 */
export function getPhotoUrl(photo, slug) {
  if (!photo) return null
  if (photo.url) return photo.url
  if (photo.file && slug) return `/members/${slug}/${photo.file}`
  return null
}
