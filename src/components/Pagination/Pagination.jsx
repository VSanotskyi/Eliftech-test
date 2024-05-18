import css from './Pagination.module.css'

const Pagination = ({handlePrev,handleNext, currentPage, totalPage}) => {
  return (
    <div className={css.paginationWrapper}>
      <button className={css.paginationBtn} onClick={handlePrev} disabled={currentPage === 1}>prev</button>
      <button className={css.paginationBtn} onClick={handleNext} disabled={currentPage === totalPage}>next</button>
    </div>
  );
};

export {Pagination};
