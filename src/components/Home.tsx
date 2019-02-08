import React, {Component} from 'react';
import '../App.css';
import { connect } from 'react-redux'
import Menu from "./Menu";
import categories from "../selectors/categories";
import { match } from "react-router";
import Products from "./Products";

interface OwnProps {
    categories: Array<Category>
    match: match<{categoryId: string | undefined}>
}

class Home extends Component<OwnProps> {
    render() {
        const {categories, match} = this.props
        return (
            <>
                <Menu categories={categories}/>
                <div className="App">
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

export default connect(mapStateToProps)(Home);