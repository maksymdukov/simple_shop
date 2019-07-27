import React from "react";

// MUI
import { CircularProgress } from "@material-ui/core";

const Spinner = () => {
    return (
        <div style={{ textAlign: "center", margin: "1rem" }}>
            <CircularProgress />
        </div>
    );
};

export default Spinner;
