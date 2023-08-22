import { React, useState } from "react";

const Lobby = () => {

    const [email, setEmail] = useState("");
    const [room, setRoom] = useState("");

    const handleSubmit = () => {

    }

    return (
        <div>
            <h1>Lobby</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email Id: </label>
                <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} /><br />
                <label htmlFor="room">Room Number: </label>
                <input type="text" id="room" value={room} onChange={e => setRoom(e.target.value)} /><br />
                
            </form>
        </div>
    );
}

export default Lobby;