import { useState } from "react"
import { collection, addDoc, doc, setDoc } from "firebase/firestore/lite";
import { firestore } from '../../config/firebase'
import { toast } from 'react-toastify';

import doctor1 from "../../assets/img/doctors/doctors-1.jpg"
import doctor2 from "../../assets/img/doctors/doctors-2.jpg"
import doctor3 from "../../assets/img/doctors/doctors-3.jpg"
import doctor4 from "../../assets/img/doctors/doctors-4.jpg"
import gallery1 from "../../assets/img/gallery/gallery-1.jpg"
import gallery2 from "../../assets/img/gallery/gallery-2.jpg"
import gallery3 from "../../assets/img/gallery/gallery-3.jpg"
import gallery4 from "../../assets/img/gallery/gallery-4.jpg"
import gallery5 from "../../assets/img/gallery/gallery-5.jpg"
import gallery6 from "../../assets/img/gallery/gallery-6.jpg"
import gallery7 from "../../assets/img/gallery/gallery-7.jpg"
import gallery8 from "../../assets/img/gallery/gallery-8.jpg"
import testimonials1 from "../../assets/img/testimonials/testimonials-1.jpg"
import testimonials2 from "../../assets/img/testimonials/testimonials-2.jpg"
import testimonials3 from "../../assets/img/testimonials/testimonials-3.jpg"
import testimonials4 from "../../assets/img/testimonials/testimonials-4.jpg"
import testimonials5 from "../../assets/img/testimonials/testimonials-5.jpg"
import department1 from "../../assets/img/departments-1.jpg"
import department2 from "../../assets/img/departments-2.jpg"
import department3 from "../../assets/img/departments-3.jpg"
import department4 from "../../assets/img/departments-4.jpg"
import department5 from "../../assets/img/departments-5.jpg"
// import logo from "../../assets/img/logo .png"
import BackToTop from 'react-back-to-top';

import "../header/Header.css"
// import "../../assets/css/style.css"


const initialStateAppointment = { name: " ", email: "", phone: " ", date: "", message: "", department: "", doctor: "" }
const initialStateContact = { name: " ", email: "", subject: " ", message: "" }

