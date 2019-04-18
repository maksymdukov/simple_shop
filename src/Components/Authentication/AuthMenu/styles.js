const styles = (theme) => ({
    navItems: {
        textDecoration: 'none',
        color: 'inherit',
        '&:active, &:hover, &:visited': {
            textDecoration: 'none',
            color: 'inherit',
        },
        '&$active': {
            color: theme.palette.primary.main,
        }
    },
    active: {}
});

export default styles;