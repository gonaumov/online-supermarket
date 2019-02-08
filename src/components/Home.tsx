import React, {Component} from 'react';
import '../App.css';
import {connect, Provider} from 'react-redux'
import Menu from "./Menu";
import categories from "../selectors/categories";

interface OwnProps {
    categories: Array<Category>
}

class Home extends Component<OwnProps> {
    render() {
        const {categories} = this.props
        return (
            <>
                <Menu categories={categories}/>
                <div className="App">
                    Here will be application content
                </div>
            </>
        );
    }
}

const mapStateToProps = (state: State, ownProps: any) => {
    return {
        categories: categories(state, ownProps)
    }
}

export default connect(mapStateToProps)(Home);