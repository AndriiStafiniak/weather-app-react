import styled from "styled-components";
import { ReactComponent as loaderIcon } from "../../../images/icon/icon.svg";

export const StyledLoader = styled(loaderIcon)`
	margin:0 auto;
	align-self: center;
	width: 111px;
	height: 111px;
	animation: spiner 1.5s linear infinite;

	@media only screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
		width: 70px;
		height: 70px;
	}

	
	@keyframes spiner {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;