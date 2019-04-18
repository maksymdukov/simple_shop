const styles = theme => ({
    navItems: {
        display: "block",
        listStyle: 'none',
        padding: 0,
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            listStyle: 'none',
            justifyContent: 'center',
            flexWrap: "wrap",
        }
    }
});

export default styles;