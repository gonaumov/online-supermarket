import React, {Component} from 'react';
import products from "../selectors/products";
import {connect, MapDispatchToPropsNonObject, MapStateToPropsParam} from "react-redux";
import {match} from "react-router-dom";
import {toggleProductVisibility} from "../actions/actions";


interface StateProps {
    products: Array<Product>
}

interface OwnProps {
    match: match<{ categoryId: string | undefined }>
}

interface TDispatchProps {
    tpgleDescription: any
}

class Products extends Component<OwnProps & StateProps & TDispatchProps> {
    render() {
        const {products, tpgleDescription} = this.props
        return (
            <ul>
                {products.map((product) => (
                    <React.Fragment key={product.categoryId + 'productKey' + product.id}>
                        <li onClick={() => tpgleDescription(product.id)}>{product.name}</li>
                        {product.selected && <li key={product.categoryId + product.name}>
                            {product.description}
                        </li>}
                    </React.Fragment>
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

const mapDispatchToProps: MapDispatchToPropsNonObject<TDispatchProps, OwnProps> = (dispatch: any) => {
    return {
        tpgleDescription: (id: string) => {
            dispatch(toggleProductVisibility(id))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)