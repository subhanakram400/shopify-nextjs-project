import DraftsIcon from '@material-ui/icons/Drafts';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import '../styles/login.module.css'
import { ThemeProvider } from '@material-ui/core';
import {textFieldTheme} from '../styles/textFieldTheme';
import { TextField } from '@material-ui/core';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
const Login = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src='ecovita.png' />
                    </a>
                    <button style={{background: 'black'}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 w-100 justify-content-end">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#"><DraftsIcon className='mx-1' />info@ecovita.bio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"><PhoneIphoneIcon className='mx-1' />+43 664 4585535</a>
                            </li>
                            <li>
                            <select class="form-select form-select-lg mb-3" style={{ border: 'none' }} aria-label="">
                                    <option selected>
                                        Open this select menu
                                    </option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </li>
                            <li className="nav-item">
                                <a>
                                    <button className='btn btn-success mx-2 d-flex'>
                                        <svg className='mx-1 bi bi-person' xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                        </svg>
                                        Neu registrieren</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className=''>
                <div className='row m-0'>
                    <div className='col-lg-6 p-0' style={{height: 'auto'}}>
                        <div className='backgrounImg'>
                        <img className="mx-auto d-flex justify-content-center" src='MonogramWei.png' width={200} height={200} />
                        <h1 className='mx-auto d-flex font75 justify-content-center'>Hier beginnt der <br /> Handel von morgen…</h1>
                        <p className='mx-auto font36 d-flex justify-content-center'>100 % digital, modern und zukunftsorientiert</p>
                        </div>
                    </div>
                    <div className={`col-lg-6 align-self-center d-flex flex-column justify-content-center marginTop`}>
                        <img src='LogoFarbe.png' width={'251px'} height={'84px'} className="mx-auto" />
                        <h1 className='mx-auto heading1 text-center' style={{maxWidth: ''}}>Hier gehts zum Onlineshop</h1>
                        <h4 className='my-3 d-flex align-self-center texts' style={{maxWidth: '75%'}}>Loggen Sie sich ein um mit Ihrer Bestellung fortzufahren</h4>
                        <ThemeProvider theme={textFieldTheme}>
                            <TextField className='w-75 mx-auto' placeholder='E-Mail' variant="outlined"
                            // inputProps={{
                            //     style:{
                            //         color: '#70995F !important',
                            //         opacity: '100% !important',
                            //         fontWeight: 'bold'
                            //     }
                            // }}
                                InputProps={{
                                    startAdornment: (
                                        <MailOutlineOutlinedIcon fontSize='' className='mx-2' style={{ color: '#575757' }} />
                                    )
                                }}
                            />
                        </ThemeProvider>
                        <ThemeProvider theme={textFieldTheme}>
                            <TextField className='w-75 my-4 mx-auto' placeholder='Passwort' variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <svg className='mx-2 bi bi-lock' xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="#575757" viewBox="0 0 16 16">
                                            <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z" />
                                        </svg>
                                    )
                                }}
                            />
                        </ThemeProvider>
                        <p className='mx-auto' style={{ color: '#6B9864', fontSize: '20px' }}>Passwort vergessen</p>
                        <button className='btn mx-auto w-75 my-2 loginBtn'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;