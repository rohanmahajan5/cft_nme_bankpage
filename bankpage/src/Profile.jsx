

function Profile(props) {
return <>
    <div className="profile-card">
        <img
            className="profile-photo"
            src="/assets/profile.jpg"
            alt="Profile"
        />
        <h2 className="profile-name">{props.name}</h2>
        <ul className="profile-details">
            <li><strong>Hometown:</strong>{props.hometown}</li>
            <li><strong>Major:</strong>{props.major}</li>
        </ul>
    </div>
    </>

}

export default Profile