import { useState } from "react";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { motion } from "framer-motion";

const HintDetails = ({ hint }) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <motion.div className={"hint-details" + (expanded ? " expanded": '')}
            initial={{ visibility: 0, x: -80 }}
            whileInView={{ visibility: 1, x: 0 }}
            transition={{ duration: 0.02, type: "tween" }}
            onTap={() => setExpanded(!expanded)}
        >
            <h4>{hint.title}</h4>
            {expanded && <p className="body-text" 
                style={{fontSize: "1.1em", color: "rgb(65, 65, 65)", paddingBottom: "10px"}}
            >
                {hint.body} <br/><br/> -{hint.name ? hint.name : "Anonymous"}</p>}
            <span>Question #{hint.question}</span>
            <p>{formatDistanceToNow(new Date(hint.createdAt), { addSuffix: true })}</p>
        </motion.div>
    )
}

export default HintDetails;