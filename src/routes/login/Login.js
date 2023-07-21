import React, { useState } from 'react'
import './Login.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const [createPageActive, setCreatePageActive] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        if (email === "example@email.com" && password === "12345678") {
            dispatch({ type: "LOG_IN", payload: true })
            toast.success("Succesfully log in !!")
            navigate("/")
        }
        else {
            toast.error("Username or Password is incorrect")
        }
    }


    return (
        <div className='login_page'>
            <div className="login_page_texts">
                <h1>facebook</h1>
                <p>Connect with friends and the world
                    <br />
                    around you on Facebook.</p>
            </div>
            <div className="login_page_box">
                <div className="login_page_form">
                    <form action="" onSubmit={handleSubmit}>
                        <input type="text" placeholder='Email or phone number' autoCorrect='none' value={email} onChange={e => setEmail(e.target.value)} />
                        <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                        <button className='login_form_login_btn' type='submit'>Log in</button>
                    </form>
                    <NavLink>
                        Forgot password?
                    </NavLink>
                    <div className="market_menu_scroll_container_line"></div>
                    <button className='login_form_create_btn'
                        onClick={() => {
                            setCreatePageActive(p => !p)
                        }}
                    >Create a new account</button>
                </div>
                <p className='login_page_box_bottom_txt'><NavLink
                    onClick={() => {
                        setCreatePageActive(p => !p)
                    }}
                >Create a Page</NavLink>
                    for a celebrity, brand or business.</p>
            </div>
            <CreatePage setCreatePageActive={setCreatePageActive} createPageActive={createPageActive} />
        </div>
    )
}

export const CreatePage = ({ setCreatePageActive, createPageActive }) => {
    return (
        <div>
            {
                createPageActive && <div className="create_page-shadow"
                    onClick={() => {
                        setCreatePageActive(p => !p)
                    }}
                >
                </div>
            }


            {
                createPageActive && <div className="create_page_box">
                    <div className="createpage_box_cancel_icn"
                        onClick={() => {
                            setCreatePageActive(p => !p)
                        }}
                    >
                        <RxCross2 />
                    </div>
                    <div className="create_page_box_head_txt">
                        <h1>Sign Up</h1>
                        <p>It’s quick and easy.</p>
                    </div>
                    <div className="market_menu_scroll_container_line"></div>
                    <form className='create_page_box_form'>
                        <div className="create_page_form_inp">
                            <input required type="text" placeholder='First name' />
                            <input required type="text" placeholder='Last name' />
                        </div>
                        <input className='create_page_form_inp_style' type="text" required placeholder='Mobile Number or email' />
                        <input className='create_page_form_inp_style' type="text" required placeholder='New password' />
                        <div className="create_page_inputs">
                            <label>Birthday</label>
                            <input className='create_page_form_inp_style' type="date" name="" id="" />
                        </div>
                        <div className="create_page_inputs">
                            <label>Gender</label>
                            <div className="create_page_gender_btn">
                                <div className='create_page_gender_inp'>
                                    <label htmlFor="gender">Female</label>
                                    <input type="radio" name="gender" value="female"
                                    />
                                </div>
                                <div className='create_page_gender_inp'>
                                    <label htmlFor="gender">Male</label>
                                    <input type="radio" name="gender" value="male"
                                    />
                                </div>
                                <div className='create_page_gender_inp'>
                                    <label htmlFor="gender">Custom</label>
                                    <input type="radio" name="gender" value="custom"
                                    />
                                </div>
                            </div>
                        </div>
                        <p className='create_page_txt_privacy'>People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
                        <p className='create_page_txt_privacy'>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
                        <button className='create_page_form_sign_up_btn'>Sign up</button>
                    </form>
                </div>
            }
            <ToastContainer />
        </div>
    )
}

export default Login
