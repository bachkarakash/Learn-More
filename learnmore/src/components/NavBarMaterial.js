import React from 'react';
import Box from '@material-ui/core/Box';
import { purple } from '@material-ui/core/colors';
import { NavMenu, NavItem } from '@mui-treasury/components/menu/navigation';
import { usePointNavigationMenuStyles } from '@mui-treasury/styles/navigationMenu/point';

const NavbarMaterial = React.memo(
  function PointNavigationMenu() {
    const [index, setIndex] = React.useState(1);
    const handleClick = i => (e) => {
      e.preventDefault();
      setIndex(i);
    };
    return (
      <Box height={56} display={'flex'}>
        
          <NavMenu useStyles={usePointNavigationMenuStyles}>
            <NavItem as={'div'} active={index === 0} to='/' onClick={handleClick(0)}>
              Home
            </NavItem>
            <NavItem as={'div'} active={index === 1} to="/datastructres" onClick={handleClick(1)}>
              Shops
            </NavItem>
            <NavItem as={'div'} active={index === 2} onClick={handleClick(2)}>
              Portfolio
            </NavItem>
            <NavItem as={'div'} active={index === 3} onClick={handleClick(3)}>
              Blog
            </NavItem>
          </NavMenu>
        
      </Box>
    );
  }
);

export default NavbarMaterial;