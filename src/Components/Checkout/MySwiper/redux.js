import {
    minusQuantity,
    plusQuantity,
    removeItemFromBasket
} from "../../../store/actions/basketActions";

export const mapStateToProps = state => ({
    basket: state.basket.basket
});
export const mapDispatchToProps = dispatch => ({
    plusQuantity: index => dispatch(plusQuantity(index)),
    minusQuantity: index => dispatch(minusQuantity(index)),
    removeItem: index => dispatch(removeItemFromBasket(index))
});
