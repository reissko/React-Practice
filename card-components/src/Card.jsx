import profilePic from './assets/catPicture.png'

function Card() {
    return(
        <div className="card">
            <img className="card-image" alt="profile picture" src={profilePic}></img>
            <h2 className="card-title">Reiss Oliveros</h2>
            <p className="card-text">I am a student of computer science at University of Portland</p>
        </div>
    );
}

export default Card