import { createMuiTheme } from '@material-ui/core/styles';

const dark = createMuiTheme({
    palette: {
        type: 'dark',
    },
});
const light = createMuiTheme({
    palette: {
        type: 'light',
    },
});

export { dark, light };
