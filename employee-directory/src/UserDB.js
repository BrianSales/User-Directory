function UserDB(props){
    return (
        <tr>
            <td>
                <img src={props.picture} alt= {props.fullName + "'s picture"}></img>
            </td>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
            <td>{props.age}</td>
        </tr>
    )
}


export default UserDB;