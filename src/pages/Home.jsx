import Chart from "../Components/Chart/Chart.jsx";
import Fetured from "../Components/Fetured/Fetured.jsx";
import Navbar from "../Components/Navbar/Navbar";
import Slidebar from "../Components/Slidebar/Slidebar";
import Table from "../Components/Table/LTable.jsx";
import Widgets from "../Components/widgets/Widgets";
import "./Home.scss";

function Home() {
  return (
    <div className="home">
      <Slidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="balance" />
        </div>
        <div className="charts">
          <Fetured />
          <Chart  title="Last 6 Months (Revenue)" aspect={2/1}/>
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Home;
