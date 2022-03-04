import { createTheme, OutlinedInput } from "@material-ui/core";

const textField = createTheme({
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
                padding: '4px 14px !important'
            }
        }

    }
})

export default textField;