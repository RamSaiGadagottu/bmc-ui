import { Container } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './DocumentDetails.module.css';

export default function DocumentDetails(){
    return(
        <>
        <Container className={styles.displayGrid}>
            <h3><b>Document Details</b></h3>
            <div className={styles.documentNumb+' '+styles.borderGrey}>
                <span><b>#123457821</b></span>
            </div>
            <div>
                <div className={styles.documentNumb+' '+styles.width50}>
                    
                    <div className={styles.width40}>
                    <label><b>Division</b></label><br/>
                    <label><b>Internal ID</b></label><br/>
                    <label><b>Converstion ID</b></label><br/>
                    <label><b>External ID</b></label><br/>
                    <label><b>Document Type</b></label>
                    </div>
                    
                    <div className={styles.width40}>
                        <label>Johnson & Johnson</label><br/>
                        <label>0333022kjwjdn12443</label><br/>
                        <label>98348387885487</label><br/>
                        <label>0000002838292</label><br/>
                        <label>Urgent</label>
                    </div>
                </div>
                <div className={ styles.documentNumb+' '+styles.width50}>
                <div className={styles.width40}>
                    <label><b>Division</b></label><br/>
                    <label><b>Internal ID</b></label><br/>
                    <label><b>Converstion ID</b></label><br/>
                    <label><b>External ID</b></label><br/>
                    <label></label>
                    </div>
                    
                    <div className={styles.width40}>
                        <label>Johnson & Johnson</label><br/>
                        <label>0333022kjwjdn12443</label><br/>
                        <label>98348387885487</label><br/>
                        <label>0000002838292</label><br/>
                        <label></label>
                    </div>
                </div>
            </div>

            <div className={styles.marginTop30}></div>
            {/* <Container> */}
        {/* <div className={styles.width100}> */}
        {/* <div> */}
            <Navbar className={`${styles.width100} ${styles.navBar}`}>
            <Container>
            <Nav className="me-auto">
                <a href="#home" className={styles.navLinkSpace} >Document Status</a>
                <a href="#features" className={styles.navLinkSpace}>Document Logs</a>
                <a href="#pricing" className={styles.navLinkSpace}>Parent Documents</a>
                <a href="#pricing1" className={styles.navLinkSpace}>Sibling Documents</a>
                <a href="#pricing2" className={styles.navLinkSpace}>Child Documents</a>
                <a href="#pricing3" className={styles.navLinkSpace}>Extended Properties</a>
            </Nav>
            </Container>
            </Navbar>
            {/* </div> */}
        {/* </div> */}
        {/* </Container> */}

        </Container>
        </>
)
}