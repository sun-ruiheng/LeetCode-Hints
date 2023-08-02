import { useEffect, useState } from "react";

import HintDetails from '../components/HintDetails';
import HintForm from '../components/HintForm';
import Search from '../components/Search';
import PageNav from '../components/PageNav';

const Home = () => {

    const [hints, setHints] = useState(null);
    const [offline, setOffline] = useState(true);
    const [page, setPage] = useState(1);
    const [hasNext, setHasNext] = useState(false);
    const [filtering, setFiltering] = useState(false);
    const [query, setQuery] = useState("");
    
    const fetchHints = async () => {
        const urlPrefix = filtering
                            ? 'https://leetcode-hints-backend.onrender.com/api/hints/query/'
                            : 'https://leetcode-hints-backend.onrender.com/api/hints?p=';
        let resp;
        if (filtering) {
            resp = await fetch(urlPrefix + query + "?p=" + page);
        } else {
            resp = await fetch(urlPrefix + page);
        }
        
        const json = await resp.json();

        let nextPage;
        if (filtering) {
            nextPage = await fetch(urlPrefix + query + "?p=" + (page + 1));
        } else {
            nextPage = await fetch(urlPrefix + (page + 1));
        }
        const nextJson = await nextPage.json();
        setHasNext(nextJson.length > 0);

        if (resp.ok) {
            setHints(json);
        }
        setOffline(false);
    };

    useEffect(() => {
        fetchHints();
    }, [page, filtering]);
    
    return (
        <div className="home">
            
            <div className='hints'>
                <Search setFiltering={setFiltering} query={query} setQuery={setQuery} resetPages={() => setPage(1)} />
                {offline && <p>Sorry, the backend hosting service goes offline after a while of inactivity. Give it a minute and retry!</p>}
                {hints && hints.map(hint => (
                    <HintDetails key={hint._id} hint={hint}/>
                ))}
                {hints && <PageNav hasNext={hasNext} page={page} setPage={setPage}/>}
            </div>
            <HintForm />
        </div>
    )
}

export default Home;