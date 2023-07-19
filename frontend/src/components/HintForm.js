import { useState } from "react"

const HintForm = () => {

    const [title, setTitle] = useState("");
    const [question, setQuestion] = useState("");
    const [body, setBody] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async e => {
        e.preventDefault();

        const hint = {question, title, body, name};

        const resp = await fetch('/api/hints', {
            method: 'POST',
            body: JSON.stringify(hint),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await resp.json();

        if (!resp.ok) {
            setError(json.error);
            console.log("There was some error with response when posting a new hint");
        } else {
            setTitle('');
            setQuestion('');
            setBody('');
            setName('');
            setError(null);
            console.log("new hint added: ", json);
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Contribute a useful hint</h3>

            <label>For question number:</label>
            <input
                type="number"
                onChange={e => setQuestion(e.target.value)}
                value={question}
            />
            <label>Hint title:</label>
            <input
                type="text"
                onChange={e => setTitle(e.target.value)}
                value={title}
            />
            <label>Hint details:</label>
            <textarea
                type="text"
                onChange={e => setBody(e.target.value)}
                value={body}
            />
            <label>Your name (optional):</label>
            <input
                type="text"
                onChange={e => setName(e.target.value)}
                value={name}
            />

            <button>Submit hint</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default HintForm;