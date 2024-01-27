// OrderDetails.jsx

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const OrderDetails = ({ order }) => {
  return (
    <div style={{ backgroundColor:'#F5F5F5', aignSelf:'stretch', alignItems:'center', justifyContent: 'space-between',display: 'flex', flex: 1, marginLeft: '20px',padding: '12px 16px' }}>
      {order ? (
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              Order Details - {order.name}
            </Typography>
            <Typography variant="subtitle1">Order ID: {order.id}</Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="subtitle1">Select an order to view details.</Typography>
      )}
    </div>
  );
};

export default OrderDetails;
