import "./SearchForm.css";

export const SearchForm = ({characterName, house, onClick, saveCharacterName, saveHouseName}) => {
    return(
        <section className="queries">
            <input 
                className="input"
                type="text" 
                placeholder={characterName}
                onChange={saveCharacterName}
            />
            
            <select 
                value={house}
                onChange={saveHouseName}
                className="select"
            >
                <option value="house" defaultValue className="disabled-house-option">Choose house</option>
                <option value="Gryffindor">Gryffindor</option>
                <option value="Hufflepuff">Hufflepuff</option>
                <option value="Ravenclaw">Ravenclaw</option>
                <option value="Slytherin">Slytherin</option>
            </select>
          
            <button 
                className="button" 
                onClick={onClick}>
                    Search
            </button>
        </section>
    )
}