import React, { Component } from 'react';
import {Link, NavLink} from "react-router-dom";

interface OwnProps {
    categories: Array<Category>
}

class Menu extends Component<OwnProps> {
    render() {
        const { categories } = this.props
        return (
            <div className='menu'>
                {categories.map((c) => (
                    <NavLink to={'/' + c.id} key={c.name + c.id} activeClassName='active'>{c.name}</NavLink>
                ))}
            </div>
        );
    }
}

export default Menu