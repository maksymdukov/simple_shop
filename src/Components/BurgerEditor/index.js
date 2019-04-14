import React, {useEffect, Fragment, useState} from 'react';
import Burger from "../Burger";
import BuildControls from "../Burger/BurgerControls";
import AdditiveControls from "../Burger/AdditiveControls";
import {
    addIngredient,
    initIngredients,
    removeIngredient,
    addAdditive,
    removeAdditive,
    fetchIngredients
} from "../../store/actions/burgerEditorActions";
import {addItemToBasket} from "../../store/actions/basketActions";
import {connect} from "react-redux";
import {CircularProgress, Typography} from "@material-ui/core";
import Heading from "../UI/Heading";
import HeadingDivider from "../UI/HeadingDivider";
import ErrorModal from "../UI/ErrorModal";

const BurgerEditor = ({
                          menu,
                          newIngredients,
                          newAdditives = {},
                          newCost,
                          ingredients,
                          additives,
                          initIngredients,
                          addIngredient,
                          removeIngredient,
                          addAdditive,
                          removeAdditive,
                          fetchIngs,
                          loading,
                            error

}) => {
    const [isErrModalOpened, setIsErrModalOpened] = useState(true);
    const ingredientsMenu = menu ? menu.mainIngredients : [];
    const additivesMenu = menu ? menu.additives : [];
    const ingPrices =  menu ? menu.prices : {};
    useEffect(() => {
        fetchIngs();
        if (newIngredients) initIngredients(newIngredients, newAdditives, newCost);
    },[]);
    return (
        <div>
            {error && <ErrorModal
                isOpened={isErrModalOpened}
                handleClose={()=>setIsErrModalOpened(false)}
                message={error.message}
            />}
            {error && <p>Try again later.</p>}
            {loading && <div style={{textAlign: "center"}}><CircularProgress/></div>}
            {menu &&
            <Fragment>
                <Burger {...{ingredients, removeIngredient}}/>
                <Heading variant="h4" color="primary" component="h2">Main ingredients</Heading>
                <HeadingDivider/>
                <BuildControls {...{addIngredient, ingredientsMenu, ingPrices}}/>
                <Heading variant="h4" color="primary" component="h2">Additives</Heading>
                <HeadingDivider/>
                <AdditiveControls {...{additivesMenu,additives, addAdditive, removeAdditive, ingPrices}}/>
            </Fragment>
            }
        </div>
    );
};

const mapStateToProps = (state) => ({
    ingredients: state.burgerEditor.ingredients,
    additives: state.burgerEditor.additives,
    menu: state.burgerEditor.menu,
    loading: state.burgerEditor.loading,
    error: state.burgerEditor.error
});

const mapDispatchToProps = (dispatch) => ({
    initIngredients: (ingredients, additives, burgerCost) => dispatch(initIngredients(ingredients, additives, burgerCost)),
    addIngredient: (ingName) => dispatch(addIngredient(ingName)),
    removeIngredient: (index) => dispatch(removeIngredient(index)),
    addAdditive: (additiveName) => dispatch(addAdditive(additiveName)),
    removeAdditive: (additiveName) => dispatch(removeAdditive(additiveName)),
    fetchIngs: () => dispatch(fetchIngredients())
});

export default connect(mapStateToProps, mapDispatchToProps)(BurgerEditor);