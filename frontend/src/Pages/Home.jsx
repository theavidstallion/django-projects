import React from "react";
import { connect } from "react-redux";
import { refresh } from "../reducer/Actions";
const Home = ({ refresh }) => {
	return (
		<div className="p-5 mb-4 bg-light rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Welcome to Medic, your Digital Caretaker.</h1>
                <p className="col-md-8 fs-4">The product offers them real-time monitoring capabilities, empowering them to track vital health parameters and receive timely alerts about any potential health issues.</p>
                <button className="btn btn-primary btn-lg" type="button" onClick={ refresh}>Refresh</button>
            </div>
        </div>
		)
}


export default connect(null, { refresh })(Home);