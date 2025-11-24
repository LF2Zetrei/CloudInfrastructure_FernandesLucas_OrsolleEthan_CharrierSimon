export const normalizeString = (str) => {
  if (!str) {
    return "";
  }

  let normalized = str.toLowerCase();
  normalized = normalized.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  normalized = normalized.replace(/[^a-z0-9]/g, "");

  return normalized;
};
