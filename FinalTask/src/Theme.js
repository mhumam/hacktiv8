import { createTheme } from '@mui/material/styles';

export const CustomTheme = createTheme({
    components: {
        MuiTypography: {
            styleOverrides: {
                h4: {
                    color: '#d48806',
                },
            },
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#d48806',
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    height: "100%",
                    cursor: 'pointer'
                },
            },
        },
        MuiCardMedia: {
            styleOverrides: {
                root: {
                    height: '30rem'
                }
            }
        }
    },
});