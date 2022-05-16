import { badgeArr } from "./badgeArr";

function Search() {
    function handleSearch(event) {
        const value = event.target.value;
        const badges = badgeArr.filter(el => {
            el.toLowerCase
        })
    }

    return (
        <div className="searchWrapper">
            <label for="search">Search Badges</label>
            <input type="search" id="search" onInput={handleSearch} />
        </div>
    )
}
export default Search;