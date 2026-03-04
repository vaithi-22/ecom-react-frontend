
import React,{useState, useEffect}from 'react';
import axios from 'axios';


 function RegisterPage(){

  const [marketingPreferences, setMarketingPreferences] = useState([]);

  useEffect(() => {
    const fetchMarketingPreferences = async () => {
      try {
        const response = await axios.get('/marketingPreferences.json');
        setMarketingPreferences(response.data);
      } catch (error) {
        console.error('Error loading marketing preferences:', error);
      }
    };

    fetchMarketingPreferences();
  }, []);

    return (
      <>
       <div className="container mt-5">
      <h1>Register</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" id="confirmPassword" />
        </div>
        <div className="mb-3">
          <label className="form-label">Salutation</label>
          <div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="salutation" id="mr" value="Mr" />
              <label className="form-check-label" htmlFor="mr">Mr</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="salutation" id="ms" value="Ms" />
              <label className="form-check-label" htmlFor="ms">Ms</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="salutation" id="mrs" value="Mrs" />
              <label className="form-check-label" htmlFor="mrs">Mrs</label>
            </div>
          </div>
        </div>
        {/* Marketing Preferences from JSON */}
        <div className="mb-3">
          <label className="form-label">Marketing Preferences</label>
          {marketingPreferences.map((preference) => (
            <div className="form-check" key={preference.id}>
              <input
                className="form-check-input"
                type="checkbox"
                name="marketingPreferences"
                value={preference.id}
              />
              <label
                className="form-check-label"
                htmlFor={`marketing-${preference.id}`}
              >
                {preference.name}
              </label>
            </div>
          ))}
        </div>
        <div className="mb-3">
          <label htmlFor="country" className="form-label">Country</label>
          <select className="form-select" id="country">
            <option value="">Select Country</option>
            <option value="sg">Singapore</option>
            <option value="my">Malaysia</option>
            <option value="in">Indonesia</option>
            <option value="th">Thailand</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
    </div>
      </>
   
  );
}

export default RegisterPage;