import React from 'react'
import { OrderCard } from '../order-card/order-card';

const result = {
    "success": true,
    "orders": [
      {
        "ingredients": [
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733c9",
          "60d3b41abdacab0026a733c9",
        ],
        "_id": "",
        "status": "done",
        "number": 0,
        "createdAt": "2021-06-23T14:43:22.587Z",
        "updatedAt": "2021-06-23T14:43:22.603Z"
      }
    ],
    "total": 1,
    "totalToday": 1
  };

export const OrdersFeed = () => {
  return (
    <div>
        { result.orders.map((order,key) => <OrderCard key={key} info={order} />) }
    </div>
  )
}
