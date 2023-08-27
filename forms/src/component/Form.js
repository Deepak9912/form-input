const Forms = (props) => {
    return (
        <form>
            <div>
                <label htmlfor="name">Your Name</label>
                <input type="text" id="name" placeholder="type here" />

            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default Forms;