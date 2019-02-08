import React, { Component } from 'react';
import categories from "../selectors/categories";
import products from "../selectors/products";
import {connect, MapStateToPropsParam} from "react-redux";
import {match, NavLink} from "react-router-dom";

interface StateProps {
    products: Array<Product>
}

interface OwnProps {
    match: match<{categoryId: string | undefined}>
}

class Products extends Component<OwnProps & StateProps> {
    render() {
        const { products } = this.props
        return (
            <ul>
                {products.map((product) => (
                    <li key={product.categoryId + product.name}>{product.name}</li>
                ))}
            </ul>
        );
    }
}

const mapStateToProps: MapStateToPropsParam<StateProps, OwnProps, State> = (state: State, ownProps) => {
    return {
        products: products(state, ownProps.match)
    }
}

export default connect(mapStateToProps)(Products)