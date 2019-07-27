import React, { useEffect, Fragment, useState } from "react";
import PropTypes from "prop-types";

// Local components
import Burger from "../Burger";
import BuildControls from "../Burger/BurgerControls";
import AdditiveControls from "../Burger/AdditiveControls";
import Heading from "../UI/Heading";
import ErrorModal from "../UI/ErrorModal";

// Redux
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./redux";

// MUI
import { CircularProgress } from "@material-ui/core";

const BurgerEditor = ({
    menu,
    newIngredients,
    newAdditives,
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
    const ingPrices = menu ? menu.prices : {};
    useEffect(() => {
        fetchIngs().then(() => {
            if (newIngredients)
                initIngredients(newIngredients, newAdditives, newCost);
        });
    }, []);
    return (
        <div>
            {error && (
                <ErrorModal
                    isOpened={isErrModalOpened}
                    handleClose={() => setIsErrModalOpened(false)}
                    message={error.message}
                />
            )}
            {error && <p>Try again later.</p>}
            {loading && (
                <div style={{ textAlign: "center" }}>
                    <CircularProgress />
                </div>
            )}
            {menu && (
                <Fragment>
                    <Burger {...{ ingredients, removeIngredient }} />
                    <Heading variant="h4" color="primary" component="h2">
                        Main ingredients
                    </Heading>
                    <BuildControls
                        {...{ addIngredient, ingredientsMenu, ingPrices }}
                    />
                    <Heading variant="h4" color="primary" component="h2">
                        Additives
                    </Heading>
                    <AdditiveControls
                        {...{
                            additivesMenu,
                            additives,
                            addAdditive,
                            removeAdditive,
                            ingPrices
                        }}
                    />
                </Fragment>
            )}
        </div>
    );
};

BurgerEditor.propTypes = {
    menu: PropTypes.object,
    newIngredients: PropTypes.array,
    newAdditives: PropTypes.object,
    newCost: PropTypes.number,
    ingredients: PropTypes.array.isRequired,
    additives: PropTypes.object.isRequired,
    initIngredients: PropTypes.func.isRequired,
    addIngredient: PropTypes.func.isRequired,
    removeIngredient: PropTypes.func.isRequired,
    addAdditive: PropTypes.func.isRequired,
    removeAdditive: PropTypes.func.isRequired,
    fetchIngs: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object
};

BurgerEditor.defaultProps = {
    newAdditives: {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BurgerEditor);
