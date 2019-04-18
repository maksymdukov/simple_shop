import React, {useEffect, useState} from 'react';
import {Helmet} from "react-helmet/es/Helmet";
import MenuCardList from "../../Components/BurgerCardList";
import {CircularProgress} from "@material-ui/core";
import Heading from "../../Components/UI/Heading";
import HeadingDivider from "../../Components/UI/HeadingDivider";
import {connect} from "react-redux";
import ErrorModal from "../../Components/UI/ErrorModal";
import {mapStateToProps, mapDispatchToProps} from "./redux";


const Menu = ({menu, loading, error, fetchFullMenu}) => {
    useEffect(() => {
        fetchFullMenu();
    }, []);
    const [isErrModalOpened, setIsErrModalOpened] = useState(true);
    const spinner = loading ? <div style={{textAlign: "center"}}><CircularProgress/></div> : null;
    const errorModal = error
        ? <ErrorModal
            isOpened={isErrModalOpened}
            handleClose={() => setIsErrModalOpened(false)}
            message={error.message}
        />
        : null;
    return (
        <div>
            <Helmet title="Menu"/>
            {errorModal}
            <Heading variant="h4" color="primary" component="h2">Burgers</Heading>
            <HeadingDivider/>
            {spinner}
            {!!menu && <MenuCardList list={menu.burgers} type='burger'/>}

            <Heading variant="h4" color="primary" component="h2">Beverages</Heading>
            <HeadingDivider/>
            {spinner}
            {!!menu && <MenuCardList list={menu.beverages} type='normal'/>}

            <Heading variant="h4" color="primary" component="h2">Deserts</Heading>
            <HeadingDivider/>
            {spinner}
        </div>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);