import 'bootstrap/dist/css/bootstrap.css'
import DraftsIcon from '@material-ui/icons/Drafts';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import '../styles/login.module.css'
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import AccountBoxIcon from '@material-ui/icons/AccountBox';

const Login = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img src='ecovita.png' />
                    </a>
                    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mb-2 mb-lg-0 w-100 justify-content-end">
                            <li class="nav-item active">
                                <a class="nav-link" aria-current="page" href="#"><DraftsIcon className='mx-1' />info@ecovita.bio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><PhoneIphoneIcon className='mx-1' />+43 664 4585535</a>
                            </li>
                            <li class="nav-item">
                            </li>
                            <li class="nav-item">
                                <a>
                                    <button className='btn btn-success mx-2 d-flex'>
                                        <svg className='mx-1' xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
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
                    <div className='col-lg-6 align-self-center text-center'>
                        <img className="mx-auto" src='MonogramWei.png' width={'50%'} height="50%" />
                        <h1 className='mx-auto'>Hier beginnt der <br /> Handel von morgen…</h1>
                        <p className='mx-auto'>100 % digital, modern und zukunftsorientiert</p>
                    </div>
                    <div className={`col-lg-6 text-center align-self-end`}>
                        <img src='LogoFarbe.png' width={'251px'} height={'84px'} className="mx-auto" />
                        <h1 className='mx-auto heading1'>Hier gehts zum Onlineshop</h1>
                        <h4 className='my-3 mx-auto texts'>Loggen Sie sich ein um mit Ihrer Bestellung fortzufahren</h4>
                        <input type="email" id="form3Example3" class="icon form-control form-control-md my-4 mx-auto my-3 w-75"
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