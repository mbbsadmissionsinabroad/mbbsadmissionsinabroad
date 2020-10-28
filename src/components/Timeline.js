import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



function Timeline() {
    return (
        <div>
				<VerticalTimeline>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(253, 212, 45)', color: '#000' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(253, 212, 45)' }}
					date="1"
					iconStyle={{ background: 'rgb(253, 212, 45)', color: '#fff' }}
					// icon="assets/images/headset.svg" alt="Logo"
				>
					<h3 className="vertical-timeline-element-title">Counselling Process</h3>
					{/*<h4 className="vertical-timeline-element-subtitle"></h4> */}
					<p>We have a dedicated team of experts who provide quality guidance to students who want to fulfill their dream of pursuing MBBS in abroad. Students can book their appointment for the counseling process round the clock using our helpline numbers, chat support or over the email.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(253, 212, 45)', color: '#000' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(253, 212, 45)' }}
					date="2"
					iconStyle={{ background: 'rgb(253, 212, 45)', color: '#fff' }}
					// icon="assets/images/headset.svg" alt="Logo"
				>
					<h3 className="vertical-timeline-element-title">Course & City Selection</h3>
					{/*<h4 className="vertical-timeline-element-subtitle"></h4> */}
					<p>We have a highly experienced and professional team that assists you to select the best course in the popular university in the well-renowned country providing the best MBBS course. So, leave your worries about the selection process as we resolve your problem in minutes with proper counseling.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(253, 212, 45)', color: '#000' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(253, 212, 45)' }}
					date="3"
					iconStyle={{ background: 'rgb(253, 212, 45)', color: '#fff' }}
					// icon="assets/images/headset.svg" alt="Logo"
				>
					<h3 className="vertical-timeline-element-title">Admission Guidance & Process</h3>
					{/*<h4 className="vertical-timeline-element-subtitle"></h4> */}
					<p>The admission process can be tough for Indian students as they are not familiar with it. We make the admission process of MBBS abroad hassle-free by assisting you in preparing applications and documents that need to be submitted.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(253, 212, 45)', color: '#000' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(253, 212, 45)' }}
					date="4"
					iconStyle={{ background: 'rgb(253, 212, 45)', color: '#fff' }}
					// icon="assets/images/headset.svg" alt="Logo"
				>
					<h3 className="vertical-timeline-element-title">Visa Documents & Assistance</h3>
					{/*<h4 className="vertical-timeline-element-subtitle"></h4> */}
					<p>A student visa is an essential part of taking admission in the MBBS course abroad. We assist students in preparing the required documents important for visa application and make students comply with the complete visa eligibility for 100% approvals.</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(253, 212, 45)', color: '#000' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(253, 212, 45)' }}
					date="5"
					iconStyle={{ background: 'rgb(253, 212, 45)', color: '#fff' }}
					// icon="assets/images/headset.svg" alt="Logo"
				>
					<h3 className="vertical-timeline-element-title">Travel & Forex Assistance</h3>
					{/*<h4 className="vertical-timeline-element-subtitle"></h4> */}
					<p>Safe and secure travel is the hearty wish of each student who travels abroad for the MBBS course. We help in booking air tickets for the selected destination and make students’ stay and travel easy. We also help with the travel and forex conversion without any additional price.</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(253, 212, 45)', color: '#000' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(253, 212, 45)' }}
					date="6"
					iconStyle={{ background: 'rgb(253, 212, 45)', color: '#fff' }}
					// icon="assets/images/headset.svg" alt="Logo"
				>
					<h3 className="vertical-timeline-element-title">Pre-Departure Guidance</h3>
					{/*<h4 className="vertical-timeline-element-subtitle"></h4> */}
					<p>Travel abroad for pursuing MBBS includes specific terms and conditions such as how much luggage allowed in flights, check-in, boarding terminal, safe & secure travel. Our experts assist you through the pre-departure procedures and give all the information to have a safe and cheerful journey.</p>
				</VerticalTimelineElement>
				{/*<VerticalTimelineElement
					iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
					// icon={<faCircle />}
				/> */}
			</VerticalTimeline>
        </div>
    )
}

export default Timeline
