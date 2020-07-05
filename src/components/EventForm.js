import React from "react";
import { useForm } from "react-hook-form";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './EventForm.css';

const range = (end) =>{
  let start = 2;
  var numbers = [];
  for (var i = start; i <= end; i++) {
    numbers.push(i);
  }
  return numbers;
}

const showError = (message) => {
  return(
    <span className='input-feedback'> {message} </span>
  );
}

const EventForm = (props) => {
  const { register, watch, handleSubmit, errors, getValues, reset } = useForm();
  const watchTotalSeat = watch("totalSeat", 1);

  const onSubmit = (data, e) => {
    e.target.reset(); // reset after form submit
  };
  
  return (
    <>
      <h1 className='text-center p10'>{props.event.name}</h1>
      <h4 className='text-center p10'>Number of available seats: {props.event.available_seats}</h4>
      <img src={props.event.pic} alt='img' />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='input-group'>
          <label className="label"> Name:</label>
          <input 
            type="text" 
            name="name" 
            className="text-input" 
            ref={register({
              required: "required"
            })}
          />
          {errors.name?.type === "required" && showError("Please enter your name")}
        </div>

        <div className='input-group'>
          <label className="label"> Email:</label>
          <input 
            type="email" 
            name="email" 
            className="text-input" 
            ref={register({
              required: "required",
              pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}
            })}
          />
          {errors.email?.type === "required" && showError("Please enter your email")}
          {errors.email?.type === "pattern" && showError("Invalid Email")}
        </div>

        <div className='input-group'>
          <label className="label"> Phone No:</label>
          <input type="text" name="mobile" className="text-input" ref={register}/>
        </div>

        <div className='input-group'>
          <label className="label"> NUmber of seats:</label>
          <select name="totalSeat" className="text-input" ref={register({required: 'required'})}>
            <option value=''>Select Seat</option>
            {[1,2,3,4,5,6].map(seat =>
              <option value={seat}>{seat}</option>
            )};
          </select>
          {errors.totalSeat?.type === "required" && showError("Please enter the number of seats")}
          {watchTotalSeat > props.event.available_seats && showError("Number of seats selected is more than available seats")}
        </div>
        
        {watchTotalSeat <= props.event.available_seats && watchTotalSeat > 1 &&  (range(watchTotalSeat).map((number, index) => (
          <div className='input-group'>
            <label className="label"> Name of Attendee {number}:</label>
            <input 
              type="text" 
              name={'attende'+number} 
              className="text-input" 
              ref={register({
                required: "required",
              })}
            />
            {errors['attende'+number]?.type === "required" && showError("Please enter the name of Attendee #"+number)}
          </div>              
        )))}
        <button type="submit" className='m10'>Submit</button>
        <Link to={'/'} >
          <button type="button" className='m10'>Cancel</button>
        </Link>
      </form>
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    event: state.events.find(event => event.id == ownProps.match.params.id),
    filter: state.filter
  }
};

export default connect(mapStateToProps)(EventForm);
