import React from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../../Sidebar/Sidebar';

const MakeAdmin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const adminData = {
            email: data.email,
        };

        fetch('http://localhost:5000/addAdmin', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(adminData),
        }).then((res) => {
            console.log(res);
            alert('New Admin Added Successfully');
        });
    };

    return (
        <div>
             <Sidebar></Sidebar>

            <div class="content">
            <h1 className="text-center mt-5 text-info">Make Admin</h1>
                        <br />
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            style={{ margin: '20px 50px', padding: '0 40px' }}
                        >
                            <div className="form-group">
                                <h6>Email</h6>
                                <input
                                    type="email"
                                    {...register('email', { required: true })}
                                    placeholder="Email Address"
                                    className="form-control"
                                />
                                {errors.email && (
                                    <span className="text-danger">This field is required</span>
                                )}
                            </div>
                            <button className="px-5 btn-main" type="submit">
                                Submit
                            </button>
                        </form>
           </div>
        </div>
    );
};


export default MakeAdmin;