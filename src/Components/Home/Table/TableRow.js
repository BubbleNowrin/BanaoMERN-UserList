import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Profile from '../Profile/Profile';

const TableRow = ({ user, handleOnClick }) => {

    const { id, Bio, avatar, createdAt, jobTitle, profile } = user;


    return (
        <tbody className=''>

            <tr className="border-b bg-gray-50 border-gray-200 cursor-pointer" onClick={() => handleOnClick(id)}>
                <td className="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                    {id}
                </td>
                <td className="text-sm text-gray-900 font-light px-14 py-4 whitespace-nowrap">
                    <div className="avatar">
                        <div className="w-12 rounded-xl">
                            <img src="https://placeimg.com/192/192/people" />
                        </div>
                    </div>
                </td>
                <td className="text-sm text-gray-900 font-light px-14 py-4 whitespace-nowrap">
                    {profile.firstName} {profile.lastName}
                </td>
            </tr>

        </tbody>
    );
};

export default TableRow;