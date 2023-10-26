import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';

function Home() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div>
      {isLoggedIn ? (
        <h2>Save your contacts with pleasure!</h2>
      ) : (
        <h2>To get started, please log in!</h2>
      )}
    </div>
  );
}

export default Home;
