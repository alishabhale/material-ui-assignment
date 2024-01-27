import { EditRounded } from "@mui/icons-material";
import { Avatar, Box, Button, Icon, Link, Rating, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import Chip from '@mui/material/Chip';
import StickyHeadTable from './TableList'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function BasicTabs({summary}) {
  const [value, setValue] = useState(0);
  console.log(summary)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ pl: '14px' }}>
          <Tab label="Summary" {...a11yProps(0)} />
          <Tab label="Order Lines" {...a11yProps(1)} />
          <Tab label="Suppliers" {...a11yProps(2)} />
          <Tab label="Analysis" {...a11yProps(3)} />
          <Tab label="Freight Details" {...a11yProps(4)} />
          <Tab label="Delivery" {...a11yProps(5)} />
          <Tab label="Invoice" {...a11yProps(6)} />
          <Tab label="Memos" {...a11yProps(7)} />
          <Tab label="Notes & Attachments" {...a11yProps(8)} />
          <Tab label="Budgets" {...a11yProps(9)} />

        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <OrderSummaryView summary={summary}/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
      Order Lines
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
      Suppliers
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
      Suppliers
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
      Suppliers
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
      Suppliers
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
      Suppliers
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
      Suppliers
      </CustomTabPanel>
      <CustomTabPanel value={value} index={8}>
      Suppliers
      </CustomTabPanel>
      <CustomTabPanel value={value} index={9}>
      Suppliers
      </CustomTabPanel>
    </Box>
  );
}

