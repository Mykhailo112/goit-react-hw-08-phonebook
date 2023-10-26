import { useSelector } from 'react-redux';
import {
  selectIsFetchingCurrentUser,
  selectIsLoggedIn,
  selectUser,
} from 'redux/auth/selectors';
import { selectFilterValue } from 'redux/filter/selectors';

export const useFetchingCurrentUser = () =>
  useSelector(selectIsFetchingCurrentUser);
export const useFilterValue = () => useSelector(selectFilterValue);
export const useIsLoggedIn = () => useSelector(selectIsLoggedIn);
export const useUser = () => useSelector(selectUser);
