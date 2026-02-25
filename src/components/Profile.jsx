import { resumeData } from '../data/resume';
import './Profile.css';

function Profile() {
  return (
    <section id="profile" className="section profile">
      <div className="container">
        <div className="grid">
          <div className="profile-title-col">
            <h2 className="section-title">Обо мне</h2>
          </div>
          <div className="profile-content-col">
            <p className="profile-text">{resumeData.profile}</p>
            <div className="profile-decoration">
              <span className="profile-decoration-line"></span>
              <span className="profile-decoration-dot"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Profile;
