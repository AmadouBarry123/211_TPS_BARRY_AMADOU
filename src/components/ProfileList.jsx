import ProfileSection from "./ProfileSection";
import profile from "../assets/profile";


function ProfileList(){
    const profileElement = profile.map((pro) =>(
        <ProfileSection
            image={pro.image}
            nom={pro.nom}
            description={pro.description}
            post={pro.post}
            followers={pro.followers}
            following={pro.following}
        />
    ))

    return(
        <div class="profile">
            {profileElement}
        </div>
    )

}

export default ProfileList