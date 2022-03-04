import { createTheme, OutlinedInput } from "@material-ui/core";

const serachField = createTheme({
    overrides: {
        MuiTextField: {
            root: {
                background: '#FFFFFF 0% 0% no-repeat padding-box',
                boxShadow: '0px 3px 6px #0000001D',
                borderRadius: '13px',
            },
        },
        MuiOutlinedInput: {
            root: {
                padding: '4px 14px !important',
                border: 'none !important'
            }
        }

    }
})

export const textFieldTheme = createTheme({
    overrides: {
        MuiTextField: {
            root: {
                background: '#FFFFFF 0% 0% no-repeat padding-box',
                boxShadow: '0px 0px 8px #6B986443',
                borderRadius: '25px !important',
            },
        },
        MuiOutlinedInput: {
            root: {
                padding: '4px 14px !important',
                border: 'none !important'
            }
        },
    }
})

export default serachField;