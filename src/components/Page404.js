const Error = () => {
    return ( 
        <>
        <div>
            <h1 id="title"><span>ERROR</span> 404 PAGE<span>!</span></h1>
        </div>
        <style jsx>{`
            #title {
                font-size: 5em;
            }

            span {
                color: red;
            }
        `}</style>
        </>
    );
}

export default Error;