import React, {Component} from 'react';
import '../App.css';
import { connect } from 'react-redux'
import Menu from "./Menu";
import categories from "../selectors/categories";
import { match } from "react-router";
import Products from "./Products";
import SearchInput from "./SearchInput";
import {getCategoriesAction} from "../actions/actions";

interface OwnProps {
    categories: Array<Category>
    match: match<{categoryId: string | undefined}>
}

interface TDispatchProps {
    loadCategories: any
}

class Home extends Component<OwnProps & TDispatchProps> {
    componentDidMount() {
        this.props.loadCategories()
    }
    render() {
        const {categories, match} = this.props
        return (
            <>
                <Menu categories={categories}/>
                <div className="App">
                    <SearchInput/>
                    <Products match={match}/>
                </div>
            </>
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);