import 'bootstrap/dist/css/bootstrap.css'
import DraftsIcon from '@material-ui/icons/Drafts';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import '../styles/login.module.css'
import { ownerWindow } from '@material-ui/core';


const Login = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarExample01"
                        aria-controls="navbarExample01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i class="fas fa-bars"></i>
                        {/* ECOVTIC */}
                    </button>
                    <div class="collapse navbar-collapse d-flex justify-content-between" id="navbarExample01">
                        <img src='ecovita.png' />
                        <div>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item active">
                                    <a class="nav-link" aria-current="page" href="#"><DraftsIcon className='mx-1' />info@ecovita.bio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><PhoneIphoneIcon className='mx-1' />+43 664 4585535</a>
                                </li>
                                <li class="nav-item">
                                </li>
                                <li class="nav-item">
                                    <button className='btn btn-success mx-2'>Neu registrieren</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className=''>
                <div className='row m-0'>
                    <div className='col-lg-6 align-self-center text-center'>
                        <img className="mx-auto" src='MonogramWei.png' width={'50%'} height="50%" />
                        <h1 className='mx-auto'>Hier beginnt der <br /> Handel von morgen…</h1>
                        <p className='mx-auto'>100 % digital, modern und zukunftsorientiert</p>
                    </div>
                    <div className={`col-lg-6 text-center align-self-end`}>
                        <img src='LogoFarbe.png' width={'251px'} height={'84px'} className="mx-auto"/>
                        <h1 className='mx-auto heading1'>Hier gehts zum Onlineshop</h1>
                        <h4 className='my-3 mx-auto' style={{fontSize: '29px'}}>Loggen Sie sich ein um mit Ihrer Bestellung fortzufahren</h4>
                        <input type="email" id="form3Example3" class="form-control form-control-md my-4 mx-auto my-3 w-75"
                            placeholder=" E-Mail" />
                        <input type="email" id="form3Example3" class="form-control form-control-md my-4 mx-auto w-75"
                            placeholder=" Password" />
                        <p className='mx-auto' style={{ color: '#6B9864', fontSize: '20px' }}>Passwort vergessen</p>
                        <button className='btn mx-auto w-75 my-2 loginBtn'>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;