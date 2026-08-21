import { useEffect, useState } from "react";
import axios from 'axios'
import Card from './components/Card.jsx'
import Pagination from "./components/Pagination.jsx";
import './App.css'

const App = () => {
  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)
  const [loading, setLoading] = useState(false)

  const getPaginationRange = (index) => {
    const totalPages = 125
    const siblingCount = 1
    const boundaryCount = 1

    const showLeftEllipsis = (index - siblingCount) - boundaryCount > 2
    const showRightEllipsis = (totalPages - boundaryCount + 1) - (index + siblingCount) > 2

    if (showLeftEllipsis && showRightEllipsis) {
      return [1, '...', index - 1, index, index + 1, '...', totalPages]
    }

    if (!showLeftEllipsis && showRightEllipsis) {
      return [1, 2, 3, 4, 5, '...', 125]
    }

    if (showLeftEllipsis && !showRightEllipsis) {      
      return [1, '...', 121, 122, 123, 124, 125]
    }
  }

  const indArr = getPaginationRange(index)

  const getData = async () => {
    setLoading(true)

    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=8`)
      setUserData(response.data)
    } 
    
    catch (error){
      console.error(error)
    } 
    
    finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [index])

  return (
    <div className="app">

      <div className="cards-container">
        {loading ? (
          <h3 className="loading">Loading...</h3>
        ) : (
          userData.map((elem) => (
            <Card key={elem.id} elem={elem} />
          ))
        )}
      </div>

      
      <div className="pagination">
        {indArr.map((elem, i) => (
          elem === '...'
            ? <span key={`ellipsis-${i}`} className="ellipsis">...</span>
            : <Pagination key={elem} idx={elem} currentIndex={index} func={setIndex} />
        ))}
      </div>

    </div>
  )
}

export default App
