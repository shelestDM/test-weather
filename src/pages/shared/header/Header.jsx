import React from 'react';
import GlobalSvgSelector from '../../../assets/icons/global/GlobalSvgSelector';
import s from './Header.module.scss';
import Select from 'react-select';
import { useTheme } from '../../../hooks/useTheme';


const Header = ({options, setCity}) => {

  const theme =  useTheme();

  const colorStyles = {
    control: (styles)=>({
      ...styles,
      backgroundColor: theme.theme ==='dark' ? '#4f4f4f' : 'rgba(71,147,255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100
    }),
    singleValue: (styles)=>({
      ...styles,
      color: theme.theme ==='dark' ? '#fff' : '#000'
    })
  }

  const changeTheme = () =>{
    theme.changeTheme(theme.theme  === 'light' ? 'dark' : 'light')
  }

  return (
    <header className={s.header}>
        <div className={s.wrapper}>
            <div className={s.logo} >
               <GlobalSvgSelector id={'header-logo'}></GlobalSvgSelector> 
            </div>
            <div className={s.title}>  React Weather </div>
        </div>
        <div className={s.wrapper}>
          <div className={s.change_theme} onClick={changeTheme}>
            <GlobalSvgSelector id={'change-theme'}></GlobalSvgSelector>
          </div>
          <Select 
          defaultValue={options[0]} 
          styles={colorStyles} 
          options={options} 
          onChange={(e)=>setCity(e.value)}
          />
        </div>
    </header>
  )
}

export default Header;