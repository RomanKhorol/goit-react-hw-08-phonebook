import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/authOperation';
import { getUserName } from '../../redux/selectors';

import { Button } from '../UserMenu/UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  return (
    <div>
      <p>Welcome to your contacts, {name}</p>
      <Button type="button" onClick={() => dispatch(logout())}>
        Logout
      </Button>
    </div>
  );
};
export default UserMenu;
