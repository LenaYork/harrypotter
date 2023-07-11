import "./Input.css";

export const Input = ({placeholder, characterName, house, onChange, onClick}) => {
    return(
        <div className="input-container">
            <input 
                className="input"
                type="text" 
                placeholder={placeholder}
                onChange={onChange}
                
            />
            <button 
                className="button" 
                onClick={onClick}>
                    Search
            </button>
        </div>
    )
}