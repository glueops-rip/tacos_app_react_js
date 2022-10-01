import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const withRouter = Component => props => {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<Component {...props} {...{navigate, location}}/>
	);
}

export default withRouter;
