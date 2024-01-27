// OrderList.jsx

import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Box, Button, Chip } from '@mui/material';
import { EditRounded } from '@mui/icons-material';
import '../src/style.css'
const OrderList = ({ orders, onOrderClick }) => {
    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const handleCardClick = (order) => {
        onOrderClick(order);
        setSelectedOrderId(order.orderId);
      };
  return (
    <div style={{ width: '519px', height: '599px', marginRight: '20px' }}>
    <Box sx={{ borderRadius: '8px', padding: '16px', width: '100%' }}>
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '8px' }}>
            <Box sx={{ fontWeight: '700',marginLeft: '10px', marginRight: '16px', fontSize: '13px', fontFamily:'Inter', lineHeight: '17px',letterSpacing: '0.65px', textTransform: 'uppercase' }}>
              ORDERS <Chip label={orders.length} />
            </Box>
          </Box>
      </Box>
      </Box>
      {orders.map((order) => (
        <Card 
        sx={{ backgroundColor:'#F5F5F5', aignSelf:'stretch', alignItems:'center', justifyContent: 'space-between',display: 'flex', flex: 1, marginLeft: '20px'}}
          key={order.orderId}
          onClick={() => handleCardClick(order)}
          style={{
            cursor: 'pointer',
            marginBottom: '10px',
            border: selectedOrderId === order.orderId ? '2px solid #020A08' : 'none', // Add border for selected card
          }}
        >
          <CardContent >
            <Typography variant="h6" component="div" className="card_item">
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'end', gap: '32px', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'start', gap: '32px' }}>
                        <Box className="details_font_format"sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '8px' }}>
                            <Box sx={{ color: '#00704B' ,fontSize: '14px' }}>{order.orderId}</Box>
                            <Box sx={{ fontSize: '14px', fontWeight: 'bold', marginRight: '8px' }}>{order.orderName}</Box>
                        </Box>
                        <Box className="orderList_avatar">
                        {/* <Avatar sx={{ width: '25px', height: '25px'}} src={order.logoUrl} /> */}
                        <Chip label={order.orderStatus} sx={{ textOverflow: 'none', width: '31px', height: '31px', padding: 0, textSizeAdjust: '5px'}} color="success" />
                        </Box>
                    </Box>
                </Box>               
                <Box sx={{ justifyContent: 'center' ,gap: '8px', display: 'flex', flexDirection: 'row', alignItems: 'end'}}>
                    <Button variant="contained" color="primary" startIcon={<EditRounded />} onClick={() => { window.open(order.orderSummaryLink) }}>Edit Order</Button>
                    {/* <Box className="card_details">
                        <Box sx={{ fontSize: '14px' }}>{order.orderType}</Box>
                        <Box sx={{ fontSize: '14px' }}>{order.summary.authorizedSupplier.authorizedDate}</Box>
                    </Box> */}
                </Box>
            </Typography>
            <Box sx={{ justifyContent: 'center' ,gap: '8px', display: 'flex', flexDirection: 'column', alignItems: 'end'}}>
                    <Box className="card_details_right">
                        <Box sx={{ fontSize: '14px' }}>{order.orderType}</Box>
                        <Box sx={{ fontSize: '14px' }}>{order.summary.authorizedSupplier.authorizedDate}</Box>
                    </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default OrderList;
