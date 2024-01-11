import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
// import { BiCoffee, BiBook, BiCode, BiHeart, BiRocket } from 'react-icons/bi';
import { AiOutlineTool } from 'react-icons/ai';
import { IoSettingsSharp } from 'react-icons/io5';
import { GiReceiveMoney } from 'react-icons/gi';
import { RiSecurePaymentLine } from 'react-icons/ri';
import { HiOutlineSupport } from 'react-icons/hi';
import '../css/specialcard.css'

const cardData = [
  { id: 1, icon: <AiOutlineTool size={32} color="#FF5733"/> , subHeading: 'Expert ATM Sales and Repairs', paragraph: 'Unparalleled expertise in providing top-tier ATM sales and repair services' },
  { id: 2, icon: <IoSettingsSharp size={32} color="#FF5733" />, subHeading: 'Comprehensive ATM Servicing', paragraph: 'Complete and thorough ATM servicing, backed by dedicated aftersales support for a seamless experience.' },
  { id: 3, icon: <GiReceiveMoney size={32} color="#FF5733"/>, subHeading: 'Efficient ATM Installation Services', paragraph: 'Swift and efficient ATM installation services, ensuring a hassle-free setup process.' },
  { id: 4, icon: <RiSecurePaymentLine size={32} color="#FF5733"/>, subHeading: 'Trusted ATM Maintenance Solutions', paragraph: 'Reliable and trusted ATM maintenance solutions for optimal machine performance.' },
  { id: 5, icon: <HiOutlineSupport size={32} color="#FF5733"/>, subHeading: 'Professional ATM Support and Care', paragraph: 'Professional support and care throughout the entire ATM lifecycle, ensuring operational excellence.' },
];

const SpecialCards = () => {
  return (
    <Grid container spacing={3} style={{ marginTop: '20px'}}>
      {cardData.map((card) => (
        <Grid item xs={12} sm={6} lg={4} key={card.id}>
          <div className="card-container">
            <Card className="card" elevation={3}  >
              <CardContent>
                <div className="icon-container">{card.icon}</div>
                <Typography variant="h6">{card.subHeading}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {card.paragraph}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default SpecialCards;
