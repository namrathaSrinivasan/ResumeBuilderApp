import React,{useEffect,useState} from 'react';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { Paper } from '@mui/material';
import Button from '@mui/material/Button';
import PrintIcon from '@mui/icons-material/Print';
import './ViewResume.css';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  

const ViewResume=()=>{
 

  
    const [names,setNames]=useState();
    const [phone,setPhone]=useState();
    const [email,setEmail]=useState();
    const [address,setAddress]=useState();
    const [summary,setSummary]=useState();
    const [skills,setSkills]=useState();
    const [startDate,setStartDate]=useState();
   const [endDate,setEndDate]=useState();
   const [company,setCompany]=useState();
   const [location,setLocation]=useState();
   const [experience,setExperience]=useState();
   const [schoolLocation,setSchoolLocation]=useState();
   const [schoolName,setSchoolName]=useState();
   const [degree,setDegree]=useState();   
   const [certificates,setCertificates]=useState();

    useEffect(()=>{
    var name=localStorage.getItem('Name');
    setNames(name);
   var PhoneNo = localStorage.getItem('Phone');
   setPhone(PhoneNo);
   var Email=localStorage.getItem('Email');
   setEmail(Email);
   var Address=localStorage.getItem('Address');
   setAddress(Address);
   var Summary=localStorage.getItem('Summary');
   setSummary(Summary);
   var Skills=localStorage.getItem('Skills');
  
// This will return an array with strings "1", "2", etc.
   var arr=[];
   var temp=Skills.split(",");
   for(let i=0;i<temp.length;i++)
   {
    arr.push(temp[i])
   }
   console.log(arr);
    setSkills(arr);
    console.log(skills);
    
 

 
   var StartDate=localStorage.getItem('StartDate');
   
   setStartDate(StartDate);
   var EndDate = localStorage.getItem('EndDate');
   setEndDate(EndDate);
   var Company = localStorage.getItem('Company');
   setCompany(Company);
   var Location = localStorage.getItem('Location');
   setLocation(Location);
   var Experience = localStorage.getItem('Experience');
   setExperience(Experience);
   var SchoolLocation = localStorage.getItem('School Location');
   setSchoolLocation(SchoolLocation);
   var SchoolName = localStorage.getItem('School Name');
   setSchoolName(SchoolName);
   var DegreeObtained = localStorage.getItem('Degree Obatined');
   setDegree(DegreeObtained);
   var Certificates = localStorage.getItem('Certificates');
   setCertificates(Certificates);
   
   
    },[]);
const print=()=>{
    let printContents = document.getElementById('printablediv').innerHTML;
  let originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  window.print();
 document.body.innerHTML = originalContents;
}
    return(
        <>
        <div className='main' id='printablediv'>
    <Grid container spacing={1}>
    <Grid item xs={12} >
        <div className='name'>
      {names}
      </div>
    </Grid>
    </Grid>
    <Grid container spacing={3}>
    <Grid item xs={4} >
        <div className='personal'>
        {phone}
      </div>
    </Grid>
    <Grid item xs={4} >
        <div className='personal'>
        {email}
      </div>

    </Grid>
    <Grid item xs={4} >
        <div className='personal'>
      {address}
      </div>
    </Grid>
    </Grid>
    <h3>PROFESSIONAL SUMMARY</h3>
    <Grid container spacing={1}>
    <Grid item xs={12} >
        <div className='summary'>
        {summary}
      </div>
    </Grid>

    </Grid>
    
    
    <h3>Work History</h3>
    <Grid container spacing={2}>
        <Grid item xs={4}>
          <div className='work'>
            {startDate} - {endDate}
          </div>
        </Grid>
        <Grid item xs={8}>
         <div className='work'>
            {company}
         </div>
        </Grid>
        
    </Grid>
    <Grid container spacing={2}>
        <Grid item xs={4}>
           <div className='work2'>
            Company Location<br/>
         {location}
           </div>
        </Grid>
        <Grid item xs={8}>
        <div className='work2'>
            Experience<br/>
        {experience}
        </div>
        </Grid>
    </Grid>
    <h3>Education</h3>
    <Grid container spacing={2}>
        <Grid item xs={4}>
            <div className='education'>
            {schoolLocation}
            </div>
        </Grid>
        <Grid item xs={8}>
            <div className='education'>
                {`${schoolName}, ${degree}`}
            </div>
        </Grid>
        </Grid>
        <h3>CERTIFICATIONS/LICENCES</h3>
        <Grid container spacing={1}>
         <Grid item xs={12}>
            <div className='certificates'>
                {certificates}
                </div>
         </Grid>
        </Grid>
        </div>
        <Button  color='success' variant="contained" onClick={print}>
            
            Print</Button>
            </>
    
    )
}

export default ViewResume;