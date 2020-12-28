import React, { useState } from 'react';
import UserContext from '../../contexts/UserContext';
import { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getUserById, updateUser } from '../../services/api';
import ChangeFullName from '../ChangeFullName/ChangeFullName';
import '../../Profile.css';
import { Link } from 'react-router-dom';
import SessionContext from '../../contexts/SessionContext';
import ChangePassword from '../ChangePassword/ChangePassword';
import Loader from '../../components/Loader/Loader';

const Profil = () => {

    const { user } = useContext(UserContext);
    const { setUser } = useContext(UserContext);
    const [userTemp, setUserTemp] = useState([]);
    const [error, setError] = useState('');
    const [showComponent, setShowComponent] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChangeFullname = async (fullname) => {
        setUserTemp({
            ...user,
            fullname: fullname,
        });
        try {
            setLoading(true);
            const { data } = await updateUser(userTemp);
            setUser(data);
            setLoading(false);
        } catch (err) {
            setError(err);
        }
    }
    const handleChangePassword = async (password) => {
        try {
             setUserTemp({
                ...user,
                password: password,
            })
            
            setLoading(true);
            await updateUser(userTemp);
            const { data } = await getUserById(user.id);
            setShowComponent('');
            setLoading(false);
        } catch (err) {
            setError(err);
        }
    }


    const handleShowComponent = (componentName) => {
        if (componentName === 'username') setShowComponent('username');
        if (componentName === 'email') setShowComponent('email');
        if (componentName === 'password') setShowComponent('password');
        if (componentName === 'fullname') setShowComponent('fullname');
    }


    if(loading){
        return <Loader/>;
    }

    return (
        <>
            <div className="container">
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                        <div className="mt-3">
                                            <h4>{user.fullname}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="card mt-3">
                                <h4>Settings</h4>
                                <ul className="list-group list-group-flush">


                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <Link className="text-decoration-none nav-link" onClick={() => handleShowComponent('fullname')}>
                                            <h6 className="mb-0">Fullname</h6>
                                        </Link>
                                        <span className="text-secondary"></span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <Link className="text-decoration-none nav-link" onClick={() => handleShowComponent('username')}>
                                            <h6 className="mb-0">UserName</h6>
                                        </Link>
                                        <span className="text-secondary"></span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <Link className="text-decoration-none nav-link" onClick={() => handleShowComponent('email')}>
                                            <h6 className="mb-0">Email</h6>
                                        </Link>
                                        <span className="text-secondary"></span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <Link className="text-decoration-none nav-link" onClick={() => handleShowComponent('password')}>
                                            <h6 className="mb-0">Password</h6>
                                        </Link>
                                        <span className="text-secondary"></span>
                                    </li>


                                </ul>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-2">Full Name</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {user.fullname}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-2">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {user.email}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-2">Adress</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {user.address}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-2">Created At</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {user.createdAt}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row gutters-sm mt-5 ml-5">
                                <div className="col-sm-10 mb-3">

                                    {showComponent === 'fullname' && <ChangeFullName onChangeFullname={handleChangeFullname} />}
                                    {showComponent === 'password' && <ChangePassword onChangePassword={handleChangePassword} />}
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Profil;
