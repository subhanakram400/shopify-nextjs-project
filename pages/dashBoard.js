import 'bootstrap/dist/css/bootstrap.css'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import TextField from '@material-ui/core/TextField';
import { ButtonGroup, ThemeProvider } from '@material-ui/core';
import textFieldTheme from '../styles/textFieldTheme.js'
import SearchIcon from '@material-ui/icons/Search';
import Button from "@material-ui/core/Button"




const dashBoard = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src='LogoFarbe.png' width={251} height={84} />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav" style={{ marginTop: '-13px !important' }}>
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#" style={{ fontSize: '20px' }}>Shop</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link blackLink" href="#">Bestellhistorie</a>
                            </li>
                        </ul>
                        <div className='d-flex justify-content-end w-100'>
                            <ul className='navbar-nav'>
                                <label>
                                    <svg className='my-2' xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                    </svg>
                                </label>
                                <select class="form-select form-select-lg mb-3" style={{ border: 'none' }} aria-label="">
                                    <option selected>
                                        Open this select menu
                                    </option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='bg w-100 h-100'>
                <div className="row m-0 p-3">
                    <div className="col-12 d-flex justify-content-between">
                        <ThemeProvider theme={textFieldTheme}>
                            <TextField className='w-50' placeholder='Artikel durchsuchen' variant="outlined"
                                InputProps={{
                                    startAdornment: (
                                        <SearchIcon className='mx-2' style={{ color: '#575757' }} />
                                    )
                                }}
                            />
                        </ThemeProvider>
                        <div className="d-flex align-self-center">
                            <Button className='chatBtn  mx-4' size='large'>
                                <svg className='mx-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
                                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
                                </svg>
                                Mit Lieferanten chatten
                            </Button>
                            <ButtonGroup size="large" className='groupBtn'>
                                <Button className='d-flex shoppingBtn '>
                                    <svg className='mx-2' xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart2" viewBox="0 0 16 16">
                                        <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
                                    </svg>
                                    Warenkorb
                                </Button>
                                <Button className='zeroBtn '>0</Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
            </div>
            <div color='white'>
                <div className='row m-0'>
                    <div className='col-4'>
                        <div className='container my-5'>
                            <img className='' src='cardImg.jpeg' width={346} height={192} style={{ borderRadius: '16px' }}>
                            </img>
                            <div className='centered w-100 mb-0'>
                            <p className=''>Monatsspecial: Zucchini</p>
                            <p className='font12'>Bei unseren Landwirten startet die Ernte</p>
                            </div>
                        </div>
                        <div className='col-8'></div>
                    </div>
                </div>
            </div>
        </>
    )
};
export default dashBoard;