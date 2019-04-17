import React, {useEffect, useState} from 'react';
import firebase from '../../../firebase/config';
import OrderCard from "../../../Components/MyOrders/OrderCardList/OrderCard";

const NewOrders = ({classes}) => {
    const [lastOrders, setLastOrders] = useState([]);
    useEffect(()=>{
        console.log("subscribe")
        firebase.database().ref("/orders").limitToLast(5).on('child_added', res => {
            console.log("new order")
            const newOrd = res.val();
            console.log(newOrd);
            setLastOrders((prevState)=>[...prevState, newOrd]);
        }, (err) => console.log(err) )
    },[]);
    return (
        <div>
            New orders
            {lastOrders.map((order) => <OrderCard key={order.timestamp} order={order}/>)}
        </div>
    );
};

export default NewOrders;