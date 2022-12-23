import React from 'react';
import { BsBriefcaseFill } from 'react-icons/bs';
import { MdMarkEmailUnread } from 'react-icons/md';

const Profile = ({ singleUser }) => {

    const { profile, jobTitle, Bio } = singleUser;

    return (
        <div>
            {

                <main>
                    <section className="relative py-16 bg-blueGray-200">
                        <div className="w-96 h-96 mx-auto px-4">
                            <div className="relative flex flex-col min-w-xl break-words bg-white w-full mb-6 shadow-xl rounded-lg">
                                <div className="px-6">
                                    <div className="flex flex-wrap justify-center pt-10">
                                        <div className="avatar">
                                            <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                                <img src="https://placeimg.com/192/192/people" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center mt-12">
                                        <h3 className="text-4xl font-semibold leading-normal  text-blueGray-700 mb-2">
                                            {profile?.firstName} {profile?.lastName}
                                        </h3>
                                        <div className="text-sm leading-normal mt-0 mb-2 text-blue-600 font-bold uppercase">
                                            @{profile?.username}
                                        </div>
                                        <div className="mb-2 text-blueGray-600 mt-10 flex items-center justify-center">
                                            <BsBriefcaseFill className='mr-2' />
                                            <p>{jobTitle}</p>
                                        </div>
                                        <div className="mb-2 text-blueGray-600 flex items-center justify-center">
                                            <MdMarkEmailUnread className='mr-2' />
                                            <p>{profile?.email}</p>
                                        </div>
                                    </div>
                                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                        <div className="flex flex-wrap justify-center">
                                            <div className="w-full lg:w-9/12 px-4">
                                                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                                    {Bio}
                                                </p>
                                                <a href="#pablo" className="font-normal text-indigo-500">Show more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>
                </main>
            }
        </div>
    );
};

export default Profile;