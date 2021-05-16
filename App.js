import React,{useState} from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
import {Row,Modal,ModalHeader,ModalBody,Form, Input,ModalFooter,Collapse,DropdownMenu,Navbar,Container,NavLink,NavItem, DropdownItem,UncontrolledCarousel,Progress,Jumbotron, DropdownToggle,NavbarToggler,Nav, NavbarBrand, UncontrolledDropdown ,Col, Toast, ToastHeader, ToastBody, Button} from  'reactstrap';
import Slide1 from './slide-01.jpg';
import Slide2 from './slide-02.jpg';
import Slide3 from './slide-03.jpg';
import Image1 from './Image-1.png';
import Image2 from './Image-2.png';
import Image3 from './Image-3.jpg';
import { Typography } from '@material-ui/core';



const Index =(props)=>{
     const[NavOpen,setNav]=useState(false);
     const toggle=()=>setNav(!NavOpen);
     const items = [
  {
    src:Slide1,
    altText: 'Slide1',
    
    key: '1',
    
  },
  {
    src:Slide2,
    altText: 'Slide 2',
    
    key: '2'
  },
  {
    src:Slide3,
    altText: 'Slide 3',
   
    key: '3'
  }
];

  const {
    className1
  } = props;

  const buttonLabel1='Login';
  const [modal1, setModal1] = useState(false);
  const toggle1 = () => setModal1(!modal1);

  const {
    className2
  } = props;

  const buttonLabel2='Register';
  const [modal2, setModal2] = useState(false);
  const toggle2 = () => setModal2(!modal2);

  return(
    <div>
      <Row>
        <Col md={12} className="head">Children urgently need your help with essentials like clean water, food, and more. Give today!</Col>
      </Row>
      <Row>
    <Col md={12}>
    <Navbar color="warning"  light expand="lg">
      <Container>
      <NavbarBrand className="brand"><h3>Crush Child Foundation</h3></NavbarBrand>
      <NavbarToggler onClick={toggle}></NavbarToggler>
      <Collapse isOpen={NavOpen} navbar>
      <Nav className="mr-auto" navbar>
        <NavItem className="navitem">
          <NavLink href="#Home">Home</NavLink>
        </NavItem >
        <NavItem  className="navitem">
          <NavLink href="#about">About us</NavLink>
        </NavItem>
        <NavItem  className="navitem">
          <NavLink href="#Grants">Grants</NavLink>
        </NavItem>
        <NavItem  className="navitem">
          <NavLink href="#contact">Contact</NavLink>
        </NavItem>
        <UncontrolledDropdown Nav inNavbar>
           <DropdownToggle nav caret>News</DropdownToggle>
           <DropdownMenu >
             <DropdownItem>Parental article</DropdownItem>
             <DropdownItem>Newsletter</DropdownItem>
             <DropdownItem>Spotlight</DropdownItem>
             <DropdownItem>News Release</DropdownItem>
           </DropdownMenu>
        </UncontrolledDropdown>  
      </Nav>
      </Collapse>
      <Button  onClick={toggle1} outline color="primary">{buttonLabel1}</Button>{' '}
      <Button  onClick={toggle2} outline color="primary">{buttonLabel2}</Button>
      
      </Container>
      

    </Navbar>
     </Col>
     </Row>
     
     <Modal isOpen={modal1} toggle={toggle1} className={className1} >
        <ModalHeader toggle={toggle1}>Crush Child Foundation</ModalHeader>
        <ModalBody>
          <Form>
              <Container>
              <Row>
              <Col md={2}>User Name:</Col><Col md={10}><Input type="text"></Input></Col>
              </Row><br></br>
              <Row>
              <Col md={2}>Password:</Col><Col md={10}><Input type="Password"></Input></Col>
              </Row>
              
              </Container>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle1}>Login</Button>{' '}
          <Button color="dark" onClick={toggle1}>Cancel</Button>
        </ModalFooter>
      </Modal>
    

      <Modal isOpen={modal2} toggle={toggle2} className={className2}>
        <ModalHeader toggle={toggle2}>Crush Child Foundation</ModalHeader>
        <ModalBody>
          <Form>
              <Container>
              <Row>
              <Col md={2}>Name:</Col><Col md={10}><Input type="text"></Input></Col>
              </Row><br></br>
              
              <Row>
              <Col md={2}>Phone:</Col><Col md={10}><Input type="text"></Input></Col>
              </Row><br></br>
              
              <Row>
              <Col md={2}>Email:</Col><Col md={10}><Input type="text"></Input></Col>
              </Row><br></br>
              <Row>
              <Col md={2}>Create Password:</Col><Col md={10}><Input type="Password"></Input></Col>
              </Row><br></br>
              <Row>
              <Col md={2}>Confirm Password:</Col><Col md={10}><Input type="Password"></Input></Col>
              </Row>
              </Container>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle2}>Register</Button>{' '}
          <Button color="dark" onClick={toggle2}>Cancel</Button>
        </ModalFooter>
      </Modal>

       <Row id="Home">
      <Col md={12}>
     <UncontrolledCarousel items={items} />;
      </Col>
      </Row>
      <div >
      <Container className="Container1">
      <Row id="about">
        
        <Col md={4}>
        <Toast style={{width:'100%',backgroundColor:'#08083c',color:'white'}} className=" p-3 my-2" >
          <ToastHeader tag="h2" style={{backgroundColor:"#ffc107",color:"#08083c"}}>Find a Program</ToastHeader>
          <ToastBody tag="h6">The largest funder of after-school, youth enrichment and summer camp programs in Miami-Dade County, The Children’s Trust also offers a wide range of resources for pregnancy and parenting, health insurance access, quality early learning, health and nutrition, services for children with special needs and youth employment. Find what you’re looking for today with our online program directory.</ToastBody>
        </Toast>
        </Col>
        <Col md={4}>
        <Toast style={{width:'100%',backgroundColor:'#08083c',color:'white'}} className=" p-3 my-2">
          <ToastHeader tag="h2" style={{backgroundColor:"#ffc107",color:"#08083c"}}>Book Club</ToastHeader>
          <ToastBody tag="h6" >The new, improved and expanded Children’s Trust Book Club offers free, monthly books by mail for children from birth through their 5th birthday living in Miami-Dade County. Parents may register children from birth until they're 4-and-a-half years old. Book Club members receive a new book every month in English or Spanish along with a guide for parents with activities, information and suggestions on how to share the book with their children. Books include classics, award-winners and picture books to engage even our youngest “readers.” All books are selected specifically to help children develop their early reading skills for school readiness and, of course, for maximum enjoyment with their families!</ToastBody>
        </Toast>
        </Col>
        <Col md={4}>
        <Toast style={{width:'100%',backgroundColor:'#08083c',color:'white'}} className=" p-3 my-2">
          <ToastHeader tag="h2" style={{backgroundColor:"#ffc107",color:"#08083c"}}>How We Fund</ToastHeader>
          <ToastBody tag="h6">The Children’s Trust staff and board of directors are dedicated to funding evidenced-based programs that achieve positive outcomes for children and families in our community and deliver a robust return on investment. As a government agency, we are committed to transparent, public and competitive solicitations processes awarding a variety of grants that balance long-term ambitions with short-term needs, to agencies proposing high-quality programs as outlined in our strategic plan.</ToastBody>
        </Toast>
        </Col>
       
      </Row><br></br>
      <Row>
        <Col md={4}><img src={Image1} alt="Image1" /></Col>
        <Col md={8}><Typography><h1>Our Service</h1>Crush Child Foundation is a dedicated source of revenue derived from property taxes, established by voter referendum in 2002. Our mission is to partner with the community to plan, advocate for and fund strategic investments that improve the lives of all children and families in Miami-Dade County. We envision a community that works together to provide the essential foundations to enable every child to achieve their full potential… Because All Children Are Our Children.</Typography></Col>
      </Row><br></br>
      <Row>
         
        <Col md={6}>
        <div>
        <h1>Funds</h1>
        <h3>The Children Trust</h3>
        <Progress animated value="70" color="warning"></Progress><br></br>
        <h3>Kailas Trust</h3>
        <Progress animated value="80" color="warning"></Progress><br></br>
        <h3>Child Trust</h3>
        <Progress animated value="65" color="warning"></Progress><br></br>
        <h3>Namakkal Foundation</h3>
        <Progress animated value="95" color="warning"></Progress><br></br>
        </div>
        </Col>
        <Col md={6}><img src={Image2} alt="Image2" style={{width:"100%",height:"400px"}} /></Col>
      </Row><br></br>
      <Row id="Grants">
      <Col md={4}><img src={Image3} alt="Image3" style={{width:"100%",height:"100%"}} /></Col>
        <Col md={8}>
        <Jumbotron>
        <h1>Grants</h1><p>Crush Child Foundation is a grant-making organization, but unlike private philanthropic foundations, we award grants differently in accordance with our legal obligations as a government entity.</p><p>Funded programs have fiscal and programmatic reporting requirements and responsibilities that The Children’s Trust regularly tracks. This includes a continuous learning and improvement framework aimed at capturing how our grantees are successfully supporting children and families in Miami-Dade.</p>
        <p> Our program metrics framework includes a set of critical safety, administrative and fiscal compliance items, as well as key programmatic components, which are observed frequently throughout the year. The goal is to collaborate with providers to identify program strengths and needs, and develop an individualized plan for support, coaching and follow-up focused on continued quality improvement.</p></Jumbotron>
            
        </Col><br></br>
        <Row>
          <Container><Col><h2 className="text-center">Strategic Plan</h2>  <p>Our strategic plan is grounded in the following four foundations: social, educational, economic and environmental. Although no single program or organization can secure these foundations on its own, funding direct services is the centerpiece of our investment strategy, because children need resources and support to develop, grow healthy and contribute to the local economy. Therefore, our budget is allocated among the following priority investments:</p></Col></Container>
        </Row>
        </Row>
      </Container><br></br>
      </div>
      <Row className="Footer" id="contact">
        <Col md={12} >
          
          <Row>
          <Col md={5}>
              <h1>Crush Child Foundation</h1>
              <p>Crush child Foundation is a dedicated source of revenue established by voter referendum to improve the lives of all children and families in Miami-Dade County.<br></br></p>
          </Col>

          <Col md={5}>
              <h1>Contact </h1>
              <Row>
                <Col md={2}>Email:</Col>
                <Col md={8}><input type="text" className="FootE"></input></Col>
              </Row><br></br>
              <Row>
                <Col md={2}>Feedback:</Col>
                <Col md={8}><textarea rows="4" cols="20"className="FootE"></textarea></Col>
              </Row>
          </Col>
          <Col md={2}><h1>Make a call:</h1>
                            <blockquote><h3>+91-9876543210</h3></blockquote>
                </Col>
          </Row>
          <hr style={{marginLeft:'200px',marginRight:'200px'}}></hr>
          <Row>
                <Col md={12} className="text-center"><p>ⓒ 2016-2021 Crush Child Foundation. All rights reserved, Built with ♥ in India</p></Col>
              </Row>
              
         </Col>
        
      </Row>

</div>
);
  }
export default Index;