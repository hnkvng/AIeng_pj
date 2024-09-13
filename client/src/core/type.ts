import React from "react";
import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import store from "@/redux/store";

export type ElementProps<P = {}> = React.FC<P>;

export type ColorMui = 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
export type SizeMui = 'small' | 'medium' | 'large';
export type StyleMui = SxProps<Theme>;
export type TypeMethod = 'get' | 'put' | 'post' | 'delete';

export type AppDispatch = typeof store.dispatch;