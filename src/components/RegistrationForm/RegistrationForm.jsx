import {useState} from "react";

const RegistrationForm = () => {
  const [data, setData] = useState({
    fullName: '',
    email: '',
    dateOfBerth: '',
    whereHear: ''
  })

  const handleChang = (e) => {
    const {name, value} = e.target

    setData(prevState => ({...prevState, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <p>Full name</p>
        <input type="text"
               name='fullName'
               value={data.fullName}
               onChange={handleChang}
               required
        />

      </label>
      <label>
        <p>Email</p>
        <input type="email"
               name='email'
               value={data.email}
               onChange={handleChang}
               required
        />

      </label>
      <label>
        <p>Date of birth</p>
        <input type="text"
               name='dateOfBerth'
               onChange={handleChang}
               value={data.dateOfBerth}
               required
        />
      </label>
      <div>
        <p>Where did you hear this event?</p>
        <input type="radio"
               id='socialMedia'
               name='whereHear'
               value='Social media'
               checked={data.whereHear === 'Social media'}
               onChange={handleChang}
               required
        />
        <label htmlFor="socialMedia">Social media</label>
        <input type="radio"
               id='friends'
               name='whereHear'
               value='Friends'
               checked={data.whereHear === 'Friends'}
               onChange={handleChang}
               required
        />
        <label htmlFor="friends">Friends</label>
        <input type="radio"
               id='myself'
               name='whereHear'
               value='Found myself'
               checked={data.whereHear === 'Found myself'}
               onChange={handleChang}
               required
        />
        <label htmlFor="myself">Found myself</label>
      </div>
      <button type='submit'>Send</button>
    </form>
  );
};

export default RegistrationForm;
