import { badgeArr } from "./badgeArr";
import { useState } from "react";

function Search() {
    const [filteredBadges, setFilteredBadges] = useState([]);
    const [searchValue, setSearchValue] = useState([]);
    function handleSearch(event) {
        const value = event.target.value;
        const badges = badgeArr.filter(el => {
            return el.name.toLowerCase().includes(value.toLowerCase());
        });
        setFilteredBadges(badges);
        setSearchValue(value);
    }

    return (
    
        <div className="search-section">
            <div className="search-wrapper">
                <label for="search">Search Badges</label>
                <input type="search" id="search" onInput={handleSearch} />
            </div>
            <div className="badge-grid">
                {filteredBadges.length > 0 && searchValue.length > 0 ? filteredBadges.map(element => {
                    return (
                        <div className="grid-item">
                            <img src={element.link} alt={element.name} />
                            <div className="btn">
                            <button title={element.badge} onClick={ ()=> navigator.clipboard.writeText(element.badge)}>MD</button>
                            <button title={element.link} onClick={ () => navigator.clipboard.writeText(element.link)}>Link</button>
                            </div>
                        </div>
                    )
                }): badgeArr.map(element => {
                    return (
                        <div className="grid-item">
                            <img src={element.link} alt={element.name} />
                            <div className="btn">
                            <button className="mdBtn" title={element.badge} onClick={ ()=> navigator.clipboard.writeText(element.badge)}>MD</button>
                            <button className="linkBtn" title={element.link} onClick={ () => navigator.clipboard.writeText(element.link)}>Link</button>
                            </div>
                        </div>
                    )
                }) }
            </div>
        </div>
    )
}
export default Search;