import React, {Component} from "react";
import {
    connect,
    MapDispatchToProps,
    MapStateToProps,
    } from "react-redux";
import {Dispatch} from "redux";
import {setSearchText} from "../actions/actions";

interface IStateProps {
    search: string | null;
}

interface ITDispatchProps {
    setSearch: (searchValue: string) => void;
}

class SearchInput extends Component<IStateProps & ITDispatchProps> {
    public render() {
        const {search, setSearch} = this.props;
        const setSearchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
            e.preventDefault();
            setSearch(e.target.value);
        };

        return (
            <div className="searchinput">
                <input type="text" value={search !== null ? search : ""}
                       onChange={setSearchHandler}
                />
            </div>
        );
    }
}

const mapStateToProps: MapStateToProps<IStateProps, {}, State> = (state: State) => ({search: state.search});

const mapDispatchToProps: MapDispatchToProps<ITDispatchProps, {}> = (dispatch: Dispatch) => {
    return {
        setSearch: (search: string) => {
            dispatch(setSearchText(search));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);
