import 'bootstrap/dist/css/bootstrap.css'
import DraftsIcon from '@material-ui/icons/Drafts';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, MenuItem, Select, TextField } from '@material-ui/core';


const Login = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg" style={{
                background: '#FFFFFF 0% 0% no-repeat padding-box',
                boxShadow: '0px 3px 6px #00000012',
                opacity: '1'
            }}>
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
                                    <a class="nav-link" aria-current="page" href="#" style={{ color: '#6B9864' }}><DraftsIcon className='mx-1' />info@ecovita.bio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#" style={{ color: '#6B9864' }}><PhoneIphoneIcon className='mx-1' />+43 664 4585535</a>
                                </li>
                                <li class="nav-item">
                                    {/* <a class="nav-link" href="#" style={{color: '#6B9864'}}>Pricing</a> */}
                                </li>
                                <li class="nav-item">
                                    {/* <a class="nav-link" href="#" style={{color: '#6B9864'}}>About</a> */}
                                    <button className='btn btn-success mx-2' style={{ borderRadius: '14px' }}>Neu registrieren</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <div className=''>
                <div className='row m-0'>
                    <div className='col-7 d-flex flex-column'>
                        <img className="mx-auto" src='MonogramWei.png' width={'50%'} height="50%" />
                        <h1 className='mx-auto'>Hier beginnt der <br /> Handel von morgen…</h1>
                        <p className='mx-auto'>100 % digital, modern und zukunftsorientiert</p>
                    </div>
                    <div className='col-5 d-flex flex-column'>
                        <img src='LogoFarbe.png' width={'251px'} height={'84px'} className="mx-auto"/>
                        <h1 className='mx-auto' style={{ color: '#226131', fontWeight: 'bold', fontSize: '40px' }}>Hier gehts zum Onlineshop</h1>
                        <h4 className='my-3 mx-auto' style={{fontSize: '29px'}}>Loggen Sie sich ein um mit Ihrer Bestellung fortzufahren</h4>
                        <input type="email" id="form3Example3" class="form-control form-control-md mx-auto my-3 w-75"
                            placeholder=" E-Mail" style={{
                                background: '#FFFFFF 0% 0% no-repeat paddingBox',
                                boxShadow: '0px 0px 8px #6b986443',
                                borderRadius: '14px',
                                height: '61px'
                            }} />
                        <input type="email" id="form3Example3" class="form-control form-control-md my-4 mx-auto w-75"
                            placeholder=" Password" style={{
                                background: '#FFFFFF 0% 0% no-repeat paddingBox',
                                boxShadow: '0px 0px 8px #6b986443',
                                borderRadius: '14px',
                                height: '61px'
                            }} />
                        <p className='mx-auto' style={{ color: '#6B9864', fontSize: '20px' }}>Passwort vergessen</p>
                        <button className='btn btn-success mx-auto w-75' style={{ borderRadius: '14px', height: '61px', fontSize: '30px' }}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;