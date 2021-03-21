const Navbar = () => {
    return (  
        <>
        <div>
            <div>
                <h1>Todo</h1>
                <h2> - Don't look at how it looks but how it works</h2>
                <a href="/"> Home </a>
                <a href="/create"> Add task </a>
            </div>
        </div>
        <style jsx>{`
            h1,
            h2 {
                display: inline;
                margin: 2px;
            }

            a {
                float: right;
                margin-right: 2em;
                margin-top: 0.5em;
            }
        `}</style>
        </>
    );
}

export default Navbar;