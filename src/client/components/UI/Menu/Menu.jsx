import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.sass';

const LoaderTemplate = () => <div>Loading your menu...</div>;

const Menu = ({ menu }) => {
    const [offset, setOffset] = useState(0);
    const ITEMS_PER_PAGE = 12;

    const shouldDisplay = (item, i) =>
        i >= offset && i < offset + ITEMS_PER_PAGE;

    const Pagination = () => {
        let pageBtns = [];
        for (let i = 0; i <= menu.length; i += ITEMS_PER_PAGE) {
            pageBtns.push(<button onClick={() => setOffset(i)}>o</button>);
        }
        return pageBtns;
    };
    return menu ? (
        <div>
            <div>Search bar</div>
            <ul styleName="links-wrapper">
                {menu.filter(shouldDisplay).map(item => (
                    <li key={item.label} styleName="link">
                        <Link to={item.to}>{item.label}</Link>
                    </li>
                ))}
            </ul>
            <div>{menu.length > ITEMS_PER_PAGE && <Pagination />}</div>
        </div>
    ) : (
        <LoaderTemplate />
    );
};

export default Menu;
