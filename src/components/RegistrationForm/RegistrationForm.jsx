import {useState} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useDispatch} from "react-redux";

import css from './RegistrationForm.module.css'
import {registrationThunk} from "../../redux/registration/thunk";

const initState = {
  fullName: '',
  email: '',
  dateOfBirth: '',
  whereHear: ''
}

const RegistrationForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const {id} = useParams()
  const [data, setData] = useState(initState)

  const handleClickGoBack = () => {
    navigate(location.state ?? '/')
  }

  const handleChang = (e) => {
    const {name, value} = e.target

    setData(prevState => ({...prevState, [name]: value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const dto = {
      ...data,
      owner: id,
    }

    dispatch(registrationThunk(dto))

    setData(initState)
  }

  return (
    <>
      <button onClick={handleClickGoBack}>Go back</button>
      <form className={css.form} onSubmit={handleSubmit}>
        <h3 className={css.formTitle}>Event registration</h3>
        <div className={css.inputTextWrap}>
          <label>
            <p className={css.formText}>Full name</p>
            <input className={css.formInput}
                   type="text"
                   name='fullName'
                   value={data.fullName}
                   onChange={handleChang}
                   required
            />

          </label>
          <label>
            <p className={css.formText}>Email</p>
            <input className={css.formInput}
                   type="email"
                   name='email'
                   value={data.email}
                   onChange={handleChang}
                   required
            />

          </label>
          <label>
            <p className={css.formText}>Date of birth</p>
            <input className={css.formInput}
                   type="text"
                   name='dateOfBirth'
                   onChange={handleChang}
                   value={data.dateOfBirth}
                   required
            />
          </label>
        </div>
        <div>
          <p className={css.formText}>Where did you hear this event?</p>
          <div className={css.inputRadioWrap}>
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
        </div>
        <button className={css.formBtn} type='submit'>Register</button>
      </form>
    </>
  );
};

export default RegistrationForm;
