import React, { useState } from "react";
function SecurityCheck() {
    const [secAnswer, setSecAnswer] = useState("");
    const secQuestion = "TODO" // TODO: get users question

    function changeSecAnswer(event) {
        setSecAnswer(event.target.value)
    }

    // TODO: check Security Answer with database and with specified username
    function confirmSecAnswer(event) {
        return event.target.value == ""; // returns boolean
    }


    function handleSubmit(event) {
        event.preventDefault();

        if (confirmSecAnswer) {
            /* TODO: move to the password reset page. no idea how
            setSecAnswer("");
            this.props.history.push({
                pathname: "/home/passwordReset",
                // data: this.state.formValues //TODO: what
            });
            */
        } else {
            alert("security answer wrong");
            setSecAnswer("");
        }
    }

    return (
        <div className="menu p-md-5 p-sm-0 min-vh-100">
            <div className="mx-auto py-5 bg-light loginreg w-25 rounded">
                <form onSubmit={handleSubmit} className="p-4">
                    <br />
                    <label>Your Security Question:  </label>
                    <input
                        value={secQuestion}
                        disabled={true}
                    />
                    <br />
                    <label>Enter Security Question Answer:  </label>
                    <input
                        value={secAnswer}
                        onChange={changeSecAnswer}
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

export default SecurityCheck;