const OrderSummaryView = ({summary}) => {
  return <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', flex: 1, gap: '24px', p: '12px' }}>
    <Box sx={{ backgroundColor: '#8080801A', borderRadius: '8px', p: '24px', width: '100%' }}>

      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '8px' }}>
            <Box sx={{ fontWeight: '700', marginRight: '16px', fontSize: '16px', fontFamily:'Inter', lineHeight: '17px',letterSpacing: '0.65px', textTransform: 'uppercase' }}>
              COMPONENTS <Chip sx={{ height: '19px', fontWeight: '400', marginLeft: '10px', marginTop:'-5px', borderRadius: '32px',color: '#455357'}}label={summary.component.length} />
            </Box>
            <Box sx={{ fontWeight: '700', marginRight: '16px', fontSize: '12px', fontFamily:'Inter', fontStyle: 'italic', lineHeight: '17px',letterSpacing: '0.65px' }}>
              {summary.component.length !=0  ? summary.components : 'No Items Found' }
            </Box>
          </Box>
        </Box>
      </Box> 
    </Box>
    {/*  AUTHORIZE SUPPLIER */}
    <Box sx={{ backgroundColor: '#8080801A', borderRadius: '8px', p: '24px', width: '100%' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '8px' }}>
            <Box sx={{ fontWeight: '700', marginRight: '16px', fontFamily:'Inter', lineHeight: '17px',letterSpacing: '0.65px', textTransform: 'uppercase' }}>
              AUTHORIZE SUPPLIER <Chip sx={{ fontWeight: '400', marginLeft: '10px', marginTop:'-5px', borderRadius: '8px',color: '#455357'}}label={summary.authorizedSupplier.authorizedSuppliersRefNumber} />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'end', marginTop: '16px', gap: '40px', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '16px', gap: '60px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '8px' }}>
                <Box sx={{ fontSize: '14px' }}>Date Authorized:</Box>
                <Box sx={{ fontSize: '14px', fontWeight: 'bold', marginRight: '8px' }}>{summary.authorizedSupplier.authorizedDate}</Box>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '8px' }}>
                <Box sx={{ fontSize: '14px' }}>Authorized By:</Box>
                <Box sx={{ fontSize: '14px', fontWeight: 'bold', marginRight: '8px' }}>{summary.authorizedSupplier.authorizedBy}</Box>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '8px' }}>
                <Box sx={{ fontSize: '14px' }}>Invoice Cashed Date:</Box>
                <Box sx={{ fontSize: '14px', fontWeight: 'bold', marginRight: '8px' }}>{summary.authorizedSupplier.invoiceChaseDate}</Box>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '8px' }}>
                <Box sx={{ fontSize: '14px' }}>PO Cashed Date:</Box>
                <Box sx={{ fontSize: '14px', fontWeight: 'bold', marginRight: '8px' }}>{summary.authorizedSupplier.POChasedDate}</Box>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '8px' }}>
                <Box sx={{ fontSize: '14px' }}>PO Confirmed Date:</Box>
                <Box sx={{ fontSize: '14px', fontWeight: 'bold', marginRight: '8px' }}>{summary.authorizedSupplier.POConfirmedDate}</Box>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '8px' }}>
                <Box sx={{ fontSize: '14px' }}>PO Ref No:</Box>
                <Box sx={{ fontSize: '14px', fontWeight: 'bold', marginRight: '8px' }}>{summary.authorizedSupplier.PORefNo}</Box>
              </Box>
            </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'end', marginTop: '16px', gap: '32px', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '16px', gap: '32px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '8px' }}>
                <Box sx={{ fontSize: '14px' }}>Repairs (Riding Squads / Manpower)</Box>
                <Box sx={{ fontSize: '14px', fontWeight: 'bold', marginRight: '8px' }}>
                  <Rating name="size-small" defaultValue={summary.authorizedSupplier.manPower} size="small" />
                </Box>
              </Box>
            </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'end', gap: '32px', justifyContent: 'space-between' }}>
              <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '5px', gap: '32px' }}>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '8px' }}>
                <Box sx={{ fontSize: '14px', color: '#00704B'}}> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                      <path d="M5.54454 13.0299L5.57402 12.9343L5.54455 13.0299C5.69564 13.0765 5.84756 13.1 6 13.1C6.1549 13.1 6.30923 13.0753 6.46267 13.0265L6.46268 13.0265C6.61821 12.9769 6.75803 12.9023 6.8813 12.8024L6.88187 12.8019C7.53812 12.2619 8.15238 11.7066 8.7246 11.1361C9.29764 10.5648 9.7953 9.99087 10.2172 9.41428C10.6394 8.83744 10.9751 8.26637 11.2237 7.70103C11.4736 7.13272 11.6 6.57945 11.6 6.04203C11.6 4.51272 11.0445 3.26858 9.93318 2.31872C8.82642 1.37272 7.51369 0.9 6 0.9C4.4863 0.9 3.17358 1.37272 2.06682 2.31872C0.955506 3.26858 0.4 4.51272 0.4 6.04203C0.4 6.57944 0.52642 7.13371 0.776251 7.70402C1.02489 8.27163 1.36192 8.84286 1.78652 9.41776C2.21069 9.99207 2.70939 10.5658 3.28228 11.1391C3.85454 11.7118 4.46883 12.2681 5.12513 12.8082L5.12627 12.8091C5.25107 12.9088 5.39071 12.9824 5.54454 13.0299ZM9.19163 8.7335C8.45339 9.75524 7.3905 10.8253 6 11.9433C4.6095 10.8253 3.54661 9.75524 2.80837 8.7335C2.05726 7.69396 1.69298 6.7981 1.69298 6.04203C1.69298 4.88257 2.10403 3.93467 2.92615 3.1903C3.74994 2.44441 4.77224 2.06984 6 2.06984C7.22776 2.06984 8.25006 2.44441 9.07385 3.1903C9.89597 3.93467 10.307 4.88257 10.307 6.04203C10.307 6.7981 9.94274 7.69396 9.19163 8.7335ZM6.00124 7.19448C6.38711 7.19448 6.7212 7.07097 6.99787 6.82309C7.2748 6.57497 7.41719 6.27135 7.41719 5.91703C7.41719 5.56259 7.27428 5.25925 6.9964 5.01187C6.71894 4.76488 6.38454 4.6418 5.99876 4.6418C5.61289 4.6418 5.2788 4.76531 5.00213 5.01319C4.72519 5.26131 4.58281 5.56493 4.58281 5.91925C4.58281 6.27369 4.72572 6.57703 5.0036 6.82441C5.28106 7.0714 5.61546 7.19448 6.00124 7.19448Z" fill="#00704B" stroke="#00704B" strokeWidth="0.2"/>
                  </svg>  {summary.authorizedSupplier.address}
                </Box>
                <Box sx={{ fontSize: '14px' , color: '#00704B'}}>  
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M4.87326 1.58632L4.87324 1.58632L5.27777 3.66323L5.27868 3.66792L5.27857 3.66794C5.30799 3.87008 5.30294 4.05079 5.25807 4.20681C5.25807 4.20682 5.25807 4.20682 5.25807 4.20682L5.16196 4.17918C5.12215 4.31764 5.05066 4.43393 4.94748 4.52805L4.87326 1.58632ZM4.87326 1.58632L4.87282 1.58424C4.83097 1.3913 4.7325 1.22854 4.58008 1.09839C4.42587 0.966717 4.24563 0.9 4.04342 0.9H1.74118C1.50439 0.9 1.30182 0.980752 1.14073 1.14332C0.979696 1.30583 0.9 1.50981 0.9 1.74797C0.9 3.09427 1.21309 4.44379 1.83704 5.79575C2.46089 7.14751 3.33945 8.39056 4.47154 9.52493C5.60369 10.6594 6.84682 11.5391 8.20092 12.163C9.5551 12.7869 10.9057 13.1 12.252 13.1C12.4902 13.1 12.6942 13.0203 12.8567 12.8593C13.0192 12.6982 13.1 12.4956 13.1 12.2588V9.97017C13.1 9.77499 13.035 9.5995 12.9077 9.44721L12.831 9.51132L12.9077 9.4472C12.7811 9.29566 12.6173 9.19386 12.4201 9.14179L12.4201 9.14164L12.4145 9.14049L10.4544 8.7414L10.4544 8.74121L10.4482 8.74035C10.2655 8.71495 10.0881 8.72706 9.91684 8.77739C9.74386 8.82824 9.59507 8.91756 9.47236 9.04507C9.47217 9.04527 9.47198 9.04547 9.47179 9.04567L7.94264 10.5879C7.4656 10.3147 7.02048 10.0207 6.60719 9.70598C6.17456 9.37657 5.76617 9.01979 5.38201 8.63564L5.38176 8.6354C4.99186 8.24818 4.62965 7.84194 4.2951 7.41667C3.97701 7.01234 3.6925 6.58461 3.44155 6.13342L5.01611 4.6008L4.87326 1.58632ZM3.80995 2.16741C3.8009 2.13121 3.78507 2.10406 3.76244 2.08597C3.73982 2.06786 3.71041 2.05881 3.67421 2.05881H2.16469C2.13755 2.05881 2.11493 2.06786 2.09682 2.08597C2.07871 2.10406 2.06966 2.12669 2.06966 2.15384M3.80995 2.16741L3.71179 2.1865L3.71236 2.18944M3.80995 2.16741L4.11674 3.7448C4.12579 3.77194 4.12692 3.80135 4.12013 3.83303M3.80995 2.16741L3.71293 2.19166C3.71274 2.1909 3.71255 2.19016 3.71236 2.18944M3.71236 2.18944C3.70719 2.17015 3.70109 2.16495 3.69998 2.16406L3.69996 2.16404L3.69995 2.16404C3.69908 2.16334 3.69342 2.15881 3.67421 2.15881H2.17033M3.71236 2.18944L4.01858 3.76389L4.01775 3.76405L4.02188 3.77642C4.02455 3.78446 4.0259 3.7955 4.02235 3.81207M2.17033 2.15881C2.17001 2.15466 2.16969 2.15051 2.16938 2.14636L2.16469 2.14671L2.15806 2.14721L2.15802 2.14721L2.06966 2.15384M2.17033 2.15881H2.16469C2.16355 2.15881 2.16306 2.15889 2.16308 2.15889C2.1631 2.15889 2.16363 2.1588 2.16452 2.15844L2.16469 2.15835L2.16673 2.15729C2.16715 2.157 2.16741 2.15678 2.16751 2.1567C2.16751 2.1567 2.16752 2.15669 2.16752 2.15669C2.16752 2.15668 2.16753 2.15668 2.16753 2.15668C2.16761 2.15658 2.16784 2.15632 2.16813 2.15588L2.1692 2.15384M2.17033 2.15881L2.1692 2.15384M2.06966 2.15384H2.16465L2.16469 2.15384L2.1692 2.15384M2.06966 2.15384C2.10586 2.63619 2.18482 3.12624 2.30654 3.62398M2.1692 2.15384L2.30654 3.62398M2.30654 3.62398C2.42025 4.08896 2.57602 4.55275 2.77383 5.01535L2.85106 4.94144M2.30654 3.62398L2.40368 3.60023C2.40368 3.60023 2.40368 3.60023 2.40368 3.60023C2.5132 4.04805 2.66228 4.49511 2.85106 4.94144M2.85106 4.94144C2.86489 4.97414 2.87894 5.00684 2.8932 5.03953L4.07601 3.9077C4.09864 3.88959 4.11334 3.8647 4.12013 3.83303M2.85106 4.94144L4.00688 3.83545L4.01329 3.82932L4.01353 3.82962C4.01603 3.82762 4.01979 3.82403 4.02235 3.81207M4.12013 3.83303L4.02235 3.81207M4.12013 3.83303L4.02235 3.81208L4.02235 3.81207M9.12949 11.1819L10.2852 10.0137C10.2853 10.0136 10.2853 10.0136 10.2854 10.0135C10.2932 10.0057 10.2994 10.0007 10.304 9.99753C10.3061 9.99614 10.3076 9.99522 10.3087 9.99464C10.3105 9.99487 10.3137 9.99549 10.3186 9.99713L10.3184 9.99783L10.3303 10.0003L11.8102 10.3011C11.8298 10.3063 11.835 10.3125 11.8359 10.3136L11.8359 10.3136C11.8366 10.3145 11.8412 10.3201 11.8412 10.3394V11.8191C11.4091 11.7972 10.9433 11.7298 10.4436 11.6163C9.98917 11.5131 9.55115 11.3683 9.12949 11.1819Z" fill="#00704B" stroke="#00704B" strokeWidth="0.2"/>
                  </svg>  {summary.authorizedSupplier.phoneNumber1}
                </Box>
                <Box sx={{ fontSize: '14px', color: '#00704B' }}>  
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M9.33333 10.6667H10.6667V1.33333H9.33333V10.6667ZM2.66667 7.33333C2.85556 7.33333 3.01389 7.26944 3.14167 7.14167C3.26944 7.01389 3.33333 6.85556 3.33333 6.66667C3.33333 6.47778 3.26944 6.31944 3.14167 6.19167C3.01389 6.06389 2.85556 6 2.66667 6C2.47778 6 2.31944 6.06389 2.19167 6.19167C2.06389 6.31944 2 6.47778 2 6.66667C2 6.85556 2.06389 7.01389 2.19167 7.14167C2.31944 7.26944 2.47778 7.33333 2.66667 7.33333ZM2.66667 9.33333C2.85556 9.33333 3.01389 9.26945 3.14167 9.14167C3.26944 9.01389 3.33333 8.85556 3.33333 8.66667C3.33333 8.47778 3.26944 8.31944 3.14167 8.19167C3.01389 8.06389 2.85556 8 2.66667 8C2.47778 8 2.31944 8.06389 2.19167 8.19167C2.06389 8.31944 2 8.47778 2 8.66667C2 8.85556 2.06389 9.01389 2.19167 9.14167C2.31944 9.26945 2.47778 9.33333 2.66667 9.33333ZM2.66667 5.33333H6.66667C6.85556 5.33333 7.01389 5.26944 7.14167 5.14167C7.26944 5.01389 7.33333 4.85556 7.33333 4.66667V3.33333C7.33333 3.14444 7.26944 2.98611 7.14167 2.85833C7.01389 2.73056 6.85556 2.66667 6.66667 2.66667H2.66667C2.47778 2.66667 2.31944 2.73056 2.19167 2.85833C2.06389 2.98611 2 3.14444 2 3.33333V4.66667C2 4.85556 2.06389 5.01389 2.19167 5.14167C2.31944 5.26944 2.47778 5.33333 2.66667 5.33333ZM4.66667 7.33333C4.85556 7.33333 5.01389 7.26944 5.14167 7.14167C5.26944 7.01389 5.33333 6.85556 5.33333 6.66667C5.33333 6.47778 5.26944 6.31944 5.14167 6.19167C5.01389 6.06389 4.85556 6 4.66667 6C4.47778 6 4.31944 6.06389 4.19167 6.19167C4.06389 6.31944 4 6.47778 4 6.66667C4 6.85556 4.06389 7.01389 4.19167 7.14167C4.31944 7.26944 4.47778 7.33333 4.66667 7.33333ZM4.66667 9.33333C4.85556 9.33333 5.01389 9.26945 5.14167 9.14167C5.26944 9.01389 5.33333 8.85556 5.33333 8.66667C5.33333 8.47778 5.26944 8.31944 5.14167 8.19167C5.01389 8.06389 4.85556 8 4.66667 8C4.47778 8 4.31944 8.06389 4.19167 8.19167C4.06389 8.31944 4 8.47778 4 8.66667C4 8.85556 4.06389 9.01389 4.19167 9.14167C4.31944 9.26945 4.47778 9.33333 4.66667 9.33333ZM6.66667 7.33333C6.85556 7.33333 7.01389 7.26944 7.14167 7.14167C7.26944 7.01389 7.33333 6.85556 7.33333 6.66667C7.33333 6.47778 7.26944 6.31944 7.14167 6.19167C7.01389 6.06389 6.85556 6 6.66667 6C6.47778 6 6.31944 6.06389 6.19167 6.19167C6.06389 6.31944 6 6.47778 6 6.66667C6 6.85556 6.06389 7.01389 6.19167 7.14167C6.31944 7.26944 6.47778 7.33333 6.66667 7.33333ZM6.66667 9.33333C6.85556 9.33333 7.01389 9.26945 7.14167 9.14167C7.26944 9.01389 7.33333 8.85556 7.33333 8.66667C7.33333 8.47778 7.26944 8.31944 7.14167 8.19167C7.01389 8.06389 6.85556 8 6.66667 8C6.47778 8 6.31944 8.06389 6.19167 8.19167C6.06389 8.31944 6 8.47778 6 8.66667C6 8.85556 6.06389 9.01389 6.19167 9.14167C6.31944 9.26945 6.47778 9.33333 6.66667 9.33333ZM8 10V2H1.33333V10H8ZM9.33333 12C9.07778 12 8.85278 11.9389 8.65833 11.8167C8.46389 11.6944 8.30556 11.5333 8.18333 11.3333H1.33333C0.966667 11.3333 0.652778 11.2028 0.391667 10.9417C0.130556 10.6806 0 10.3667 0 10V2C0 1.63333 0.130556 1.31944 0.391667 1.05833C0.652778 0.797222 0.966667 0.666667 1.33333 0.666667H8.18333C8.30556 0.466667 8.46389 0.305556 8.65833 0.183333C8.85278 0.0611111 9.07778 0 9.33333 0H10.6667C11.0333 0 11.3472 0.130556 11.6083 0.391667C11.8694 0.652778 12 0.966667 12 1.33333V10.6667C12 11.0333 11.8694 11.3472 11.6083 11.6083C11.3472 11.8694 11.0333 12 10.6667 12H9.33333Z" fill="#00704B"/>
                  </svg>  {summary.authorizedSupplier.phoneNumber2}
                </Box>
                <Box sx={{ fontSize: '14px', color: '#00704B' }}>  
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16 14" fill="none">
                    <path d="M8.43852 7.28852L8.43859 7.28865L8.44313 7.28574L14.3 3.53655V11.5538C14.3 11.602 14.2855 11.6346 14.2601 11.6601C14.2346 11.6855 14.202 11.7 14.1538 11.7H1.84616C1.79797 11.7 1.76537 11.6855 1.73993 11.6601C1.71448 11.6346 1.69998 11.602 1.69998 11.5538V3.53841V3.53655L7.55686 7.28574L7.55679 7.28586L7.56148 7.28852C7.6292 7.32689 7.69952 7.35728 7.77239 7.37948C7.8472 7.40227 7.92317 7.41382 8 7.41382C8.07683 7.41382 8.1528 7.40227 8.22761 7.37948C8.30047 7.35728 8.3708 7.32689 8.43852 7.28852ZM0.749285 12.6507C1.04847 12.9499 1.41614 13.1 1.84616 13.1H14.1538C14.5839 13.1 14.9515 12.9499 15.2507 12.6507C15.5499 12.3515 15.7 11.9839 15.7 11.5538V2.44617C15.7 2.01615 15.5499 1.64847 15.2507 1.34929C14.9515 1.05011 14.5839 0.9 14.1538 0.9H1.84616C1.41614 0.9 1.04847 1.05011 0.749285 1.34929C0.450103 1.64847 0.299994 2.01615 0.299994 2.44617V11.5538C0.299994 11.9839 0.450103 12.3515 0.749285 12.6507ZM8 6.08142L2.06606 2.29998H13.9339L8 6.08142Z" fill="#00704B" stroke="#00704B" strokeWidth="0.2"/>
                  </svg>   <Link sx={{ fontSize: '14px', color: '#00704B' }} component="button" variant="body2"
                                onClick={() => {
                                  console.info("I'm a button.");
                                }}>{summary.authorizedSupplier.emailId}
                            </Link>
                </Box>
              </Box>
            </Box>
            </Box>
          </Box>
        </Box>
    </Box>
    {/*  AUTHORIZE SUPPLIER */}
    <Box sx={{ backgroundColor: '#8080801A', borderRadius: '8px', p: '24px', width: '100%' }}>
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '8px' }}>
            <Box sx={{ marginBottom: '10px',fontWeight: '700', marginRight: '16px', fontSize: '16px', fontFamily:'Inter', lineHeight: '17px',letterSpacing: '0.65px', textTransform: 'uppercase' }}>
              SUPPLIERS <Chip sx={{ height: '19px', fontWeight: '400', marginLeft: '10px', marginTop:'-5px', borderRadius: '32px',color: '#455357'}} label={summary.suppliers.length} />
            </Box>
          </Box>
      </Box>
      <StickyHeadTable suppliers={summary.suppliers}/>
    </Box>
  </Box>;
};

