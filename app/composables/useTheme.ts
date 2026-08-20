export const themes = [
  { id: "violet", label: "Violet", swatch: "#6366F1" },
  { id: "sapphire", label: "Sapphire", swatch: "#3862DB" },
  { id: "amber", label: "Amber", swatch: "#D9A45B" },
  { id: "emerald", label: "Emerald", swatch: "#17A67C" },
  { id: "wine", label: "Wine", swatch: "#C0334A" },
  { id: "rose", label: "Rose", swatch: "#D96A8C" },
] as const;

export const useTheme = () => {
  const theme = useCookie<string>("theme", {
    default: () => "violet",
    maxAge: 60 * 60 * 24 * 365,
  });
  const setTheme = (id: string) => (theme.value = id);
  return { theme, themes, setTheme };
};
