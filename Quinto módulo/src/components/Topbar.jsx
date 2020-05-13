import React from 'react';
import { ReactComponent as LogoSvg } from "../assets/img/logo.svg";

export default function Topbar() {
	return (
		<>
			<header data-testid="topbar" className="topbar">
					<div className="container">
						<a href="/" className="topbar__logo">
							<LogoSvg alt="Logo Instagram" />
						</a>
					</div>
			</header>
		</>
	)
	
}
