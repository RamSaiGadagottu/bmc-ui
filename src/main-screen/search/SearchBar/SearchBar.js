import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './SearchBar.module.css';
import { RxCaretDown } from 'react-icons/rx';
import { AiOutlineSearch } from 'react-icons/ai';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SearchBar(){
    return(
        <>
        <Navbar expand="lg" className={styles.navBar}>
          <Container>
          <Row style={{width:"100%"}}>
            <Col sm={8} className={styles.searchInput}>
                <AiOutlineSearch color="#038571" size="1.5em" className={styles.marginTop8}/> &nbsp;&nbsp;
                <input type="text" className={styles.inputText + ' form-control'} placeholder='Search by keywords' />
            </Col>
            <Col className={styles.marginTop8}>
                <Nav.Link href="#advancedSearch">Advanced Search <RxCaretDown size="1.5em"/></Nav.Link>
            </Col>
            <Col className={styles.marginTop8}>
                <Nav.Link href="#saveSearch">Save Search <RxCaretDown size="1.5em"/></Nav.Link>
            </Col>
             </Row>
            
          </Container>
        </Navbar>
        </>
    )
}