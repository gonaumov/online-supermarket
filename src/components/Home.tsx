import React, {Component} from 'react';
import { connect } from 'react-redux'
import Menu from "./Menu";
import categories from "../selectors/categories";
import { match } from "react-router";
import Products from "./Products";
import SearchInput from "./SearchInput";
import {getCategoriesAction, getProductsAction} from "../actions/actions";

interface OwnProps {
    categories: Array<Category>
    match: match<{categoryId: string | undefined}>
}

interface TDispatchProps {
    loadCategories: any
    loadProducts: any
}

class Home extends Component<OwnProps & TDispatchProps> {
    componentDidMount() {
        this.props.loadCategories().then(() => {
            this.props.loadProducts()
        })
    }
    render() {
        const {categories, match} = this.props
        return (
            <div className='container'>
                <Menu categories={categories}/>
                <div className="app">
                    <SearchInput/>
                    <Products match={match}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: State, ownProps: OwnProps) => {
    return {
        categories: categories(state, ownProps.match)
    }
}

const mapDispatchToProps = (dispatch: any) => ({
    loadCategories: () => {
        return dispatch(getCategoriesAction())
    },
    loadProducts: () => {
        return dispatch(getProductsAction())
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);