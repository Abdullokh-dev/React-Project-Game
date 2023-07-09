import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {useState} from "react";

interface Props {
    onClick: () => void;
}

function Like({onClick}: Props ) {
    const [status, setStatus] = useState(false);
    const toggle = () => {
        setStatus(!status)
        onClick();
    }

    if(status) return <AiFillHeart color={'#ff6b81'} size={90} onClick={toggle} />
    return <AiOutlineHeart size={90} onClick={toggle} />
}

export default Like;
