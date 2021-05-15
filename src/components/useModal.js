import { useState } from "react";

const useModal = () => {
    const [visible, setVisible] = useState(false);
    const [id, setId] = useState(0);
    function toggle(id) {
        setVisible(!visible);
        setId(id);
    }
    return { toggle, visible, id };
}

export default useModal;