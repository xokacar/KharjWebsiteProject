import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig  = {
    initialColorMode: "light",
    useSystemColorMode: true,
};
const baseTheme = extendTheme({ config })

export default baseTheme
