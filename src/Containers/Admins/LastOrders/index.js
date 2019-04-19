import React, {useEffect, useRef, useState} from 'react';
import {withStyles} from "@material-ui/core";
import firebase from '../../../firebase/config';
import OrderCard from "../../../Components/MyOrders/OrderCardList/OrderCard";
import OrderCardDetails from "../../../Components/MyOrders/OrderCardList/OrderCard/OrderCardDetails";
import LastOrderSummary from "../../../Components/Admins/LastOrders/Card/LastOrderSummary";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import audio from '../../../assets/notification.mp3';
import Spinner from "../../../Components/UI/Spinner";
import styles from './styles';

const LastOrders = ({classes}) => {
    const audRef = useRef(null);
    const [, setCount] = useState(0);
    const [lastOrders, setLastOrders] = useState([]);
    const newOrdersListener = (res) => {
        console.log("new order");
        const order = res.val();
        const orderId = res.key;
        console.log(orderId);
        setLastOrders((prevState) => [{order, orderId}, ...prevState]);
        setCount((prevState) => {
            //Play sound after 10 orders has been loaded
            if (prevState > 9) {
                audRef.current.play();
            }
            return prevState + 1;
        });
    };
    const orderStatusChangedListener = res => {
        console.log("child changed");
        const idOfChanged = res.key;
        const valueOfChanged = res.val();
        setLastOrders((prevState) => {
            const idx = prevState.findIndex(order => order.orderId === idOfChanged);
            console.log(idx);
            const updated = {...prevState[idx], order: {...prevState[idx].order, ...valueOfChanged}};
            const updArr = [...prevState];
            updArr[idx] = updated;
            console.log(updArr);
            return updArr;
        });
        console.log(res.val());
    };
    const errorHandler = (err) => {
        console.log(err)
    };
    useEffect(() => {
        console.log("subscribe");
        firebase.database().ref("/orderIds").once('value').then(res => console.log( res.val() ));
        firebase.database().ref("/orders").limitToLast(10).on('child_added', newOrdersListener, errorHandler)
        firebase.database().ref("/orders").limitToLast(10).on('child_changed', orderStatusChangedListener, errorHandler)
        return () => {
            console.log("unsubscribe");
            firebase.database().ref("/orders").off('child_added', newOrdersListener);
            firebase.database().ref("/orders").off('child_changed', orderStatusChangedListener);
        }
    }, []);
    return (
        <div>
            <audio ref={audRef}>
                <source src={audio} type="audio/mpeg"/>
            </audio>
            New orders
            {!lastOrders.length && <Spinner/>}
            <TransitionGroup>
                {lastOrders.map((orderObj) => (
                    <CSSTransition
                        key={orderObj.orderId}
                        timeout={500}
                        classNames={`${classes.transitionItem}`}>
                        <OrderCard
                            key={orderObj.orderId}
                            cardSummary={() => <LastOrderSummary order={orderObj.order} orderId={orderObj.orderId}/>}
                            cardDetails={() => <OrderCardDetails order={orderObj.order} orderId={orderObj.orderId}/>}
                            order={orderObj.order}
                        />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </div>
    );
};

export default withStyles(styles)(LastOrders);