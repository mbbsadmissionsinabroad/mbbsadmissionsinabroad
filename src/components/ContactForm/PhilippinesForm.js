import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Form} from "react-bootstrap";
import "../PopUpForm.css";



class PhilippinesForm extends React.Component {
  
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
											<option value="Ago Medical and Educational Center Bicol Christian College of Medicine">Ago Medical and Educational Center Bicol Christian College of Medicine</option>
											<option value="AMA School of Medicine">AMA School of Medicine</option>
											<option value="Angeles University Foundation">Angeles University Foundation</option>
											<option value="Ateneo de Zamboanga University">Ateneo de Zamboanga University</option>
											<option value="Baguio Central University">Baguio Central University</option>
											<option value="BICOL CHRISTIAN COLLEGE OF MEDICINE">BICOL CHRISTIAN COLLEGE OF MEDICINE</option>
											<option value="Cagayan State University Tuguegarao (Carig)">Cagayan State University Tuguegarao (Carig)</option>
											<option value="Cebu Doctors University College of Medicine">Cebu Doctors University College of Medicine</option>
											<option value="Cebu Institute of Medicine">Cebu Institute of Medicine</option>
											<option value="Central Philippine University">Central Philippine University</option>
											<option value="Davao Medical School Foundation">Davao Medical School Foundation</option>
											<option value="De La Salie University Health Sciences Campus">De La Salie University Health Sciences Campus</option>
											<option value="Dona Remedos Trinidad Medical Foundation">Dona Remedos Trinidad Medical Foundation</option>
											<option value="Emilo Aguinaldo College, Manila">Emilo Aguinaldo College, Manila</option>
											<option value="Far Eastern University Dr. Nicanor Reyes Medical Foundation">Far Eastern University Dr. Nicanor Reyes Medical Foundation</option>
											<option value="FEU Dr. Nicanor Reyes Medical Foundation">FEU Dr. Nicanor Reyes Medical Foundation</option>
											<option value="Iloilo Doctors College of Medicine">Iloilo Doctors College of Medicine</option>
											<option value="Lyceum Northwestern University">Lyceum Northwestern University</option>
											<option value="Manila Central University">Manila Central University</option>
											<option value="Our Lady of Fatima University (Fatima Medical Science Foundation) Valenzuela">Our Lady of Fatima University (Fatima Medical Science Foundation) Valenzuela</option>
											<option value="Pamantasan ng Lungsod ng Maynila">Pamantasan ng Lungsod ng Maynila</option>
											<option value="Saint Louis University">Saint Louis University</option>
											<option value="San Beda College">San Beda College</option>
											<option value="Silliman University">Silliman University</option>
											<option value="Southwestern University Matias H. Aznar Memorial College of Medicine">Southwestern University Matias H. Aznar Memorial College of Medicine</option>
											<option value="Southwestern University, Urgello, Cebu City, Philippines">Southwestern University, Urgello, Cebu City, Philippines</option>
											<option value="St. Lukes College of Medicine William H. Quasha Memorial">St. Lukes College of Medicine William H. Quasha Memorial</option>
											<option value="St. Paul University,Philippines">St. Paul University,Philippines</option>
											<option value="University of Northern Philippines">University of Northern Philippines</option>
											<option value="University of Perpetual Help (Dr. Jose G. Tamayo Medical University)">University of Perpetual Help (Dr. Jose G. Tamayo Medical University)</option>
											<option value="University of Perpetual Help Rizal">University of Perpetual Help Rizal</option>
											<option value="University of Saint La Salle">University of Saint La Salle</option>
											<option value="University of Santo Tomas">University of Santo Tomas</option>
											<option value="University of the East Ramon Magsaysay Memorial Medical Center">University of the East Ramon Magsaysay Memorial Medical Center</option>
											<option value="University of the Philippines Manila">University of the Philippines Manila</option>
											<option value="UV Gullas College of Medicine">UV Gullas College of Medicine</option>
											<option value="Virgen Milagrosa University Foundation">Virgen Milagrosa University Foundation</option>
											<option value="West Visayas State University">West Visayas State University</option>
											<option value="Xavier University">Xavier University</option>
											<option value="Zamboanga Medical School Foundation">Zamboanga Medical School Foundation</option>
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

export default PhilippinesForm;