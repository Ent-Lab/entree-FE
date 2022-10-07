import { themeAtom } from '@/store/mode';

import { useRecoilState } from 'recoil';

import { BiMoon } from '@react-icons/all-files/bi/BiMoon';
import { BiSun } from '@react-icons/all-files/bi/BiSun';

import styled from 'styled-components';

export default function HeaderModeButton() {
  const [theme, setTheme] = useRecoilState(themeAtom);

  const toggleDarkAtom = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);

    localStorage.setItem('theme', newTheme);
  };

  return (
    <>
      {theme === 'dark' ?
        <StyledDarkMode size={'35px'} onClick={toggleDarkAtom} />
        :
        <StyledLightMode size={'35px'} onClick={toggleDarkAtom} />
      }
    </>
  );
};

const StyledDarkMode = styled(BiMoon)`
  cursor: pointer;
`;

const StyledLightMode = styled(BiSun)`
  cursor: pointer;
`;