import React from 'react';

//Function Component
function Profile (props){
    return(
        <div>
            <h2>Hello  My Name is {props.name} and I am {props.text.age} Years old </h2>
        </div>
    )
}
export default Profile;