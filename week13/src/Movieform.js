import React, { useState } from 'react'
import React, {Component} from 'react'
const Create = () => {
    const [title, setTitle] = useState('yo');
    return (
        <div className="create">
            <h2>Add a Review</h2>
            <form>
                <label>Text Review</label>
                <input
                    type="text"
                    required
                    />
                <label>Star rating out of 5</label>
                <textarea
                    required
                ></textarea>
                <label>Movie Title</label>
                <select>
                    <option value="Avatar">Avatar</option>
                    <option value="Tron">Tron</option>
                    <option value="Zombieland">Zombieland</option>
                    value={title}
                </select>

                <button>Post Review</button>
                    
            </form>
        </div>
    );
}

export default Create;

