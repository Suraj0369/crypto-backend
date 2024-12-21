import React from "react";
import Banner from "../components/Banner/Banner";
import Header from "../components/Header.js";
import CoinsTable from "../components/CoinsTable";

const Homepage = () => {
	return (
		<>
		    <Header></Header>
			<Banner />
			<CoinsTable />
		</>
	);
};

export default Homepage;
