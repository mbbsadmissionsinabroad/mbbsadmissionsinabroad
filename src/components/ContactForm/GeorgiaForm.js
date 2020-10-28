import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Form} from "react-bootstrap";
import "../PopUpForm.css";



class GeorgiaForm extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      name: '',
			email: '',
      number: '',
      option: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"http://api.mbbsadmissionsinabroad.com/index.php", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent."); 
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  resetForm(){
    this.setState({name: '', email: '', option: '', number: '', message: ''})
  }
  
  
  render() {
    return(
      <div>
        <Container>
          <Row>
            <Col md={6} xs={12}>
              <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className="form-group">
                    <label htmlFor="name"><b>Name</b><span className="asterik__sym">*</span></label>
                    <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1"><b>Email</b><span className="asterik__sym">*</span></label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="number"><b>Phone No</b><span className="asterik__sym">*</span></label>
                    <input type="number" className="form-control" id="number" value={this.state.number} onChange={this.onNumberChange.bind(this)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="option"><b>Select College</b><span className="asterik__sym">*</span></label>
                    {/*value={this.state.option} onChange={this.onOptionChange.bind(this)} */}
                    <Form.Control as="select" value={this.state.option} onChange={this.onOptionChange.bind(this)} required>
											<option value="“AIETI” Medical School">“AIETI” Medical School</option>
											<option value="Akaki Tsereteli State University">Akaki Tsereteli State University</option>
											<option value="Batumi Shota Rustaveli State University">Batumi Shota Rustaveli State University</option>
											<option value="David Agmashenebeli University of Georgia">David Agmashenebeli University of Georgia</option>
											<option value="David Tvildiani Medical University">David Tvildiani Medical University</option>
											<option value="East Europeon University, Georgia">East Europeon University, Georgia</option>
											<option value="European University">European University</option>
											<option value="Euroregioinal Teaching University LLC, Georgia">Euroregioinal Teaching University LLC, Georgia</option>
											<option value="Georgian American University, Georgia">Georgian American University, Georgia</option>
											<option value="Georgian National University, Georgia">Georgian National University, Georgia</option>
											<option value="High Medical School “Ayeti”">High Medical School “Ayeti”</option>
											<option value="Ivane Javakhishvili Tbilisi State University">Ivane Javakhishvili Tbilisi State University</option>
											<option value="Kutaisi Medical Institute “Kutaisi”">Kutaisi Medical Institute “Kutaisi”</option>
											<option value="LLC Caucasus International University, Tbilisi, Georgia">LLC Caucasus International University, Tbilisi, Georgia</option>
											<option value="LTD Caucasus University, Tibilisi, Georgia">LTD Caucasus University, Tibilisi, Georgia</option>
											<option value="New Vision University, Georgia">New Vision University, Georgia</option>
											<option value="Petre Shotadze Tbilisi Medical Academy">Petre Shotadze Tbilisi Medical Academy</option>
											<option value="Tbilisi Medical University “Hippocrates”">Tbilisi Medical University “Hippocrates”</option>
											<option value="Tbilisi Open Teaching University, Georgia">Tbilisi Open Teaching University, Georgia</option>
											<option value="Tbilisi Public University “Metekhi”">Tbilisi Public University “Metekhi”</option>
											<option value="Grigol Robakidze University,Tbilisi">Grigol Robakidze University,Tbilisi</option>
											<option value="Tbilisi State Medical University">Tbilisi State Medical University</option>
											<option value="Teaching University Geomedi, Georgia">Teaching University Geomedi, Georgia</option>
											<option value="University of Georgia">University of Georgia</option>
											<option value="BAU International University, Batumi">BAU International University, Batumi</option>
                    </Form.Control>
                </div>
                <div className="form-group">
                    <label htmlFor="message"><b>Message</b></label>
                    <textarea className="form-control" rows="3" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </Col>
            <Col md={6} xs={12}>
              <div className="popup__info">
                <h2>Contact Us:</h2>
                <p><a href="tel:9341666667">+91 (934) 166-6667</a></p>
                <h2>For Enquiry:</h2>
                <p><a href="mailto:info@mbbsadmissionsinabroad.com">info@mbbsadmissionsinabroad.com</a></p>
                <h2>Address:</h2>
                <p>404, 1st floor, 4th A Cross Rd, HRBR Layout 2nd Block, Kalyan Nagar, Bengaluru - 560043</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }

  onNameChange(event) {
	  this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	  this.setState({email: event.target.value})
  }

	onNumberChange(event) {
	  this.setState({number: event.target.value})
  }
  
  onOptionChange(event) {
	  this.setState({option: event.target.value})
	}
	
  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
}

export default GeorgiaForm;