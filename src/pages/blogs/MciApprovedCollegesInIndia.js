import React from 'react';
import "./Blog.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import DocumentMeta from "react-document-meta";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';



function MciApprovedCollegesInIndia() {

	const meta = {
    title: "List of Medical Colleges in India Approved by MCI",
    description: "List of Medical Colleges in India Approved by MCI 335 medical colleges in India out of which 180 are the private institutions and 155 are government institutions.",
    canonical: "https://www.mbbsadmissionsinabroad.com/list-of-medical-colleges-in-india-approved-by-mci",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "List of MCI Approved Colleges in India",
      },
    },
	};

	const colleges = [
		{
			"id": 1,
			"state": "Andaman Nicobar Islands",
			"city": "Port Blair",
			"collegename": "Andaman & Nicobar Islands Institute of Medical Sciences, Port Blair",
			"affliated": "Pondicherry University",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 2,
			"state": "Andhra Pradesh",
			"city": "Nellore",
			"collegename": "ACSR Government Medical College Nellore",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Govt.",
			"seats": 175
		},
		{
			"id": 3,
			"state": "Andhra Pradesh",
			"city": "Vijayawada",
			"collegename": "All India Institute of Medical Sciences, Mangalagiri, Vijayawada",
			"affliated": "Statutory Autonomous, AIIMS",
			"management": "Govt.",
			"seats": 50
		},
		{
			"id": 4,
			"state": "Andhra Pradesh",
			"city": "Eluru",
			"collegename": "Alluri Sitaram Raju Academy of Medical Sciences, Eluru",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 5,
			"state": "Andhra Pradesh",
			"city": "Visakhapatnam",
			"collegename": "Andhra Medical College, Visakhapatnam",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 6,
			"state": "Andhra Pradesh",
			"city": "Chittoor",
			"collegename": "Apollo Institute of Medical Sciences and Research, Chittoor",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Society",
			"seats": 150
		},
		{
			"id": 7,
			"state": "Andhra Pradesh",
			"city": "Chinoutpalli",
			"collegename": "Dr. P.S.I. Medical College , Chinoutpalli",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 8,
			"state": "Andhra Pradesh",
			"city": "Kadapa",
			"collegename": "Fathima Instt. of Medical Sciences,Kadapa",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 9,
			"state": "Andhra Pradesh",
			"city": "Visakhapatnam",
			"collegename": "Gayathri Vidya Parishad Institute of Health Care & Medical Technology, Visakhapatnam",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Society",
			"seats": 150
		},
		{
			"id": 10,
			"state": "Andhra Pradesh",
			"city": "Visakhapatnam",
			"collegename": "GITAM Institute of Medical Sciences and Research, Visakhapatnam",
			"affliated": "Gandhi Institute of Technology and management (GITAM University) Deemed, Visakhapatnam",
			"management": "Private",
			"seats": 150
		},
		{
			"id": 11,
			"state": "Andhra Pradesh",
			"city": "Ananthapuram",
			"collegename": "Government Medical College, Ananthapuram",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 12,
			"state": "Andhra Pradesh",
			"city": "Vijaywada",
			"collegename": "Government Siddhartha Medical College, Vijaywada",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Govt.",
			"seats": 175
		},
		{
			"id": 13,
			"state": "Andhra Pradesh",
			"city": "Srikakulam",
			"collegename": "Great Eastern Medical School and Hospital,Srikakulam",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 14,
			"state": "Andhra Pradesh",
			"city": "Rajahmundry",
			"collegename": "GSL Medical College, Rajahmundry",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Trust",
			"seats": 200
		},
		{
			"id": 15,
			"state": "Andhra Pradesh",
			"city": "Guntur",
			"collegename": "Guntur Medical College, Guntur",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 16,
			"state": "Andhra Pradesh",
			"city": "Guntur",
			"collegename": "Katuri Medical College, Guntur",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 17,
			"state": "Andhra Pradesh",
			"city": "Amalapuram",
			"collegename": "Konaseema Institute of Medical Sciences & Research Foundation, Amalapuram",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 18,
			"state": "Andhra Pradesh",
			"city": "Kurnool",
			"collegename": "Kurnool Medical College, Kurnool",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 19,
			"state": "Andhra Pradesh",
			"city": "Vizianagaram",
			"collegename": "Maharajah Institute of Medical Sciences, Vizianagaram",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 20,
			"state": "Andhra Pradesh",
			"city": "Nellore",
			"collegename": "Narayana Medical College, Nellore",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Trust",
			"seats": 250
		},
		{
			"id": 21,
			"state": "Andhra Pradesh",
			"city": "Andhra Pradesh",
			"collegename": "Nimra Institute of Medical Sciences, Krishna Dist., A.P.",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Society",
			"seats": 150
		},
		{
			"id": 22,
			"state": "Andhra Pradesh",
			"city": "Visakhapatnam",
			"collegename": "NRI Institute of Medical Sciences, Visakhapatnam",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 23,
			"state": "Andhra Pradesh",
			"city": "Guntur",
			"collegename": "NRI Medical College, Guntur",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Trust",
			"seats": 200
		},
		{
			"id": 24,
			"state": "Andhra Pradesh",
			"city": "Kuppam",
			"collegename": "P E S Institute Of Medical Sciences and Research, Kuppam",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 25,
			"state": "Andhra Pradesh",
			"city": "Kadapa",
			"collegename": "Rajiv Gandhi Institute of Medical Sciences, Kadapa",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Govt.",
			"seats": 175
		},
		{
			"id": 26,
			"state": "Andhra Pradesh",
			"city": "Ongole",
			"collegename": "Rajiv Gandhi Institute of Medical Sciences,Ongole, AP",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Govt.",
			"seats": 120
		},
		{
			"id": 27,
			"state": "Andhra Pradesh",
			"city": "Srikakulam",
			"collegename": "Rajiv Gandhi Institute of Medical Sciences, Srikakulam",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 28,
			"state": "Andhra Pradesh",
			"city": "Kakinada",
			"collegename": "Rangaraya Medical College, Kakinada",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 29,
			"state": "Andhra Pradesh",
			"city": "Nandyal",
			"collegename": "Santhiram Medical College, Nandyal",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 30,
			"state": "Andhra Pradesh",
			"city": "Tirupati",
			"collegename": "SVIMS - Sri Padmavathi Medical College for Women, Alipiri Road, Tirupati",
			"affliated": "Sri Venkateswara Institute of Medical Sciences (SVIMS), Tirupati",
			"management": "Govt.",
			"seats": 175
		},
		{
			"id": 31,
			"state": "Andhra Pradesh",
			"city": "Tirupati",
			"collegename": "S V Medical College, Tirupati",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Govt.",
			"seats": 240
		},
		{
			"id": 32,
			"state": "Andhra Pradesh",
			"city": "Kurnool",
			"collegename": "Viswabharathi Medical College, Kurnool",
			"affliated": "NTR University of Health Sciences, VijayWada",
			"management": "Society",
			"seats": 150
		},
		{
			"id": 33,
			"state": "Arunachal Pradesh",
			"city": "Naharlagun",
			"collegename": "Tomo Riba Institute of Health & Medical Sciences, Naharlagun",
			"affliated": "Rajiv Gandhi University, Arunanchal Pradesh",
			"management": "Govt.",
			"seats": 50
		},
		{
			"id": 34,
			"state": "Assam",
			"city": "Dibrugarh",
			"collegename": "Assam Medial College, Dibrugarh",
			"affliated": "Srimanta Shankardeva University of Health Sciences",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 35,
			"state": "Assam",
			"city": "Diphu",
			"collegename": "Diphu Medical College & Hospital, Diphu, Assam",
			"affliated": "Srimanta Shankardeva University of Health Sciences",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 36,
			"state": "Assam",
			"city": "Barpeta",
			"collegename": "Fakhruddin Ali Ahmed Medical College, Barpeta, Assam",
			"affliated": "Srimanta Shankardeva University of Health Sciences",
			"management": "Govt-Society",
			"seats": 125
		},
		{
			"id": 37,
			"state": "Assam",
			"city": "Guwahati",
			"collegename": "Gauhati Medical College, Guwahati",
			"affliated": "Srimanta Shankardeva University of Health Sciences",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 38,
			"state": "Assam",
			"city": "Jorhat",
			"collegename": "Jorhat Medical College & Hospital , Jorhat",
			"affliated": "Srimanta Shankardeva University of Health Sciences",
			"management": "Govt.",
			"seats": 125
		},
		{
			"id": 39,
			"state": "Assam",
			"city": "Silchar",
			"collegename": "Silchar Medical College, Silchar",
			"affliated": "Srimanta Shankardeva University of Health Sciences",
			"management": "Govt.",
			"seats": 125
		},
		{
			"id": 40,
			"state": "Assam",
			"city": "Tezpur",
			"collegename": "Tezpur Medical College & Hospital, Tezpur",
			"affliated": "Srimanta Shankardeva University of Health Sciences",
			"management": "Govt.",
			"seats": 125
		},
		{
			"id": 41,
			"state": "Bihar",
			"city": "Patna",
			"collegename": "All India Institute of Medical Sciences, Patna",
			"affliated": "Statutory Autonomous, AIIMS",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 42,
			"state": "Bihar",
			"city": "Gaya",
			"collegename": "Anugrah Narayan Magadh Medical College, Gaya",
			"affliated": "Aryabhatta Knowledge University, Patna",
			"management": "Govt.",
			"seats": 120
		},
		{
			"id": 43,
			"state": "Bihar",
			"city": "Lehriasarai",
			"collegename": "Darbhanga Medical College, Lehriasarai",
			"affliated": "Aryabhatta Knowledge University, Patna",
			"management": "Govt.",
			"seats": 120
		},
		{
			"id": 44,
			"state": "Bihar",
			"city": "Bettiah",
			"collegename": "Government Medical College, Bettiah",
			"affliated": "Aryabhatta Knowledge University, Patna",
			"management": "Govt.",
			"seats": 120
		},
		{
			"id": 45,
			"state": "Bihar",
			"city": "Patna",
			"collegename": "Indira Gandhi Institute of Medical Sciences,Sheikhpura, Patna",
			"affliated": "Indira Gandhi Instt of Medical Sciences (Deemed University), Patna",
			"management": "Govt.",
			"seats": 120
		},
		{
			"id": 46,
			"state": "Bihar",
			"city": "Bhagalpur",
			"collegename": "Jawaharlal Nehru Medical College, Bhagalpur",
			"affliated": "Aryabhatta Knowledge University, Patna",
			"management": "Govt.",
			"seats": 120
		},
		{
			"id": 47,
			"state": "Bihar",
			"city": "Katihar",
			"collegename": "Katihar Medical College, Katihar",
			"affliated": "Al-Karim University, Katihar",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 48,
			"state": "Bihar",
			"city": "Saharsa",
			"collegename": "Lord Buddha Koshi Medical College and Hospital, Saharsa",
			"affliated": "B.N. Mandal University",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 49,
			"state": "Bihar",
			"city": "Madhubani",
			"collegename": "Madhubani Medical College, Madhubani",
			"affliated": "Aryabhatta Knowledge University, Patna",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 50,
			"state": "Bihar",
			"city": "Kishanganj",
			"collegename": "Mata Gujri Memorial Medical College, Kishanganj",
			"affliated": "B.N. Mandal University",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 51,
			"state": "Bihar",
			"city": "Patna",
			"collegename": "Nalanda Medical College, Patna",
			"affliated": "Aryabhatta Knowledge University, Patna",
			"management": "Govt.",
			"seats": 120
		},
		{
			"id": 52,
			"state": "Bihar",
			"city": "Sasaram",
			"collegename": "Narayan Medical College & Hospital, Sasaram",
			"affliated": "Veer Kunwar Singh University,Bihar",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 53,
			"state": "Bihar",
			"city": "Patna",
			"collegename": "Netaji Subhas Medical College & Hospital, Amhara, Bihta, Patna",
			"affliated": "Aryabhatta Knowledge University, Patna",
			"management": "Society",
			"seats": 100
		},
		{
			"id": 54,
			"state": "Bihar",
			"city": "Patna",
			"collegename": "Patna Medical College, Patna",
			"affliated": "Aryabhatta Knowledge University, Patna",
			"management": "Govt.",
			"seats": 180
		},
		{
			"id": 55,
			"state": "Bihar",
			"city": "Muzzafarpur",
			"collegename": "Shri Krishna Medical College, Muzzafarpur",
			"affliated": "Aryabhatta Knowledge University, Patna",
			"management": "Govt.",
			"seats": 120
		},
		{
			"id": 56,
			"state": "Bihar",
			"city": "Nalanda",
			"collegename": "Vardhman Institute of Medical Sciences, Pawapuri, Nalanda",
			"affliated": "Aryabhatta Knowledge University, Patna",
			"management": "Govt.",
			"seats": 120
		},
		{
			"id": 57,
			"state": "Chandigarh",
			"city": "Chandigarh",
			"collegename": "Government Medical College, Chandigarh",
			"affliated": "Punjab University",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 58,
			"state": "Chattisgarh",
			"city": "Raipur",
			"collegename": "All India Institute of Medical Sciences, Raipur",
			"affliated": "Statutory Autonomous, AIIMS",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 59,
			"state": "Chattisgarh",
			"city": "Durg",
			"collegename": "Chandulal Chandrakar Memorial Medical College, Durg",
			"affliated": "Pt. Deendayal Upadhyay Memorial Health Sciences and Ayush University, Raipur",
			"management": "Private",
			"seats": 150
		},
		{
			"id": 60,
			"state": "Chattisgarh",
			"city": "Bilaspur",
			"collegename": "Chhattisgarh Institute of Medical Sciences, Bilaspur",
			"affliated": "Pt. Deendayal Upadhyay Memorial Health Sciences and Ayush University, Raipur",
			"management": "Govt.",
			"seats": 180
		},
		{
			"id": 61,
			"state": "Chattisgarh",
			"city": "Chhattisgarh",
			"collegename": "Government Medical College, Ambikapur (Surguja), Chhattisgarh",
			"affliated": "Pt. Deendayal Upadhyay Memorial Health Sciences and Ayush University, Raipur",
			"management": "Govt.",
			"seats": ""
		},
		{
			"id": 62,
			"state": "Chattisgarh",
			"city": "Rajnandgaon",
			"collegename": "Government Medical College (Bharat Ratna Shri Atal Bihari Vajpyee Memorial Med. Col.), Rajnandgaon",
			"affliated": "Pt. Deendayal Upadhyay Memorial Health Sciences and Ayush University, Raipur",
			"management": "Govt.",
			"seats": 125
		},
		{
			"id": 63,
			"state": "Chattisgarh",
			"city": "Jagdalpur",
			"collegename": "Late Shri Baliram Kashyap Memorial NDMC Govt. Medical College, Jagdalpur",
			"affliated": "Pt. Deendayal Upadhyay Memorial Health Sciences and Ayush University, Raipur",
			"management": "Govt.",
			"seats": 125
		},
		{
			"id": 64,
			"state": "Chattisgarh",
			"city": "Raigarh",
			"collegename": "Late Shri Lakhi Ram Agrawal Memorial Govt. Medical College, Raigarh",
			"affliated": "Pt. Deendayal Upadhyay Memorial Health Sciences and Ayush University, Raipur",
			"management": "Govt.",
			"seats": 60
		},
		{
			"id": 65,
			"state": "Chattisgarh",
			"city": "Raipur",
			"collegename": "Pt. J N M Medical College, Raipur",
			"affliated": "Pt. Deendayal Upadhyay Memorial Health Sciences and Ayush University, Raipur",
			"management": "Govt.",
			"seats": 180
		},
		{
			"id": 66,
			"state": "Chattisgarh",
			"city": "Raipur",
			"collegename": "Raipur Institute of Medical Sciences (RIMS), Raipur",
			"affliated": "Pt. Deendayal Upadhyay Memorial Health Sciences and Ayush University, Raipur",
			"management": "Society",
			"seats": 150
		},
		{
			"id": 67,
			"state": "Chattisgarh",
			"city": "Bhilai",
			"collegename": "Shri Shankaracharya Institute of Medical Sciences, Bhilai",
			"affliated": "Pt. Deendayal Upadhyay Memorial Health Sciences and Ayush University, Raipur",
			"management": "Society",
			"seats": 150
		},
		{
			"id": 68,
			"state": "Dadra and Nagar Haveli",
			"city": "Silvassa",
			"collegename": "Shri Vinoba Bhave Institute of Medical Sciences, (Govt. Medical College) Silvassa, U.T",
			"affliated": "Veer Narmad South Gujarat University",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 69,
			"state": "Delhi",
			"city": "New Delhi",
			"collegename": "All India Institute of Medical Sciences, New Delhi",
			"affliated": "Statutory Autonomous, AIIMS",
			"management": "Govt.",
			"seats": 107
		},
		{
			"id": 70,
			"state": "Delhi",
			"city": "New Delhi",
			"collegename": "Army College of Medical Sciences, New Delhi",
			"affliated": "Guru Gobind Singh Indraprastha University",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 71,
			"state": "Delhi",
			"city": "New Delhi",
			"collegename": "Dr. Baba Saheb Ambedkar Medical College, Rohini, Delhi",
			"affliated": "Guru Gobind Singh Indraprastha University",
			"management": "Govt.",
			"seats": 125
		},
		{
			"id": 72,
			"state": "Delhi",
			"city": "New Delhi",
			"collegename": "Hamdard Institute of Medical Sciences & Research, New Delhi",
			"affliated": "University of Jamia Hamdard (Hamdard University)",
			"management": "Society",
			"seats": 100
		},
		{
			"id": 73,
			"state": "Delhi",
			"city": "New Delhi",
			"collegename": "Lady Hardinge Medical College, New Delhi",
			"affliated": "Delhi University",
			"management": "Govt.",
			"seats": 240
		},
		{
			"id": 74,
			"state": "Delhi",
			"city": "New Delhi",
			"collegename": "Maulana Azad Medical College, New Delhi",
			"affliated": "Delhi University",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 75,
			"state": "Delhi",
			"city": "New Delhi",
			"collegename": "North Delhi Muncipal Corporation Medical College, Delhi",
			"affliated": "Guru Gobind Singh Indraprastha University",
			"management": "Govt.",
			"seats": 60
		},
		{
			"id": 76,
			"state": "Delhi",
			"city": "New Delhi",
			"collegename": "PGIMER Dr. RML Hospital, New Delhi",
			"affliated": "Guru Gobind Singh Indraprastha University",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 77,
			"state": "Delhi",
			"city": "New Delhi",
			"collegename": "University College of Medical Sciences & GTB Hospital, New Delhi",
			"affliated": "Delhi University",
			"management": "Govt.",
			"seats": 170
		},
		{
			"id": 78,
			"state": "Delhi",
			"city": "New Delhi",
			"collegename": "Vardhman Mahavir Medical College & Safdarjung Hospital, Delhi",
			"affliated": "Guru Gobind Singh Indraprastha University",
			"management": "Govt.",
			"seats": 170
		},
		{
			"id": 79,
			"state": "Goa",
			"city": "Panaji",
			"collegename": "Goa Medical College, Panaji",
			"affliated": "Goa University",
			"management": "Govt.",
			"seats": 180
		},
		{
			"id": 80,
			"state": "Gujarat",
			"city": "Ahmedabad",
			"collegename": "Ahmedabad Municipal Coporation Medical Education Trust Medical College, Ahmedabad",
			"affliated": "Gujarat University",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 81,
			"state": "Gujarat",
			"city": "Gujarat",
			"collegename": "Banas Medical College and Research Institute, Palanpur, Gujarat",
			"affliated": "Hemchandracharya North Gujarat University,Patan",
			"management": "Trust",
			"seats": 200
		},
		{
			"id": 82,
			"state": "Gujarat",
			"city": "Ahmedabad",
			"collegename": "B J Medical College, Ahmedabad",
			"affliated": "Gujarat University",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 83,
			"state": "Gujarat",
			"city": "Surendra Nagar",
			"collegename": "CU Shah Medical College, Surendra Nagar",
			"affliated": "Saurashtra University",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 84,
			"state": "Gujarat",
			"city": "Ahmedabad",
			"collegename": "Dr. M.K. Shah Medical College & Research Centre, Ahmedabad",
			"affliated": "Gujarat University",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 85,
			"state": "Gujarat",
			"city": "Nadiad",
			"collegename": "Dr. N.D. Desai Faculty of Medical Science and Research, Nadiad",
			"affliated": "Dharmsinh Desai University, Nadiad",
			"management": "Private",
			"seats": 150
		},
		{
			"id": 86,
			"state": "Gujarat",
			"city": "Ahmedabad",
			"collegename": "GCS Medical College, Ahmedabad",
			"affliated": "Gujarat University",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 87,
			"state": "Gujarat",
			"city": "Dharpur Patan",
			"collegename": "GMERS Medical College, Dharpur Patan",
			"affliated": "Hemchandracharya North Gujarat University,Patan",
			"management": "Govt-Society",
			"seats": 200
		},
		{
			"id": 88,
			"state": "Gujarat",
			"city": "Gandhinagar",
			"collegename": "GMERS Medical College, Gandhinagar",
			"affliated": "Gujarat University",
			"management": "Govt-Society",
			"seats": 200
		},
		{
			"id": 89,
			"state": "Gujarat",
			"city": "Vadodara",
			"collegename": "GMERS Medical College, Gotri, Vadodara",
			"affliated": "MS University of Baroda",
			"management": "Govt-Society",
			"seats": 200
		},
		{
			"id": 90,
			"state": "Gujarat",
			"city": "Himmatnagar",
			"collegename": "GMERS Medical College, Hadiyol, Himmatnagar",
			"affliated": "Hemchandracharya North Gujarat University,Patan",
			"management": "Govt-Society",
			"seats": 200
		},
		{
			"id": 91,
			"state": "Gujarat",
			"city": "Junagadh",
			"collegename": "GMERS Medical College, Junagadh",
			"affliated": "Bhakta Kavi Narsing Mehta University, Bikha Roa, Khadia",
			"management": "Govt-Society",
			"seats": 200
		},
		{
			"id": 92,
			"state": "Gujarat",
			"city": "Ahmedabad",
			"collegename": "GMERS Medical College, Sola, Ahmedabad",
			"affliated": "Gujarat University",
			"management": "Govt-Society",
			"seats": 200
		},
		{
			"id": 93,
			"state": "Gujarat",
			"city": "Mehsana",
			"collegename": "GMERS Medical College, Vadnagar, Mehsana",
			"affliated": "Hemchandracharya North Gujarat University,Patan",
			"management": "Govt-Society",
			"seats": 200
		},
		{
			"id": 94,
			"state": "Gujarat",
			"city": "Valsad",
			"collegename": "GMERS Medical College, Valsad",
			"affliated": "Veer Narmad South Gujarat University",
			"management": "Govt-Society",
			"seats": 200
		},
		{
			"id": 95,
			"state": "Gujarat",
			"city": "Bhavnagar",
			"collegename": "Government Medical College, Bhavnagar",
			"affliated": "Maharaja Krishnakumarsinghji Bhavnagar University",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 96,
			"state": "Gujarat",
			"city": "Surat",
			"collegename": "Government Medical College, Surat",
			"affliated": "Veer Narmad South Gujarat University",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 97,
			"state": "Gujarat",
			"city": "Bhuj",
			"collegename": "Gujarat Adani Institute of Medical Sciences, Bhuj",
			"affliated": "KSKV Kachchh University, Bhuj",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 98,
			"state": "Gujarat",
			"city": "Baroda",
			"collegename": "Medical College, Baroda",
			"affliated": "MS University of Baroda",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 99,
			"state": "Gujarat",
			"city": "Jamnagar",
			"collegename": "MP Shah Medical College,Jamnagar",
			"affliated": "Saurashtra University",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 100,
			"state": "Gujarat",
			"city": "Mehsana",
			"collegename": "Nootan Medical College and Research Centre, Mehsana",
			"affliated": "Sankalchand Patel University",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 101,
			"state": "Gujarat",
			"city": "Rajkot",
			"collegename": "Pandit Deendayal Upadhyay Medical College, Rajkot",
			"affliated": "Saurashtra University",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 102,
			"state": "Gujarat",
			"city": "Vadodara",
			"collegename": "Parul Institute of Medical Sciences & Research, Vadodara",
			"affliated": "Parul University, Vadodara",
			"management": "Private",
			"seats": 150
		},
		{
			"id": 103,
			"state": "Gujarat",
			"city": "Karmsad",
			"collegename": "Pramukhswami Medical College, Karmsad",
			"affliated": "Sardar Patel University",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 104,
			"state": "Gujarat",
			"city": "Vadodra",
			"collegename": "SBKS Medical Instt. & Research Centre, Vadodra",
			"affliated": "Sumandeep Vidyapeeth University (Deemed), Vadodra",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 105,
			"state": "Gujarat",
			"city": "Amreli",
			"collegename": "Shantabaa Medical College, Amreli",
			"affliated": "Saurashtra University",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 106,
			"state": "Gujarat",
			"city": "Ahmedabad",
			"collegename": "Smt. N.H.L.Municipal Medical College, Ahmedabad",
			"affliated": "Gujarat University",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 107,
			"state": "Gujarat",
			"city": "Surat",
			"collegename": "Surat Municipal Institute of Medical Education & Research, Surat",
			"affliated": "Veer Narmad South Gujarat University",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 108,
			"state": "Gujarat",
			"city": "Dahod",
			"collegename": "Zydus Medical College & Hospital, Dahod",
			"affliated": "Shri Govind Guru University, Godhara",
			"management": "Trust",
			"seats": 200
		},
		{
			"id": 109,
			"state": "Haryana",
			"city": "Kurukshetra",
			"collegename": "Adesh Medical College and Hospital, Shahabad, Kurukshetra, Haryana",
			"affliated": "PT. B.D. Sharma University of Health Sciences, Rohtak",
			"management": "Society",
			"seats": 150
		},
		{
			"id": 110,
			"state": "Haryana",
			"city": "Faridabad",
			"collegename": "Al Falah School of Medical Sciences & Research Centre, Faridabad",
			"affliated": "Al-Falah University",
			"management": "Private",
			"seats": 150
		},
		{
			"id": 111,
			"state": "Haryana",
			"city": "Sonepat",
			"collegename": "BPS Government Medical College for Women, Sonepat",
			"affliated": "PT. B.D. Sharma University of Health Sciences, Rohtak",
			"management": "Govt.",
			"seats": 120
		},
		{
			"id": 112,
			"state": "Haryana",
			"city": "Faridabad",
			"collegename": "Employees state Insurance Corporation Medical College, Faridabad",
			"affliated": "PT. B.D. Sharma University of Health Sciences, Rohtak",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 113,
			"state": "Haryana",
			"city": "Gurgaon",
			"collegename": "Faculty of Medicine and Health Sciences, Gurgaon (Formarly SGGST Medical College & R Centre,Gurgaon)",
			"affliated": "SGT University, Gurugram",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 114,
			"state": "Haryana",
			"city": "Karnal",
			"collegename": "Kalpana Chawala Govt. Medical College, Karnal, Haryana",
			"affliated": "PT. B.D. Sharma University of Health Sciences, Rohtak",
			"management": "Govt.",
			"seats": 120
		},
		{
			"id": 115,
			"state": "Haryana",
			"city": "Agroha",
			"collegename": "Maharaja Agrasen Medical College, Agroha",
			"affliated": "PT. B.D. Sharma University of Health Sciences, Rohtak",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 116,
			"state": "Haryana",
			"city": "Ambala",
			"collegename": "Maharishi Markandeshwar Institute Of Medical Sciences & Research, Mullana, Ambala",
			"affliated": "Maharishi Marakandeshwar University (Deemed), Ambala",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 117,
			"state": "Haryana",
			"city": "Panipat",
			"collegename": "N.C. Medical College & Hospital, Panipat",
			"affliated": "PT. B.D. Sharma University of Health Sciences, Rohtak",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 118,
			"state": "Haryana",
			"city": "Rohtak",
			"collegename": "Pt. B D Sharma Postgraduate Institute of Medical Sciences, Rohtak (Haryana)",
			"affliated": "PT. B.D. Sharma University of Health Sciences, Rohtak",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 119,
			"state": "Haryana",
			"city": "Nalhar",
			"collegename": "Shaheed Hasan Khan Mewati Government Medical College, Nalhar",
			"affliated": "PT. B.D. Sharma University of Health Sciences, Rohtak",
			"management": "Govt.",
			"seats": 120
		},
		{
			"id": 120,
			"state": "Haryana",
			"city": "Jhajjar",
			"collegename": "World College of Medical Sciences & Researc, Jhajjar, Haryana",
			"affliated": "PT. B.D. Sharma University of Health Sciences, Rohtak",
			"management": "Trust",
			"seats": ""
		},
		{
			"id": 121,
			"state": "Himachal Pradesh",
			"city": "Hamirpur",
			"collegename": "Dr. Radhakrishnan Government Medical College, Hamirpur, H.P",
			"affliated": "Himachal Pradesh University",
			"management": "Govt.",
			"seats": 120
		},
		{
			"id": 122,
			"state": "Himachal Pradesh",
			"city": "Tanda",
			"collegename": "Dr. Rajendar Prasad Government Medical College, Tanda, H.P",
			"affliated": "Himachal Pradesh University",
			"management": "Govt.",
			"seats": 120
		},
		{
			"id": 123,
			"state": "Himachal Pradesh",
			"city": "Sirmour",
			"collegename": "Government Medical College, Nahan, Sirmour H.P.",
			"affliated": "Himachal Pradesh University",
			"management": "Govt.",
			"seats": 120
		},
		{
			"id": 124,
			"state": "Himachal Pradesh",
			"city": "Shimla",
			"collegename": "Indira Gandhi Medical College, Shimla",
			"affliated": "Himachal Pradesh University",
			"management": "Govt.",
			"seats": 120
		},
		{
			"id": 125,
			"state": "Himachal Pradesh",
			"city": "Solan",
			"collegename": "Maharishi Markandeshwar Medical College & Hospital, Solan",
			"affliated": "Maharishi Marakandeshwar University, Kumarhatti, Solan",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 126,
			"state": "Himachal Pradesh",
			"city": "Chamba",
			"collegename": "Pt. Jawahar Lal Nehru Government Medical College, Chamba",
			"affliated": "Himachal Pradesh University",
			"management": "Govt.",
			"seats": 120
		},
		{
			"id": 127,
			"state": "Himachal Pradesh",
			"city": "Mandi",
			"collegename": "Shri Lal Bahadur Shastri Government Medical College, Mandi, HP",
			"affliated": "Himachal Pradesh University",
			"management": "Govt.",
			"seats": 120
		},
		{
			"id": 128,
			"state": "Jammu & Kashmir",
			"city": "Jammu",
			"collegename": "Acharya Shri Chander College of Medical Sciences, Jammu",
			"affliated": "Jammu University",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 129,
			"state": "Jammu & Kashmir",
			"city": "Anantnag",
			"collegename": "Government Medical College, Anantnag",
			"affliated": "Kashmir University",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 130,
			"state": "Jammu & Kashmir",
			"city": "Rajouri",
			"collegename": "Government Medical College & Associated Hospital, Rajouri, J&K",
			"affliated": "Jammu University",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 131,
			"state": "Jammu & Kashmir",
			"city": "Baramulla",
			"collegename": "Government Medical College, Baramulla",
			"affliated": "Kashmir University",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 132,
			"state": "Jammu & Kashmir",
			"city": "Jammu",
			"collegename": "Government Medical College, Jammu",
			"affliated": "Jammu University",
			"management": "Govt.",
			"seats": 180
		},
		{
			"id": 133,
			"state": "Jammu & Kashmir",
			"city": "Kathua",
			"collegename": "Government Medical College, Kathua",
			"affliated": "Jammu University",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 134,
			"state": "Jammu & Kashmir",
			"city": "Srinagar",
			"collegename": "Government Medical College, Srinagar",
			"affliated": "Kashmir University",
			"management": "Govt.",
			"seats": 180
		},
		{
			"id": 135,
			"state": "Jammu & Kashmir",
			"city": "Srinagar",
			"collegename": "Sher-I-Kashmir Instt. Of Medical Sciences, Srinagar",
			"affliated": "Deemed University, Jammu & Kashmir",
			"management": "Govt.",
			"seats": 125
		},
		{
			"id": 136,
			"state": "Jharkhand",
			"city": "Deoghar",
			"collegename": "All India Institute of Medical Sciences, Deoghar",
			"affliated": "Statutory Autonomous, AIIMS",
			"management": "Govt.",
			"seats": 50
		},
		{
			"id": 137,
			"state": "Jharkhand",
			"city": "Dighi Dumka",
			"collegename": "Dumka Medical College, Dighi Dumka",
			"affliated": "Sidho Kanhu Murmu University",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 138,
			"state": "Jharkhand",
			"city": "Hazaribagh",
			"collegename": "Hazaribagh Medical College, Hazaribagh",
			"affliated": "Vinoba Bhave University",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 139,
			"state": "Jharkhand",
			"city": "Jamshedpur",
			"collegename": "M G M Medical College, Jamshedpur",
			"affliated": "Kolhan University, Chaibasa",
			"management": "Govt.",
			"seats": 50
		},
		{
			"id": 140,
			"state": "Jharkhand",
			"city": "Palamu",
			"collegename": "Palamu Medical College, Palamu",
			"affliated": "Nilamber-Pitamber University",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 141,
			"state": "Jharkhand",
			"city": "Dhanbad",
			"collegename": "Patliputra Medical College, Dhanbad",
			"affliated": "Vinoba Bhave University",
			"management": "Govt.",
			"seats": 50
		},
		{
			"id": 142,
			"state": "Jharkhand",
			"city": "Ranchi",
			"collegename": "Rajendra Institute of Medical Sciences, Ranchi",
			"affliated": "Ranchi University",
			"management": "Govt.",
			"seats": 180
		},
		{
			"id": 143,
			"state": "Karnataka",
			"city": "Bellur",
			"collegename": "Adichunchanagiri Institute of Medical Sciences Bellur",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 144,
			"state": "Karnataka",
			"city": "Mangalore",
			"collegename": "A J Institute of Medical Sciences & Research Centre, Mangalore",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 145,
			"state": "Karnataka",
			"city": "Bangalore",
			"collegename": "Akash Institute of Medical Sciences & Research Centre, Devanhalli, Bangalore, Karnataka",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 146,
			"state": "Karnataka",
			"city": "Bijapur",
			"collegename": "Al-Ameen Medical College,Bijapur",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 147,
			"state": "Karnataka",
			"city": "Bangalore",
			"collegename": "Bangalore Medical College and Research Institute, Bangalore",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 148,
			"state": "Karnataka",
			"city": "Chitradurga",
			"collegename": "Basaveswara Medical College and Hospital, Chitradurga",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 149,
			"state": "Karnataka",
			"city": "Belagavi",
			"collegename": "Belagavi Institute of Medical Sciences, Belagavi",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 150,
			"state": "Karnataka",
			"city": "Bangalore",
			"collegename": "BGS Global Institute of Medical Sciences, Bangalore",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 151,
			"state": "Karnataka",
			"city": "Bidar",
			"collegename": "Bidar Institute of Medical Sciences,Bidar",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 152,
			"state": "Karnataka",
			"city": "Bangalore",
			"collegename": "Bowring & Lady Curzon Medical College & Research Institute, Bangalore",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 153,
			"state": "Karnataka",
			"city": "Chamrajanagar",
			"collegename": "Chamrajanagar Institute of Medical Sciences, Karnataka",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 154,
			"state": "Karnataka",
			"city": "Bangalore",
			"collegename": "Dr BR Ambedkar Medical College, Bangalore",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 155,
			"state": "Karnataka",
			"city": "Hubli",
			"collegename": "Dr. Chandramma Dayananda Sagar Instt. of Medical Education & Research, Harohalli, Hubli",
			"affliated": "Dayananda Sagar University, Bangalore",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 156,
			"state": "Karnataka",
			"city": "Bangalore",
			"collegename": "East Point College of Medical Sciences & Research Centre, Bangalore",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 157,
			"state": "Karnataka",
			"city": "Bangalore",
			"collegename": "Employees state Insurance Corporation Medical College, Bangalore",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 158,
			"state": "Karnataka",
			"city": "Gulbarga",
			"collegename": "Employees state Insurance Corporation Medical College, Gulbarga",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 159,
			"state": "Karnataka",
			"city": "Mangalore",
			"collegename": "Father Mullers Medical College, Mangalore",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 160,
			"state": "Karnataka",
			"city": "Gadag",
			"collegename": "Gadag Institute of Medical Sciences, Mallasamudra, Mulgund Road, Gadag",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 161,
			"state": "Karnataka",
			"city": "Gulbarga",
			"collegename": "Gulbarga Institute of Medical Sciences, Gulbarga",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 162,
			"state": "Karnataka",
			"city": "Hassan",
			"collegename": "Hassan Institute of Medical Sciences, Hassan",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 163,
			"state": "Karnataka",
			"city": "Belgaum",
			"collegename": "Jawaharlal Nehru Medical College, Belgaum",
			"affliated": "KLE Academy of Higher Education & Research (Deemed), Belgaum",
			"management": "Trust",
			"seats": 200
		},
		{
			"id": 164,
			"state": "Karnataka",
			"city": "Davangere",
			"collegename": "JJM Medical College, Davangere",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 245
		},
		{
			"id": 165,
			"state": "Karnataka",
			"city": "Mysore",
			"collegename": "JSS Medical College, Mysore",
			"affliated": "JSS Academy of Higher Education & Research, Mysuru",
			"management": "Trust",
			"seats": 200
		},
		{
			"id": 166,
			"state": "Karnataka",
			"city": "Mangalore",
			"collegename": "Kanachur Institute of Medical Sciences, Mangalore",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 167,
			"state": "Karnataka",
			"city": "Hubballi",
			"collegename": "Karnataka Institute of Medical Sciences, Hubballi",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 168,
			"state": "Karnataka",
			"city": "Karwar",
			"collegename": "Karwar Institute of Medical Sciences, Karwar",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 169,
			"state": "Karnataka",
			"city": "Mangalore",
			"collegename": "Kasturba Medical College, Mangalore",
			"affliated": "Manipal Academy of Higher Education (Deemed University), Manipal",
			"management": "Trust",
			"seats": 250
		},
		{
			"id": 170,
			"state": "Karnataka",
			"city": "Manipal",
			"collegename": "Kasturba Medical College, Manipal",
			"affliated": "Manipal Academy of Higher Education (Deemed University), Manipal",
			"management": "Trust",
			"seats": 250
		},
		{
			"id": 171,
			"state": "Karnataka",
			"city": "Bangalore",
			"collegename": "Kempegowda Institute of Medical Sciences, Bangalore",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 172,
			"state": "Karnataka",
			"city": "Gulbarga",
			"collegename": "Khaja Bandanawaz University - Faculty of Medical Sciences, Gulbarga",
			"affliated": "Khaja Bandanawaz University",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 173,
			"state": "Karnataka",
			"city": "Kodagu",
			"collegename": "Kodagu Institute of Medical Sciences, Kodagu",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 174,
			"state": "Karnataka",
			"city": "Koppal",
			"collegename": "Koppal Institute of Medical Sciences, Koppal",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 175,
			"state": "Karnataka",
			"city": "Mangalore",
			"collegename": "K S Hegde Medical Academy, Mangalore",
			"affliated": "Nitte University (Deemed), Mangalore",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 176,
			"state": "Karnataka",
			"city": "Sullia",
			"collegename": "K V G Medical College, Sullia",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 177,
			"state": "Karnataka",
			"city": "Gulbarga",
			"collegename": "Mahadevappa Rampure Medical College, Kalaburagi, Gulbarga",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 178,
			"state": "Karnataka",
			"city": "Mandya",
			"collegename": "Mandya Institute of Medical Sciences, Mandya",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 179,
			"state": "Karnataka",
			"city": "Bangalore",
			"collegename": "M S Ramaiah Medical College, Bangalore",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 180,
			"state": "Karnataka",
			"city": "Bangalore",
			"collegename": "MVJ Medical College and Research Hospital, Bangalore",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 181,
			"state": "Karnataka",
			"city": "Mysore",
			"collegename": "Mysore Medical College and Research Instt. (Prev.name Government Medical College), Mysore",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 182,
			"state": "Karnataka",
			"city": "Raichur",
			"collegename": "Navodaya Medical College, Raichur",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 183,
			"state": "Karnataka",
			"city": "Raichur",
			"collegename": "Raichur Institute of Medical Sciences,Raichur",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 184,
			"state": "Karnataka",
			"city": "Bangalore",
			"collegename": "Rajarajeswari Medical College & Hospital, Bangalore",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 250
		},
		{
			"id": 185,
			"state": "Karnataka",
			"city": "Kolar",
			"collegename": "Sambharam Institute of Medical Sciences & Research, Kolar",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": ""
		},
		{
			"id": 186,
			"state": "Karnataka",
			"city": "Bangalore",
			"collegename": "Sapthagiri Institute of Medical Sciences & Research Centre, Bangalore",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 187,
			"state": "Karnataka",
			"city": "Dharwad",
			"collegename": "SDM College of Medical Sciences & Hospital, Sattur, Dharwad",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 188,
			"state": "Karnataka",
			"city": "Shimoga",
			"collegename": "Shimoga Institute of Medical Sciences,Shimoga",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 189,
			"state": "Karnataka",
			"city": "Bijapur",
			"collegename": "Shri B M Patil Medical College, Hospital & Research Centre, Vijayapura(Bijapur",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 190,
			"state": "Karnataka",
			"city": "Tumkur",
			"collegename": "Shridevi Institute of Medical Sciences & Research Hospital, Tumkur",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 191,
			"state": "Karnataka",
			"city": "Bagalkot",
			"collegename": "S. Nijalingappa Medical College & HSK Hospital & Research Centre, Bagalkot",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 250
		},
		{
			"id": 192,
			"state": "Karnataka",
			"city": "Kolar",
			"collegename": "Sri Devaraj URS Medical College, Kolar",
			"affliated": "Sri Devaraj Urs Academy of Higher Education and Research (Deemed University), Kolar",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 193,
			"state": "Karnataka",
			"city": "Srinivasnagar",
			"collegename": "Srinivas Institute of Medical Research Centre, Srinivasnagar",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 194,
			"state": "Karnataka",
			"city": "Bangalore",
			"collegename": "Sri siddhartha Institute of Medical Sciences & Research Centre, Bangalore",
			"affliated": "Sri Siddhartha Academy of Higher Education, Tumkur",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 195,
			"state": "Karnataka",
			"city": "Tumkur",
			"collegename": "Sri Siddhartha Medical College, Tumkur",
			"affliated": "Sri Siddhartha Academy of Higher Education, Tumkur",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 196,
			"state": "Karnataka",
			"city": "Davangere",
			"collegename": "S S Institute of Medical Sciences& Research Centre, Davangere",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 197,
			"state": "Karnataka",
			"city": "Bangalore",
			"collegename": "St. Johns Medical College, Bangalore",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 198,
			"state": "Karnataka",
			"city": "Shimoga",
			"collegename": "Subbaiah Institute of Medical Sciences, Shimoga, Karnataka",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 199,
			"state": "Karnataka",
			"city": "Bangalore",
			"collegename": "The Oxford Medical College, Hospital & Research Centre, Bangalore",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Society",
			"seats": 150
		},
		{
			"id": 200,
			"state": "Karnataka",
			"city": "Bellary",
			"collegename": "Vijaynagar Institute of Medical Sciences, Bellary",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 201,
			"state": "Karnataka",
			"city": "Bangalore",
			"collegename": "Vydehi Institute Of Medical Sciences & Research Centre, Bangalore",
			"affliated": "Rajiv Gandhi University of Health Sciences, Karnataka",
			"management": "Trust",
			"seats": 250
		},
		{
			"id": 202,
			"state": "Karnataka",
			"city": "Mangalore",
			"collegename": "Yenepoya Medical College, Mangalore",
			"affliated": "Yenepoya University (Deemed), Mangalore",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 203,
			"state": "Kerala",
			"city": "Thodupuzha",
			"collegename": "Al-Azhar Medical College and Super Speciality Hospital, Thodupuzha",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 204,
			"state": "Kerala",
			"city": "Thrissur",
			"collegename": "Amala Institute of Medical Sciences, Thrissur",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 205,
			"state": "Kerala",
			"city": "Kochi",
			"collegename": "Amrita School of Medicine, Elamkara, Kochi",
			"affliated": "Amrita Vishwa Vidyapeetham University (Deemed), Coimbatore",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 206,
			"state": "Kerala",
			"city": "Kollam",
			"collegename": "Azeezia Instt of Medical Science,Meeyannoor,Kollam",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 207,
			"state": "Kerala",
			"city": "Thiruvalla",
			"collegename": "Believers Church Medical College Hospital, Thiruvalla, Kerala",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 208,
			"state": "Kerala",
			"city": "Wayanad",
			"collegename": "DM Wayanad Institute of Medical Sciences, Wayanad, Kerala",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 209,
			"state": "Kerala",
			"city": "Thiruvananthapuram",
			"collegename": "Dr. Somervel Memorial CSI Hospital & Medical College, Karakonam, Thiruvananthapuram",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 210,
			"state": "Kerala",
			"city": "Ernakulam",
			"collegename": "Government Medical College, Ernakulam",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Govt.",
			"seats": 110
		},
		{
			"id": 211,
			"state": "Kerala",
			"city": "Palakkad",
			"collegename": "Government Medical College (Institute of Integrated Medical Sciences), Yakkara, Palakkad",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 212,
			"state": "Kerala",
			"city": "Kottayam",
			"collegename": "Government Medical College, Kottayam",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Govt.",
			"seats": 175
		},
		{
			"id": 213,
			"state": "Kerala",
			"city": "Kozhikode",
			"collegename": "Government Medical College, Kozhikode, Calicut",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 214,
			"state": "Kerala",
			"city": "Malapuram",
			"collegename": "Government Medical College, Manjeri, Malapuram Dist.",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Govt.",
			"seats": 110
		},
		{
			"id": 215,
			"state": "Kerala",
			"city": "Kollam",
			"collegename": "Government Medical College, Parippally, Kollam",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Govt.",
			"seats": 110
		},
		{
			"id": 216,
			"state": "Kerala",
			"city": "Thrissur",
			"collegename": "Government Medical College, Thrissur",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Govt.",
			"seats": 175
		},
		{
			"id": 217,
			"state": "Kerala",
			"city": "Kannur",
			"collegename": "Govt. Medical College,Pariyaram, Kannur (Prev. Known as Academy of Medical Sciences)",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 218,
			"state": "Kerala",
			"city": "Thrissur",
			"collegename": "Jubilee Mission Medical College & Research Institute, Thrissur",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 219,
			"state": "Kerala",
			"city": "Kannur",
			"collegename": "Kannur Medical College, Kannur",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 220,
			"state": "Kerala",
			"city": "Palakkad",
			"collegename": "Karuna Medical College, Palakkad",
			"affliated": "Calicut University",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 221,
			"state": "Kerala",
			"city": "Kozhikode",
			"collegename": "KMCT Medical College,Kozhikode, Calicut",
			"affliated": "Calicut University",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 222,
			"state": "Kerala",
			"city": "Kozhikode",
			"collegename": "Malabar Medical College, Kozhikode,Calicut",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 223,
			"state": "Kerala",
			"city": "Kolenchery",
			"collegename": "Malankara Orthodox Syrian Church Medical College, Kolenchery",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 224,
			"state": "Kerala",
			"city": "Thiruvananthapuram",
			"collegename": "Medical College, Thiruvananthapuram",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 225,
			"state": "Kerala",
			"city": "Malappuram",
			"collegename": "M E S Medical College , Perintalmanna Malappuram Distt.Kerala",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 226,
			"state": "Kerala",
			"city": "Pathanamthitta",
			"collegename": "Mount Zion Medical College, Chayalode, Ezhamkulam Adoor, Pathanamthitta",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Society",
			"seats": 100
		},
		{
			"id": 227,
			"state": "Kerala",
			"city": "Palakkad",
			"collegename": "P K Das Institute of Medical Sciences, Palakkad, Kerala",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 228,
			"state": "Kerala",
			"city": "Tiruvalla",
			"collegename": "Pushpagiri Institute Of Medical Sciences and Research Centre, Tiruvalla",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 229,
			"state": "Kerala",
			"city": "Trivandrum",
			"collegename": "Sree Gokulam Medical College Trust & Research Foundation, Trivandrum",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 230,
			"state": "Kerala",
			"city": "Ernakulam",
			"collegename": "Sree Narayana Instt. of Medical Sciences, Chalakka,Ernakulam",
			"affliated": "Mahatma Gandhi University, Kerala",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 231,
			"state": "Kerala",
			"city": "Trivandrum",
			"collegename": "Sree Uthradom Thiurnal Academy of Medical Sciences,Trivandrum",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 232,
			"state": "Kerala",
			"city": "Thiruvananthapuram",
			"collegename": "S.R. Medical College & Research Centre, Akathumjuri, Vennicode, Varkala, Thiruvananthapuram",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Trust",
			"seats": ""
		},
		{
			"id": 233,
			"state": "Kerala",
			"city": "Alleppey",
			"collegename": "T D Medical College, Alleppey (Allappuzha)",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Govt.",
			"seats": 175
		},
		{
			"id": 234,
			"state": "Kerala",
			"city": "Kollam",
			"collegename": "Travancore Medical College, Kollam",
			"affliated": "Kerala University of Health Sciences, Thrissur",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 235,
			"state": "Madhya Pradesh",
			"city": "Bhopal",
			"collegename": "All India Institute of Medical Sciences, Bhopal",
			"affliated": "Statutory Autonomous, AIIMS",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 236,
			"state": "Madhya Pradesh",
			"city": "Dewas",
			"collegename": "Amaltas Institute of Medical Sciences, Dewas",
			"affliated": "Madhya Pradesh Medical Science University, Jabalpur",
			"management": "Society",
			"seats": 150
		},
		{
			"id": 237,
			"state": "Madhya Pradesh",
			"city": "Sagar",
			"collegename": "Bundelkhand Medical College, Sagar",
			"affliated": "Madhya Pradesh Medical Science University, Jabalpur",
			"management": "Govt.",
			"seats": 125
		},
		{
			"id": 238,
			"state": "Madhya Pradesh",
			"city": "Bhopal",
			"collegename": "Chirayu Medical College and Hospital, Bairagarh,Bhopal",
			"affliated": "Madhya Pradesh Medical Science University, Jabalpur",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 239,
			"state": "Madhya Pradesh",
			"city": "Gwalior",
			"collegename": "Gajra Raja Medical College, Gwalior",
			"affliated": "Madhya Pradesh Medical Science University, Jabalpur",
			"management": "Govt.",
			"seats": 180
		},
		{
			"id": 240,
			"state": "Madhya Pradesh",
			"city": "Bhopal",
			"collegename": "Gandhi Medical College, Bhopal",
			"affliated": "Madhya Pradesh Medical Science University, Jabalpur",
			"management": "Govt.",
			"seats": 180
		},
		{
			"id": 241,
			"state": "Madhya Pradesh",
			"city": "Chhindwara",
			"collegename": "Government Medical College, Chhindwara, MP",
			"affliated": "Madhya Pradesh Medical Science University, Jabalpur",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 242,
			"state": "Madhya Pradesh",
			"city": "Datia",
			"collegename": "Government Medical College, Datia, MP",
			"affliated": "Madhya Pradesh Medical Science University, Jabalpur",
			"management": "Govt.",
			"seats": 120
		},
		{
			"id": 243,
			"state": "Madhya Pradesh",
			"city": "Khandwa",
			"collegename": "Government Medical College, Khandwa, MP",
			"affliated": "Madhya Pradesh Medical Science University, Jabalpur",
			"management": "Govt.",
			"seats": 120
		},
		{
			"id": 244,
			"state": "Madhya Pradesh",
			"city": "Ratlam",
			"collegename": "Government Medical College, Ratlam",
			"affliated": "Madhya Pradesh Medical Science University, Jabalpur",
			"management": "Govt.",
			"seats": 180
		},
		{
			"id": 245,
			"state": "Madhya Pradesh",
			"city": "Shahdol",
			"collegename": "Government Medical College, Shahdol, MP",
			"affliated": "Madhya Pradesh Medical Science University, Jabalpur",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 246,
			"state": "Madhya Pradesh",
			"city": "Shivpuri",
			"collegename": "Government Medical College, Shivpuri, MP",
			"affliated": "Madhya Pradesh Medical Science University, Jabalpur",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 247,
			"state": "Madhya Pradesh",
			"city": "Vidisha",
			"collegename": "Government Medical College, Vidisha, MP",
			"affliated": "Madhya Pradesh Medical Science University, Jabalpur",
			"management": "Govt.",
			"seats": 180
		},
		{
			"id": 248,
			"state": "Madhya Pradesh",
			"city": "Indore",
			"collegename": "Index Medical College Hospital & Research Centre,Indore",
			"affliated": "Madhya Pradesh Medical Science University, Jabalpur",
			"management": "Trust",
			"seats": 250
		},
		{
			"id": 249,
			"state": "Madhya Pradesh",
			"city": "Bhopal",
			"collegename": "L.N. Medical College and Research Centre,Bhopal",
			"affliated": "LNCT University, Bhopal",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 250,
			"state": "Madhya Pradesh",
			"city": "Indore",
			"collegename": "M G M Medical College, Indore",
			"affliated": "Madhya Pradesh Medical Science University, Jabalpur",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 251,
			"state": "Madhya Pradesh",
			"city": "Jabalpur",
			"collegename": "Netaji Subhash Chandra Bose Medical College, Jabalpur",
			"affliated": "Madhya Pradesh Medical Science University, Jabalpur",
			"management": "Govt.",
			"seats": 180
		},
		{
			"id": 252,
			"state": "Madhya Pradesh",
			"city": "Bhopal",
			"collegename": "Peoples College of Medical Sciences & Research Centre, Bhanpur, Bhopal",
			"affliated": "Peoples University, Bhopal",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 253,
			"state": "Madhya Pradesh",
			"city": "Bhopal",
			"collegename": "RKDF Medical College Hospital & Research Centre, Jatkhedi, Bhopal",
			"affliated": "Sarvepalli Radhakrishnan University, Bhopal",
			"management": "Society",
			"seats": 150
		},
		{
			"id": 254,
			"state": "Madhya Pradesh",
			"city": "Ujjain",
			"collegename": "Ruxmaniben Deepchand Gardi Medical College, Ujjain",
			"affliated": "Madhya Pradesh Medical Science University, Jabalpur",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 255,
			"state": "Madhya Pradesh",
			"city": "Rewa",
			"collegename": "Shyam Shah Medical College, Rewa",
			"affliated": "Madhya Pradesh Medical Science University, Jabalpur",
			"management": "Govt.",
			"seats": 125
		},
		{
			"id": 256,
			"state": "Madhya Pradesh",
			"city": "Indore",
			"collegename": "Sri Aurobindo Medical College and Post Graduate Institute , Indore",
			"affliated": "Madhya Pradesh Medical Science University, Jabalpur",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 257,
			"state": "Maharashtra",
			"city": "Dhule",
			"collegename": "ACPM Medical College, Dhule",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 258,
			"state": "Maharashtra",
			"city": "Nagpur",
			"collegename": "All India Institute of Medical Sciences, Nagpur",
			"affliated": "Statutory Autonomous, AIIMS",
			"management": "Govt.",
			"seats": 50
		},
		{
			"id": 259,
			"state": "Maharashtra",
			"city": "Pune",
			"collegename": "Armed Forces Medical College, Pune",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 260,
			"state": "Maharashtra",
			"city": "Solapur",
			"collegename": "Ashwini Rural Medical College, Hospital & Research Centre, Solapur",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 261,
			"state": "Maharashtra",
			"city": "Sangli",
			"collegename": "Bharati Vidyapeeth Deemed University Medical College & Hospital, Sangli",
			"affliated": "Bharati Vidyapeeth University (Deemed), Pune",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 262,
			"state": "Maharashtra",
			"city": "Pune",
			"collegename": "Bharati Vidyapeeth University Medical College, Pune",
			"affliated": "Bharati Vidyapeeth University (Deemed), Pune",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 263,
			"state": "Maharashtra",
			"city": "Pune",
			"collegename": "B. J. Govt. Medical College, Pune",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 264,
			"state": "Maharashtra",
			"city": "Ratnagiri",
			"collegename": "B.K.L. Walawalkar Rural Medical College, Ratnagiri",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 265,
			"state": "Maharashtra",
			"city": "Nagpur",
			"collegename": "Datta Meghe Medical College, Nagpur",
			"affliated": "Datta Meghe Instt. of Medical Sciences (Deemed University), Nagpur",
			"management": "Private",
			"seats": 150
		},
		{
			"id": 266,
			"state": "Maharashtra",
			"city": "Pune",
			"collegename": "Dr. D Y Patil Medical College, Hospital and Research Centre, Pimpri, Pune",
			"affliated": "Dr. D Y Patil University (Deemed), Pimpri, Pune",
			"management": "Trust",
			"seats": 250
		},
		{
			"id": 267,
			"state": "Maharashtra",
			"city": "Kolhapur",
			"collegename": "Dr. D Y Patil Medical College, Kolhapur",
			"affliated": "D.Y. Patil Education Society (Deemed University), Kolhapur",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 268,
			"state": "Maharashtra",
			"city": "Amravati",
			"collegename": "Dr. Panjabrao Alias Bhausaheb Deshmukh Memorial Medical College, Amravati",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 269,
			"state": "Maharashtra",
			"city": "Nanded",
			"collegename": "Dr. Shankarrao Chavan Govt. Medical College, Nanded",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 270,
			"state": "Maharashtra",
			"city": "Jalgaon",
			"collegename": "Dr. Ulhas Patil Medical College & Hospital, Jalgaon",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 271,
			"state": "Maharashtra",
			"city": "Solapur",
			"collegename": "Dr Vaishampayan Memorial Medical College, Solapur",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 272,
			"state": "Maharashtra",
			"city": "Nasik",
			"collegename": "Dr.Vasantrao Pawar Med. Col. Hosp. & Research Centre,Nasik (Prev. NDMVP Samaj Medical College)",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Trust",
			"seats": 120
		},
		{
			"id": 273,
			"state": "Maharashtra",
			"city": "Ahmednagar",
			"collegename": "Dr. Vithalrao Vikhe Patil Foundations Medical College & Hospital, Ahmednagar",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 274,
			"state": "Maharashtra",
			"city": "Akola",
			"collegename": "Government Medical College, Akola",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 275,
			"state": "Maharashtra",
			"city": "Aurangabad",
			"collegename": "Government Medical College, Aurangabad",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 276,
			"state": "Maharashtra",
			"city": "Chandrapur",
			"collegename": "Government Medical College, Chandrapur",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 277,
			"state": "Maharashtra",
			"city": "Gondia",
			"collegename": "Government Medical College, Gondia",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 278,
			"state": "Maharashtra",
			"city": "Baramati",
			"collegename": "Government Medical College & Hospital, Baramati",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 279,
			"state": "Maharashtra",
			"city": "Jalgaon",
			"collegename": "Government Medical College, Jalgaon",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 280,
			"state": "Maharashtra",
			"city": "Latur",
			"collegename": "Government Medical College, Latur",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 281,
			"state": "Maharashtra",
			"city": "Miraj",
			"collegename": "Government Medical College, Miraj",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 282,
			"state": "Maharashtra",
			"city": "Nagpur",
			"collegename": "Government Medical College, Nagpur",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 283,
			"state": "Maharashtra",
			"city": "Mumbai",
			"collegename": "Grant Medical College, Mumbai",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 284,
			"state": "Maharashtra",
			"city": "Mumbai",
			"collegename": "H.B.T. Medical College & Dr. R.N. Cooper Municipal General Hospital, Juhu, Mumbai",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 285,
			"state": "Maharashtra",
			"city": "Jalna",
			"collegename": "Indian Institute of Medical Science & Research, Jalna",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 286,
			"state": "Maharashtra",
			"city": "Nagpur",
			"collegename": "Indira Gandhi Medical College & Hospital, Nagpur",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 287,
			"state": "Maharashtra",
			"city": "Wardha",
			"collegename": "Jawaharlal Nehru Medical College, Sawangi (Meghe), Wardha",
			"affliated": "Datta Meghe Instt. of Medical Sciences (Deemed University), Nagpur",
			"management": "Trust",
			"seats": 250
		},
		{
			"id": 288,
			"state": "Maharashtra",
			"city": "Mumbai",
			"collegename": "KJ Somaiyya Medical College & Research Centre, Mumbai",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Trust",
			"seats": 50
		},
		{
			"id": 289,
			"state": "Maharashtra",
			"city": "Karad",
			"collegename": "Krishna Institute of Medical Sciences, Karad",
			"affliated": "Krishna Institute of Medical Sciences University (Deemed), Karad",
			"management": "Trust",
			"seats": 200
		},
		{
			"id": 290,
			"state": "Maharashtra",
			"city": "Mumbai",
			"collegename": "Lokmanya Tilak Municipal Medical College, Sion, Mumbai",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 291,
			"state": "Maharashtra",
			"city": "Pune",
			"collegename": "Maharashtra Institute of Medical Education & Research, Talegaon,Pune",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 292,
			"state": "Maharashtra",
			"city": "Latur",
			"collegename": "Maharashtra Institute of Medical Sciences & Research, Latur",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 293,
			"state": "Maharashtra",
			"city": "Wardha",
			"collegename": "Mahatma Gandhi Institute of Medical Sciences, Sevagram, Wardha",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 294,
			"state": "Maharashtra",
			"city": "Aurangabad",
			"collegename": "Mahatma Gandhi Missions Medical College, Aurangabad",
			"affliated": "MGM Institute of Health Sciences (Deemed University), Navi Mumbai",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 295,
			"state": "Maharashtra",
			"city": "Navi Mumbai",
			"collegename": "Mahatma Gandhi Missions Medical College, Navi Mumbai",
			"affliated": "MGM Institute of Health Sciences (Deemed University), Navi Mumbai",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 296,
			"state": "Maharashtra",
			"city": "Nagpur",
			"collegename": "N. K. P. Salve Instt. of Medical Sciences and Research Centre and Lata Mangeshkar Hospital, Nagpur",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 297,
			"state": "Maharashtra",
			"city": "Navi Mumbai",
			"collegename": "Padmashree Dr. D.Y.Patil Medical College, Navi Mumbai",
			"affliated": "Padmashree Dr. D Y Patil University (Deemed), Navi Mumbai",
			"management": "Trust",
			"seats": 250
		},
		{
			"id": 298,
			"state": "Maharashtra",
			"city": "Sangli",
			"collegename": "Prakash Institute of Medical Sciences & Research, Sangli",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 299,
			"state": "Maharashtra",
			"city": "Kolhapur",
			"collegename": "Rajashree Chatrapati Shahu Maharaj Government Medical College, Kolhapur",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 300,
			"state": "Maharashtra",
			"city": "Thane",
			"collegename": "Rajiv Gandhi Medical College and Chhatrapati Shivaji Maharaj Hospital, Thane",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Govt.",
			"seats": 80
		},
		{
			"id": 301,
			"state": "Maharashtra",
			"city": "Loni",
			"collegename": "Rural Medical College, Loni",
			"affliated": "Pravara Institute of Medical Sciences (Deemed University), Ahmednagar",
			"management": "Trust",
			"seats": 200
		},
		{
			"id": 302,
			"state": "Maharashtra",
			"city": "Mumbai",
			"collegename": "Seth GS Medical College, Mumbai",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 303,
			"state": "Maharashtra",
			"city": "Yavatmal",
			"collegename": "Shri Vasant Rao Naik Govt. Medical College, Yavatmal",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 304,
			"state": "Maharashtra",
			"city": "Sindhudurg",
			"collegename": "Sindhudurg Shikshan Prasarak Mandal (SSPM) Medical College & Lifetime Hospital, Padave, Sindhudurg",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 305,
			"state": "Maharashtra",
			"city": "Nashik",
			"collegename": "SMBT Institute of Medical Sciences & Research Centre, Nandihills, Nashik",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 306,
			"state": "Maharashtra",
			"city": "Pune",
			"collegename": "Smt. Kashibai Navale Medical College and General Hospital,Pune",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 307,
			"state": "Maharashtra",
			"city": "Dhule",
			"collegename": "Sri Bhausaheb Hire Government Medical College, Dhule",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 308,
			"state": "Maharashtra",
			"city": "Ambajogai",
			"collegename": "SRTR Medical College, Ambajogai",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 309,
			"state": "Maharashtra",
			"city": "Pune",
			"collegename": "Symbiosis Medical College for Women, Pune",
			"affliated": "Symbiosis International (Deemed) University, pune",
			"management": "Society",
			"seats": 150
		},
		{
			"id": 310,
			"state": "Maharashtra",
			"city": "Navi Mumbai",
			"collegename": "Terna Medical College, Navi Mumbai",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 311,
			"state": "Maharashtra",
			"city": "Mumbai",
			"collegename": "Topiwala National Medical College, Mumbai",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 312,
			"state": "Maharashtra",
			"city": "Palghar",
			"collegename": "Vedantaa Institute of Medical Sciences, Palghar, Maharashtra",
			"affliated": "Maharashtra University of Health Sciences, Nashik",
			"management": "Private",
			"seats": 150
		},
		{
			"id": 313,
			"state": "Manipur",
			"city": "Porompet",
			"collegename": "Jawaharlal Nehru Institute of Medical Sciences,Porompet,Imphal",
			"affliated": "Manipur University",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 314,
			"state": "Manipur",
			"city": "Imphal",
			"collegename": "Regional Institute of Medical Sciences, Imphal",
			"affliated": "Manipur University",
			"management": "Govt.",
			"seats": 125
		},
		{
			"id": 315,
			"state": "Meghalaya",
			"city": "Shillong",
			"collegename": "North Eastern Indira Gandhi Regional Instt. of Health and Medical Sciences, Shillong",
			"affliated": "North Eastern Hill University, Shillong",
			"management": "Govt.",
			"seats": 50
		},
		{
			"id": 316,
			"state": "Mizoram",
			"city": "Mizoram",
			"collegename": "Zoram Medical College, Mizoram",
			"affliated": "Mizoram University",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 317,
			"state": "Orissa",
			"city": "Bhubaneswar",
			"collegename": "All India Institute of Medical Sciences, Bhubaneswar",
			"affliated": "Statutory Autonomous, AIIMS",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 318,
			"state": "Orissa",
			"city": "Balangir",
			"collegename": "Government Medical College & Hospital (Renamed as Bhima Bhoi Medical College & Hospital), Balangir",
			"affliated": "Sambalpur University",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 319,
			"state": "Orissa",
			"city": "Balasore",
			"collegename": "Government Medical College & Hospital (Renamed as Fakir Mohan Medical College & Hospital), Balasore",
			"affliated": "Fakir Mohan Univeristy, Balasore",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 320,
			"state": "Orissa",
			"city": "Bhubaneswar",
			"collegename": "Hi-Tech Medical College & Hospital, Bhubaneswar",
			"affliated": "Utkal University",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 321,
			"state": "Orissa",
			"city": "Rourkela",
			"collegename": "Hi-Tech Medical College & Hospital, Rourkela",
			"affliated": "Sambalpur University",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 322,
			"state": "Orissa",
			"city": "Bhubaneswar",
			"collegename": "Instt. Of Medical Sciences & SUM Hospital, Bhubaneswar",
			"affliated": "Siksha O Anusandhan University,Bhubaneswar",
			"management": "Trust",
			"seats": 250
		},
		{
			"id": 323,
			"state": "Orissa",
			"city": "Bhubaneswar",
			"collegename": "Kalinga Institute of Medical Sciences, Bhubaneswar",
			"affliated": "KIIT University (Deemed), Bhubaneswar",
			"management": "Trust",
			"seats": 250
		},
		{
			"id": 324,
			"state": "Orissa",
			"city": "Berhampur",
			"collegename": "MKCG Medical College, Berhampur",
			"affliated": "Berhampur University",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 325,
			"state": "Orissa",
			"city": "Baripada",
			"collegename": "Pt. Raghunath Murmu Medical College and Hospital, Baripada, Odisha",
			"affliated": "North Odisha University, Baripada, Odisha",
			"management": "Govt.",
			"seats": 125
		},
		{
			"id": 326,
			"state": "Orissa",
			"city": "Koraput",
			"collegename": "Saheed Laxman Nayak Medical College & Hospital, Koraput",
			"affliated": "Berhampur University",
			"management": "Govt.",
			"seats": 125
		},
		{
			"id": 327,
			"state": "Orissa",
			"city": "Cuttack",
			"collegename": "SCB Medical College, Cuttack",
			"affliated": "Utkal University",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 328,
			"state": "Orissa",
			"city": "Burla",
			"collegename": "Veer Surendra Sai Institute of Medical Sciences and Research, Burla",
			"affliated": "Sambalpur University",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 329,
			"state": "Pondicherry",
			"city": "Pondicherry",
			"collegename": "Aarupadai Veedu Medical College, Pondicherry",
			"affliated": "Vinayaka Missions University (Deemed), Salem",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 330,
			"state": "Pondicherry",
			"city": "Pondicherry",
			"collegename": "Indira Gandhi Medical College & Research Institute, Puducherry",
			"affliated": "Pondicherry University",
			"management": "Govt.",
			"seats": 180
		},
		{
			"id": 331,
			"state": "Pondicherry",
			"city": "Pondicherry",
			"collegename": "Jawaharlal Institute of Postgraduate Medical Education & Research, Puducherry",
			"affliated": "Statutory Autonomous, Puducherry",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 332,
			"state": "Pondicherry",
			"city": "Pondicherry",
			"collegename": "Mahatma Gandhi Medical College & Research Institute, Pondicherry",
			"affliated": "Sri Balaji Vidyapeeth (Deemed University), Pondicherry",
			"management": "Trust",
			"seats": 250
		},
		{
			"id": 333,
			"state": "Pondicherry",
			"city": "Pondicherry",
			"collegename": "Pondicherry Institute of Medical Sciences & Research, Pondicherry",
			"affliated": "Pondicherry University",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 334,
			"state": "Pondicherry",
			"city": "Pondicherry",
			"collegename": "Sri Lakshmi Narayana Institute of Medical Sciences, Pondicherry",
			"affliated": "Bharath Institute of Higher Education & Research (Deemed Univ.), Chennai",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 335,
			"state": "Pondicherry",
			"city": "Pondicherry",
			"collegename": "Sri Manakula Vinayagar Medical College & Hospital, Pondicherry",
			"affliated": "Pondicherry University",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 336,
			"state": "Pondicherry",
			"city": "Pondicherry",
			"collegename": "Sri Venkateswaraa Medical College, Hospital & Research Centre, Pondicherry",
			"affliated": "Pondicherry University",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 337,
			"state": "Pondicherry",
			"city": "Pondicherry",
			"collegename": "Vinayaka Missions Medical College, Karaikal, Pondicherry",
			"affliated": "Vinayaka Missions University (Deemed), Salem",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 338,
			"state": "Punjab",
			"city": "Bhatinda",
			"collegename": "Adesh Institute of Medical Sciences & Research, Bhatinda",
			"affliated": "Adesh University, Bathinda",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 339,
			"state": "Punjab",
			"city": "Bhatinda",
			"collegename": "All India Institute of Medical Sciences, Bhatinda",
			"affliated": "Statutory Autonomous, AIIMS",
			"management": "Govt.",
			"seats": 50
		},
		{
			"id": 340,
			"state": "Punjab",
			"city": "Ludhiana",
			"collegename": "Christian Medical College, Ludhiana",
			"affliated": "Baba Farid University of Health Sciences,Faridkot",
			"management": "Trust",
			"seats": 75
		},
		{
			"id": 341,
			"state": "Punjab",
			"city": "Ludhiana",
			"collegename": "Dayanand Medical College & Hospital, Ludhiana",
			"affliated": "Baba Farid University of Health Sciences,Faridkot",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 342,
			"state": "Punjab",
			"city": "Patiala",
			"collegename": "Gian Sagar Medical College & Hospital, Patiala",
			"affliated": "Baba Farid University of Health Sciences,Faridkot",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 343,
			"state": "Punjab",
			"city": "Amritsar",
			"collegename": "Government Medical College, Amritsar",
			"affliated": "Baba Farid University of Health Sciences,Faridkot",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 344,
			"state": "Punjab",
			"city": "Patiala",
			"collegename": "Government Medical College, Patiala",
			"affliated": "Baba Farid University of Health Sciences,Faridkot",
			"management": "Govt.",
			"seats": 225
		},
		{
			"id": 345,
			"state": "Punjab",
			"city": "Faridkot",
			"collegename": "Guru Govind Singh Medical College, Faridkot",
			"affliated": "Baba Farid University of Health Sciences,Faridkot",
			"management": "Govt.",
			"seats": 125
		},
		{
			"id": 346,
			"state": "Punjab",
			"city": "Jalandhar",
			"collegename": "Punjab Institute of Medical Sciences, Jalandhar",
			"affliated": "Baba Farid University of Health Sciences,Faridkot",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 347,
			"state": "Punjab",
			"city": "Sri Amritsar",
			"collegename": "Sri Guru Ram Das Institute of Medical Sciences and Research, Sri Amritsar",
			"affliated": "Baba Farid University of Health Sciences,Faridkot",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 348,
			"state": "Rajasthan",
			"city": "Jodhpur",
			"collegename": "All India Institute of Medical Sciences, Jodhpur",
			"affliated": "Statutory Autonomous, AIIMS",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 349,
			"state": "Rajasthan",
			"city": "Bedwas",
			"collegename": "American International Institute of Medical Sciences, Bedwas",
			"affliated": "Rajasthan University of Health Sciences",
			"management": "Private",
			"seats": 150
		},
		{
			"id": 350,
			"state": "Rajasthan",
			"city": "Rajsamand",
			"collegename": "Ananta Institute of Medical Sciences & Research Centre, Rajsamand",
			"affliated": "Rajasthan University of Health Sciences",
			"management": "Society",
			"seats": 150
		},
		{
			"id": 351,
			"state": "Rajasthan",
			"city": "Jodhpur",
			"collegename": "Dr SN Medical College, Jodhpur",
			"affliated": "Rajasthan University of Health Sciences",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 352,
			"state": "Rajasthan",
			"city": "Udaipur",
			"collegename": "Geetanjali Medical College & Hospital,Udaipur",
			"affliated": "Geetanjali University , Udaipur",
			"management": "Trust",
			"seats": 250
		},
		{
			"id": 353,
			"state": "Rajasthan",
			"city": "Barmer",
			"collegename": "Government Medical College, Barmer",
			"affliated": "Rajasthan University of Health Sciences",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 354,
			"state": "Rajasthan",
			"city": "Rajasthan",
			"collegename": "Government Medical College, Bharatpur, Rajasthan",
			"affliated": "Rajasthan University of Health Sciences",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 355,
			"state": "Rajasthan",
			"city": "Rajasthan",
			"collegename": "Government Medical College, Bhilwara, Rajasthan",
			"affliated": "Rajasthan University of Health Sciences",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 356,
			"state": "Rajasthan",
			"city": "Churu",
			"collegename": "Government Medical College, Churu",
			"affliated": "Rajasthan University of Health Sciences",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 357,
			"state": "Rajasthan",
			"city": "Dungarpur",
			"collegename": "Government Medical College, Dungarpur",
			"affliated": "Rajasthan University of Health Sciences",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 358,
			"state": "Rajasthan",
			"city": "Kota",
			"collegename": "Government Medical College, Kota",
			"affliated": "Rajasthan University of Health Sciences",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 359,
			"state": "Rajasthan",
			"city": "Pali",
			"collegename": "Government Medical College, Pali, Rajasthan",
			"affliated": "Rajasthan University of Health Sciences",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 360,
			"state": "Rajasthan",
			"city": "Jaipur",
			"collegename": "Jaipur National University Institute of Medical Sciences and Resarch Centre, Jagatpura, Jaipur",
			"affliated": "Jaipur National University (Private Univ.)",
			"management": "Private",
			"seats": 150
		},
		{
			"id": 361,
			"state": "Rajasthan",
			"city": "Ajmer",
			"collegename": "Jawaharlal Nehru Medical College, Ajmer",
			"affliated": "Rajasthan University of Health Sciences",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 362,
			"state": "Rajasthan",
			"city": "Jhalawar",
			"collegename": "Jhalawar Medical College, Jhalawar",
			"affliated": "Rajasthan University of Health Sciences",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 363,
			"state": "Rajasthan",
			"city": "Jaipur",
			"collegename": "Mahatma Gandhi Medical College and Hospital, Sitapur, Jaipur",
			"affliated": "Mahatma Gandhi University of Medical Science & Technology, Jaipur",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 364,
			"state": "Rajasthan",
			"city": "Jaipur",
			"collegename": "National Institute of Medical Science & Research, Jaipur",
			"affliated": "NIMS University (Deemed), Jaipur",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 365,
			"state": "Rajasthan",
			"city": "Udaipur",
			"collegename": "Pacific Institute of Medical Sciences, Umarda, Udaipur",
			"affliated": "Sai Tirupati University, Udaipur",
			"management": "Society",
			"seats": 150
		},
		{
			"id": 366,
			"state": "Rajasthan",
			"city": "Udaipur",
			"collegename": "Pacific Medical College & Hospital, Bhilo Ka Bedla, Udaipur",
			"affliated": "Pacific Medical University, Udaipur",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 367,
			"state": "Rajasthan",
			"city": "Udaipur",
			"collegename": "R N T Medical College, Udaipur",
			"affliated": "Rajasthan University of Health Sciences",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 368,
			"state": "Rajasthan",
			"city": "Jaipur",
			"collegename": "RUHS College of Medical Sciences, Jaipur",
			"affliated": "Rajasthan University of Health Sciences",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 369,
			"state": "Rajasthan",
			"city": "Bikaner",
			"collegename": "Sardar Patel Medical College, Bikaner",
			"affliated": "Rajasthan University of Health Sciences",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 370,
			"state": "Rajasthan",
			"city": "Jaipur",
			"collegename": "SMS Medical College, Jaipur",
			"affliated": "Rajasthan University of Health Sciences",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 371,
			"state": "Sikkim",
			"city": "Gangtok",
			"collegename": "Sikkim Manipal Institute of Medical Sciences, Gangtok",
			"affliated": "Sikkim Manipal Univ. of Health,Medical & Tech. Scs",
			"management": "Trust",
			"seats": 50
		},
		{
			"id": 372,
			"state": "Tamil Nadu",
			"city": "Chennai",
			"collegename": "ACS Medical College and Hospital, Chennai",
			"affliated": "Dr. MGR Educational and Research Institute (Deemed University), Chennai",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 373,
			"state": "Tamil Nadu",
			"city": "Salem",
			"collegename": "Annapoorna Medical College & Hospital, Salem",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 374,
			"state": "Tamil Nadu",
			"city": "Chengalpattu",
			"collegename": "Chengalpattu Medical College, Chengalpattu",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 375,
			"state": "Tamil Nadu",
			"city": "Kanchipuram",
			"collegename": "Chettinad Hospital & Research Institute, Kanchipuram",
			"affliated": "Chettinad Academy of Research and Education (Deemed University), Chettinad",
			"management": "Trust",
			"seats": 250
		},
		{
			"id": 376,
			"state": "Tamil Nadu",
			"city": "Vellore",
			"collegename": "Christian Medical College, Vellore",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 377,
			"state": "Tamil Nadu",
			"city": "Coimbatore",
			"collegename": "Coimbatore Medical College, Coimbatore",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 378,
			"state": "Tamil Nadu",
			"city": "Perambalur",
			"collegename": "Dhanalakshmi Srinivasan Medical College and Hospital,Perambalur",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 379,
			"state": "Tamil Nadu",
			"city": "Chennai",
			"collegename": "ESI-PGIMSR,ESI Hospital,K.K Nagar,Chennai",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 380,
			"state": "Tamil Nadu",
			"city": "Dharmapuri",
			"collegename": "Government Dharmapuri Medical College, Dharmapuri",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 381,
			"state": "Tamil Nadu",
			"city": "Perundurai",
			"collegename": "Government Erode Medical College & Hospital, Perundurai (Formerly IRT Perundurai Medical College)",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 382,
			"state": "Tamil Nadu",
			"city": "Coimbatore",
			"collegename": "Government Medical College & ESIC Hospital, Coimbatore, TamilNadu",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 383,
			"state": "Tamil Nadu",
			"city": "Karur",
			"collegename": "Government Medical College, Karur",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 384,
			"state": "Tamil Nadu",
			"city": "Omandurar",
			"collegename": "Government Medical College, Omandurar",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 385,
			"state": "Tamil Nadu",
			"city": "Pudukottai",
			"collegename": "Government Medical College, Pudukottai, Tamil Nadu",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 386,
			"state": "Tamil Nadu",
			"city": "Sivaganga",
			"collegename": "Government Sivagangai Medical College, Sivaganga",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 387,
			"state": "Tamil Nadu",
			"city": "Thiruvannamalai",
			"collegename": "Government Thiruvannamalai Medical College, Thiruvannamalai",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 388,
			"state": "Tamil Nadu",
			"city": "Vellore",
			"collegename": "Government Vellore Medical College, Vellore",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 389,
			"state": "Tamil Nadu",
			"city": "Villupuram",
			"collegename": "Government Villupuram Medical College, Villupuram",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 390,
			"state": "Tamil Nadu",
			"city": "Asaripallam",
			"collegename": "KanyaKumari Government Medical College, Asaripallam",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 391,
			"state": "Tamil Nadu",
			"city": "Trichy",
			"collegename": "K A P Viswanathan Government Medical College, Trichy",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 392,
			"state": "Tamil Nadu",
			"city": "Coimbatore",
			"collegename": "Karpagam Faculty of Medical Sciences & Research, Coimbatore",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 393,
			"state": "Tamil Nadu",
			"city": "Maduranthagam",
			"collegename": "Karpaga Vinayaga Institute of Medical Sciences,Maduranthagam",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 394,
			"state": "Tamil Nadu",
			"city": "Chennai",
			"collegename": "Kilpauk Medical College, Chennai",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 395,
			"state": "Tamil Nadu",
			"city": "Coimbatore",
			"collegename": "KMCH Institute of Health Sciences and Research, Coimbatore",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Private",
			"seats": 150
		},
		{
			"id": 396,
			"state": "Tamil Nadu",
			"city": "Chennai",
			"collegename": "Madha Medical College and Hospital, Thandalam, Chennai",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 397,
			"state": "Tamil Nadu",
			"city": "Chennai",
			"collegename": "Madras Medical College, Chennai",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 398,
			"state": "Tamil Nadu",
			"city": "Madurai",
			"collegename": "Madurai Medical College, Madurai",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 399,
			"state": "Tamil Nadu",
			"city": "Enathur",
			"collegename": "Meenakshi Medical College and Research Institute, Enathur",
			"affliated": "Meenakshi University (Deemed), Chennai",
			"management": "Trust",
			"seats": 250
		},
		{
			"id": 400,
			"state": "Tamil Nadu",
			"city": "Melmaruvathur",
			"collegename": "Melmaruvathur Adiparasakthi Instt. Medical Sciences and Research",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 401,
			"state": "Tamil Nadu",
			"city": "Salem",
			"collegename": "Mohan Kumaramangalam Medical College, Salem",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 402,
			"state": "Tamil Nadu",
			"city": "Chennai",
			"collegename": "Panimalar Medical College Hospital & Research Institute, Chennai,Tamil Nadu",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 403,
			"state": "Tamil Nadu",
			"city": "Coimbatore",
			"collegename": "PSG Institute of Medical Sciences, Coimbatore",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 404,
			"state": "Tamil Nadu",
			"city": "Annamalainagar",
			"collegename": "Rajah Muthiah Medical College, Annamalainagar",
			"affliated": "Annamalai University",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 405,
			"state": "Tamil Nadu",
			"city": "Kanchipuram",
			"collegename": "Saveetha Medical College and Hospital, Kanchipuram",
			"affliated": "Saveetha University (Deemed), Chennai",
			"management": "Trust",
			"seats": 250
		},
		{
			"id": 406,
			"state": "Tamil Nadu",
			"city": "Kancheepuram",
			"collegename": "Shri Satya Sai Medical College and Research Institute, Kancheepuram",
			"affliated": "Sri Balaji Vidyapeeth (Deemed University), Pondicherry",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 407,
			"state": "Tamil Nadu",
			"city": "Chennai",
			"collegename": "Sree Balaji Medical College and Hospital, Chennai",
			"affliated": "Bharath Institute of Higher Education & Research (Deemed Univ.), Chennai",
			"management": "Trust",
			"seats": 250
		},
		{
			"id": 408,
			"state": "Tamil Nadu",
			"city": "Kanyakumari",
			"collegename": "Sree Mookambika Institute of Medical Sciences, Kanyakumari",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 409,
			"state": "Tamil Nadu",
			"city": "Chennai",
			"collegename": "Sri Muthukumaran Medical College,Chennai",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 410,
			"state": "Tamil Nadu",
			"city": "Chennai",
			"collegename": "Sri Ramachandra Medical College & Research Institute, Chennai",
			"affliated": "Sri Ramachandra Institute of Higher Education & Research(Deemed to be University), Chennai",
			"management": "Trust",
			"seats": 250
		},
		{
			"id": 411,
			"state": "Tamil Nadu",
			"city": "Kancheepuram",
			"collegename": "SRM Medical College Hospital & Research Centre, Kancheepuram",
			"affliated": "SRM Institute of Science & Technology",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 412,
			"state": "Tamil Nadu",
			"city": "Chennai",
			"collegename": "Stanley Medical College, Chennai",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 413,
			"state": "Tamil Nadu",
			"city": "Chennai",
			"collegename": "Tagore Medical College and Hospital, Chennai",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 414,
			"state": "Tamil Nadu",
			"city": "Thanjavur",
			"collegename": "Thanjavur Medical College,Thanjavur",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 415,
			"state": "Tamil Nadu",
			"city": "Theni",
			"collegename": "Theni Government Medical College,Theni",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 416,
			"state": "Tamil Nadu",
			"city": "Thiruvarur",
			"collegename": "Thiruvarur Govt. Medical College, Thiruvarur",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 417,
			"state": "Tamil Nadu",
			"city": "Thoothukudi",
			"collegename": "Thoothukudi Medical College, Thoothukudi",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 418,
			"state": "Tamil Nadu",
			"city": "Tirunelveli",
			"collegename": "Tirunelveli Medical College,Tirunelveli",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 419,
			"state": "Tamil Nadu",
			"city": "Trichy",
			"collegename": "Trichy SRM Medical College Hospital & Research Centre, Trichy",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 420,
			"state": "Tamil Nadu",
			"city": "Madurai",
			"collegename": "Velammal Medical College Hospital and Research Institute, Madurai",
			"affliated": "The Tamilnadu Dr. MGR Medical University,Chennai",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 421,
			"state": "Tamil Nadu",
			"city": "Salem",
			"collegename": "Vinayaka Missions Kirupananda Variyar Medical College, Salem",
			"affliated": "Vinayaka Missions University (Deemed), Salem",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 422,
			"state": "Telangana",
			"city": "Bibinagar",
			"collegename": "All India Institute of Medical Sciences, Bibinagar",
			"affliated": "Statutory Autonomous, AIIMS",
			"management": "Govt.",
			"seats": 50
		},
		{
			"id": 423,
			"state": "Telangana",
			"city": "Hyderabad",
			"collegename": "Apollo Institute of Medical Sciences and Research, Hyderabad",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 424,
			"state": "Telangana",
			"city": "Kanaka Mamidi",
			"collegename": "Ayaan Institute of Medical Sciences, Teaching Hospital & Research Centre, Kanaka Mamidi, R.R. Dist",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Society",
			"seats": 150
		},
		{
			"id": 425,
			"state": "Telangana",
			"city": "Yenkapally",
			"collegename": "Bhaskar Medical College, Yenkapally",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 426,
			"state": "Telangana",
			"city": "Karimnagar",
			"collegename": "Chalmeda Anand Rao Insttitute Of Medical Sciences, Karimnagar",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 427,
			"state": "Telangana",
			"city": "Hyderabad",
			"collegename": "Deccan College of Medical Sciences, Hyderabad",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 428,
			"state": "Telangana",
			"city": "Rangareddy",
			"collegename": "Dr. Patnam Mahender Reddy Institute of Medical Sciences, Chevella, Rangareddy",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Society",
			"seats": 150
		},
		{
			"id": 429,
			"state": "Telangana",
			"city": "Aziznagar",
			"collegename": "Dr. VRK Womens Medical College, Aziznagar",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 430,
			"state": "Telangana",
			"city": "Hyderabad",
			"collegename": "Employees state Insurance Coporation Medical College, Sanath Nagar, Hyderabad",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 431,
			"state": "Telangana",
			"city": "Secunderabad",
			"collegename": "Gandhi Medical College, Secunderabad",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 432,
			"state": "Telangana",
			"city": "Mahabubnagar",
			"collegename": "Government Medical College, Mahabubnagar",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Govt.",
			"seats": 175
		},
		{
			"id": 433,
			"state": "Telangana",
			"city": "Nalgonda",
			"collegename": "Government Medical College, Nalgonda",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 434,
			"state": "Telangana",
			"city": "Nizamabad",
			"collegename": "Government Medical College, Nizamabad",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Govt.",
			"seats": 120
		},
		{
			"id": 435,
			"state": "Telangana",
			"city": "Siddipet",
			"collegename": "Government Medical College, Siddipet",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Govt.",
			"seats": 175
		},
		{
			"id": 436,
			"state": "Telangana",
			"city": "Suryapet",
			"collegename": "Government Medical College, Suryapet",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 437,
			"state": "Telangana",
			"city": "Wrangal",
			"collegename": "Kakatiya Medical College, Wrangal",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 438,
			"state": "Telangana",
			"city": "Hyderabad",
			"collegename": "Kamineni Academy of Medical Sciences & Research Center, Hyderabad",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Private",
			"seats": 150
		},
		{
			"id": 439,
			"state": "Telangana",
			"city": "Narketpally",
			"collegename": "Kamineni Institute of Medical Sciences, Narketpally",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Trust",
			"seats": 200
		},
		{
			"id": 440,
			"state": "Telangana",
			"city": "Telengana",
			"collegename": "Mahavir Institute of Medical Sciences, Vikarabad, Telengana",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 441,
			"state": "Telangana",
			"city": "Medak",
			"collegename": "Maheshwara Medical College, Chitkul, Patancheru, Medak",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Society",
			"seats": ""
		},
		{
			"id": 442,
			"state": "Telangana",
			"city": "Hyderabad",
			"collegename": "Malla Reddy Institute of Medical Sciences, Hyderabad",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Society",
			"seats": 150
		},
		{
			"id": 443,
			"state": "Telangana",
			"city": "Hyderabad",
			"collegename": "Mallareddy Medical College for Womens, Hyderabad",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Society",
			"seats": 150
		},
		{
			"id": 444,
			"state": "Telangana",
			"city": "Bachupally",
			"collegename": "Mamata Academy of Medical Sciences, Bachupally",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Society",
			"seats": 150
		},
		{
			"id": 445,
			"state": "Telangana",
			"city": "Khammam",
			"collegename": "Mamata Medical College, Khammam",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 446,
			"state": "Telangana",
			"city": "Ghanpur",
			"collegename": "Mediciti Institute Of Medical Sciences, Ghanpur",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 447,
			"state": "Telangana",
			"city": "Sangareddy",
			"collegename": "MNR Medical College & Hospital, Sangareddy",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 448,
			"state": "Telangana",
			"city": "Hyderabad",
			"collegename": "Osmania Medical College, Hyderabad",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 449,
			"state": "Telangana",
			"city": "Karimnagar",
			"collegename": "Prathima Institute Of Medical Sciences, Karimnagar",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Trust",
			"seats": 200
		},
		{
			"id": 450,
			"state": "Telangana",
			"city": "Adilabad",
			"collegename": "Rajiv Gandhi Institute of Medical Sciences, adilabad",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Govt.",
			"seats": 120
		},
		{
			"id": 451,
			"state": "Telangana",
			"city": "Siddipet",
			"collegename": "R.V.M. Institute of Medical Sciences and Research Centre, Siddipet",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 452,
			"state": "Telangana",
			"city": "Peerancheru",
			"collegename": "Shadan Institute of Medical Sciences,Research Centre and Teaching Hospital, Peerancheru",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Society",
			"seats": 150
		},
		{
			"id": 453,
			"state": "Telangana",
			"city": "Telangana",
			"collegename": "Surabhi Institute of Medical Sciences, Siddipet, Telangana",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Society",
			"seats": 150
		},
		{
			"id": 454,
			"state": "Telangana",
			"city": "Mehboobnagar",
			"collegename": "S V S Medical College, Mehboobnagar",
			"affliated": "Kaloji Narayana Rao University of Health Sciences, Warangal",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 455,
			"state": "Tripura",
			"city": "Agartala",
			"collegename": "Agartala Government Medical College,Agartala",
			"affliated": "Tripura University",
			"management": "Govt.",
			"seats": 125
		},
		{
			"id": 456,
			"state": "Tripura",
			"city": "Agartala",
			"collegename": "Tripura Medical College and Dr. B R A M Teaching Hospital, Agartala",
			"affliated": "Tripura University",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 457,
			"state": "Uttarakhand",
			"city": "Rishikesh",
			"collegename": "All India Institute of Medical Sciences, Rishikesh",
			"affliated": "Statutory Autonomous, AIIMS",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 458,
			"state": "Uttarakhand",
			"city": "Uttarakhand",
			"collegename": "Doon Medical College, Dehradun, Uttarakhand",
			"affliated": "Hemwati Nandan Bahuguna Uttarakhand Medical Education University, Dehradun",
			"management": "Govt.",
			"seats": 175
		},
		{
			"id": 459,
			"state": "Uttarakhand",
			"city": "Haldwani",
			"collegename": "Government Medical College (Prev.Uttarakhand Forest Hospital Trust Med.Col.), Haldwani",
			"affliated": "Kumaon University, Nainital",
			"management": "Govt.",
			"seats": 125
		},
		{
			"id": 460,
			"state": "Uttarakhand",
			"city": "Dehradun",
			"collegename": "Himalayan Institute of Medical Sciences, Dehradun",
			"affliated": "Swami Rama Himalayan University, Dehradun",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 461,
			"state": "Uttarakhand",
			"city": "Dehradun",
			"collegename": "Shri Guru Ram Rai Institute of Medical & Health Sciences, Dehradun",
			"affliated": "H. N. B Garhwal University",
			"management": "Society",
			"seats": 150
		},
		{
			"id": 462,
			"state": "Uttarakhand",
			"city": "Pauri Garhwal",
			"collegename": "Veer Chandra Singh Garhwali Govt. Medical Sc. & Research Instt, Srinagar, Pauri Garhwal",
			"affliated": "Uttrakhand Technical University, Dehradun",
			"management": "Govt.",
			"seats": 125
		},
		{
			"id": 463,
			"state": "Uttar Pradesh",
			"city": "Gorakhpur",
			"collegename": "All India Institute of Medical Sciences, Gorakhpur",
			"affliated": "Statutory Autonomous, AIIMS",
			"management": "Govt.",
			"seats": 50
		},
		{
			"id": 464,
			"state": "Uttar Pradesh",
			"city": "Rae Bareli",
			"collegename": "All India Institute of Medical Sciences, Rae Bareli",
			"affliated": "Statutory Autonomous, AIIMS",
			"management": "Govt.",
			"seats": 50
		},
		{
			"id": 465,
			"state": "Uttar Pradesh",
			"city": "Gorakhpur",
			"collegename": "BRD Medical College, Gorakhpur",
			"affliated": "Deen Dayal Upadhyay Gorakhpur University, Gorakhpur",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 466,
			"state": "Uttar Pradesh",
			"city": "Lucknow",
			"collegename": "Career Instt. Of Medical Sciences & Hospital, Lucknow",
			"affliated": "Dr. Ram Manohar Lohia Avadh University, Faizabad",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 467,
			"state": "Uttar Pradesh",
			"city": "Lucknow",
			"collegename": "Dr. Ram Manohar Lohia Institute of Medical Sciences,Lucknow",
			"affliated": "Dr. Ram Manohar Lohia Institute of Medical Sciences, Lucknow (deemed)",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 468,
			"state": "Uttar Pradesh",
			"city": "Lucknow",
			"collegename": "Era Lucknow Medical College , Lucknow",
			"affliated": "Dr. Ram Manohar Lohia Avadh University, Faizabad",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 469,
			"state": "Uttar Pradesh",
			"city": "Agra",
			"collegename": "F.H. Medical College & Hospital, Etamdapur, Agra",
			"affliated": "Dr B R Ambedkar University,Agra, U.P.",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 470,
			"state": "Uttar Pradesh",
			"city": "Banda",
			"collegename": "Government Allopathic Medical College, Banda, UP",
			"affliated": "King Georges Medical University,Lucknow",
			"management": "Govt.",
			"seats": ""
		},
		{
			"id": 471,
			"state": "Uttar Pradesh",
			"city": "Greater Noida",
			"collegename": "Government Institute of Medical Sciences, Kasna, Greater Noida",
			"affliated": "King Georges Medical University,Lucknow",
			"management": "Govt-Society",
			"seats": 100
		},
		{
			"id": 472,
			"state": "Uttar Pradesh",
			"city": "Badaun",
			"collegename": "Government Medical College, Badaun, U.P.",
			"affliated": "Mahatma Jyotiba Phule Rohilkhand University",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 473,
			"state": "Uttar Pradesh",
			"city": "Faizabad",
			"collegename": "Government Medical College, Faizabad",
			"affliated": "King Georges Medical University,Lucknow",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 474,
			"state": "Uttar Pradesh",
			"city": "Firozabad",
			"collegename": "Government Medical College, Firozabad",
			"affliated": "King Georges Medical University,Lucknow",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 475,
			"state": "Uttar Pradesh",
			"city": "Kannauj",
			"collegename": "Government Medical College, Kannauj",
			"affliated": "King Georges Medical University,Lucknow",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 476,
			"state": "Uttar Pradesh",
			"city": "Basti",
			"collegename": "Government Medical College, Rampur, Basti",
			"affliated": "King Georges Medical University,Lucknow",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 477,
			"state": "Uttar Pradesh",
			"city": "Shahjahanpur",
			"collegename": "Government Medical College, Shahjahanpur, UP",
			"affliated": "King Georges Medical University,Lucknow",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 478,
			"state": "Uttar Pradesh",
			"city": "Azamgarh",
			"collegename": "Government Medical College & Super facility Hospital, Azamgarh",
			"affliated": "King Georges Medical University,Lucknow",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 479,
			"state": "Uttar Pradesh",
			"city": "Hapur",
			"collegename": "G.S. Medical College & Hospital, Hapur, UP",
			"affliated": "Ch. Charan Singh Universitiy, Meerut",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 480,
			"state": "Uttar Pradesh",
			"city": "Kanpur",
			"collegename": "GSVM Medical College, Kanpur",
			"affliated": "C.S.J.M. University, Kanpur",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 481,
			"state": "Uttar Pradesh",
			"city": "Varanasi",
			"collegename": "Heritage Institute of Medical Sciences, Varanasi",
			"affliated": "Mahatma Gandhi Kashi Vidyapith, Varanasi",
			"management": "Private",
			"seats": 150
		},
		{
			"id": 482,
			"state": "Uttar Pradesh",
			"city": "Barabanki",
			"collegename": "Hind Institute of Medical Sciences , Barabanki",
			"affliated": "Dr. Ram Manohar Lohia Avadh University, Faizabad",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 483,
			"state": "Uttar Pradesh",
			"city": "Sitapur",
			"collegename": "Hind Institute of Medical Sciences, Sitapur",
			"affliated": "King Georges Medical University,Lucknow",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 484,
			"state": "Uttar Pradesh",
			"city": "Varansi",
			"collegename": "Institute of Medical Sciences, BHU, Varansi",
			"affliated": "Banaras Hindu University",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 485,
			"state": "Uttar Pradesh",
			"city": "Lucknow",
			"collegename": "Integral Institute of Medical Sciences & Research, Lucknow",
			"affliated": "Integral University, Lucknow",
			"management": "Private",
			"seats": 100
		},
		{
			"id": 486,
			"state": "Uttar Pradesh",
			"city": "Aligarh",
			"collegename": "Jawaharlal Nehru Medical College, Aligarh",
			"affliated": "Aligarh Muslim University",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 487,
			"state": "Uttar Pradesh",
			"city": "Mathura",
			"collegename": "K.D. Medical College Hospital & Research Centre, Mathura",
			"affliated": "Dr B R Ambedkar University,Agra, U.P.",
			"management": "Society",
			"seats": 150
		},
		{
			"id": 488,
			"state": "Uttar Pradesh",
			"city": "Lucknow",
			"collegename": "King George Medical University, Lucknow",
			"affliated": "King Georges Medical University,Lucknow",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 489,
			"state": "Uttar Pradesh",
			"city": "Mathura",
			"collegename": "Krishna Mohan Medical College & Hospital, Mathura",
			"affliated": "Dr B R Ambedkar University,Agra, U.P.",
			"management": "Society",
			"seats": 150
		},
		{
			"id": 490,
			"state": "Uttar Pradesh",
			"city": "Meerut",
			"collegename": "LLRM Medical College, Meerut",
			"affliated": "Ch. Charan Singh Universitiy, Meerut",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 491,
			"state": "Uttar Pradesh",
			"city": "Ambedkarnagar",
			"collegename": "Mahamaya Rajkiya Allopathic Medical College, Ambedkarnagar",
			"affliated": "Dr. Ram Manohar Lohia Avadh University, Faizabad",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 492,
			"state": "Uttar Pradesh",
			"city": "Jhansi",
			"collegename": "Maharani Laxmi Bai Medical College, Jhansi",
			"affliated": "Bundelkhand University",
			"management": "Govt.",
			"seats": 150
		},
		{
			"id": 493,
			"state": "Uttar Pradesh",
			"city": "Farrukhabad",
			"collegename": "Major S D Singh Medical College and Hospital, Fathehgarh, Farrukhabad",
			"affliated": "C.S.J.M. University, Kanpur",
			"management": "Trust",
			"seats": ""
		},
		{
			"id": 494,
			"state": "Uttar Pradesh",
			"city": "Jalaun",
			"collegename": "Manyavar Kanshi Ram Ji Government Allopathic Medical College, Orai, Jalaun",
			"affliated": "King Georges Medical University,Lucknow",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 495,
			"state": "Uttar Pradesh",
			"city": "Barabanki",
			"collegename": "Mayo Institute of Medical Sciences, Barabanki",
			"affliated": "Dr. Ram Manohar Lohia Avadh University, Faizabad",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 496,
			"state": "Uttar Pradesh",
			"city": "Allahabad",
			"collegename": "Moti Lal Nehru Medical College, Allahabad",
			"affliated": "King Georges Medical University,Lucknow",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 497,
			"state": "Uttar Pradesh",
			"city": "Meerut",
			"collegename": "Mulayam Singh Yadav Medical College & Hospital, Meerut, UP",
			"affliated": "Ch. Charan Singh Universitiy, Meerut",
			"management": "Society",
			"seats": 150
		},
		{
			"id": 498,
			"state": "Uttar Pradesh",
			"city": "Muzaffarnagar",
			"collegename": "Muzaffarnagar Medical College, Muzaffarnagar",
			"affliated": "Ch. Charan Singh Universitiy, Meerut",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 499,
			"state": "Uttar Pradesh",
			"city": "Lucknow",
			"collegename": "Prasad Institute of Medical Sciences, Lucknow",
			"affliated": "Dr. Ram Manohar Lohia Avadh University, Faizabad",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 500,
			"state": "Uttar Pradesh",
			"city": "Bahraich",
			"collegename": "Rajkiya Allopathic Medical College, Bahraich, UP",
			"affliated": "King Georges Medical University,Lucknow",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 501,
			"state": "Uttar Pradesh",
			"city": "Bareilly",
			"collegename": "Rajshree Medical Research Institute, Bareilly",
			"affliated": "M J P Rohilkhand University",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 502,
			"state": "Uttar Pradesh",
			"city": "Kanpur",
			"collegename": "Rama Medical College and Hospital , Kanpur",
			"affliated": "Dr B R Ambedkar University,Agra, U.P.",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 503,
			"state": "Uttar Pradesh",
			"city": "Hapur",
			"collegename": "Rama Medical College Hospital and Research Centre, Hapur",
			"affliated": "Ch. Charan Singh Universitiy, Meerut",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 504,
			"state": "Uttar Pradesh",
			"city": "Bareilly",
			"collegename": "Rohilkhand Medical College & Hospital, Bareilly",
			"affliated": "Bareilly International University, Bareilly",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 505,
			"state": "Uttar Pradesh",
			"city": "Ghaziabad",
			"collegename": "Santosh Medical College, Ghaziabad",
			"affliated": "Santosh University",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 506,
			"state": "Uttar Pradesh",
			"city": "Hapur",
			"collegename": "Saraswati Institute of Medical Sciences, Hapur",
			"affliated": "Ch. Charan Singh Universitiy, Meerut",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 507,
			"state": "Uttar Pradesh",
			"city": "Unnao",
			"collegename": "Saraswati Medical College, Unnao, U.P.",
			"affliated": "King Georges Medical University,Lucknow",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 508,
			"state": "Uttar Pradesh",
			"city": "Greater Noida",
			"collegename": "School of Medical Sciences & Research,Greater Noida",
			"affliated": "Sharda University, Greater Noida",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 509,
			"state": "Uttar Pradesh",
			"city": "Saharanpur",
			"collegename": "Shaikh-UL-Hind Maulana Mahmood Hasan Medical College, Saharanpur",
			"affliated": "Ch. Charan Singh Universitiy, Meerut",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 510,
			"state": "Uttar Pradesh",
			"city": "Bareilly",
			"collegename": "Shri Ram Murti Smarak Institute of Medical Sciences, Bareilly",
			"affliated": "M J P Rohilkhand University",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 511,
			"state": "Uttar Pradesh",
			"city": "Agra",
			"collegename": "S N Medical College, Agra",
			"affliated": "Dr B R Ambedkar University,Agra, U.P.",
			"management": "Govt.",
			"seats": 128
		},
		{
			"id": 512,
			"state": "Uttar Pradesh",
			"city": "Meerut",
			"collegename": "Subharti Medical College, Meerut",
			"affliated": "Swami Vivekanand Subharti University, Meerut",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 513,
			"state": "Uttar Pradesh",
			"city": "Moradabad",
			"collegename": "Teerthanker Mahaveer Medical College, Moradabad",
			"affliated": "Teerthanker Mahaveer University, Moradabad",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 514,
			"state": "Uttar Pradesh",
			"city": "Lucknow",
			"collegename": "T S Misra Medical College & Hospital, Amusi, Lucknow",
			"affliated": "Dr. Shakuntala Misra National Rehabilitation University, Lucknow",
			"management": "Private",
			"seats": 150
		},
		{
			"id": 515,
			"state": "Uttar Pradesh",
			"city": "Etawah",
			"collegename": "Uttar Pradesh University of Medical Sciences, (Prev. UP Rural Inst.of Med.Sc&R) Etawah",
			"affliated": "Uttar Pradesh University of Medical Sciences, Etawah",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 516,
			"state": "Uttar Pradesh",
			"city": "Shahjahanpur",
			"collegename": "Varun Arjun Medical College, Banthra, Shahjahanpur",
			"affliated": "Mahatma Jyotiba Phule Rohilkhand University",
			"management": "Trust",
			"seats": ""
		},
		{
			"id": 517,
			"state": "Uttar Pradesh",
			"city": "Gajraula",
			"collegename": "Venkateshwara Institute of Medical Sciences, Gajraula",
			"affliated": "Shri Venkateshwara University, Gajraula",
			"management": "Trust",
			"seats": ""
		},
		{
			"id": 518,
			"state": "West Bengal",
			"city": "Nadia",
			"collegename": "All India Institute of Medical Sciences, Kalyani, Nadia",
			"affliated": "Statutory Autonomous, AIIMS",
			"management": "Govt.",
			"seats": 50
		},
		{
			"id": 519,
			"state": "West Bengal",
			"city": "Bankura",
			"collegename": "Bankura Sammilani Medical College, Bankura",
			"affliated": "West Bengal University of Health Sciences,Kolkata",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 520,
			"state": "West Bengal",
			"city": "Burdwan",
			"collegename": "Burdwan Medical College, Burdwan",
			"affliated": "West Bengal University of Health Sciences,Kolkata",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 521,
			"state": "West Bengal",
			"city": "Kolkata",
			"collegename": "Calcutta National Medical College, Kolkata",
			"affliated": "West Bengal University of Health Sciences,Kolkata",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 522,
			"state": "West Bengal",
			"city": "Nadia",
			"collegename": "College of Medicine and JNM Hospital,Kalyani,Nadia",
			"affliated": "West Bengal University of Health Sciences,Kolkata",
			"management": "Govt.",
			"seats": 125
		},
		{
			"id": 523,
			"state": "West Bengal",
			"city": "Kolkata",
			"collegename": "College of Medicine and Sagore Dutta Hospital, Kolkata",
			"affliated": "West Bengal University of Health Sciences,Kolkata",
			"management": "Govt.",
			"seats": 125
		},
		{
			"id": 524,
			"state": "West Bengal",
			"city": "Coochbehar",
			"collegename": "Coochbehar Government Medical College & Hospital, Coochbehar, WB",
			"affliated": "West Bengal University of Health Sciences,Kolkata",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 525,
			"state": "West Bengal",
			"city": "West Bengal",
			"collegename": "Diamond Harbour Government Medical College and Hospital, West Bengal",
			"affliated": "West Bengal University of Health Sciences,Kolkata",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 526,
			"state": "West Bengal",
			"city": "Kolkata",
			"collegename": "Employees state Insurance Corporation Medical College, Joka, Kolkata",
			"affliated": "West Bengal University of Health Sciences,Kolkata",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 527,
			"state": "West Bengal",
			"city": "Durgapur",
			"collegename": "Gouri Devi Institute of Medical Sciences and Hospital, Durgapur",
			"affliated": "West Bengal University of Health Sciences,Kolkata",
			"management": "Society",
			"seats": ""
		},
		{
			"id": 528,
			"state": "West Bengal",
			"city": "Purba Midanpore",
			"collegename": "ICARE Institute of Medical Sciences & Research, Haldia, Purba Midanpore",
			"affliated": "West Bengal University of Health Sciences,Kolkata",
			"management": "Trust",
			"seats": 100
		},
		{
			"id": 529,
			"state": "West Bengal",
			"city": "Kolkata",
			"collegename": "Institute of Postgraduate Medical Education & Research, Kolkata",
			"affliated": "West Bengal University of Health Sciences,Kolkata",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 530,
			"state": "West Bengal",
			"city": "Burdwan",
			"collegename": "IQ-city Medical College, Burdwan",
			"affliated": "West Bengal University of Health Sciences,Kolkata",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 531,
			"state": "West Bengal",
			"city": "Kolkata",
			"collegename": "Jagannath Gupta Institute of Medical Sciences & Hospital, Kolkata",
			"affliated": "West Bengal University of Health Sciences,Kolkata",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 532,
			"state": "West Bengal",
			"city": "Kolkata",
			"collegename": "KPC Medical College,Jadavpur,Kolkata",
			"affliated": "West Bengal University of Health Sciences,Kolkata",
			"management": "Trust",
			"seats": 150
		},
		{
			"id": 533,
			"state": "West Bengal",
			"city": "Malda",
			"collegename": "Malda Medical College & Hospital, Malda",
			"affliated": "West Bengal University of Health Sciences,Kolkata",
			"management": "Govt.",
			"seats": 125
		},
		{
			"id": 534,
			"state": "West Bengal",
			"city": "Kolkata",
			"collegename": "Medical College, Kolkata",
			"affliated": "West Bengal University of Health Sciences,Kolkata",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 535,
			"state": "West Bengal",
			"city": "Midnapore",
			"collegename": "Midnapore Medical College, Midnapore",
			"affliated": "West Bengal University of Health Sciences,Kolkata",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 536,
			"state": "West Bengal",
			"city": "Murshidabad",
			"collegename": "Murshidabad Medical College & Hospitals, Murshidabad",
			"affliated": "West Bengal University of Health Sciences,Kolkata",
			"management": "Govt.",
			"seats": 125
		},
		{
			"id": 537,
			"state": "West Bengal",
			"city": "Kolkata",
			"collegename": "Nilratan Sircar Medical College, Kolkata",
			"affliated": "West Bengal University of Health Sciences,Kolkata",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 538,
			"state": "West Bengal",
			"city": "Darjeeling",
			"collegename": "North Bengal Medical College, Darjeeling",
			"affliated": "West Bengal University of Health Sciences,Kolkata",
			"management": "Govt.",
			"seats": 200
		},
		{
			"id": 539,
			"state": "West Bengal",
			"city": "Raiganj",
			"collegename": "Raiganj Government Medical College & Hospital, Raiganj",
			"affliated": "West Bengal University of Health Sciences,Kolkata",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 540,
			"state": "West Bengal",
			"city": "Rampurhat",
			"collegename": "Rampurhat Government Medical College & Hospital, Rampurhat",
			"affliated": "West Bengal University of Health Sciences,Kolkata",
			"management": "Govt.",
			"seats": 100
		},
		{
			"id": 541,
			"state": "West Bengal",
			"city": "Kolkata",
			"collegename": "RG Kar Medical College, Kolkata",
			"affliated": "West Bengal University of Health Sciences,Kolkata",
			"management": "Govt.",
			"seats": 250
		},
		{
			"id": 542,
			"state": "West Bengal",
			"city": "Durgapur",
			"collegename": "Shri Ramkrishna Institute of Medical Sciences & Sanaka Hospitals, Durgapur",
			"affliated": "West Bengal University of Health Sciences,Kolkata",
			"management": "Trust",
			"seats": 150
		}
	];

  const columns = [
    { dataField: 'id', text: 'Id', sort: true },
    { dataField: 'state', text: 'State', sort: true },
		{ dataField: 'city', text: 'City', sort: true },
		{ dataField: 'collegename', text: 'Name of Medical College/Medical Institution', sort: true },
		{ dataField: 'affliated', text: 'Affliated With', sort: true },
		{ dataField: 'management', text: 'Management', sort: true },
		{ dataField: 'seats', text: 'Seats', sort: true }
  ];

  const defaultSorted = [{
    dataField: 'name',
    order: 'desc'
  }];

  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 20,
    lastPageText: '>>',
    firstPageText: '<<',
    nextPageText: '>',
    prePageText: '<',
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log('page', page);
      console.log('sizePerPage', sizePerPage);
    }
  });

  const { SearchBar, ClearSearchButton } = Search;

	
    return (
			<DocumentMeta {...meta}>
        <div>
					<div className="service__bg">
						<h1 className="service__title">List of MCI Approved Colleges in India</h1>
					</div>
					<Container>
						<div className="blog__post__img">
						<img src="assets/images/blog-banners/mci-approved-indian-colleges.png" alt="List of MCI Approved Colleges in India"/>
						</div>
						
						<ul className="hyperlink">
              <li><a href="#1"><img src="/assets/left-arrow.png" alt="Left Arrow" /> List of Medical Colleges in India</a></li>
              <li><a href="#2"><img src="/assets/left-arrow.png" alt="Left Arrow" /> MBBS Seats in India</a></li>
							<li><a href="#3"><img src="/assets/left-arrow.png" alt="Left Arrow" /> List of Govt Medical Colleges</a></li>
							<li><a href="#4"><img src="/assets/left-arrow.png" alt="Left Arrow" /> List of Private Medical Colleges</a></li>
							<li><a href="#5"><img src="/assets/left-arrow.png" alt="Left Arrow" /> Conclusion</a></li>
						</ul>
						
					</Container>
					<section className="blog__post">
						<Container>
							<p className="blog__post__desc">India is a significant choice for undergraduates to study the MBBS course. There are a total of <Link to="/list-of-medical-colleges-in-india-approved-by-mci">335 medical colleges in India</Link> out of which <b>180 are the private institutions and 155 are government institutions</b>. The curriculum includes practical knowledge and training of clinical procedure. The students need to clear the <Link to={{ pathname:"https://neettestseries.co.in/neet-mock-test-for-free/" }}>NEET Entrance Exam</Link> for applying MBBS in India.</p>

							<p className="blog__post__desc">The state-level counseling is done by the desired authorities of respective organizations for government seats in MBBS. <Link to="/mbbs-in-india">MBBS in India</Link> is the best option for health Practitioners who want to be either physician or surgeon. The affiliation and accreditation of MBBS in India is done by the <Link to={{ pathname:"https://www.mciindia.org/CMS/" }}>MCI (Medical Council of India)</Link> and Government Authorities of India.</p>

							{/*<img src="assets/images/banner-advertisement.png" alt="" /> */}
							
							<div id="1">
								<h2 className="blog__post__title">List of Medical Colleges in India</h2>

								<p className="blog__post__desc">MBBS course in India is provided under various specializations such as <b>Medical and Biomedical Sciences, Pharmacy, Allied Health, and Nursing</b>. The <b>top medical colleges in India</b> provide various <b>undergraduate, postgraduate, doctorate, diploma, and certificate courses</b> in the field of Medical and Health Science. Here is the <b>list of medical colleges in India</b>:</p>

								<p className="blog__post__desc">But New-Lyf assists you with the process of learning the online German language. When you complete the <Link to="/learn-german-language-course-in-bangalore">online German language course</Link> and get experience in your field, you can apply for the post of <Link to="/nursing-jobs-in-germany-for-indian-nurses">nursing jobs in Germany for Indian nurses</Link>.</p>

								<p className="blog__post__desc">As professional credentials and other qualifications need to be get assessed in Germany then you will get an adaptation trying offer and confirmation, so it is necessary to learn the German language up to B2 Level to qualify for a license to practice as a <b>staff nurse jobs in Germany</b>. Your proficiency level must be good enough so that you can communicate <b>effectively in a hospital, with the patients, doctors & surgeons, nursing heads, co-working nurses, assistants</b>, and many more.</p>

								<ul className="blog__post__list">
									<li><img src="assets/right-direction.png" alt="Right Direction" /> All India Institute of Medical Sciences(AIIMS) - Delhi</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Maulana Azad Medical College (MAMC) - Delhi</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Hi-Tech Medical College & Hospital - Bhubaneswar</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> The Institute of Post Graduate Medical Education & Research (IPGMER) - Kolkata</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Medical College & Hospital - Kolkata</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Armed Forces Medical College(AFMC) - Pune</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> K J Somaiya Medical College - Mumbai</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Christian Medical College (CMC), Vellore</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Bangalore Medical College And Research Institute, Bangalore</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Sri Ramachandra Medical College & Research Institute (SRMC), Chennai</li>
								</ul>

							</div>
							
							<div id="2">
								<h3 className="blog__post__title">MBBS Seats in India</h3>
								<p className="blog__post__desc">There are around 2800 medical seats are reserved in 25 government medical colleges. The admission to MBBS is conducted through NEET examinations across the country. It provides entry to 70,693 <Link to="/mbbs-seats-in-india">MBBS seats in India</Link>. The medical students can check all the details related to <b>MBBS seats in India</b> as mentioned below:</p>
								
							</div>

							<div id="3">
								<h4 className="blog__post__title">List of Govt Medical Colleges</h4>

								<ul className="blog__post__list">
									<li><img src="assets/right-direction.png" alt="Right Direction" /> All India Institute of Medical Sciences New Delhi</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Armed Forces Medical College, Pune</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Maulana Azad Medical College, New Delhi</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Grant Medical College, Mumbai</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Bangalore Medical College and Research Institute, Bangalore</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Seth GS Medical College, Mumbai</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> BJ Government Medical College, Pune</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Madras Medical College, Chennai</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Osmania Medical College, Hyderabad</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> University College of Medical Sciences, University of Delhi, Delhi</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Topiwala National Medical College and BYL Nair Charitable Hospital, Mumbai</li>
								</ul>
								
							</div>

							<div id="4">
								<h4 className="blog__post__title">List of Private Medical Colleges</h4>

								<ul className="blog__post__list">
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Christian Medical College, Vellore</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> St Johns Medical College, Bangalore</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> MS Ramaiah Medical College, Bangalore</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Hamdard Institute of Medical Sciences and Research, New Delhi</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> SRM Medical College Hospital and Research Centre, Chennai</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Vydehi Institute of Medical Sciences and Research Centre, Bangalore</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> SGT Medical College Hospital and Research Institute, Gurgaon</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Shree Guru Gobind Singh Tricentenary University, Gurgaon</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Dr BR Ambedkar Medical College, Bangalore</li>
									<li><img src="assets/right-direction.png" alt="Right Direction" /> Apollo Institute of Medical Sciences and Research, Hyderabad</li>
								</ul>
								
							</div>

							<ToolkitProvider bootstrap4 keyField='id' data={colleges} columns={columns} search >
									{
										props => (
											<div>
												<SearchBar {...props.searchProps} />
												<ClearSearchButton {...props.searchProps} />
												<BootstrapTable
													defaultSorted={defaultSorted}
													pagination={pagination}
													{...props.baseProps}
												/>
											</div>
										)
									}	
								</ToolkitProvider>

								<div id="5">
									<h3 className="blog__post__title">Conclusion</h3>
									<p className="blog__post__desc">From the above description, the students must have got a clear idea from the list of medical colleges in India approved by MCI to study MBBS. It enables students to make a decision that in which university they want to take admission. Moreover, all the universities/colleges in the above list are excellent places to study MBBS course. Score good ranks in NEET exam and study MBBS course in the top Indian college/university.</p>

									<p className="blog__post__desc">We wish you all good luck for your future studies!!</p>
								
								</div>

							<div className="blog__post__aut_box">
								<Row className="no-gutters">
								<Col md={12} lg={2}>
								<img className="blog__post__aut_img" src="assets/DL.png" alt="New-Lyf Logo" />
								</Col>
								<Col md={12} lg={10}>
								<p className="blog__post__aut_info">Dr Vinit Kumar is a Educational Consultant for India & Abroad with more than 18 Years of Experience. He has an extensive background guiding & assisting medical students to find the best university as per their budget. ✔3500+ Students ✔15 Countries ✔MBBS, MBA, PG, UG ✔100% Commitment ✔Education Loan ✔Job Placements</p>							
								</Col>
								</Row>
								
							</div>
						</Container>
					</section>
				</div>
			</DocumentMeta>
    )
}

export default MciApprovedCollegesInIndia;