import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import TableRow from './TableRow';

const Table = ({ setSingleUser, handleOnClick, users }) => {

    return (
        <div>
            <div className="flex flex-col ">
                <div className="overflow-x-auto">
                    <div className="py-2 inline-block">
                        <div className="overflow-hidden">
                            <table className="text-center ">
                                <thead className="border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-200 px-6 py-4">
                                            ID
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-200 px-14 py-4">
                                            Avatar
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-200 px-14 py-4">
                                            Name
                                        </th>
                                    </tr>
                                </thead>
                                {
                                    users?.map(user => <TableRow
                                        key={user.id}
                                        user={user}
                                        // setSingleUser={setSingleUser}
                                        handleOnClick={handleOnClick}
                                    ></TableRow>)
                                }
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Table;