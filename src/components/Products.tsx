import React, {Component} from "react";
import {connect, MapDispatchToProps, MapStateToPropsParam} from "react-redux";
import {match} from "react-router-dom";
import {toggleProductVisibility} from "../actions/actions";
import products from "../selectors/products";
import {productCategoriesKeyGenerator} from "../utils";


interface IStateProps {
    products: Product[];
}

interface IOwnProps {
    match: match<{ categoryId: string | undefined }>;
}

interface ITDispatchProps {
    toggleDescription: (id: string) => void;
}

class Products extends Component<IOwnProps & IStateProps & ITDispatchProps> {
    public render() {
        const {products, toggleDescription} = this.props;
        return (
            <ul className="productlist">
                {products.map((product) => (
                    <React.Fragment key={productCategoriesKeyGenerator(product) + "productKey" + product.id}>
                        <li className="product" onClick={() => toggleDescription(product.id)}>{product.title}</li>
                        {product.selected &&
                        <li className="productdescription" key={productCategoriesKeyGenerator(product) + product.title}>
                            {product.description}
                        </li>}
                    </React.Fragment>
                ))}
            </ul>
        );
    }
}

const mapStateToProps: MapStateToPropsParam<IStateProps, IOwnProps, State> = (state: State, ownProps) => {
    return {
        products: products(state, ownProps.match),
    };
};

const mapDispatchToProps: MapDispatchToProps<ITDispatchProps, IOwnProps> = (dispatch: any) => {
    return {
        toggleDescription: (id: string) => {
            dispatch(toggleProductVisibility(id));
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Products);
