

const Main = (props)=>{
    return(
        <div className={`main ${props.darkMode && "dark"}`}>
            <h1 className="main--title"> Func facts about React</h1>
            <ul className="main--facts">
                <li>Was first released in 2013</li>
                <li> Was orignally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}
export default Main