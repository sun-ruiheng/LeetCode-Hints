import { useEffect, useState } from "react";

import HintDetails from '../components/HintDetails';
import HintForm from '../components/HintForm';
import Search from '../components/Search';

const Home = () => {

    const [hints, setHints] = useState(null);
    const [offline, setOffline] = useState(true);
    const [page, setPage] = useState(1);
    
    const fetchHints = async () => {
        const resp = await fetch('https://leetcode-hints-backend.onrender.com/api/hints'
                        + "?p=" + page);
        const json = await resp.json();
        if (resp.ok) {
            setHints(json);
        }
        setOffline(false);
    };

    useEffect(() => {
        fetchHints();
    }, []);
    
    return (
        <div className="home">
            
            <div className='hints'>
                <Search setHints={setHints} />
                {offline && <p>Sorry, the backend hosting service goes offline after a while of inactivity. Give it a minute and retry!</p>}
                {hints && hints.map(hint => (
                    <HintDetails key={hint._id} hint={hint}/>
                ))}
            </div>
            <HintForm />
        </div>
    )
}

export default Home;