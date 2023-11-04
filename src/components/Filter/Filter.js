export const Filter = ({ findName }) => {
    return (
        <div>
             <p>Find contacts by name</p>
            <input onChange={evt=>findName(evt.target.value)}/>
        </div>
    )
}