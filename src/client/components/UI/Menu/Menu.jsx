import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menu.sass';

const LoaderTemplate = () => <div>Loading your menu...</div>;

const Menu = ({ menu }) => {
    const [offset, setOffset] = useState(0);
    const [filter, setFilter] = useState('');
    const ITEMS_PER_PAGE = 12;

    const changeFilter = e => {
        setFilter(e.target.value);
    };

    const shouldDisplay = (item, i) =>
        i >= offset && i < offset + ITEMS_PER_PAGE;

    const displayedItems = () => menu.filter(m => m.label.includes(filter));

    const Pagination = () => {
        let pageBtns = [];
        for (let i = 0; i <= displayedItems().length; i += ITEMS_PER_PAGE) {
            pageBtns.push(
                <button
                    styleName="pagination_item"
                    key={`menu-pagination-${i}`}
                    onClick={() => setOffset(i)}
                />
            );
        }
        return pageBtns;
    };

    if (!menu) {
        return <LoaderTemplate />;
    } else {
        return (
            <div styleName="wrapper">
                <div styleName="searchbar_wrapper">
                    <input
                        type="text"
                        value={filter}
                        onChange={changeFilter}
                        placeholder="search"
                    />
                </div>
                <ul styleName="links_wrapper">
                    {displayedItems()
                        .filter(shouldDisplay)
                        .map(item => (
                            <li key={item.label}>
                                <Link
                                    styleName="link"
                                    style={{ '--color': item.color }}
                                    to={item.to}
                                >
                                    <span styleName="link_text">
                                        {item.label}
                                    </span>
                                </Link>
                            </li>
                        ))}
                </ul>
                <div styleName="pagination_wrapper">
                    {menu.length > ITEMS_PER_PAGE && <Pagination />}
                </div>
            </div>
        );
    }
};

export default Menu;
