import {useState} from "react";
import {useLocation, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {registrationThunk} from "../../redux/registration/thunk";
import {errorSelect} from "../../redux/registration/selectors";

import {BtnGoBack} from "../BtnGoBack/BtnGoBack";
import css from './RegistrationForm.module.css'

const initState = {
  fullName: '',
  email: '',
  dateOfBirth: '',
  whereHear: ''
}

const RegistrationForm = () => {
  const dispatch = useDispatch()
  const location = useLocation()
  const {id} = useParams()
  const [data, setData] = useState(initState)

  const error = useSelector(errorSelect)

  const handleChang = (e) => {
    const {name, value} = e.target

    setData(prevState => ({...prevState, [name]: value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const dto = {
      ...data,
      owner: id,
    }

    await dispatch(registrationThunk(dto))

    setData(initState)

  }

  return (
    <>
      <BtnGoBack location={location}/>
      <form className={css.form} onSubmit={handleSubmit}>
        <h3 className={css.formTitle}>Event registration</h3>
        {error && <p className={css.errMessage}>You are already registered for this event</p>}
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
