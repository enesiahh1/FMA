export default function Hero(props) {
    return (
        <>
            <main className="row">
                <div className="col">
                    <h1 className="text-center">{props.title}</h1>
                    <div>
                        <img className="img-xxl" src={"assets/images/" + props.photo} alt="Summer" />
                    </div>
                </div>
            </main>
        </>
    )
}