import "./main.css"

const Main =()=>{
    const handleLogout =()=>{
        localStorage.removeItem("token");
        window.location.reload()
    }
    return(
        <div className="main_container">
            <div className="navbar">
                <h1>Oky Bye</h1>
                <button className="white_btn" onClick={handleLogout}>Log Out</button>
            </div>
        </div>
    )
}

export default Main;