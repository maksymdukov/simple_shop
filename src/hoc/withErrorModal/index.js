import React, {useState, Fragment, useEffect} from 'react';
import ErrorModal from "../../Components/UI/ErrorModal";


const withErrorModal = (WrappedComponent) => (props) => {
    useEffect(()=>{
        if (props.error) setIsErrModalOpened(true);
    },[props.error]);
    const [isErrModalOpened, setIsErrModalOpened] = useState(false);
    return (
        <Fragment>
            {props.error &&
            <ErrorModal
                isOpened={isErrModalOpened}
                handleClose={()=>setIsErrModalOpened(false)}
                message={props.error.message}
            />
            }
            <WrappedComponent {...props}/>
        </Fragment>
    );
};

export default withErrorModal;