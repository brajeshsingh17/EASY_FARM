import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../asset/Icons/Logos/png/ColorLogo.png';
import addToBasket from '../../asset/Icons/addToBasket.gif'
import { Button } from '@mui/material';
import { logout } from '../../modules/reducer/authReducer';
import { useDispatch, useSelector } from 'react-redux';
import { isUserAuth, userRole, userData } from '../../modules/selectors/auth';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Logout from '@mui/icons-material/Logout';

const Header = () => {
    const isAuth = useSelector(isUserAuth);
    const user = useSelector(userData);
    const role = useSelector(userRole);
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logoutUser = () => {
        dispatch(logout({}));
        handleClose()
    }

    return (
        <>

            {/* <div style={footerStyles} className='flex justify-between px-5 focus:outline-none text-white bg-gradient-to-r from-purple-400 to cyan-500'> */}
            <div className='flex justify-between px-5 focus:outline-none text-black bg-gradient-to-b from-gray-400 to-white '>
                <div><Link to='/home'><img src={logo} alt="" className='w-48' /></Link></div>
                <div className='flex py-5 justify-between w-3/5'>
                    <div><li className='list-none drop-shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-xl p-2'><Link className='no-underline' to='/home'>Home</Link></li></div>
                    <div><li className='list-none drop-shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-xl p-2'><Link className='no-underline' to='/contactUs'>Contact us</Link></li></div>
                    <div><li className='list-none drop-shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-xl p-2'><Link className='no-underline' to='/aboutUs'>About us</Link></li></div>
                    <div><li className='list-none drop-shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-xl p-2'><Link className='no-underline' to='/view'>Products</Link></li></div>
                    <div><li className='list-none drop-shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-xl p-2'><Link className='no-underline' to='/rentproduct'>Rent Products</Link></li></div>
                    <div><li className='list-none drop-shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-xl p-2'><Link className='no-underline' to='/myorders'>Orders</Link></li></div>
                    {role === 'seller' ? <div><li className='list-none drop-shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-xl p-2'><Link className='no-underline' to='/ViewProducts'>My Produts</Link></li></div> : null}
                </div>
                <div className='flex py-5 text-black'>
                </div>
                <div className='flex justify-center items-center'><Link to='/cart'><img src={addToBasket} className='w-16 drop-shado-lg' alt="logo" /></Link></div>
                {/* { isAuth && <div className='flex justify-center items-center'><li className='list-none drop-shadow-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300 rounded-xl'><Link to="/" className='no-underline'><Button onClick={logoutUser}>Logout</Button></Link></li></div> }
                 */}
                {
                    isAuth && <>
                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                            <div >
                                <>{user.name}</>
                            </div>
                            <Tooltip title="Account settings">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Avatar sx={{ width: 32, height: 32 }}>{user.name[0]}</Avatar>
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem onClick={logoutUser}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </>
                }
            </div>

        </>
    )
}
export default Header
