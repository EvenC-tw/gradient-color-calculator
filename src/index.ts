// Calculate gradient colors
function getGradientColors({
  startColor = undefined,
  endColor = undefined,
  amount = undefined,
}: {
  startColor?: string;
  endColor?: string;
  amount?: number;
}): string[] {
  // Start color and end color can't be empty, and the amount of colors can't be less than 2
  if (!startColor || !endColor || !amount || amount < 2) {
    return [startColor ?? '', endColor ?? ''];
  }

  const startColorRGB = {
    red: parseInt(startColor.slice(1, 3), 16),
    green: parseInt(startColor.slice(3, 5), 16),
    blue: parseInt(startColor.slice(5, 7), 16),
  };

  const endColorRGB = {
    red: parseInt(endColor.slice(1, 3), 16),
    green: parseInt(endColor.slice(3, 5), 16),
    blue: parseInt(endColor.slice(5, 7), 16),
  };

  const diffColorRGB = {
    red: (endColorRGB.red - startColorRGB.red) / (amount - 1),
    green: (endColorRGB.green - startColorRGB.green) / (amount - 1),
    blue: (endColorRGB.blue - startColorRGB.blue) / (amount - 1),
  };

  const gradientColors: string[] = [];

  for (let i = 0; i < amount; i++) {
    const red = Math.round(startColorRGB.red + diffColorRGB.red * i);
    const green = Math.round(startColorRGB.green + diffColorRGB.green * i);
    const blue = Math.round(startColorRGB.blue + diffColorRGB.blue * i);

    gradientColors.push(`#${getHexString(red)}${getHexString(green)}${getHexString(blue)}`);
  }

  return gradientColors;
}
// Get hexa string from number
function getHexString(color: number): string {
  const hex = color.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

module.exports = getGradientColors;
