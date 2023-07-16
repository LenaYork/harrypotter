import "./Card.css";

export const Card = ({img, name, species, house, dateOfBirth, wand, ancestry, patronus, actor}) => {
    return(
        <div className="card">
            <img src={img} alt="harry potter pic"/>
            <h3>{name}</h3>
            <p className="card-subtitle">Species: <span className="important">{species || "unknown"}</span></p>
            <p className="card-subtitle">House: <span className="important">{house || "unknown"}</span></p>
            <p className="card-subtitle">Date of birth: <span className="important">{dateOfBirth || "unknown"}</span></p>
            <p className="card-subtitle">Wand: <span className="important">{wand || "unknown"}</span></p>
            <p className="card-subtitle">Ancestry: <span className="important">{ancestry || "unknown"}</span></p>
            <p className="card-subtitle">Patronus: <span className="important">{patronus || "unknown"}</span></p>
            <p className="card-subtitle">Actor: <span className="important">{actor || "unknown"}</span></p>
        </div>
    )
}