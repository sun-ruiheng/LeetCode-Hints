import { useEffect, useState } from "react";

import HintDetails from '../components/HintDetails';
import HintForm from '../components/HintForm';
import Search from '../components/Search';

const Home = () => {

    const [hints, setHints] = useState(null);
    
    const fetchHints = async () => {
        const resp = await fetch('https://leetcode-hints-backend.onrender.com/api/hints');
        const json = await resp.json();
        if (resp.ok) {
            setHints(json);
        }
    };

    useEffect(() => {
        fetchHints();
    }, []);
    
    return (
        <div className="home">
            
            <div className='hints'>
                <Search setHints={setHints} />
                {hints && hints.map(hint => (
                    <HintDetails key={hint._id} hint={hint}/>
                ))}
            </div>
            <HintForm />
        </div>
    )
}

export default Home;