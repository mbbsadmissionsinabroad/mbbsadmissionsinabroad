import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Form} from "react-bootstrap";
import "../PopUpForm.css";



class PolandForm extends React.Component {
  
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
      url:"https://application.destinex.net/index.php",  
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
											<option value="Collegium Medicum Jagiellonian University">Collegium Medicum Jagiellonian University</option>
											<option value="Poznan University of Medical Sciences">Poznan University of Medical Sciences</option>
											<option value="Medical University of Gdansk">Medical University of Gdansk</option>
											<option value="Medical University of Lublin">Medical University of Lublin</option>
											<option value="Medical University of Wroclaw">Medical University of Wroclaw</option>
											<option value="Nicolaus Copernicus University">Nicolaus Copernicus University</option>
											<option value="Medical University of Silesia">Medical University of Silesia</option>
											<option value="University of Warmia and Mazury">University of Warmia and Mazury</option>
											<option value="Warsaw Medical Academy">Warsaw Medical Academy</option>
											<option value="Medical University of Lodz">Medical University of Lodz</option>
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

export default PolandForm;