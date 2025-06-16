export default function normalize(value) {
  if (!value) return "";
  return value.replace(/[\s\.\-\/\\]/g, "").toLowerCase();
}
