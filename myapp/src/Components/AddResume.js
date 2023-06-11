import React,{useState} from 'react';
import './AddResume.css';
import Card from './UI/Card/Card';
import {useNavigate} from 'react-router-dom';
import Alert from '@mui/material/Alert';
import ErrorModal from './UI/ErrorModal/ErrorModal';

const AddResume=()=>{
  
    const navigate=useNavigate();

    const inputArr = [
        {
          type: "text",
          id: 1,
          value: ""
        }
      ];
      const [error,setError]=useState();
      const [showAlert,setShowAlert]=useState(false);
      const [arr,setArr]=useState(inputArr);
      const [name,setName]=useState();
      const [phone,setPhone]=useState();
      const [email,setEmail]=useState();
      const [address,setAddress]=useState();
      const [summary,setSummary]=useState();
      const [skills,setSkills]=useState([]);
      const [company,setCompany]=useState();
      const [location,setLocation]=useState();
      const [startDate,setStartDate]=useState();
      const [endDate,setEndDate]=useState();
      const [experience,setExperience]=useState();
      const [education,setEducation]=useState({
        name:'',
        location:'',
        degree:''
      });
      const [certificates,setCertificates]=useState();

      const addInput = () => {
        setArr(s => {
          return [
            ...s,
            {
              type: "text",
              value: ""
            }
          ];
        });
      };

      const handleChange = e => {
        e.preventDefault();
        // setSkills([...skills,e.target.value])
    
        const index = e.target.id;
        setArr(s => {
          const newArr = s.slice();
          newArr[index].value = e.target.value;
    
          return newArr;
        });

  
      
      };

      const nameChangeHandler=(e)=>{
        setName(e.target.value);
      }

      const phoneChangeHandler=(e)=>{
        setPhone(e.target.value);
      }

      const emailChangeHandler=(e)=>{
       setEmail(e.target.value);
      }

      const addressChangeHandler=(e)=>{
        setAddress(e.target.value);
      }

      const summaryChangeHandler=(e)=>{
        setSummary(e.target.value);
      }

      const companyChangeHandler=(e)=>{
        setCompany(e.target.value);
      }

      const locationChangeHandler=(e)=>{
        setLocation(e.target.value);
      }

      const startDateChangeHandler=(e)=>{
        setStartDate(e.target.value);
      }

      const endDateChangeHandler=(e)=>{
        setEndDate(e.target.value);
      }

      const experienceChangeHandler=(e)=>{
        setExperience(e.target.value);
      }

      const schoolChangeHandler=(e)=>{
        setEducation({
            name:e.target.value,
            location:education.location,
            degree:education.degree
        });
      }

      const schoolLocationHandler=(e)=>{
        setEducation({
            name:education.name,
            location:e.target.value,
            degree:education.degree
        })
      }

      const degreeHandler=(e)=>{
        setEducation({
            name:education.name,
            location:education.location,
            degree:e.target.value
        })
      }

      const closeConfirm=()=>{
        setError(null);
      }

      const certificateHandler=(e)=>{
        setCertificates(e.target.value);
      }
      const submitHandler=(e)=>{
        e.preventDefault();
       if(name==''||phone==''||email==''||address==''||summary==''||company==''||location==''||startDate==''||endDate==''||experience==''||education.name==''||education.location==''||education.degree==''||certificates=='')
       {
        setError({
         title:'Invalid Values',
         message:'All Fields are Required'
        })
        return;
       }
       if(phone.length<10){
        setError({
          title:'Invalid Phone Number',
          message:'Enter a valid Phone Number. It should be length of 10'
        })
        return;
       }
       if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email))
       {
        setError({
          title:'Invalid Email',
          message:'Enter a valid Email Address'
        })
        return;
       }
        
        var skill=[];
        for(let i=0;i<arr.length;i++){
         
            skill.push(arr[i].value);
             
        }
        console.log(skill);
        


        setSkills([...skill]);
       
        
        // var localStorage;
        localStorage.setItem('Name',name);
        localStorage.setItem('Phone',phone);
        localStorage.setItem('Email',email);
        localStorage.setItem('Address',address);
        localStorage.setItem('Summary',summary);
        
        
        localStorage.setItem('Skills',skill);
        
        localStorage.setItem('Company',company);
        localStorage.setItem('Location',location);
        localStorage.setItem('StartDate',startDate);
        localStorage.setItem('EndDate',endDate);
        localStorage.setItem('Experience',experience)
        
        
        localStorage.setItem('School Name',education.name);
        localStorage.setItem('School Location',education.location);
        localStorage.setItem('Degree Obatined',education.degree);
        localStorage.setItem('Certificates',certificates);
        setShowAlert(true);
        setTimeout(() => {
            navigate('/view'); //this.props.navigation.navigate('Login')
        }, 2000);  //5000 milliseconds
          
      }
     

    return(
    <Card>
     {error && <ErrorModal onClose={closeConfirm} title={error.title} message={error.message}/>}
    <form id='goal-form' onSubmit={submitHandler}>
        <h3>Personal Details</h3>
        <div className='form-control'>
      <label>Enter Your Name : </label>
      <input type='text' onChange={nameChangeHandler}/>
      </div>
      <div className='form-control'>
      <label>Enter Your Phone : </label>
      <input type='text' max='10' onChange={phoneChangeHandler}/>
      </div>   
      <div className='form-control'>
      <label>Enter Your Email : </label>
      <input type='email' onChange={emailChangeHandler}/>
      </div>     
      <div className='form-control'>
      <label>Enter Your Address : </label>
      <textarea name='address' rows='5' cols='50' onChange={addressChangeHandler}/>
      </div>
      <div className='form-control'>
      <label>Professional Summary : </label>
      <textarea name='summary' rows='5' cols='50' onChange={summaryChangeHandler}/>
      </div>
      <div className='form-control'>
      <label>Enter Your Skills : </label>
      {arr.map((item, i) => {
        return (
          <input
            onChange={handleChange}
            value={item.value}
            id={i}
            type={item.type}
            size="40"
          />
        );
      })}
      <button type='button' onClick={addInput}  style={{'background':'lightblue','display':'inline','margin':'10px','padding':'2px'}}>+ Add</button> 
      {/* <button type='button' onClick={skillChange}  style={{'background':'lightblue','display':'inline','margin':'10px','padding':'2px'}}> Save</button>  */}
      </div>
       <h3>Work History</h3>
       
      <div className='form-control'>
      <label>Enter Your Company : </label>
      <input type='text' onChange={companyChangeHandler}/>
      </div>
      
      <div className='form-control'>
      <label>Enter Company Location : </label>
      <textarea name='location' rows='5' cols='50' onChange={locationChangeHandler}/>
      </div>
      <div className='form-control'>
      <label>Enter Your Start Date : </label>
      <input type='date' onChange={startDateChangeHandler}/>
      </div>
      <div className='form-control'>
      <label>Enter Your End Date : </label>
      <input type='date' onChange={endDateChangeHandler} />
      </div>
      <div className='form-control'>
      <label>Enter Your Experience : </label>
      <textarea  name='experience' rows='5' cols='50' onChange={experienceChangeHandler}/>
      </div>
      <h3>Education</h3>
      <div className='form-control'>
      <label>Enter Your School Name : </label>
      <input type='text'onChange={schoolChangeHandler} />
      </div>
      <div className='form-control'>
      <label>Enter Degree Optained : </label>
      <input type='text' onChange={degreeHandler}/>
      </div>
      <div className='form-control'>
      <label>Enter School Location : </label>
      <textarea name='school_location' rows='5' cols='50' onChange={schoolLocationHandler} />
      </div>
      <h3>Certificates /Licences</h3>
      <div className='form-control'>
      <label>Certificates obtained : </label>
      <textarea name='obtained' rows='5' cols='50' onChange={certificateHandler}/>
      </div>
      <button type='submit' className='button'>Save</button>
      {showAlert && <Alert severity="success">Resume Created Successfully </Alert>}
    </form>
    </Card>
    )
}

export default AddResume;