export default function Header() {

    const [appointment, setAppointment] = useState(initialStateAppointment)

    const [contact, setContact] = useState(initialStateContact)

    //hanldeChangeAppointment....................
    const hanldeChangeAppointment = e => {
        setAppointment({ ...appointment, [e.target.name]: e.target.value })
        // console.log(appointment)

    }
    console.log(appointment)

    const handleSubmitAppointment = async (e) => {
        e.preventDefault();

        // console.log(appointment)

        const { name, email, phone, date, message, department, doctor } = appointment

        try {
            const docRef = await addDoc(collection(firestore, "Appointment"), { name, email, phone, date, message, department, doctor });
            console.log("Document written with ID: ", docRef.id);
            toast('your appointment has been set', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    //hanldeChangeContact..................................
    const hanldeChangeContact = e => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }


    console.log(contact)
    const handleSubmitContact = async (e) => {
        e.preventDefault();

        const { name, email, subject, message } = contact
        try {
            const docRef = await addDoc(collection(firestore, "contact"), { name, email, subject, message });
            console.log("Document written with ID: ", docRef.id);
            toast('Thanks you for contact', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }


    // const select = (el, all = false) => {
    //     el = el.trim()
    //     if (all) {
    //         return [...document.querySelectorAll(el)]
    //     } else {
    //         return document.querySelector(el)
    //     }
    // }

    // /**
    //  * Easy event listener function
    //  */
    // const on = (type, el, listener, all = false) => {
    //     let selectEl = select(el, all)
    //     if (selectEl) {
    //         if (all) {
    //             selectEl.forEach(e => e.addEventListener(type, listener))
    //         } else {
    //             selectEl.addEventListener(type, listener)
    //         }
    //     }
    // }

    // /**
    //  * Easy on scroll event listener 
    //  */
    // const onscroll = (el, listener) => {
    //     el.addEventListener('scroll', listener)
    // }

    // /**
    //  * Navbar links active state on scroll
    //  */
    // let navbarlinks = select('#navbar .scrollto', true)
    // const navbarlinksActive = () => {
    //     let position = window.scrollY + 200
    //     navbarlinks.forEach(navbarlink => {
    //         if (!navbarlink.hash) return
    //         let section = select(navbarlink.hash)
    //         if (!section) return
    //         if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
    //             navbarlink.classNameList.add('active')
    //         } else {
    //             navbarlink.classNameList.remove('active')
    //         }
    //     })
    // }
    // window.addEventListener('load', navbarlinksActive)
    // onscroll(document, navbarlinksActive)

    // /**
    //  * Scrolls to an element with header offset
    //  */
    // const scrollto = (el) => {
    //     let header = select('#header')
    //     let offset = header.offsetHeight

    //     let elementPos = select(el).offsetTop
    //     window.scrollTo({
    //         top: elementPos - offset,
    //         behavior: 'smooth'
    //     })
    // }

    // /**
    //  * Toggle .header-scrolled className to #header when page is scrolled
    //  */
    // let selectHeader = select('#header')
    // let selectTopbar = select('#topbar')
    // if (selectHeader) {
    //     const headerScrolled = () => {
    //         if (window.scrollY > 100) {
    //             selectHeader.classNameList.add('header-scrolled')
    //             if (selectTopbar) {
    //                 selectTopbar.classNameList.add('topbar-scrolled')
    //             }
    //         } else {
    //             selectHeader.classNameList.remove('header-scrolled')
    //             if (selectTopbar) {
    //                 selectTopbar.classNameList.remove('topbar-scrolled')
    //             }
    //         }
    //     }
    //     window.addEventListener('load', headerScrolled)
    //     onscroll(document, headerScrolled)
    // }

    // /**
    //  * Back to top button
    //  */
    // let backtotop = select('.back-to-top')
    // if (backtotop) {
    //     const toggleBacktotop = () => {
    //         if (window.scrollY > 100) {
    //             backtotop.classNameList.add('active')
    //         } else {
    //             backtotop.classNameList.remove('active')
    //         }
    //     }
    //     window.addEventListener('load', toggleBacktotop)
    //     onscroll(document, toggleBacktotop)
    // }

    // /**
    //  * Mobile nav toggle
    //  */
    // on('click', '.mobile-nav-toggle', function (e) {
    //     select('#navbar').classNameList.toggle('navbar-mobile')
    //     this.classNameList.toggle('bi-list')
    //     this.classNameList.toggle('bi-x')
    // })

    // /**
    //  * Mobile nav dropdowns activate
    //  */
    // on('click', '.navbar .dropdown > a', function (e) {
    //     if (select('#navbar').classNameList.contains('navbar-mobile')) {
    //         e.preventDefault()
    //         this.nextElementSibling.classNameList.toggle('dropdown-active')
    //     }
    // }, true)

    // /**
    //  * Scrool with ofset on links with a className name .scrollto
    //  */
    // on('click', '.scrollto', function (e) {
    //     if (select(this.hash)) {
    //         e.preventDefault()

    //         let navbar = select('#navbar')
    //         if (navbar.classNameList.contains('navbar-mobile')) {
    //             navbar.classNameList.remove('navbar-mobile')
    //             let navbarToggle = select('.mobile-nav-toggle')
    //             navbarToggle.classNameList.toggle('bi-list')
    //             navbarToggle.classNameList.toggle('bi-x')
    //         }
    //         scrollto(this.hash)
    //     }
    // }, true)

    // /**
    //  * Scroll with ofset on page load with hash links in the url
    //  */
    // window.addEventListener('load', () => {
    //     if (window.location.hash) {
    //         if (select(window.location.hash)) {
    //             scrollto(window.location.hash)
    //         }
    //     }
    // });

    // /**
    //  * Preloader
    //  */
    // let preloader = select('#preloader');
    // if (preloader) {
    //     window.addEventListener('load', () => {
    //         preloader.remove()
    //     });
    // }

    /**
     * Initiate glightbox 
     */
    //   const glightbox = GLightbox({
    //     selector: '.glightbox'
    //   });

    /**
     * Initiate Gallery Lightbox 
     */
    //   const galelryLightbox = GLightbox({
    //     selector: '.galelry-lightbox'
    //   });

    return (
        //   Top Bar

        <div>
            <div id="topbar" className="d-flex align-items-center fixed-top">
                <div className="container d-flex justify-content-between">
                    <div className="contact-info d-flex align-items-center">
                        <i className="bi bi-envelope"></i> <a href="mailto:contact@example.com">drhira201@gamil.com</a>
                        <i className="bi bi-phone"></i>03177817174
                    </div>
                    <div className="d-none d-lg-flex social-links align-items-center">
                        <a href="https://twitter.com" target="_blank" className="twitter">
                            <i className="bi bi-twitter"></i>
                        </a>
                        <a href="https://facebook.com" target="_blank" className="facebook">
                            <i className="bi bi-facebook"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" className="instagram">
                            <i className="bi bi-instagram"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" className="linkedin">
                            <i className="bi bi-linkedin"></i>
                        </a>
                    </div>
                </div>
            </div >

            {/* Header */}
            <header id="header" className="fixed-top">
                <div className="container d-flex align-items-center ">

                    <h1 className="logo me-auto"><a href="index.html">Dr.Hira</a></h1>

                    {/* <a href="index.html" className="logo me-auto"><img src={logo} alt="" className="img-fluid"/></a> */}

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a className="nav-link scrollto" href="#about">About</a></li>
                            <li><a className="nav-link scrollto" href="#services">Services</a></li>
                            <li><a className="nav-link scrollto" href="#departments">Deprtments</a></li>
                            <li><a className="nav-link scrollto" href="#doctors">Doctors</a></li>
                            <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                                <ul>
                                    <li><a href="#">Drop Down 1</a></li>
                                    <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                        <ul>
                                            <li><a href="#">Deep Drop Down 1</a></li>
                                            <li><a href="#">Deep Drop Down 2</a></li>
                                            <li><a href="#">Deep Drop Down 3</a></li>
                                            <li><a href="#">Deep Drop Down 4</a></li>
                                            <li><a href="#">Deep Drop Down 5</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="#">Drop Down 2</a></li>
                                    <li><a href="#">Drop Down 3</a></li>
                                    <li><a href="#">Drop Down 4</a></li>
                                </ul>
                            </li>
                            <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle "></i>
                    </nav>

                    <a href="#appointment" className="appointment-btn scrollto"><span className="d-none d-md-inline">Make an</span> Appointment</a>

                </div>
            </header>
            {/* // End Header */}

            {/* //   Hero Section */}
            <section id="hero" className="d-flex align-items-center">
                <div className="container">
                    <h1>Welcome to Medilab</h1>
                    <h2>We are team of talented designers making websites with Bootstrap</h2>
                    <a href="#about" className="btn-get-started scrollto">Get Started</a>
                </div>
            </section>
            {/* // End Hero */}

            <main id="main">

                {/* Why Us Section  */}
                <section id="why-us" className="why-us">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-4 d-flex align-items-stretch">
                                <div className="content">
                                    <h3>Why Choose Medilab?</h3>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                                        Asperiores dolores sed et. Tenetur quia eos. Autem tempore quibusdam vel necessitatibus optio ad corporis.
                                    </p>
                                    <div className="text-center">
                                        <a href="#" className="more-btn">Learn More <i className="bx bx-chevron-right"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8 d-flex align-items-stretch">
                                <div className="icon-boxes d-flex flex-column justify-content-center">
                                    <div className="row">
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="bx bx-receipt"></i>
                                                <h4>Corporis voluptates sit</h4>
                                                <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="bx bx-cube-alt"></i>
                                                <h4>Ullamco laboris ladore pan</h4>
                                                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 d-flex align-items-stretch">
                                            <div className="icon-box mt-4 mt-xl-0">
                                                <i className="bx bx-images"></i>
                                                <h4>Labore consequatur</h4>
                                                <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* End .content */}
                            </div>
                        </div>

                    </div>
                </section>
                {/* End Why Us Section */}

                {/* About Section  */}
                <section id="about" className="about">
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch position-relative">
                                <a href="https://youtu.be/cjs8WX4Sbu4" className="glightbox play-btn mb-4"></a>
                            </div>

                            <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5">
                                <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
                                <p>Esse voluptas cumque vel exercitationem. Reiciendis est hic accusamus. Non ipsam et sed minima temporibus laudantium. Soluta voluptate sed facere corporis dolores excepturi. Libero laboriosam sint et id nulla tenetur. Suscipit aut voluptate.</p>

                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-fingerprint"></i></div>
                                    <h4 className="title"><a href="">Lorem Ipsum</a></h4>
                                    <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident</p>
                                </div>

                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-gift"></i></div>
                                    <h4 className="title"><a href="">Nemo Enim</a></h4>
                                    <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque</p>
                                </div>

                                <div className="icon-box">
                                    <div className="icon"><i className="bx bx-atom"></i></div>
                                    <h4 className="title"><a href="">Dine Pad</a></h4>
                                    <p className="description">Explicabo est voluptatum asperiores consequatur magnam. Et veritatis odit. Sunt aut deserunt minus aut eligendi omnis</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </section>
                {/* End About Section */}

                {/* Counts Section  */}
                <section id="counts" className="counts">
                    <div className="container">

                        <div className="row">

                            <div className="col-lg-3 col-md-6">
                                <div className="count-box">
                                    <i className="fas fa-user-md"></i>
   
                                    <span data-purecounter-start="0" data-purecounter-end="85" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Doctors</p>

                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                                <div className="count-box">
                                    <i className="far fa-hospital"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="18" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Departments</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                                <div className="count-box">
                                    <i className="fas fa-flask"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="12" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Research Labs</p>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                                <div className="count-box">
                                    <i className="fas fa-award"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="150" data-purecounter-duration="1" className="purecounter"></span>
                                    <p>Awards</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                {/* End Counts Section */}

                {/* Services Section  */}
                <section id="services" className="services">
                    <div className="container">

                        <div className="section-title">
                            <h2>Services</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-heartbeat"></i></div>
                                    <h4><a href="">Lorem Ipsum</a></h4>
                                    <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-pills"></i></div>
                                    <h4><a href="">Sed ut perspiciatis</a></h4>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-hospital-user"></i></div>
                                    <h4><a href="">Magni Dolores</a></h4>
                                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-dna"></i></div>
                                    <h4><a href="">Nemo Enim</a></h4>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-wheelchair"></i></div>
                                    <h4><a href="">Dele cardo</a></h4>
                                    <p>Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur</p>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                                <div className="icon-box">
                                    <div className="icon"><i className="fas fa-notes-medical"></i></div>
                                    <h4><a href="">Divera don</a></h4>
                                    <p>Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur</p>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                {/* End Services Section */}

                {/* Appointment Section  */}
                <section id="appointment" className="appointment section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2>Make an Appointment</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <form className="php-email-form" onSubmit={handleSubmitAppointment}>
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={hanldeChangeAppointment} />
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" onChange={hanldeChangeAppointment} />
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={hanldeChangeAppointment} />
                                    <div className="validate"></div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 form-group mt-3">
                                    <input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" onChange={hanldeChangeAppointment} />
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3">

                                    <select  name="department" id="department" className="form-select" onChange={hanldeChangeAppointment}>

                                        <option >Select Department</option>
                                        <option value='Biochemistry'>Biochemistry</option>
                                        <option value='Physiology'>Physiology</option>
                                        <option value='Forensic Medicine'>Forensic Medicine</option>
                                    </select>
                                    <div className="validate"></div>
                                </div>
                                <div className="col-md-4 form-group mt-3">
                                    <select  name="doctor" id="doctor" className="form-select" onChange={hanldeChangeAppointment}>
                                        <option >Select Doctor</option>
                                        <option value='Dr.salma shahid'>Dr.salma shahid</option>
                                        <option value='Dr.faiza nazir'>Dr.faiza nazir</option>
                                        <option value='Dr.hira khan'>Dr.hira khan</option>
                                    </select>
                                    <div className="validate"></div>
                                </div>
                            </div>

                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows="5" placeholder="Message (Optional)" onChange={hanldeChangeAppointment}></textarea>
                                <div className="validate"></div>
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"></div>
                                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Make an Appointment</button></div>
                        </form>

                    </div>
                </section>
                {/* End Appointment Section */}

                {/* Departments Section  */}
                <section id="departments" clas="departments">
                    <div className="container">

                        <div className="section-title">
                            <h2>Departments</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row gy-4">
                            <div className="col-lg-3">
                                <ul className="nav nav-tabs flex-column">
                                    <li className="nav-item">
                                        <a className="nav-link active show" data-bs-toggle="tab" href="#tab-1">Cardiology</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-2">Neurology</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-3">Hepatology</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-4">Pediatrics</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-bs-toggle="tab" href="#tab-5">Eye Care</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-9">
                                <div className="tab-content">
                                    <div className="tab-pane active show" id="tab-1">
                                        <div className="row gy-4">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Cardiology</h3>
                                                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                                <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img src={department1} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab-2">
                                        <div className="row gy-4">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Et blanditiis nemo veritatis excepturi</h3>
                                                <p className="fst-italic">Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                                                <p>Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal</p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img src={department2} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab-3">
                                        <div className="row gy-4">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Impedit facilis occaecati odio neque aperiam sit</h3>
                                                <p className="fst-italic">Eos voluptatibus quo. Odio similique illum id quidem non enim fuga. Qui natus non sunt dicta dolor et. In asperiores velit quaerat perferendis aut</p>
                                                <p>Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae</p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img src={department3} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab-4">
                                        <div className="row gy-4">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Fuga dolores inventore laboriosam ut est accusamus laboriosam dolore</h3>
                                                <p className="fst-italic">Totam aperiam accusamus. Repellat consequuntur iure voluptas iure porro quis delectus</p>
                                                <p>Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore</p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img src={department4} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane" id="tab-5">
                                        <div className="row gy-4">
                                            <div className="col-lg-8 details order-2 order-lg-1">
                                                <h3>Est eveniet ipsam sindera pad rone matrelat sando reda</h3>
                                                <p className="fst-italic">Omnis blanditiis saepe eos autem qui sunt debitis porro quia.</p>
                                                <p>Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel</p>
                                            </div>
                                            <div className="col-lg-4 text-center order-1 order-lg-2">
                                                <img src={department5} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
                {/* End Departments Section */}

                {/* Doctors Section  */}
                <section id="doctors" className="doctors">
                    <div className="container">

                        <div className="section-title">
                            <h2>Doctors</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="row">

                            <div className="col-lg-6">
                                <div className="member d-flex align-items-start">
                                    <div className="pic"><img src={doctor1} className="img-fluid" alt="" /></div>
                                    <div className="member-info">
                                        <h4>Walter White</h4>
                                        <span>Chief Medical Officer</span>
                                        <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                                        <div className="social">
                                            <a href=""><i className="ri-twitter-fill"></i></a>
                                            <a href=""><i className="ri-facebook-fill"></i></a>
                                            <a href=""><i className="ri-instagram-fill"></i></a>
                                            <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4 mt-lg-0">
                                <div className="member d-flex align-items-start">
                                    <div className="pic"><img src={doctor2} className="img-fluid" alt="" /></div>
                                    <div className="member-info">
                                        <h4>Sarah Jhonson</h4>
                                        <span>Anesthesiologist</span>
                                        <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                                        <div className="social">
                                            <a href=""><i className="ri-twitter-fill"></i></a>
                                            <a href=""><i className="ri-facebook-fill"></i></a>
                                            <a href=""><i className="ri-instagram-fill"></i></a>
                                            <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4">
                                <div className="member d-flex align-items-start">
                                    <div className="pic"><img src={doctor3} className="img-fluid" alt="" /></div>
                                    <div className="member-info">
                                        <h4>William Anderson</h4>
                                        <span>Cardiology</span>
                                        <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                                        <div className="social">
                                            <a href=""><i className="ri-twitter-fill"></i></a>
                                            <a href=""><i className="ri-facebook-fill"></i></a>
                                            <a href=""><i className="ri-instagram-fill"></i></a>
                                            <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 mt-4">
                                <div className="member d-flex align-items-start">
                                    <div className="pic"><img src={doctor4} className="img-fluid" alt="" /></div>
                                    <div className="member-info">
                                        <h4>Amanda Jepson</h4>
                                        <span>Neurosurgeon</span>
                                        <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                                        <div className="social">
                                            <a href=""><i className="ri-twitter-fill"></i></a>
                                            <a href=""><i className="ri-facebook-fill"></i></a>
                                            <a href=""><i className="ri-instagram-fill"></i></a>
                                            <a href=""> <i className="ri-linkedin-box-fill"></i> </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                {/* End Doctors Section */}

                {/* Frequently Asked Questions Section  */}
                <section id="faq" className="faq section-bg">
                    <div className="container">

                        <div className="section-title">
                            <h2>Frequently Asked Questions</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>

                        <div className="faq-list">
                            <ul>
                                <li data-aos="fade-up">
                                    <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">Non consectetur a erat nam at lectus urna duis? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                                        <p>
                                            Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                        </p>
                                    </div>
                                </li>

                                <li data-aos="fade-up" data-aos-delay="100">
                                    <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">Feugiat scelerisque varius morbi enim nunc? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                                        <p>
                                            Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                        </p>
                                    </div>
                                </li>

                                <li data-aos="fade-up" data-aos-delay="200">
                                    <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">Dolor sit amet consectetur adipiscing elit? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                                        <p>
                                            Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                        </p>
                                    </div>
                                </li>

                                <li data-aos="fade-up" data-aos-delay="300">
                                    <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                                        <p>
                                            Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
                                        </p>
                                    </div>
                                </li>

                                <li data-aos="fade-up" data-aos-delay="400">
                                    <i className="bx bx-help-circle icon-help"></i> <a data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                                    <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                                        <p>
                                            Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                                        </p>
                                    </div>
                                </li>

                            </ul>
                        </div>

                    </div>
                </section>
                {/* End Frequently Asked Questions Section  */}

                {/* Gallery Section */}
                <section id="gallery" className="gallery">
                    <div className="container">

                        <div className="section-title">
                            <h2>Gallery</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className="row g-0">

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-1.jpg" className="galelry-lightbox">
                                        <img src={gallery1} alt="" className="img-fluid" />
                                    </a>

                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-2.jpg" className="galelry-lightbox">
                                        <img src={gallery2} alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-3.jpg" className="galelry-lightbox">
                                        <img src={gallery3} alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-4.jpg" className="galelry-lightbox">
                                        <img src={gallery4} alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-5.jpg" className="galelry-lightbox">
                                        <img src={gallery5} alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-6.jpg" className="galelry-lightbox">
                                        <img src={gallery6} alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-7.jpg" className="galelry-lightbox">
                                        <img src={gallery7} alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-4">
                                <div className="gallery-item">
                                    <a href="assets/img/gallery/gallery-8.jpg" className="galelry-lightbox">
                                        <img src={gallery8} alt="" className="img-fluid" />
                                    </a>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>
                {/* End Gallery Section  */}

                {/* Contact Section */}
                <section id="contact" className="contact">
                    <div className="container">

                        <div className="section-title">
                            <h2>Contact</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                    </div>

                    <div>
                        {/* <iframe style="border:0; width: 100%; height: 350px;" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" allowfullscreen></iframe> */}
                    </div>

                    <div className="container">
                        <div className="row mt-5">       

                            <div className="col-lg-4">
                                <div className="info">
                                    <div className="address">
                                        <a href=" https://goo.gl/maps/C1zM7qo89jqfVoZF7" target="_blank">
                                            <i className="bi bi-geo-alt"></i>
                                        </a>

                                        <h4>Location:</h4>
                                        <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>

                                    <div className="email">
                                        <a href="https://gmail.com" target="_blank">
                                            <i className="bi bi-envelope"></i>
                                        </a>
                                        <h4>Email:</h4>
                                        <p>shusama100121@gmail.com</p>
                                    </div>

                                    <div className="phone">
                                        <a href="tel:+9971863733">
                                            <i className="bi bi-phone"></i>
                                        </a>
                                        <h4>Call:</h4>
                                        <p>+92 3085335953</p>
                                    </div>

                                </div>

                            </div>

                            <div className="col-lg-8 mt-5 mt-lg-0">

                                <form className="php-email-form" onSubmit={handleSubmitContact}>
                                    <div className="row">
                                        <div className="col-md-6 form-group">
                                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required onChange={hanldeChangeContact} />
                                        </div>
                                        <div className="col-md-6 form-group mt-3 mt-md-0">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required onChange={hanldeChangeContact} />
                                        </div>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required onChange={hanldeChangeContact} />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea className="form-control" name="message" rows="5" placeholder="Message" required onChange={hanldeChangeContact}></textarea>
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>

                            </div>

                        </div>

                    </div>
                </section>
                {/* End Contact Section */}

            </main>
            {/* End #main */}

            {/* Footer  */}
            <footer id="footer">

                <div className="footer-top">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-3 col-md-6 footer-contact">
                                <h3>Medical</h3>
                                <p>
                                    A108 Adam Street <br />
                                    New York, NY 535022<br />
                                    United States <br /><br />


                                    <strong>Phone:</strong> +92 3085335953<br />
                                    <strong>Email:</strong> shusama100121@gmail.com<br />
                                </p>
                            </div>

                            <div className="col-lg-2 col-md-6 footer-links">
                                <h4>Useful Links</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Services</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-3 col-md-6 footer-links">
                                <h4>Our Services</h4>
                                <ul>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                                    <li><i className="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                                </ul>
                            </div>

                            <div className="col-lg-4 col-md-6 footer-newsletter">
                                <h4>Join Our Newsletter</h4>
                                <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
                                <form action="" method="post">
                                    <input type="email" name="email" /><input type="submit" value="Subscribe" />
                                </form>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="container d-md-flex py-4">

                    <div className="me-md-auto text-center text-md-start">
                        <div className="copyright">
                            &copy; Copyright <strong><span>Dr.Hira</span></strong>. All Rights Reserved
                        </div>
                        <div className="credits">
                            {/* <!-- All the links in the footer should remain intact. -->
                                                <!-- You can delete the links only if you purchased the pro version. -->
                                                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                                                <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/medilab-free-medical-bootstrap-theme/ -->
                                                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a> */}
                        </div>
                    </div>
                    <div className="social-links text-center text-md-right pt-3 pt-md-0">
                        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
                        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
                        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
                        <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
                        <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
                    </div>
                </div>
            </footer>
            {/* End Footer */}

            <div id="preloader"></div>
            {/* <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short"></i></a> */}
            <BackToTop
                mainStyle={{
                    width: '100%',
                    height: '100%',
                    background: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNQD67cODPdT4EUJtv4nBC2uLHt13nRN1Y7Q&usqp=CAU")',
                    color: "blue"


                }}
                percentStyle={{
                    width: '100%',
                    height: '100%',
                }}
                animate='rotate'
                offsetTop={20}
                step={50}
                percent={true}
                visiblePercent={50}
            />

        </div>



    );
}