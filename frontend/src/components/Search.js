import { useEffect } from "react";

const Search = ({ setFiltering, query, setQuery, resetPages }) => {

    const handleSubmit = async e => {
        e.preventDefault();
        resetPages();
        setFiltering(true);
    }

    return (
        <div className='filter-area'>
            <form className="search" onSubmit={handleSubmit}>
                <h4>Filter questions by number</h4>

                <div className="query-part">
                    <input
                        type="number"
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                    />
                    <button>Filter</button>
                </div>
            </form>

            <button onClick={() => {
                setFiltering(false);
            }} className="reset-filter">Reset filter</button>
        </div>
        
    )
}

export default Search;