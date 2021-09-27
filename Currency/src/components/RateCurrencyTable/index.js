import React from 'react'
import { Table } from 'reactstrap';

const formatAmount = (value) => value?.toLocaleString('id', { timeZone: 'UTC' });

const index = ({ isLoading, data }) => {
    const weBuyPercentage = 5;
    const weSellPercentage = 2;

    return (
        <Table>
            <thead>
                <tr>
                    <th></th>
                    <th>We Buy</th>
                    <th>Exchange Rate</th>
                    <th>We Sell</th>
                </tr>
            </thead>
            <tbody>
                {
                    isLoading ?
                        <td colspan={4} className="text-center">Loading Data</td> :
                        data !== null && data !== undefined ?
                            Object.keys(data).map((key) => {
                                const weBuy = data[key] + ((weBuyPercentage / 100) * data[key]);
                                const weSell = data[key] - ((weSellPercentage / 100) * data[key]);
                                return (
                                    <tr key={key}>
                                        <td>{key.slice(3, 6)}</td>
                                        <td>{formatAmount(weBuy)}</td>
                                        <td>{formatAmount(data[key])}</td>
                                        <td>{formatAmount(weSell)}</td>
                                    </tr>
                                )
                            }) : <td colspan={4} className="text-center">No Data</td>
                }
            </tbody>
        </Table>
    )
}

export default index
