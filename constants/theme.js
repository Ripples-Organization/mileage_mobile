import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
  black: "#000000",
  black2:'#444444',
  white: "#FFFFFF",
  blue: "#0057FF",
  red:'#EB5757',
  darkblue:'#033BA9',
  lightblue:'#4181FF'
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,

  // app dimensions
  width,
  height
};
export const FONTS = {
  h1: { fontFamily: "System", fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: "IBM Plex Mono", fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: "IBMPlexMono-BoldItalic", fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: "IBMPlexMono-SemiBold", fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontFamily: "IBMPlexMono-SemiBold", fontSize: SIZES.h5, lineHeight: 22 },
  h6: { fontFamily: "IBMPlexMono-SemiBoldItalic", fontSize: SIZES.h6, lineHeight: 22 },

  body1: { fontFamily: "IBMPlexMono-Regular", fontSize: SIZES.body1, lineHeight: 36 },
  body2: { fontFamily: "IBMPlexMono-Light", fontSize: SIZES.body2, lineHeight: 30 },
  body3: { fontFamily: "IBMPlexMono-Italic", fontSize: SIZES.body3, lineHeight: 22 },
  body4: { fontFamily: "IBMPlexMono-LightItalic", fontSize: SIZES.body4, lineHeight: 22 },
};

const appTheme = { COLORS, SIZES };

export default appTheme;