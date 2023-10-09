export default function myImageLoader({ src, width, quality }) {
    return `/TechNotes${src}?w=${width}&q=${quality || 75}`
  }