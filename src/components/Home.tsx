import React, {Component} from "react";
import { connect } from "react-redux";
import { match } from "react-router";
import { Action, AnyAction} from "redux";
import { ThunkDispatch } from "redux-thunk";
import {getCategoriesAction, getProductsAction} from "../actions/actions";
import categories from "../selectors/categories";
import Menu from "./Menu";
import Products from "./Products";
import SearchInput from "./SearchInput";

interface IOwnProps {
    categories: Category[];
    match: match<{categoryId: string | undefined}>;
}

interface ITDispatchProps {
    loadCategories: () => Promise<Action>;
    loadProducts: () => Promise<Action>;
}

class Home extends Component<IOwnProps & ITDispatchProps> {
    public componentDidMount() {
        this.props.loadCategories().then(() => {
            this.props.loadProducts();
        });
    }
    public render() {
        const {categories, match} = this.props;
        return (
            <div className="container">
                <Menu categories={categories}/>
                <div className="app">
                    <SearchInput/>
                    <Products match={match}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: State, ownProps: IOwnProps) => {
    return {
        categories: categories(state, ownProps.match),
    };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<State, {}, AnyAction>) => ({
    loadCategories: () => {
        return dispatch(getCategoriesAction());
    },
    loadProducts: () => {
        return dispatch(getProductsAction());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
