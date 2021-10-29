import Card from "../Card/Card";

const CardList = (props) => {
    return (
        <div className="container">
            <div className="row">
                <div className="col s12">
                {
                    props.movies.map((movie, i) => {
                        return (
                            <Card key={i} image={movie.poster_path} title={movie.title} overview={movie.overview} release={movie.release_date}/>
                        )
                    })
                }
                </div>
            </div>
        </div>
    )
    
}

export default CardList;