import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.webp';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/login.component.js';
import SignUp from './components/signup.component.js';
import PasswordReset from './components/password-reset.component.js';

function App() {
	return (
		<Router>
			<div className="App">
				<nav className="navbar navbar-expand-xl navbar-dark bg-primary fixed-top">
					<div className="container-fluid">
						<img className="brand-img" src={logo} alt="logo"/>
						<Link className="navbar-brand" to={'/login'}>
							Zapsys
						</Link>
						<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
      						<span className="navbar-toggler-icon"></span>
    					</button>
						<div className="collapse navbar-collapse" id="menu">
							<ul className="navbar-nav ml-auto mb-2 mb-lg-0 justify-content-end">
								<li className="nav-item">
									<Link className="nav-link" to={'/cadastrar'}>
										Cadastro
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<div className="auth-wrapper">
					<div className="auth-inner">
						<Routes>
							<Route exact path="/" element={<Login />} />
							<Route path="/login" element={<Login />} />
							<Route path="/recuperar-senha" element={<PasswordReset />} />
							<Route path="/cadastrar" element={<SignUp />} />
						</Routes>
					</div>
				</div>
			</div >
		</Router >
	);
}

export default App;
