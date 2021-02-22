import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Form} from "react-bootstrap";

class ContactPopUpForm extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      name: '',
			email: '',
      number: '',
			option: '',
			option1: '',
      message: ''
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "POST", 
      url:"https://application.destinex.net/contactpage.php", 
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
    this.setState({name: '', email: '', option: '', option1: '', number: '', message: ''})
  }
  
  
  render() {
    return(
      <div>
        <Container>
          <Row>
            <Col xs={12}>
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
                    <label htmlFor="option"><b>Location</b><span className="asterik__sym">*</span></label>
                    {/*value={this.state.option} onChange={this.onOptionChange.bind(this)} */}
                    <Form.Control as="select" value={this.state.option} onChange={this.onOptionChange.bind(this)} required>
											<option value="Bangalore">Bangalore</option>
											<option value="Mumbai">Mumbai</option>
											<option value="Patna">Patna</option>
											<option value="Bhopal">Bhopal</option>
											<option value="Germany">Germany</option>
                    </Form.Control>
								</div>
								<div className="form-group">
                    <label htmlFor="option"><b>Enquiry Type</b><span className="asterik__sym">*</span></label>
                    {/*value={this.state.option} onChange={this.onOptionChange.bind(this)} */}
                    <Form.Control as="select" value={this.state.option1} onChange={this.onOption1Change.bind(this)} required>
											<option value="Russia">Russia</option>
											<option value="Ukraine">Ukraine</option>
											<option value="Armenia">Armenia</option>
											<option value="Belize">Belize</option>
											<option value="France">France</option>
											<option value="Georgia">Georgia</option>
											<option value="Kazakhstan">Kazakhstan</option>
											<option value="Kyrgystan">Kyrgystan</option>
											<option value="Philippines">Philippines</option>
											<option value="Germany">Germany</option>
											<option value="Europe">Europe</option>
											<option value="Finland">Finland</option>
											<option value="Sweden">Sweden</option>
											<option value="Netherlands">Netherlands</option>
											<option value="Denmark">Denmark</option>
											<option value="Norway">Norway</option>
											<option value="Austria">Austria</option>
											<option value="Poland">Poland</option>
											<option value="Lithuania">Lithuania</option>
											<option value="Bulgaria">Bulgaria</option>
											<option value="Nepal">Nepal</option>
											<option value="Bangladesh">Bangladesh</option>
                    </Form.Control>
                </div>
                <div className="form-group">
                    <label htmlFor="message"><b>Message</b></label>
                    <textarea className="form-control" rows="3" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                </div>
                <button type="submit" className="btn btn-primary">Enquire Now</button>
              </form>
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

	onOption1Change(event) {
	  this.setState({option1: event.target.value})
	}
	
  onMessageChange(event) {
	  this.setState({message: event.target.value})
  }
}

export default ContactPopUpForm;