import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import BackButton from '../components/buttons/BackButton';
import '../laz.css'
import PayButtonStep2 from '../components/buttons/PayButtonStep2';
import { BsFillExclamationCircleFill } from "react-icons/bs";
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import PaymentImage from '../assets/payment.png'

const styles = {
    checkoutSection: {boxShadow: '3px 3px 3px 0px rgba(0, 0, 0, 0.05)', borderRadius: '10px', background: '#F8F8F8', 
         padding: '20px', margin: '2rem'
    }, 
    inputDefault: {
        height: '49px', padding: '20px 10px', flexWrap: 'wrap',
        border: '1px solid #D9D9D9'
    },
    inputLabel: {display: 'flex', flexDirection: 'row', gap: '1rem', flexWrap: 'wrap', justifyContent: 'space-evenly', paddingBottom: '0.8rem'},
    classLabel: {paddingBottom: '0.4rem'},
    textStyle: {color: '#3A3A3A', fontSize: '16px', fontStyle: 'normal', lineHeight: '22.08px', letterSpacing:'0.48px' },
    productsLayout: {display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', alignContent: 'flex-start', 
        rowGap: '10px', flexWrap: 'wrap'
    }
}

function Payment() {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [placement, setPlacement] = React.useState();
  
    const handleClick = (newPlacement) => (event) => {
      setAnchorEl(event.currentTarget);
      setOpen((prev) => placement !== newPlacement || !prev);
      setPlacement(newPlacement);
    };

  return (
    <Box sx={{ flexGrow: 1 }} style={{marginTop: '5rem', wordBreak: 'break-word'}}>
        <Grid container style={{justifyContent: 'center', "@media (max-width: 600px)": {justifyContent: 'flex-start'}}}>
            <Grid item xl={9} md={9} style={{maxWidth: '780px'}}>
                <Box sx={{ flexGrow: 1 }} style={styles.checkoutSection}>
                    <h6 style={{marginBottom: '1.5rem'}}>Χρεωστική / πιστωτική κάρτα</h6>
                    <Grid container spacing={2}>
                        <Grid item xs={7}>
                                <div style={{display: 'flex', flexDirection: 'column', flex: 'auto'}}>
                                    <label style={styles.classLabel}>Αριθμός Κάρτας *</label>
                                    <input style={styles.inputDefault} placeholder='1234 5678 9101 1234'/>
                                </div>
                        </Grid>
                        <Grid item xs={5}>
                            <div style={{display: 'flex', flexDirection: 'column', flex: 'auto'}}>
                                <label style={styles.classLabel}>Ημ/νία λήξης *</label>
                                <input style={styles.inputDefault} placeholder='ΜΜ/ΕΕ'/>
                            </div>
                        </Grid>
                        <Grid item xs={7}>
                            <div style={{display: 'flex', flexDirection: 'column', flex: 'auto'}}>
                                <label style={styles.classLabel}>Ονοματεπώνυμο *</label>
                                <input style={styles.inputDefault} placeholder='Όπως αναφέρετε στη κάρτα'/>
                            </div>
                        </Grid>
                        <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                            {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Paper sx={{
                                        marginBottom: '0.5rem',
                                        marginLeft: '1rem', 
                                        p: 2, 
                                        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)'
                                       }}>
                                  <img src={PaymentImage} alt="payment card"/>
                                </Paper>
                            </Fade>
                            )}
                        </Popper>
                        <Grid item xs={3}>
                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <label style={styles.classLabel}>CVV *</label>
                                <div style={{display: 'flex',flexDirection: 'row', alignItems: 'center', gap: '0.3rem'}}>
                                    <input style={{...styles.inputDefault, maxWidth: '230px'}} placeholder='Τριψήφιος Αριθμός'/>
                                    <div style={{cursor: 'pointer'}}>
                                        <Box onClick={handleClick('top-start')}>
                                            <BsFillExclamationCircleFill style={{color: '#DBA10C'}} size={35} />
                                        </Box>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </Box>
                <BackButton url='/checkout'/>
            </Grid>
            <Grid item xl={3} xs={9} style={{margin: '2rem',maxWidth: '780px'}}>
                <Box sx={{ flexGrow: 1}}>
                    <div>
                        <p style={{...styles.textStyle, fontWeight: 300}}>Εκτιμώμενη Παράδοση</p>
                        <p style={{...styles.textStyle, fontWeight: 400}}>Τρίτη, 20 Οκτ. - Παρασκευή 30 Οκτ.</p>
                    </div>
                    <Divider sx={{background: '#CDCDCD', height: '2px'}} />
                    <div>
                        <p style={{...styles.textStyle, fontWeight: 300, marginTop: '1rem'}}>Προιόντα</p>
                        <div style={styles.productsLayout}> 
                            <p style={styles.textStyle}>Iphone PLUS 14</p>
                            <p style={styles.textStyle}>1800.00€</p>
                        </div>
                    </div>
                    <Divider sx={{background: '#CDCDCD', height: '2px'}} />
                    <div style={{marginTop: '1rem'}}>
                        <div style={styles.productsLayout}> 
                            <p style={{...styles.textStyle, fontWeight: 300}}>Αξία προϊόντων</p>
                            <p style={styles.textStyle}>1800.00€</p>
                        </div>
                        <div style={styles.productsLayout}> 
                            <p style={{...styles.textStyle, fontWeight: 300}}>Μεταφορικά</p>
                            <p style={styles.textStyle}>1800.00€</p>
                        </div>
                        <div style={styles.productsLayout}> 
                            <p style={{...styles.textStyle, fontWeight: 700}}>Σύνολο</p>
                            <p style={{...styles.textStyle, fontWeight: 700}}>1800.00€</p>
                        </div>
                    </div>
                    <Divider sx={{background: '#CDCDCD', height: '2px', marginBottom: '1rem'}} />
                    <PayButtonStep2 name='ΠΛΗΡΩΜΗ' url='/payment-complete'/>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default Payment