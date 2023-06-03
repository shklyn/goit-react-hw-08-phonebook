import { useAuth } from 'hooks';
import { Nav, LogoLink, HomeLink, ContactsLink } from './Navigation.styled';
import { useLocation } from 'react-router';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  return (
    <Nav>
      {location.pathname === '/' ? (
        <LogoLink>
          PhoneBook
        </LogoLink>
      ) : (
        <HomeLink to="/">Home</HomeLink>
      )}
      {isLoggedIn && <ContactsLink to="/contacts">Contacts</ContactsLink>}
    </Nav>
  );
};