import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const OrdersRow = ({ order }) => {
    const { serviceName, price, customer, service, phone } = order;
    const [orderServices, setOrderServices] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderServices(data))
    }, [service])

    return (
        <tr>
            <th>
                <label>
                    <button className='btn btn-ghost'>x</button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded w-24 h-24">
                            {orderServices?.img &&
                                <img src={orderServices.img} alt="Avatar Tailwind CSS Component" />}
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{customer}</div>
                        <div className="text-sm opacity-50">{phone}</div>
                    </div>
                </div>
            </td>
            <td>
                {serviceName}
                <br />
                <span className="badge badge-ghost badge-sm">${price}</span>
            </td>
            <td>Purple</td>
            <th>
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default OrdersRow;