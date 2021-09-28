import React from 'react'
import "./CreateList.css"

function CreateList() {
    return (
        <table className="table">
            <tr >
              <th>Order Name</th>
              <th>customer Name</th>
              <th> Price</th>
            </tr>

            {
              // use here map and get all data in table formate
            }
            <tr>
              <td>Rice</td>
              <td>Rohan</td>
              <td>250</td>
            </tr>
            <tr>
              <td>Apple</td>
              <td>Biraj dey</td>
              <td>500</td>
            </tr>
            <tr >
              <td>Lassi</td>
              <td>Krishna</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Almond</td>
              <td>Amit</td>
              <td>1000</td>
            </tr>
        </table>
    )
}

export default CreateList
