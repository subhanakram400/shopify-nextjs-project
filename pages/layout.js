import Link from 'next/link'
import { useState } from "react";
import styles from "../styles/layout.module.css";
// import styles from '../styles/Home.module.css'
import DraftsIcon from '@material-ui/icons/Drafts';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import { MenuOpen } from '@material-ui/icons';

export default function Layout({ children }) {

    const [isOpen, setIsOpen] = useState(false);
    const openMenu = () => setIsOpen(!isOpen);
    return <>
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <Link href='/layout#'>
                    <img src='ecovita.png' />
                </Link>
                <ul className={isOpen === false ?
                    styles.navmenu : styles.navmenu + ' ' + styles.active}>
                    <li className={styles.navitem}>
                        <Link href='/layout#'>
                            <a className="nav-link" aria-current="page" href="#"><DraftsIcon className='mx-1' />info@ecovita.bio</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/layout#'>
                            <a className="nav-link" href="#"><PhoneIphoneIcon className='mx-1' />+43 664 4585535</a>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/layout#'>
                            <select class="form-select form-select-lg" aria-label="">
                                <option selected>
                                    Open this select menu
                                </option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </Link>
                    </li>
                    <li className={styles.navitem}>
                        <Link href='/layout#'>
                            <button className='btn btn-success mx-2 d-flex'>
                                <svg className='mx-1 bi bi-person' xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                </svg>
                                Neu registrieren</button>
                        </Link>
                    </li>
                </ul>
                <button className={`btn ${styles.showMenuBtn} ${isOpen ? 'btn-danger' : 'btn-success'}`}
                    onClick={openMenu}
                >
                    <span className={'d-flex'}>
                        {
                            isOpen ?  (
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x-octagon" viewBox="0 0 16 16">
                                    <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                </svg>
                            ) : (<MenuOpen />)
                        }
                    </span>
                </button>
            </nav>
        </header>
    </>
}