const OrderDetailsPage = ({order}) => {
  return <Box sx={{ boxShadow: '0px 1px 8px 0px rgba(0, 0, 0, 0.12)', flexShrink: 0, width: '850px', display: 'flex', flexDirection: 'column', flex: 1, borderRadius: '8px' }}>
    <Box sx={{ backgroundColor: '#E8ECED', borderTopLeftRadius: '8px', borderTopRightRadius: '8px', padding: '24px' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          {/* <Avatar sx={{ width: '48px', height: '48px', marginRight: '16px' }} src={order.logoUrl} /> */}
          <Chip sx={{ textOverflow: 'none', width: '31px', height: '31px', padding: 0, textSizeAdjust: '5px'}}label={order.orderStatus} color="success" />
          <Box sx={{ fontSize: '24px', fontWeight: 'bold', marginRight: '16px' , marginLeft: '16px'}}>{order.orderId}</Box>
          <Box sx={{ fontSize: '18px', fontWeight: 'bold' }}>{order.orderName}</Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Button variant="contained" color="primary" startIcon={<EditRounded />}>Edit Order</Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'end', marginTop: '16px', gap: '32px', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '16px', gap: '32px' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '8px' }}>
            <Box sx={{ fontSize: '14px' }}>Date Requested:</Box>
            <Box sx={{ fontSize: '14px', fontWeight: 'bold', marginRight: '8px' }}>{order.dateRequested.toLocaleDateString()}</Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '8px' }}>
            <Box sx={{ fontSize: '14px' }}>Order Type:</Box>
            <Box sx={{ fontSize: '14px', fontWeight: 'bold', marginRight: '8px' }}>{order.orderType}</Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: '8px' }}>
            <Box sx={{ fontSize: '14px' }}>Account Code:</Box>
            <Box sx={{ fontSize: '14px', fontWeight: 'bold', marginRight: '8px' }}>{order.accountCode} - {order.accountName}</Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'end', gap: '8px', height: '100%' }}>
        <Link sx={{ fontSize: '14px', color: '#00704B' }} component="button" variant="body2"
              onClick={() => {
                console.info("I'm a button.");
              }}>Order Summary
        </Link>
        <Link sx={{ fontSize: '14px', color: '#00704B' }} component="button" variant="body2"
            onClick={() => {
              console.info("I'm a button.");
            }}>Order Progress
        </Link>
          {/* <Button variant="text" color="primary" onClick={() => { window.open(order.orderSummaryLink) }}>Order Summary</Button>
          <Button variant="text" color="primary" onClick={() => { window.open(order.orderProgressLink) }}>Order Progress</Button> */}
        </Box>
      </Box>
    </Box>
    <Box sx={{ px: '24px',py: '8px', display: 'flex', gap: '32px', border: '1px solid #CDD6DB', borderLeftWidth: 0, borderRightWidth: 0, }}>
      <Button variant="text" sx={{ color:'#00704B' }}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g>
            <path d="M6.30773 21.5C5.8026 21.5 5.37503 21.325 5.02503 20.975C4.67503 20.625 4.50003 20.1974 4.50003 19.6923V4.30773C4.50003 3.8026 4.67503 3.37503 5.02503 3.02503C5.37503 2.67503 5.8026 2.50003 6.30773 2.50003H13.502C13.743 2.50003 13.9747 2.54683 14.1971 2.64043C14.4196 2.73401 14.6128 2.86286 14.777 3.02696L18.9731 7.22306C19.1372 7.38717 19.266 7.58045 19.3596 7.80288C19.4532 8.02531 19.5 8.25704 19.5 8.49806V10.8788L11.6346 18.7192V21.5H6.30773ZM14.0865 21.4904C13.966 21.4904 13.8606 21.4452 13.7702 21.3548C13.6798 21.2644 13.6346 21.1589 13.6346 21.0384V20.175C13.6346 20.0545 13.659 19.9372 13.7077 19.8231C13.7564 19.709 13.8224 19.6103 13.9058 19.5269L18.4769 14.95L20.1845 16.6269L15.598 21.2192C15.5147 21.3128 15.416 21.3814 15.3019 21.425C15.1878 21.4686 15.0705 21.4904 14.95 21.4904H14.0865ZM20.8134 16.0039L19.1307 14.3116L19.8692 13.5731C20.0499 13.3923 20.266 13.3004 20.5173 13.2972C20.7685 13.2939 20.9762 13.3795 21.1403 13.5539L21.5711 14C21.7352 14.1744 21.8156 14.3862 21.8124 14.6356C21.8092 14.8849 21.7223 15.0949 21.5518 15.2654L20.8134 16.0039ZM14.4039 8.49998H18L13.5 4.00001V7.59613C13.5 7.85381 13.5863 8.06887 13.7587 8.24131C13.9311 8.41376 14.1462 8.49998 14.4039 8.49998Z" fill="#00704B"/>
          </g>
        </svg> Summary 
      </Button>
      <Button variant="text"sx={{ color:'#00704B' }}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g>
            <path d="M17.5 7.42309H6.50003V4.70947C6.50003 4.45318 6.58665 4.23882 6.7599 4.06639C6.93314 3.89396 7.1478 3.80774 7.40388 3.80774H16.5922C16.8525 3.80774 17.0689 3.89436 17.2413 4.06759C17.4138 4.24082 17.5 4.45549 17.5 4.71159V7.42309ZM17.8077 12.3077C18.091 12.3077 18.3285 12.2118 18.5202 12.0202C18.7118 11.8285 18.8077 11.591 18.8077 11.3077C18.8077 11.0243 18.7118 10.7868 18.5202 10.5952C18.3285 10.4035 18.091 10.3077 17.8077 10.3077C17.5243 10.3077 17.2868 10.4035 17.0952 10.5952C16.9035 10.7868 16.8077 11.0243 16.8077 11.3077C16.8077 11.591 16.9035 11.8285 17.0952 12.0202C17.2868 12.2118 17.5243 12.3077 17.8077 12.3077ZM8.30773 19H15.6923C15.782 19 15.8558 18.9711 15.9135 18.9134C15.9712 18.8557 16 18.782 16 18.6923V14.7307H8V18.6923C8 18.782 8.02885 18.8557 8.08655 18.9134C8.14425 18.9711 8.21798 19 8.30773 19ZM8.30773 20.5C7.81061 20.5 7.38505 20.323 7.03105 19.9689C6.67704 19.6149 6.50003 19.1894 6.50003 18.6923V16.5H3.69235C3.43627 16.5 3.22161 16.4133 3.04838 16.2401C2.87515 16.0669 2.78853 15.8522 2.78853 15.5961V10.8077C2.78853 10.0993 3.03051 9.50561 3.51448 9.02644C3.99845 8.54729 4.58978 8.30771 5.28848 8.30771H18.7115C19.4198 8.30771 20.0136 8.54729 20.4928 9.02644C20.9719 9.50561 21.2115 10.0993 21.2115 10.8077V15.5961C21.2115 15.8522 21.1249 16.0669 20.9516 16.2401C20.7784 16.4133 20.5637 16.5 20.3077 16.5H17.5V18.6923C17.5 19.1894 17.323 19.6149 16.969 19.9689C16.615 20.323 16.1894 20.5 15.6923 20.5H8.30773Z" fill="#00704B"/>
          </g>
        </svg> Print Order Details
      </Button>
      <Button variant="text"sx={{ color:'#00704B' }}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g>
            <path d="M18.1538 16.25H21.6596C21.8721 16.25 22.0502 16.3219 22.194 16.4657C22.3377 16.6095 22.4096 16.7877 22.4096 17.0003C22.4096 17.2129 22.3377 17.391 22.194 17.5346C22.0502 17.6782 21.8721 17.75 21.6596 17.75H19.7942L22.4769 20.4327C22.6154 20.5696 22.6846 20.7406 22.6846 20.9459C22.6846 21.1512 22.6154 21.3282 22.4769 21.4769C22.3282 21.632 22.15 21.708 21.9423 21.7048C21.7346 21.7016 21.5564 21.6256 21.4077 21.4769L18.75 18.8192V20.6596C18.75 20.8721 18.6781 21.0502 18.5343 21.194C18.3905 21.3377 18.2123 21.4096 17.9997 21.4096C17.7871 21.4096 17.609 21.3377 17.4654 21.194C17.3218 21.0502 17.25 20.8721 17.25 20.6596V17.1539C17.25 16.8978 17.3366 16.6831 17.5099 16.5099C17.6831 16.3366 17.8978 16.25 18.1538 16.25ZM13.5 4.00001V7.59998C13.5 7.85498 13.5863 8.06873 13.7588 8.24123C13.9313 8.41373 14.145 8.49998 14.4 8.49998H18L13.5 4.00001ZM6.30772 2.50003H13.502C13.7458 2.50003 13.9783 2.54683 14.1993 2.64043C14.4203 2.73401 14.6128 2.86286 14.7769 3.02696L18.9731 7.22306C19.1371 7.38717 19.266 7.57973 19.3596 7.80073C19.4532 8.02175 19.5 8.25419 19.5 8.49806V13.3462C19.5 13.6023 19.4134 13.8169 19.2401 13.9902C19.0669 14.1634 18.8522 14.25 18.5961 14.25H16.1538C15.8978 14.25 15.6831 14.3369 15.5099 14.5106C15.3366 14.6843 15.25 14.8995 15.25 15.1563V20.5937C15.25 20.8505 15.1634 21.0657 14.9902 21.2394C14.8169 21.4131 14.6023 21.5 14.3462 21.5H6.30772C5.80259 21.5 5.37502 21.325 5.02502 20.975C4.67502 20.625 4.50002 20.1974 4.50002 19.6923V4.30773C4.50002 3.8026 4.67502 3.37503 5.02502 3.02503C5.37502 2.67503 5.80259 2.50003 6.30772 2.50003Z" fill="#00704B"/>
          </g>
        </svg>Change Delivery Status
      </Button>
      <Button variant="text"sx={{ color:'#00704B' }}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g>
            <path d="M9.00001 11.75H15C15.2125 11.75 15.3906 11.6781 15.5344 11.5343C15.6781 11.3905 15.75 11.2123 15.75 10.9997C15.75 10.7871 15.6781 10.609 15.5344 10.4654C15.3906 10.3218 15.2125 10.25 15 10.25H9.00001C8.78751 10.25 8.60939 10.3219 8.46566 10.4657C8.32191 10.6095 8.25003 10.7877 8.25003 11.0003C8.25003 11.2129 8.32191 11.391 8.46566 11.5346C8.60939 11.6782 8.78751 11.75 9.00001 11.75ZM9.00001 7.74998H15C15.2125 7.74998 15.3906 7.67808 15.5344 7.53428C15.6781 7.39046 15.75 7.21227 15.75 6.99968C15.75 6.78708 15.6781 6.60899 15.5344 6.46541C15.3906 6.32182 15.2125 6.25003 15 6.25003H9.00001C8.78751 6.25003 8.60939 6.32193 8.46566 6.46573C8.32191 6.60955 8.25003 6.78775 8.25003 7.00033C8.25003 7.21293 8.32191 7.39102 8.46566 7.53461C8.60939 7.67819 8.78751 7.74998 9.00001 7.74998ZM19.4307 20.2058L15.694 15.3556C15.4326 15.0032 15.1128 14.7308 14.7346 14.5385C14.3564 14.3462 13.9449 14.25 13.5 14.25H4.50003V4.30773C4.50003 3.8026 4.67503 3.37503 5.02503 3.02503C5.37503 2.67503 5.8026 2.50003 6.30773 2.50003H17.6923C18.1974 2.50003 18.625 2.67503 18.975 3.02503C19.325 3.37503 19.5 3.8026 19.5 4.30773V19.6923C19.5 19.7848 19.4942 19.8727 19.4827 19.9559C19.4711 20.0391 19.4538 20.1224 19.4307 20.2058ZM6.30773 21.5C5.8026 21.5 5.37503 21.325 5.02503 20.975C4.67503 20.625 4.50003 20.1974 4.50003 19.6923V15.75H13.5C13.7055 15.75 13.8956 15.796 14.0703 15.8879C14.245 15.9799 14.394 16.1077 14.5173 16.2712L18.3808 21.3288C18.2782 21.3878 18.1683 21.4311 18.051 21.4586C17.9336 21.4862 17.8141 21.5 17.6923 21.5H6.30773Z" fill="#00704B"/>
          </g>
        </svg>Reports
      </Button>
      <Button variant="text"sx={{ color:'#00704B' }}> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g>
          <path d="M11.193 22C10.7485 22 10.3319 21.9048 9.94297 21.7143C9.55408 21.5238 9.22472 21.254 8.95487 20.9048L4.16916 14.8333C4.04218 14.6905 3.98662 14.5198 4.00249 14.3214C4.01837 14.123 4.08979 13.9603 4.21678 13.8333C4.53424 13.5 4.91519 13.3016 5.35964 13.2381C5.80408 13.1746 6.21678 13.2619 6.59773 13.5L8.35964 14.5714V6.7619C8.35964 6.49206 8.45091 6.26587 8.63345 6.08333C8.81599 5.90079 9.04218 5.80952 9.31202 5.80952C9.58186 5.80952 9.81202 5.90079 10.0025 6.08333C10.193 6.26587 10.2882 6.49206 10.2882 6.7619V11.5238H17.4073C18.2009 11.5238 18.8755 11.8016 19.4311 12.3571C19.9866 12.9127 20.2644 13.5873 20.2644 14.381V18.1905C20.2644 19.2381 19.8914 20.1349 19.1454 20.881C18.3993 21.627 17.5025 22 16.4549 22H11.193ZM12.6215 9.61905C12.3517 9.61905 12.1255 9.52778 11.943 9.34524C11.7604 9.1627 11.6692 8.93651 11.6692 8.66667C11.6692 8.63492 11.7088 8.47619 11.7882 8.19048C11.9152 7.96825 12.0104 7.74206 12.0739 7.5119C12.1374 7.28175 12.1692 7.03175 12.1692 6.7619C12.1692 5.96825 11.8914 5.29365 11.3358 4.7381C10.7803 4.18254 10.1057 3.90476 9.31202 3.90476C8.51837 3.90476 7.84376 4.18254 7.28821 4.7381C6.73265 5.29365 6.45487 5.96825 6.45487 6.7619C6.45487 7.03175 6.48662 7.28175 6.55011 7.5119C6.6136 7.74206 6.70884 7.96825 6.83583 8.19048C6.88345 8.26984 6.91519 8.34921 6.93106 8.42857C6.94694 8.50794 6.95487 8.5873 6.95487 8.66667C6.95487 8.93651 6.86757 9.1627 6.69297 9.34524C6.51837 9.52778 6.29614 9.61905 6.0263 9.61905C5.8517 9.61905 5.689 9.57143 5.53821 9.47619C5.38741 9.38095 5.27233 9.2619 5.19297 9.11905C4.98662 8.76984 4.82789 8.39683 4.71678 8C4.60567 7.60317 4.55011 7.19048 4.55011 6.7619C4.55011 5.44444 5.0144 4.32143 5.94297 3.39286C6.87154 2.46429 7.99456 2 9.31202 2C10.6295 2 11.7525 2.46429 12.6811 3.39286C13.6096 4.32143 14.0739 5.44444 14.0739 6.7619C14.0739 7.19048 14.0184 7.60317 13.9073 8C13.7961 8.39683 13.6374 8.76984 13.4311 9.11905C13.3517 9.2619 13.2406 9.38095 13.0977 9.47619C12.9549 9.57143 12.7961 9.61905 12.6215 9.61905Z" fill="#00704B"/>
        </g>
      </svg>Actions</Button>
    </Box>
    <Box sx={{ py: '8px', display: 'flex', gap: '32px', border: '1px solid #CDD6DB', borderLeftWidth: 0, borderRightWidth: 0, }}>
      <BasicTabs summary={order.summary}/>
    </Box>
  </Box>;
};

export default OrderDetailsPage;
