const styles = theme => ({
    transitionItem: {
        "&-enter": {
            opacity: 0
        },
        "&-enter-active": {
            opacity: 1,
            transition: "opacity 500ms ease-in"
        },
        "&-exit": {
            opacity: 1
        },
        "&-exit-active": {
            opacity: 0,
            transition: "opacity 500ms ease-in"
        }
    },
    transitionItemEnter: {
        opacity: 0,
        transition: "opacity 500ms ease-in"
    },
    transitionItemEnterActive: {
        opacity: 1,
        transition: "opacity 500ms ease-in"
    }
});

export default styles;
