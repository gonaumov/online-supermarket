import React, {ChangeEvent, Component} from 'react';
import {
    connect,
    MapDispatchToProps,
    MapDispatchToPropsNonObject,
    MapStateToProps,
    MapStateToPropsParam
} from "react-redux";
import products from "../selectors/products";
import {setSearchText, toggleProductVisibility} from "../actions/actions";

interface StateProps {
    search: string | null
}

interface TDispatchProps {
    setSearch: any
}
class SearchInput extends Component<StateProps & TDispatchProps> {
    render() {
        const {search, setSearch} = this.props

        return (
            <div className='searchinput'>
                <input type='text' value={search !== null ? search : ''}
                       onChange={(e: any ) => { e.preventDefault();setSearch(e.target.value)}}
                />
            </div>
        );
    }
}

const mapStateToProps: MapStateToProps<StateProps, {}, State> = (state: State) => ({search: state.search})

const mapDispatchToProps: MapDispatchToProps<TDispatchProps, {}> = (dispatch: any) => {
    return {
        setSearch: (search: string) => {
            dispatch(setSearchText(search))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);