import { useState, useEffect } from 'react';

export default function Editor() {
    const [document, setDocument] = useState({});

    return (
        <div className="Editor">
            <input type="text"/>
            <input type="submit" />
        </div>
    )
}