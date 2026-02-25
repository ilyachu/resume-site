import { resumeData } from '../data/resume';
import './Profile.css';

function Profile() {
  return (
    <section id="profile" className="container grid-12 section-pad">
      <div className="section-header">
        <span className="big-num">01</span>
        <span className="header-title">ОБО МНЕ</span>
      </div>
      <div className="profile-content">
        <p className="profile-lead">{resumeData.profile.lead}</p>
        <p>{resumeData.profile.text}</p>
      </div>
    </section>
  );
}

export default Profile;
