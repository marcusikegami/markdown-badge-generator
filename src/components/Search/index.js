import { badgeArr } from "./badgeArr";
import { useState } from "react";

function Search() {
    const [filteredBadges, setFilteredBadges] = useState([]);
    function handleSearch(event) {
        const value = event.target.value;
        const badges = badgeArr.filter(el => {
            return el.name.toLowerCase().includes(value.toLowerCase());
        });
        setFilteredBadges(badges);
    }

    return (
    <section>
        <div className="searchWrapper">
            <label for="search">Search Badges</label>
            <input type="search" id="search" onInput={handleSearch} />
        </div>
        <div className="badge-grid">
            {filteredBadges.map(element => {
                return (
                    <div>
                        <p>{element.name}</p>
                        <img src={element.link} alt={element.name} />
                        <p>{element.badge}</p>
                    </div>
                )
            })}
        </div>
    </section>
    )
}
export default Search;