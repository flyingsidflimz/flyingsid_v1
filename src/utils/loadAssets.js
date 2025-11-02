export function loadFolder(pattern){
  // returns sorted array of public paths using import.meta.glob
  const modules = import.meta.glob(pattern, { eager: true });
  return Object.values(modules).map(m => m.default || m).sort();
}

// usage:
// const featured = loadFolder('../assets/FeaturedIn/*.{jpg,png,jpeg,webp}');
