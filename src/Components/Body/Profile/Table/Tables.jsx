import React from 'react';
import './Tables.css';

export default function Tables () {
    return (
        <div className='tableBody'>
            <div className='tableCard'>
                <div className='d-flex justify-content-between mb-3'>
                    <h4 className='tableHeading'>Appointments</h4>
                    <button className='btn btn_2 d-lg-block tableButton' type="submit">Browse All</button>
                </div>
                <table>
                    <tr>
                        <th>Visit Type</th>
                        <th>Date</th>
                        <th>Provider</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>Urgent</td>
                        <td>22/10/2022</td>
                        <td>Sri City Government Hospital</td>
                        <td>25/10/2022</td>
                    </tr>
                    <tr>
                        <td>Follow-up</td>
                        <td>11/11/2022</td>
                        <td>Morar Hospital</td>
                        <td>15/11/2022</td>
                    </tr>
                    <tr>
                        <td>Follow-up</td>
                        <td>12/11/2022</td>
                        <td>Apollo Spectra</td>
                        <td>18/11/2022</td>
                    </tr>
                    <tr>
                        <td>Cronic care</td>
                        <td>13/11/2022</td>
                        <td>Reliance Healthcare</td>
                        <td>20/11/2022</td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
