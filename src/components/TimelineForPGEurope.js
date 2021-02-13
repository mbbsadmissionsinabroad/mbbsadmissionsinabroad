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
					<h3 className="vertical-timeline-element-title">Step - 1</h3>
					{/*<h4 className="vertical-timeline-element-subtitle"></h4> */}
					<p>Submit all documents for recognition procedure to validate your education and get a provisional license</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(253, 212, 45)', color: '#000' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(253, 212, 45)' }}
					date="2"
					iconStyle={{ background: 'rgb(253, 212, 45)', color: '#fff' }}
					// icon="assets/images/headset.svg" alt="Logo"
				>
					<h3 className="vertical-timeline-element-title">Step - 2</h3>
					{/*<h4 className="vertical-timeline-element-subtitle"></h4> */}
					<p>Apply for the training and Medical Swedish and Swedish level 1,2 & 3 Language courses</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(253, 212, 45)', color: '#000' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(253, 212, 45)' }}
					date="3"
					iconStyle={{ background: 'rgb(253, 212, 45)', color: '#fff' }}
					// icon="assets/images/headset.svg" alt="Logo"
				>
					<h3 className="vertical-timeline-element-title">Step - 3</h3>
					{/*<h4 className="vertical-timeline-element-subtitle"></h4> */}
					<p>Pay the fees for the training course in three instalments for each semester. Only first instalment to be paid before travel to sweden. Other two instalments to be paid during your stay in sweden during the course which will last for 10 months.</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: 'rgb(253, 212, 45)', color: '#000' }}
					contentArrowStyle={{ borderRight: '7px solid  rgb(253, 212, 45)' }}
					date="4"
					iconStyle={{ background: 'rgb(253, 212, 45)', color: '#fff' }}
					// icon="assets/images/headset.svg" alt="Logo"
				>
					<h3 className="vertical-timeline-element-title">Step - 4</h3>
					{/*<h4 className="vertical-timeline-element-subtitle"></h4> */}
					<p>Get your documents for a visa from the medical council and the language center, apply for a visa and plan your visit to sweden</p>
				</VerticalTimelineElement>
				{/*<VerticalTimelineElement
					iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
					// icon={<faCircle />}
				/> */}
			</VerticalTimeline>
        </div>
    )
}

export default Timeline;