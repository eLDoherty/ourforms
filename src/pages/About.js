import { Fragment } from "react";
import Navbar from "../components/Navbar";

const About = () => {

    return(
        <Fragment>
            <Navbar />
            <div className="container">
                <h1 className="mt-5">About page</h1>
            </div>
        </Fragment>
    )
}

export default About;