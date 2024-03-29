import React, { useContext, useState } from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'
import { FaClinicMedical } from 'react-icons/fa'
import { StateContext } from '../../context/context'
function Navbar() {
    const [navToggle, setNavToggle] = useState(false)
    const { lang } = useContext(StateContext)
    return (
        <div className="container-fluid sticky-top bg-white shadow-sm">
            <div className="container">
                <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
                    <Link to={'/'} className="navbar-brand">
                        <h1 className="m-0 text-uppercase text-primary nav-logo title-text">
                            <FaClinicMedical /> Dr.Qodirov
                        </h1>
                    </Link>
                    <button
                        className="navbar-toggler"
                        onClick={() => setNavToggle(p => !p)}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarCollapse"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`${navToggle ? "" : 'collapse'}navbar-collapse`} id="navbarCollapse">
                        <div className="navbar-nav ms-auto py-0">
                            <NavLink to="/" className="nav-item nav-link">
                                {lang === 'uz' ? "Asosiy" : lang === 'ru' ? "Главный" : 'Home'}
                            </NavLink>
                            <NavLink to="/about" className="nav-item nav-link">
                                {lang === 'uz' ? "Biz haqimizda" : lang === 'ru' ? "О нас" : 'About Us'}
                            </NavLink>
                            <NavLink to="/services" className="nav-item nav-link">
                                {lang === 'uz' ? "Xizmatlar" : lang === 'ru' ? "Услуги" : 'Services'}
                            </NavLink>
                            <NavLink to="/blog" className="nav-item nav-link">
                                {lang === 'uz' ? "Yangiliklar" : lang === 'ru' ? "Новости" : 'News'}
                            </NavLink>
                            <NavLink to="/contact" className="nav-item nav-link">
                                {lang === 'uz' ? "Aloqa" : lang === 'ru' ? "Контакт" : 'Contact'}
                            </NavLink>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar