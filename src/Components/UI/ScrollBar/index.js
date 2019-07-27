import React from "react";

// Components
import { Scrollbars } from "react-custom-scrollbars";

const ScrollBar = ({ children }) => {
    return (
        <Scrollbars
            renderThumbVertical={({ style, ...props }) => (
                <div {...props} style={{ ...style, backgroundColor: "grey" }} />
            )}
        >
            {children}
        </Scrollbars>
    );
};

export default ScrollBar;
