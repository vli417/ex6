import styles from './components.module.css'

const UserProfileCard = ({user}) => {
    return(
        <div className={styles.UserProfile}>
            
            <p>Email: {user?.email}</p>
        </div>
    );
};

export default UserProfileCard;