import "./Card.css";

export const Card = ({img, name, house, dateOfBirth, wand, ancestry, actor}) => {
    return(
        <div className="card">
            <img src={img} alt="harry potter pic"/>
            <h3>{name}</h3>
            <p className="card-subtitle">House: <span className="important">{house}</span></p>
            <p className="card-subtitle">Date of birth: <span className="important">{dateOfBirth}</span></p>
            <p className="card-subtitle">Wand: <span className="important">{wand}</span></p>
            <p className="card-subtitle">Ancestry: <span className="important">{ancestry}</span></p>
            <p className="card-subtitle">Actor: <span className="important">{actor}</span></p>
        </div>
    )
}