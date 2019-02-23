import React, { Component } from "react";
import { NavLink } from "react-router-dom";

interface IOwnProps {
    categories: Category[];
}

class Menu extends Component<IOwnProps> {
    public render() {
        const { categories } = this.props;
        return (
            <div className="menu">
                {categories.map((c) => (
                    <NavLink to={"/" + c.id} key={c.title + c.id} activeClassName="active">{c.title}</NavLink>
                ))}
            </div>
        );
    }
}

export default Menu;
