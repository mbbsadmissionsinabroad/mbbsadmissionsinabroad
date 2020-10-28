import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Form} from "react-bootstrap";
import "../PopUpForm.css";



class RussiaForm extends React.Component {
  
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
                      <option value="Pirogov Russian National Research Medical University (RNRMU)">Pirogov Russian National Research Medical University (RNRMU)</option>
                      <option value="Pavlov First Saint Petersburg State Medical University">Pavlov First Saint Petersburg State Medical University</option>
                      <option value="Kazan Federal University">Kazan Federal University</option>
                      <option value="I. M. Sechenov First Moscow State Medical University">I. M. Sechenov First Moscow State Medical University</option>
                      <option value="Altai State Medical University">Altai State Medical University</option>
                      <option value="Astrakhan State Medical University">Astrakhan State Medical University</option>
                      <option value="Bashkir State Medical University">Bashkir State Medical University</option>
                      <option value="Belgorod State National Research University">Belgorod State National Research University</option>
                      <option value="Chechen State University">Chechen State University</option>
                      <option value="Chuvash State University named after I.N. Ulyanov">Chuvash State University named after I.N. Ulyanov</option>
                      <option value="Crimean Federal University named after V.I. Vernadsky">Crimean Federal University named after V.I. Vernadsky</option>
                      <option value="Dagestan State Medical University">Dagestan State Medical University</option>
                      <option value="Far Eastern Federal University">Far Eastern Federal University</option>
                      <option value="Immanuel Kant Baltic Federal University">Immanuel Kant Baltic Federal University</option>
                      <option value="Irkutsk State Medical University">Irkutsk State Medical University</option>
                      <option value="Ivanovo State Medical Academy">Ivanovo State Medical Academy</option>
                      <option value="Izhevsk State Medical Academy">Izhevsk State Medical Academy</option>
                      <option value="Kabardino-Balkarian State University">Kabardino-Balkarian State University</option>
                      <option value="Kazan Federal (Volga) University">Kazan Federal (Volga) University</option>
                      <option value="Kazan State Medical University">Kazan State Medical University</option>
                      <option value="Kemerovo State Medical Academy">Kemerovo State Medical Academy</option>
                      <option value="Kuban State Medical University">Kuban State Medical University</option>
                      <option value="Kursk State Medical University">Kursk State Medical University</option>
                      <option value="Mari State University">Mari State University</option>
                      <option value="National Research Nuclear University “MIFI”">National Research Nuclear University “MIFI”</option>
                      <option value="National Research Ogarev Mordovia State University">National Research Ogarev Mordovia State University</option>
                      <option value="North Ossetian State Medical Academy">North Ossetian State Medical Academy</option>
                      <option value="North-Eastern Federal University named after MK Ammosov">North-Eastern Federal University named after MK Ammosov</option>
                      <option value="Northern State Medical University">Northern State Medical University</option>
                      <option value="Novosibirsk National Research State University">Novosibirsk National Research State University</option>
                      <option value="Omsk State Medical University">Omsk State Medical University</option>
                      <option value="Orel State University">Orel State University</option>
                      <option value="Orenburg State Medical University">Orenburg State Medical University</option>
                      <option value="Pacific State Medical University">Pacific State Medical University</option>
                      <option value="Penza State University">Penza State University</option>
                      <option value="Perm State Medical University named after E.A. Vagner">Perm State Medical University named after E.A. Vagner</option>
                      <option value="Privolzhsky Research Medical University">Privolzhsky Research Medical University</option>
                      <option value="Pskov State University">Pskov State University</option>
                      <option value="Rostov State Medical University">Rostov State Medical University</option>
                      <option value="Russian National Research Medical University named after N.I. Pirogov">Russian National Research Medical University named after N.I. Pirogov</option>
                      <option value="Russian Peoples Friendship University">Russian Peoples Friendship University</option>
                      <option value="Ryazan State Medical University named after I.P. Pavlov">Ryazan State Medical University named after I.P. Pavlov</option>
                      <option value="Saratov State Medical University">Saratov State Medical University</option>
                      <option value="Siberian State Medical University">Siberian State Medical University</option>
                      <option value="Smolensk State Medical University">Smolensk State Medical University</option>
                      <option value="St. Petersburg State Pediatric Medical Academy">St. Petersburg State Pediatric Medical Academy</option>
                      <option value="Stavropol State Medical University">Stavropol State Medical University</option>
                      <option value="Tambov State University named after G.R. Derzhavin">Tambov State University named after G.R. Derzhavin</option>
                      <option value="The First Moscow State Medical University named after Sechenov">The First Moscow State Medical University named after Sechenov</option>
                      <option value="The First St. Petersburg State Medical University named after Pavlov">The First St. Petersburg State Medical University named after Pavlov</option>
                      <option value="Tula State University">Tula State University</option>
                      <option value="Tver State Medical University">Tver State Medical University</option>
                      <option value="Tyumen State Medical University">Tyumen State Medical University</option>
                      <option value="Ulyanovsk State University">Ulyanovsk State University</option>
                      <option value="Ural State Medical University">Ural State Medical University</option>
                      <option value="Volgograd State Medical University">Volgograd State Medical University</option>
                      <option value="Voronezh State Medical University named after N.N. Burdenko">Voronezh State Medical University named after N.N. Burdenko</option>
                      <option value="Yaroslavl State Medical University">Yaroslavl State Medical University</option>
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

export default RussiaForm;