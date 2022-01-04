export default function HomepageOut({login}){
    return (
        <div>
            <h1>YOURE NOT LOGGED in</h1>
            <button onClick={login} >Login</button>
        </div>
    )
}