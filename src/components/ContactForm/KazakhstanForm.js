import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Form} from "react-bootstrap";
import "../PopUpForm.css";



class KazakhstanForm extends React.Component {
  
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
											<option value="Al-Farabi Kazakh National University, Almaty">Al-Farabi Kazakh National University, Almaty</option>
											<option value="Asfendiyarov Kazakh National Medical University, Almaty">Asfendiyarov Kazakh National Medical University, Almaty</option>
											<option value="JSC Astana Medical University, Astana, Kazakhstan">JSC Astana Medical University, Astana, Kazakhstan</option>
											<option value="JSC South Kazakhstan Medical Academy">JSC South Kazakhstan Medical Academy</option>
											<option value="Karaganda State Medical University, Karagandy">Karaganda State Medical University, Karagandy</option>
											<option value="Kazakh Medical University of Continuing Education, Almaty">Kazakh Medical University of Continuing Education, Almaty</option>
											<option value="Kazakhstan-Russian Medical University, Almaty">Kazakhstan-Russian Medical University, Almaty</option>
											<option value="Kokshetau State University named after Shokan Ualikhanov, Kokshetau">Kokshetau State University named after Shokan Ualikhanov, Kokshetau</option>
											<option value="M. Kozybayev North Kazakhstan State University, Petropavl">M. Kozybayev North Kazakhstan State University, Petropavl</option>
											<option value="Semey State Medical University, Semey">Semey State Medical University, Semey</option>
											<option value="University of International Business, Almaty, Kazakhstan">University of International Business, Almaty, Kazakhstan</option>
											<option value="West Kazakhstan Marat Ospanov State Medical University, Aktobe">West Kazakhstan Marat Ospanov State Medical University, Aktobe</option>
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

export default KazakhstanForm;