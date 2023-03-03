import React, { useState } from "react";
function UsernameCheck() {
    const [user, setUser] = useState("");
    
    function changeUser(event) {
        setUser(event.target.value)
    }


    // TODO: check username with database
    function confirmUser(event) {
        return event.target.value == ""; // returns boolean
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (confirmUser) {
            /* TODO: move to the security check page. no idea how 
            this.history.push({
                pathname: "/home/securityCheck",
                // data: this.state.formValues //TODO: what
            }); */
        } else {
            alert("username does not exist");
            setUser("");
        }
    } 

    return (
        <div className="menu p-md-5 p-sm-0 min-vh-100">
            <div className="mx-auto py-5 bg-light loginreg w-25 rounded">
                <form onSubmit={handleSubmit} className="p-4">
                    <label>Enter Username: </label>
                    <input
                        value={user}
                        onChange={changeUser}
                        className="ml-3"
                    />
                    <br />
                    <br />
                    <input type="submit" value="Submit" className="btn btn-primary" />
                </form>
            </div>
        </div>
    );
}

export default UsernameCheck;
