import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
        fontFamily: "Montserrat, sans-serif",
    },
    palette: {
        mode: "light",
        primary: {
            main: "#366EFF",
        },
        secondary: {
            main: "#FCFCFC",
        },
    },
    components: {
        MuiPaper: {
            defaultProps: {
                elevation: 4,
            },
            styleOverrides: {
                root: {
                    display: "flex",
                },
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    lineHeight: "27px",
                },
            },
        },
    },
});
