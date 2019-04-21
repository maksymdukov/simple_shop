import React, {useEffect, useState, Fragment} from 'react';
import {Helmet} from "react-helmet/es/Helmet";
import {CircularProgress} from "@material-ui/core";
import {connect} from "react-redux";
import {mapStateToProps, mapDispatchToProps} from "./redux";
import FilteredItem from "../../Components/Menu/FilteredItem";
import withErrorModal from "../../hoc/withErrorModal";
import Filters from "../../Components/Menu/Filters";


const Menu = ({menu, loading, fetchFullMenu}) => {
    const [filters, setFilters] = useState({filters: {}, activeCounter: 0});
    useEffect(() => {
        fetchFullMenu();
    }, []);
    useEffect(()=>{
        if (menu) {
            const filtersObj = {'all': true};
            menu.order.forEach((menuCategory) => {
                filtersObj[menuCategory] = false;
            });
            setFilters((prevState) => ({...prevState, filters: filtersObj}));
        }
    }, [menu]);
    const spinner = loading ? <div style={{textAlign: "center"}}><CircularProgress/></div> : null;
    const onFilterClickHandler = (filterName) => {
        const updFilterState = {...filters, filters: {...filters.filters}};
        if (filterName === 'all') {
            updFilterState.filters.all = true;
            menu.order.forEach(filterItem => updFilterState.filters[filterItem] = false);
            updFilterState.activeCounter = 0;
        } else {
            updFilterState.filters.all = false;
            updFilterState.activeCounter = filters.filters[filterName]
                ? updFilterState.activeCounter - 1
                : updFilterState.activeCounter + 1;
            updFilterState.filters[filterName] = !updFilterState.filters[filterName];
            if (updFilterState.activeCounter < 1) {
                updFilterState.filters.all = true;
                updFilterState.activeCounter = 0;
            }
        }
        setFilters(updFilterState);
    };

    //Filtering menu
    const filteredList = [];
    if ('all' in filters.filters) {
        menu.order.forEach((filterName) => {
            if (filters.filters.all) {
                // "All" filter is On
                filteredList.push(<FilteredItem
                    key={filterName}
                    {...{menu, filterName}}
                />);
            } else if (filters.filters[filterName]) {
                // "All" filter is Off. Checking each category if it's On.
                filteredList.push(<FilteredItem
                    key={filterName}
                    {...{menu, filterName}}
                />);
            }
        });
    }
    return (
        <div>
            <Helmet title="Menu"/>
            {spinner}
            {menu &&
                        <Filters
                            filters={filters.filters}
                            order={menu.order}
                            onFilterClick={onFilterClickHandler}
                        />
            }

            {filteredList}

        </div>
    );
};

const MenuWithError = withErrorModal(Menu);

export default connect(mapStateToProps, mapDispatchToProps)(MenuWithError);