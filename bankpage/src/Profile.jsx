

function Profile(props) {
return <>
    <div className="profile-card">
        <img
            className="profile-photo"
            src={props.photo}
            alt="Profile"
        />
        <h2 className="profile-name">{props.name}</h2>
        <ul className="profile-details">
            <li><strong>Hometown:</strong>{props.hometown}</li>
            <li><strong>Education:</strong>{props.education}</li>
            <li><strong>Major:</strong>{props.major}</li>
        </ul>
    </div>
    </>

}

export default Profile