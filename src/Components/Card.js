const Card = (Props) => {
    return (
        <>
            
            <div className="card">
                <div className ="card-container">
                    <div className="card-body">
                        <h1><u><i>{Props.title}</i></u></h1>
                        <p><b>{Props.description}</b></p>
                    </div>
                    <a href="{Props.link}" className="btn">Watch Now</a>
                </div>
            </div>
        </>
    )
}

export default Card;


