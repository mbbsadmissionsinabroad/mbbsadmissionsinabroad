import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import "./Services.css";
import DocumentMeta from 'react-document-meta';
import { Tabs, Tab } from "react-bootstrap-tabs";
import ContactPopUpForm from "../components/ContactPopUpForm";

function Contact() {
  // const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  const [modalShow, setModalShow] = React.useState(false);

  const meta = {
    title: 'Contact',
    description: 'MBBS Admission in Abroad, Destinex an Overseas MBBS Consultants in India. Study MBBS in Russia, Ukraine & Philippines at Low Cost from MCI Approved Universities. - Contact',
    canonical: 'https://www.mbbsadmissionsinabroad.com/contact',
    // meta: {
    //   charset: 'utf-8',
    //   name: {
    //     keywords: 'MBBS Admission in Abroad'
    //   }
    // }
  };

  return (
    <DocumentMeta {...meta}>
    <div>
      <div className="service__bg">
        <h1 className="service__title">Contact</h1>
      </div>
      <Container>
        <Row>
          <Col md={12} lg={5}>
            <div className="contact">
              <h2 className="contact__title">Our Branch Locations</h2>
              <img
                className="india__map"
                src="assets/images/india-map.png"
                alt="India Map"
              />
            </div>
          </Col>
          <Col md={12} lg={7}>
            <div className="contact__form">
              <h2 className="contact__title">Our Branch Offices</h2>

              <div className="row">
                
              </div>
              <Container>
              <section>
              <Tabs
                className="tab-container-with-green-border"
                headerClass="tab-header-bold"
                activeHeaderClass="tab-header-black"
                contentClass="tab-content-yellow"
              >
              <Tab label="Bangalore">
                <div className="map-responsive">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.188506035561!2d77.63650851415788!3d13.023664717259088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae178102563701%3A0x7caa9fbade767ad1!2sMBBS%20Admission%20in%20Abroad%20-%20Destinex%20Education!5e0!3m2!1sen!2sin!4v1602073195312!5m2!1sen!2sin"
                    width="1240"
                    height="300"
                    frameborder="0"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                    title="Office Map"
                  />
                </div>
                <div>
                  <p className="contact__address">404, 1st floor, 4th A Cross Rd, HRBR Layout 2nd Block, Kalyan Nagar, Bengaluru – 560043</p>
                  <p className="contact__number"><a href="tel:9341666667">+91 (934) 166-6667</a></p>
                  <br/>
                    <Button className="contact__page__btn" onClick={() => setModalShow(true)}>Book Now</Button>
                    <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
                </div>
              </Tab>
                <Tab label="Mumbai">
                  <div className="map-responsive">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d7546.940766687944!2d72.81873157204005!3d18.954822595724636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s15%2CA%2F1%2C%20Supariwala%20building%2C%20Ground%20floor%2C%20Prasad%20Chambers%20Compound%2C%20Opera%20House%2C%20Next%20to%20Roxy%20Cinema%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1603817859872!5m2!1sen!2sin"
                    width="1240"
                    height="300"
                    frameborder="0"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                    title="Office Map"                    
                    />
                  </div>
                  <p className="contact__address">15,A/1, Supariwala Bldg, Ground floor, Prasad Chambers Compound, Opera House, Next to Roxy Cinema, Mumbai - 400 004</p>
                  <p className="contact__number"><a href="tel:9341666667">+91 (934) 166-6667</a></p>
                  <br/>
                  <Button className="contact__page__btn" onClick={() => setModalShow(true)}>Book Now</Button>
                  <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
                </Tab>
                <Tab label="Bhopal">
                  <div className="map-responsive">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d14664.472033838194!2d77.42341166958087!3d23.238792424391832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%23AF-1%2C%20Block-1%2C%20Plot-16%2C%20Amar%20Stamph%2C%20Zone-1%2C%20M.P.Nagar%2C%20Bhopal(M.P)%20462011!5e0!3m2!1sen!2sin!4v1603818112664!5m2!1sen!2sin"
                    width="1240"
                    height="300"
                    frameborder="0"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                    title="Office Map"                    
                    />
                  </div>
                  <p className="contact__address">#AF-1, Block-1, Plot-16, Amar Stamph, Zone-1, M.P.Nagar, Bhopal(M.P) 462011</p>
                  <p className="contact__number"><a href="tel:9341666667">+91 (934) 166-6667</a></p>
                  <br/>
                  <Button className="contact__page__btn" onClick={() => setModalShow(true)}>Book Now</Button>
                  <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
                </Tab>
                <Tab label="Patna">
                  <div className="map-responsive">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28779.035631531722!2d85.07328389189236!3d25.625528851324482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s3rd%20floor%2C%20Sumitra%20arcade%2C%20Ashiyana%20digha%20road%20%2CPatna%20800014!5e0!3m2!1sen!2sin!4v1603818175433!5m2!1sen!2sin"
                    width="1240"
                    height="300"
                    frameborder="0"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                    title="Office Map"                    
                    />
                  </div>
                  <p className="contact__address">3rd floor, Sumitra arcade, Ashiyana digha road ,Patna 800014</p>
                  <p className="contact__number"><a href="tel:7999407776">+91 (799) 940-7776</a></p>
                  <br/>
                  <Button className="contact__page__btn" onClick={() => setModalShow(true)}>Book Now</Button>
                  <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
                </Tab>
                <Tab label="Lucknow">
                  <div className="map-responsive">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3559.7984490390245!2d80.97254201438456!3d26.846362169407584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s2%2C%20srijan%20vihar%2C%20vipin%20khand%2C%20Gomti%20nagar%2C%20near%20sahara%2C%20shahar%2C%20Ambedkar%20park%2C%20lucknow%2C%20up%20226010!5e0!3m2!1sen!2sin!4v1603818274264!5m2!1sen!2sin"
                    width="1240"
                    height="300"
                    frameborder="0"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                    title="Office Map"                    
                    />
                  </div>
                  <p className="contact__address">2, Srijan vihar, Vipin Khand, Gomti Nagar, Near Sahara, Shahar, Ambedkar Park, Lucknow, - 226010</p>
                  <p className="contact__number"><a href="tel:9341666667">+91 (934) 166-6667</a></p>
                  <br/>
                  <Button className="contact__page__btn" onClick={() => setModalShow(true)}>Book Now</Button>
                  <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
                </Tab>
                <Tab label="Germany">
                  <div className="map-responsive">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.6044072284667!2d9.745951615252283!3d52.377592754526376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b07517e70e702b%3A0x7b9fa02aea52b4ca!2s2Workin.de!5e0!3m2!1sen!2sin!4v1603822528721!5m2!1sen!2sin"
                    width="1240"
                    height="300"
                    frameborder="0"
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                    title="Office Map"  
                    />
                  </div>
                  <p className="contact__address">2 workin.de Personal – und Kommunikationsagentur, Leonardtstr. 2, 30175 Hannover</p>
                  <p className="contact__number"><a href="tel:+4951110553795"> (+49) 511 10553795 </a></p>
                  <p className="contact__number"><a href="tel:+4917672260604"> (+49) 176 72260604  </a></p>
                  <br/>
                  <Button className="contact__page__btn" onClick={() => setModalShow(true)}>Book Now</Button>
                  <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
                </Tab>
              </Tabs>
            </section>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
    </DocumentMeta>
  );
}

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enquire Now
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ContactPopUpForm />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Contact;
