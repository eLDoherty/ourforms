import { Fragment } from "react";
import Navbar from "../components/Navbar";

const Home = () => {

    return(
        <Fragment>
            <Navbar />
            <div className="container">
                <h1>Homepage</h1>
            </div>
        </Fragment>
    )
}

export default Home;