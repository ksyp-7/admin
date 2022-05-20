import "./List.scss"
import Slidebar from "../Components/Slidebar/Slidebar"
import Navbar from "../Components/Navbar/Navbar"
import Datatable from "../Components/datatable/Datatable"
function List() {
  return (
    <div className="list">
      <Slidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  )
}

export default List