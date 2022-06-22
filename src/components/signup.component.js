import React, { Component } from 'react';
export default class SignUp extends Component {
	render() {
		return(
			<form>
				<h3>Cadastro</h3>
				<div className="form-group mb-3">
					<label>Primeiro nome</label>
					<input
						type="text"
						className="form-control"
						placeholder="Primeiro nome"
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label>Sobrenome</label>
					<input
						type="text"
						className="form-control"
						placeholder="Sobrenome"
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label>Email</label>
					<input
						type="email"
						className="form-control"
						placeholder="Informe seu email"
						required
					/>
				</div>
				<div className="form-group mb-3">
					<label>Senha</label>
					<input
						type="password"
						className="form-control"
						placeholder="Informe uma senha"
						required
					/>
				</div>
				<div className="d-grid">
					<button type="submit" className="btn btn-primary btn-block">
						Cadastrar
					</button>
				</div>
				<p className="forgot-password text-right">
					Já é registrado ? <a href="/login">login</a>
				</p>
			</form>
		);
	}
}
