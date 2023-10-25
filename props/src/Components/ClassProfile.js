import React from "react";

//Class Component
class MyProfile extends React.Component {
    render(){
        return(
            <div>
                <h2> Hello My name is {this.props.text.name} , I'm From {this.props.city}</h2>
            </div>
        )};
}
export default MyProfile;