import {fetchMenu} from "../../store/actions/menuActions";

export const mapStateToProps = (state) => ({
    menu: state.menu.menu,
    loading: state.menu.loading,
    error: state.menu.error
});

export const mapDispatchToProps = (dispatch) => ({
    fetchFullMenu: ()=>dispatch(fetchMenu())
});