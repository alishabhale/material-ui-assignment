import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Dashboard from './Dashboard'
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import OrderList from './OrderList';
import OrderDetailsPage from './orderDetailsPage'

export default function MiniDrawer() {

  const orders = [
    { orderId: 'AAA4907-00019',
      orderStatus : 'RT',
      orderName: 'HOTEL/TECH WORK SQUAD GFR',
      dateRequested: new Date('2019-10-01'),
      orderType: 'Services',
      accountCode: '5830042',
      accountName: 'HM PAX ACCOMODATION (LABOUR)',
      logoUrl: 'https://dummyimage.com/500x400/00ff37/ffffff.png&text=RT',
      orderSummaryLink: 'https://www.pitechniques.com/4907-00019/summary',
      orderProgressLink: 'https://www.pitechniques.com/4907-00019/progress',
      summary : {
        component : [],
        authorizedSupplier: {
          authorizedSuppliersRefNumber : "Ref: PRJ001963SRIN",
          authorizedDate : "12 July 2019",
          authorizedBy: "Alish Bhale",
          invoiceChaseDate: "-",
          POChasedDate: "-",
          POConfirmedDate: "-",
          PORefNo: "-",
          manPower: 3,
          address: "ABC road, Pune, 100001",
          phoneNumber1: "8100000002",
          phoneNumber2: "8100000001",
          emailId: "repairs@services.com"
        },
        suppliers : [
          {
            "status" : "TQ1",
            "supplierName" : "Engineer Co. Ltd",
            "goods" : 3459.70,
            "freight" : 0,
            "total" : 3459.70,
            "currency" : "EUR",
            "base" : 3881.92
          },
          {
            "status" : "TQ2",
            "supplierName" : "Fintec Co. Ltd - Spares",
            "goods" : 4370.6,
            "freight" : 0,
            "total" : 4370.6,
            "currency" : "USD",
            "base" : 4370.6
          }
        ]
      }
    },
    { orderId: 'BBBB4907-00019',
      orderName: 'HOTEL/TECH WORK SQUAD GFR',
      dateRequested: new Date('2020-10-03'),
      orderType: 'Consumables',
      orderStatus : 'TQ',
      accountCode: '5830042',
      accountName: 'HM PAX ACCOMODATION (LABOUR)',
      logoUrl: 'https://dummyimage.com/500x400/00ff37/ffffff.png&text=RT',
      orderSummaryLink: 'https://www.pitechniques.com/4907-00019/summary',
      orderProgressLink: 'https://www.pitechniques.com/4907-00019/progress',
      summary : {
        component : [],
        authorizedSupplier: {
          authorizedSuppliersRefNumber : "Ref: PRJ001963SRIN",
          authorizedDate : "12 July 2019",
          authorizedBy: "Alish Bhale",
          invoiceChaseDate: "-",
          POChasedDate: "-",
          POConfirmedDate: "-",
          PORefNo: "-",
          manPower: 3,
          address: "ABC road, Pune, 100001",
          phoneNumber1: "8100000002",
          phoneNumber2: "8100000001",
          emailId: "repairs@services.com"
        },
        suppliers : [
          {
            "status" : "TQ3",
            "supplierName" : "Engineer Co. Ltd",
            "goods" : 3459.70,
            "freight" : 0,
            "total" : 3459.70,
            "currency" : "EUR",
            "base" : 3881.92
          },
          {
            "status" : "TQ4",
            "supplierName" : "Fintec Co. Ltd - Spares",
            "goods" : 4370.6,
            "freight" : 0,
            "total" : 4370.6,
            "currency" : "USD",
            "base" : 4370.6
          }
        ]
      }
    },
    { orderId: 'CCC4907-00019',
    orderName: 'HOTEL/TECH WORK SQUAD GFR',
    orderStatus : 'EO',
    dateRequested: new Date('2019-10-01'),
    orderType: 'Services',
    accountCode: '5830042',
    accountName: 'HM PAX ACCOMODATION (LABOUR)',
    logoUrl: 'https://dummyimage.com/500x400/00ff37/ffffff.png&text=RT',
    orderSummaryLink: 'https://www.pitechniques.com/4907-00019/summary',
    orderProgressLink: 'https://www.pitechniques.com/4907-00019/progress',
    summary : {
      component : [],
      authorizedSupplier: {
        authorizedSuppliersRefNumber : "ref: PR000001",
        authorizedDate : "12 July 2019",
        authorizedBy: "Alish Bhale",
        invoiceChaseDate: "-",
        POChasedDate: "-",
        POConfirmedDate: "-",
        PORefNo: "-",
        manPower: 3,
        address: "ABC road, Pune, 100001",
        phoneNumber1: "8100000002",
        phoneNumber2: "8100000001",
        emailId: "repairs@services.com"
      },
      suppliers : [
        {
          "status" : "TQ5",
          "supplierName" : "Engineer Co. Ltd",
          "goods" : 3459.70,
          "freight" : 0,
          "total" : 3459.70,
          "currency" : "EUR",
          "base" : 3881.92
        },
        {
          "status" : "TQ6",
          "supplierName" : "Fintec Co. Ltd - Spares",
          "goods" : 4370.6,
          "freight" : 0,
          "total" : 4370.6,
          "currency" : "USD",
          "base" : 4370.6
        }
      ]
    }
    },
    { orderId: 'DDDD4907-00019',
    orderName: 'HOTEL/TECH WORK SQUAD GFR',
    orderStatus : 'RT',
    dateRequested: new Date('2019-10-01'),
    orderType: 'Services',
    accountCode: '5830042',
    accountName: 'HM PAX ACCOMODATION (LABOUR)',
    logoUrl: 'https://dummyimage.com/500x400/00ff37/ffffff.png&text=RT',
    orderSummaryLink: 'https://www.pitechniques.com/4907-00019/summary',
    orderProgressLink: 'https://www.pitechniques.com/4907-00019/progress',
    summary : {
      component : [],
      authorizedSupplier: {
        authorizedSuppliersRefNumber : "ref: PR000001",
        authorizedDate : "12 July 2019",
        authorizedBy: "Alish Bhale",
        invoiceChaseDate: "-",
        POChasedDate: "-",
        POConfirmedDate: "-",
        PORefNo: "-",
        manPower: 3,
        address: "ABC road, Pune, 100001",
        phoneNumber1: "8100000002",
        phoneNumber2: "8100000001",
        emailId: "repairs@services.com"
      },
      suppliers : [
        {
          "status" : "TQ7",
          "supplierName" : "Engineer Co. Ltd",
          "goods" : 3459.70,
          "freight" : 0,
          "total" : 3459.70,
          "currency" : "EUR",
          "base" : 3881.92
        },
        {
          "status" : "TQ8",
          "supplierName" : "Fintec Co. Ltd - Spares",
          "goods" : 4370.6,
          "freight" : 0,
          "total" : 4370.6,
          "currency" : "USD",
          "base" : 4370.6
        }
      ]
    }
    },
    { orderId: 'EEE4907-00019',
    orderStatus : 'TQ',
    orderName: 'HOTEL/TECH WORK SQUAD GFR',
    dateRequested: new Date('2019-10-01'),
    orderType: 'Services',
    accountCode: '5830042',
    accountName: 'HM PAX ACCOMODATION (LABOUR)',
    logoUrl: 'https://dummyimage.com/500x400/00ff37/ffffff.png&text=RT',
    orderSummaryLink: 'https://www.pitechniques.com/4907-00019/summary',
    orderProgressLink: 'https://www.pitechniques.com/4907-00019/progress',
    summary : {
      component : [],
      authorizedSupplier: {
        authorizedSuppliersRefNumber : "ref: PR000001",
        authorizedDate : "12 July 2019",
        authorizedBy: "Alish Bhale",
        invoiceChaseDate: "-",
        POChasedDate: "-",
        POConfirmedDate: "-",
        PORefNo: "-",
        manPower: 3,
        address: "ABC road, Pune, 100001",
        phoneNumber1: "8100000002",
        phoneNumber2: "8100000001",
        emailId: "repairs@services.com"
      },
      suppliers : [
        {
          "status" : "TQ9",
          "supplierName" : "Engineer Co. Ltd",
          "goods" : 3459.70,
          "freight" : 0,
          "total" : 3459.70,
          "currency" : "EUR",
          "base" : 3881.92
        },
        {
          "status" : "TQ0",
          "supplierName" : "Fintec Co. Ltd - Spares",
          "goods" : 4370.6,
          "freight" : 0,
          "total" : 4370.6,
          "currency" : "USD",
          "base" : 4370.6
        }
      ]
    }
    }
  ];
 
  
  const OrderDetails = ({ order }) => (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          Order Details - {order.orderName}
        </Typography>
        {/* Display other order details here */}
      </CardContent>
    </Card>
  );
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [dashboardOpen, setDashboardOpen] = React.useState(false);

  const handleDashboardToggle = () => {
    setDashboardOpen(!dashboardOpen);
  };
  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };
  return (
<div>
<Dashboard open={dashboardOpen} onToggle={handleDashboardToggle} />
  <div  style={{ display: 'flex', padding: '20px', marginTop: '5%' , marginLeft: dashboardOpen ? '' : '5%' }}>
  <OrderList orders={orders} onOrderClick={handleOrderClick} />
      {selectedOrder && (
          <OrderDetailsPage order={selectedOrder} />
        )}
    </div>
</div>
  );
}
