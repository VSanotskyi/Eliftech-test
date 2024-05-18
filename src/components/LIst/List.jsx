import css from './List.module.css'

const List = ({btnGoBack, items, RenderItems, title, pagination}) => {
  return (
    <>
      {btnGoBack && btnGoBack}
      <div className={css.eventsWrapper}>
        {title && <h2 className={css.eventsTitle}>{title}</h2>}
        <ul className={css.eventsList}>
          {items.map(RenderItems)}
        </ul>
        {pagination && pagination}
      </div>
    </>
  );
};

export default List;
