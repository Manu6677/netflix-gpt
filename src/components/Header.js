import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO_NETFLIX } from '../utils/constants';

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  // console.log(user);

  const handleSignOut = () => {
    console.log('signout');
    signOut(auth)
      .then(() => {
        console.log(auth);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.message, error.code);
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // console.log(user);
      if (user) {
        // console.log('Body Page');
        // console.log(user);
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid: uid, displayName: displayName, email: email, photoURL: photoURL, }));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });
    // Unsubscribe when the component is unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen bg-gradient-to-b from-black py-3 z-30 flex justify-between overflow-x-hidden">
      <img
        className="w-44"
        src= {LOGO_NETFLIX}
        alt="netflix-logo"
      />

      {user && (
        <div className="p-4 gap-4 flex">
          <img src={user?.photoURL} alt="USER_IMG" className="w-12 h-12" />
          <button
            className="font-bold text-xl text-white"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
