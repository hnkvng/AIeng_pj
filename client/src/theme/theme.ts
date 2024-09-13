import { ThemeOptions } from "@mui/material";

import palette from './palette';
import breakpoints from "./breakpoint";
import spacing from "./spacing";
import shape from "./shape";

const theme : ThemeOptions = {
    breakpoints: breakpoints,
    spacing: spacing,
    shape: shape, 
    palette: palette,
}

export default theme;