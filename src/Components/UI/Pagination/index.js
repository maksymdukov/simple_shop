import React from "react";
import PropTypes from "prop-types";

// MUI
import {
    Table,
    TableBody,
    withStyles,
    TableRow,
    TableCell,
    TableFooter,
    TablePagination
} from "@material-ui/core";

// Local components
import PaginationActions from "./PaginationActions";

// Styles
import styles from "./styles";

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        const {
            props: { ordersList }
        } = this;
        this.state = {
            rows: ordersList,
            page: 0,
            rowsPerPage: 5
        };
    }

    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = event => {
        this.setState({ page: 0, rowsPerPage: Number(event.target.value) });
    };

    render() {
        const { classes, render } = this.props;
        const { rows, rowsPerPage, page } = this.state;
        const emptyRows =
            rowsPerPage -
            Math.min(rowsPerPage, rows.length - page * rowsPerPage);
        return (
            <div className={classes.tableWrapper}>
                <Table className={classes.table}>
                    <TableBody>
                        {render(
                            page * rowsPerPage,
                            page * rowsPerPage + rowsPerPage
                        )}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 48 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                colSpan={3}
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    native: true
                                }}
                                onChangePage={this.handleChangePage}
                                onChangeRowsPerPage={
                                    this.handleChangeRowsPerPage
                                }
                                ActionsComponent={PaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        );
    }
}

Pagination.propTypes = {
    ordersList: PropTypes.array.isRequired,
    classes: PropTypes.object.isRequired,
    render: PropTypes.func.isRequired
};

export default withStyles(styles)(Pagination);
