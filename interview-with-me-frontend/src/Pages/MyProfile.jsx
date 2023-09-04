import React, {useEffect, useState} from 'react'
import Header from '../Shared/Header'
import Offcanvas from '../Shared/Offcanvas'
import PageBannerStart from '../Component/Course/PageBannerStart'
import Footer from '../Shared/Footer'
import axios from "axios";
import http from "../interceptors/http";
import {useFormik} from "formik";
import {toast} from "react-toastify";

export default function MyProfile() {
    const [profile, setProfile] = useState([]);
    const [getUrl, setUrl] = useState([]);

    const userEmail = localStorage.getItem('userEmail');
    const userForm = useFormik({
        initialValues: {
            first_name: '',
            last_name: '',
            email: '',
        },
        onSubmit: (values, {resetForm}) => {
            values['status'] = values['status'] === "1";
            http.post(`/profile-update/${userEmail}`, values)
                .then(() => {
                    localStorage.setItem('userEmail', values.email);
                    toast.success("Update Successfully");
                })
                .catch(({error}) => {
                    console.log(error)
                });
        },
    });

    const fetchProfile = async () => {
        try {
            const email = localStorage.getItem('userEmail');
            const {data: data} = await http.get(`/fetch-user/${email}`)
            setProfile(data.data);
            userForm.values.first_name = data.data.firstName;
            userForm.values.last_name = data.data.lastName;
            userForm.values.email = data.data.email;
            setUrl(new URL(window.location.host) + `/register/refer_id?=${data.data.referralCode}`)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchProfile();
    }, []);
    return (<>
        <Header/>
        <Offcanvas/>
        <PageBannerStart name="My Profile"/>
        <div className="section section-padding">
            <div className="container">
                <div className="course-list-wrapper">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
                                <img className="rounded-circle mt-5"
                                     src="https://h-o-m-e.org/wp-content/uploads/2022/04/Blank-Profile-Picture-3.jpg"
                                     width="300" alt='50'/>
                                <span className="font-weight-bold">{profile.firstName} {profile.lastName}</span>
                                <span className="text-black-50">{profile.email}</span>
                                <span className="text-black-50">Remaining {profile.remainingPoints} points</span>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <form className="row g-3 needs-validation" noValidate onSubmit={userForm.handleSubmit}>
                                <div className="p-3 py-5">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h6 className="text-right">Edit Profile</h6>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6">
                                            <label id='first_name'>First Name</label>
                                            <input type="text"
                                                   className="form-control"
                                                   id='first_name'
                                                   placeholder={profile.firstName}
                                                   onChange={userForm.handleChange}
                                                   onBlur={userForm.handleBlur}
                                                   value={userForm.values.first_name}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label id='last_name'>Last Name</label>
                                            <input type="text"
                                                   id='last_name'
                                                   className="form-control"
                                                   placeholder={profile.lastName}
                                                   onChange={userForm.handleChange}
                                                   onBlur={userForm.handleBlur}
                                                   value={userForm.values.last_name}

                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-6">
                                            <label id='email'>Email</label>
                                            <input type="text"
                                                   id='email'
                                                   className="form-control"
                                                   placeholder={profile.email}
                                                   onChange={userForm.handleChange}
                                                   onBlur={userForm.handleBlur}
                                                   value={userForm.values.email}
                                            />
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-12">
                                            <label id='refer'>Refer Your Friends</label>
                                            <input type="text"
                                                   readOnly
                                                   id='refer'
                                                   className="form-control"
                                                   value={getUrl}
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-5 text-right">
                                        <button className="btn btn-primary profile-button" type="submit">Update Profile
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </>)
}