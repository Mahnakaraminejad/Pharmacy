import * as React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow
} from 'mdb-react-ui-kit';
function Footer() {
    return (
        <div className='Footer'>
            <MDBFooter style={{ backgroundColor: '#DDE0FF' }} className='text-center text-lg-left' >
                <MDBContainer className='p-4'>
                    <MDBRow>
                        <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Pharmacy</h5>
                            <p>
                            Our pharmacy website is only for information about the types and availability of medicines. Buying from this pharmacy is only possible in person.
                            </p>
                        </MDBCol>
                        <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
                            {/* <h5 className='text-uppercase'>Footer text</h5> */}
                            <p>
                            Ther are many variations passages of lorem ipsum avaiable,but the majority have suffered.
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <div className='text-center p-3' style={{
                    backgroundColor: '#000080', fontWeight: ' bold',
                    height: '30px', textAlign: 'center', paddingTop: '4px'
                }}>
                    &copy; {new Date().getFullYear()} &nbsp;Pharmacy. All rights reserved default.
                </div>ّ
            </MDBFooter>
        </div>
    );
}
export default Footer;