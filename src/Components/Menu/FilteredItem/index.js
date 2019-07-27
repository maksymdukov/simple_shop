import React, { Fragment } from "react";
import PropTypes from "prop-types";

// Local components
import MenuCardList from "../../BurgerCardList";
import Heading from "../../UI/Heading";

const FilteredItem = ({ filterName, menu }) => {
    return (
        <Fragment key={filterName}>
            <Heading variant="h5" color="primary" component="h2">
                {filterName}
            </Heading>
            <MenuCardList
                list={menu[filterName]}
                type={filterName === "burgers" ? "burger" : "normal"}
            />
        </Fragment>
    );
};

FilteredItem.propTypes = {
    filterName: PropTypes.string.isRequired,
    menu: PropTypes.object.isRequired
};

export default FilteredItem;
