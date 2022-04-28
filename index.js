const page = (
    <div>
        <img src="./react-logo.png" width="40px"></img>
        <h1>Fun Facts about React</h1>
        <ul>
            <li>First released in 2013</li>
            <li>Originally created by John Walke</li>
            <li>Over 100K stars on Github</li>
            <li>Maintained by Meta</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

ReactDOM.render(
    page,
    document.getElementById('root')
)