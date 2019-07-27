import React, { useState, Fragment, useEffect } from "react";

// Local components
import ErrorModal from "../../Components/UI/ErrorModal";

const withErrorModal = WrappedComponent => props => {
    const [isErrModalOpened, setIsErrModalOpened] = useState(false);
    useEffect(() => {
        if (props.error) setIsErrModalOpened(true);
    }, [props.error]);
    return (
        <Fragment>
            {props.error && (
                <ErrorModal
                    isOpened={isErrModalOpened}
                    handleClose={() => setIsErrModalOpened(false)}
                    message={props.error.message}
                />
            )}
            <WrappedComponent {...props} />
        </Fragment>
    );
};

export default withErrorModal;
