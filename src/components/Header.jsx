import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Logo } from './Logo';

const StyledNavLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Logo />
      <div
        style={{
          display: 'flex',
          gap: '10px',
          fontSize: '32px',
        }}
      >
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Movies</StyledNavLink>
      </div>
    </div>
  );
};
