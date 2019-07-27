import React from "react";
import PropTypes from "prop-types";

// MUI
import { withStyles } from "@material-ui/core";

// Styles
import styles from "./styles";

const Filters = ({ classes, filters, order, onFilterClick }) => {
    const filtersArr = ["all", ...order];
    return (
        <div className={classes.filters}>
            <div className={classes.filtersWrapper}>
                {filtersArr.map(filterName => {
                    const filterClasses = [classes.filter];
                    if (filters[filterName])
                        filterClasses.push(classes.filterActive);
                    return (
                        <div
                            key={filterName}
                            className={filterClasses.join(" ")}
                            onClick={() => onFilterClick(filterName)}
                        >
                            {filterName}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

Filters.propTypes = {
    classes: PropTypes.object.isRequired,
    filters: PropTypes.object.isRequired,
    order: PropTypes.array.isRequired,
    onFilterClick: PropTypes.func.isRequired
};

export default withStyles(styles)(Filters);
