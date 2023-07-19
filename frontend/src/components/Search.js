import { useState } from "react"

const Search = ({setHints}) => {
    const [query, setQuery] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();

        const resp = await fetch('https://leetcode-hints-backend.onrender.com/api/hints/query/' + query);
        const json = await resp.json();

        if (!resp.ok) {
            setError(json.error);
            console.log("There was some error with response when searching up this question.");
        } else {
            setQuery('');
            setError(null);
            setHints(json);
            console.log("Query results returned successfully.");
        }
    }

    const handleReset = async e => {
        e.preventDefault();

        const resp = await fetch('/api/hints/');
        const json = await resp.json();

        if (!resp.ok) {
            setError(json.error);
            console.log("There was some error with response when resetting results.");
        } else {
            setQuery('');
            setError(null);
            setHints(json);
            console.log("Reset the filter successfully.");
        }
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
                
                {error && <div className="error">{error}</div>}
            </form>

            <button onClick={handleReset} class="reset-filter">Reset filter</button>
        </div>
        
    )
}

export default Search;