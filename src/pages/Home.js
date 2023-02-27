import { Fragment } from "react";
import FromRegist from "../components/FormRegist";
import Navbar from "../components/Navbar";

const Home = () => {

    return(
        <Fragment>
            <Navbar />
            <FromRegist />
        </Fragment>
    )
}

export default Home;