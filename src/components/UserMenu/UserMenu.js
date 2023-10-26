import { useDispatch } from 'react-redux';
import { userSignOut } from 'redux/auth/operations';
import { useIsLoggedIn, useUser } from 'hooks/hooks';

export const UserMenu = () => {
  const isLoggerIn = useIsLoggedIn();
  const user = useUser();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userSignOut());
  };
  return (
    <>
      {isLoggerIn && (
        <div>
          <p>{user.name}</p>
          <button type="button" onClick={handleLogout}>
            Log out
          </button>
        </div>
      )}
    </>
  );
};
