export default function Homepage({ logout }){
    return (
        <div>
            <h1>Youre logged in</h1>
            <button onClick={logout}>logout</button>
        </div>
    )
}