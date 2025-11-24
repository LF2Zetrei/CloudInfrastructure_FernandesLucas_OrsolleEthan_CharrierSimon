export const darkenHexColor = (hex, percent) => {
  if (!hex) {
    return "transparent";
  }

  let color = hex.startsWith("#") ? hex.slice(1) : hex;

  let num = parseInt(color, 16);
  let R = num >> 16;
  let G = (num >> 8) & 0x00ff;
  let B = num & 0x0000ff;

  const reductionFactor = 1 - percent / 100;

  R = Math.min(255, Math.max(0, R * reductionFactor));
  G = Math.min(255, Math.max(0, G * reductionFactor));
  B = Math.min(255, Math.max(0, B * reductionFactor));

  let newNum = (G << 8) | (B | (R << 16));

  return `#${newNum.toString(16).padStart(6, "0")}`;
};
