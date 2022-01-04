import { useState, useEffect } from 'react'
export default function NotesList(){
    const [notes, setNotes] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/notes')
        .then(res => res.json())
        .then(log => {
            setNotes(log)
            console.log(log)
        })
    },[])
    return (
        <div>
            {
                notes.map(note => {
                    console.log(note.content)
                    return(
                        <h3>{note.content}</h3>
                    )
                })
            }
        </div>
    )
}