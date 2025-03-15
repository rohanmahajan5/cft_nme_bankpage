import Profile from './Profile.jsx'

function Team() {
    return <>
    <section className="team_container">
        <Profile
            name="Allison Jin"
            photo="/assets/allison_profile.png"
            hometown=" New York, NY"
            education=" Cornell University"
            major=" Operations Research"
        />
        <Profile
            name=" Rohan Mahajan"
            hometown=" New York, NY"
            education=" Cornell University"
            major=" Computer Science"
        />
    </section>
        
    
    </>


}

export default Team

/*
*/ 