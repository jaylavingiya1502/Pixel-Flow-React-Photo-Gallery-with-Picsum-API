
const Pagination = ({idx, currentIndex, func}) => {
  return (
    <button
      className={(idx === currentIndex) ? 'page-button-current page-button' : 'page-button' }
      onClick={() => func(idx)}
    >
      {idx}
    </button>
  )
}

export default Pagination