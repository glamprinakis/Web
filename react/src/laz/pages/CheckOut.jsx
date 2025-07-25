import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import PayButtonStep1 from '../components/buttons/PayButtonStep1';
import BackButton from '../components/buttons/BackButton';
import '../laz.css'

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

function CheckOut() {
  return (
    <Box sx={{ flexGrow: 1 }} style={{marginTop: '5rem', wordBreak: 'break-word'}}>
        <Grid container style={{justifyContent: 'center', "@media (max-width: 600px)": {justifyContent: 'flex-start'}}}>
            <Grid item xl={9} md={9} style={{maxWidth: '780px'}}>
                <Box sx={{ flexGrow: 1 }} style={styles.checkoutSection}>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                                <div style={{display: 'flex', flexDirection: 'column', flex: 'auto'}}>
                                    <label style={styles.classLabel}>Όνομα *</label>
                                    <input style={styles.inputDefault} placeholder='π.χ. Γιώργος'/>
                                </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div style={{display: 'flex', flexDirection: 'column', flex: 'auto'}}>
                                <label style={styles.classLabel}>Επίθετο *</label>
                                <input style={styles.inputDefault} placeholder='π.χ. Παπαδόπουλος'/>
                            </div>
                        </Grid>
                        <Grid item xs={9}>
                            <div style={{display: 'flex', flexDirection: 'column', flex: 'auto'}}>
                                <label style={styles.classLabel}>Διεύθυνση *</label>
                                <input style={styles.inputDefault} placeholder='π.χ. Αγίου Κοσμά'/>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{display: 'flex', flexDirection: 'column', flex: 'auto'}}>
                                <label style={styles.classLabel}>Αριθμός *</label>
                                <input style={styles.inputDefault} placeholder='π.χ. 11'/>
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <div style={{display: 'flex', flexDirection: 'column', flex: 'auto'}}>
                                <label style={styles.classLabel}>Πόλη *</label>
                                <input style={styles.inputDefault} placeholder='π.χ. Χανιά'/>
                            </div>
                        </Grid>
                        <Grid item xs={9}>
                            <div style={{display: 'flex', flexDirection: 'column', flex: 'auto'}}>
                            <label style={styles.classLabel}>Κινητό Τηλέφωνο *</label>
                            <input style={styles.inputDefault} placeholder='π.χ. 69746663332'/>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <div style={{display: 'flex', flexDirection: 'column', flex: 'auto'}}>
                            <label style={styles.classLabel}>Σημειώσεις</label>
                            <textarea 
                                className='textArea'
                                style={{border: '1px solid #D9D9D9', resize: 'none', height: '111px'}} 
                                type='textbox' 
                                placeholder='Ενημερωσέ μας για τις προτιμήσεις σου'
                            />
                            </div>
                        </Grid>
                    </Grid>
                </Box>
                <BackButton url='/cart'/>
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
                    <PayButtonStep1 name='ΣΤΟΙΧΕΙΑ ΠΛΗΡΩΜΗΣ' url='/payment'/>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default CheckOut