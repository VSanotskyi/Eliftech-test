import css from './BtnGoBack.module.css'
import {useNavigate} from "react-router-dom";

const BtnGoBack = ({location}) => {
  const navigate = useNavigate()

  const handleClickGoBack = () => {
    navigate(location.state ?? '/')
  }

  return (<button className={css.btn} onClick={handleClickGoBack}>
      Go Back
    </button>);
};

export {BtnGoBack};
