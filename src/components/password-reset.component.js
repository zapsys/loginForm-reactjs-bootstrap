import React, { Component } from 'react';
export default class PasswordReset extends Component {
	render() {
		return(
			<form>
				<h3>Recuperação de senha</h3>
				<div className="form-group mb-3">
					<label>Email</label>
					<input
						type="email"
						className="form-control"
						placeholder="Informe o e-mail cadastrado"
						required
					/>
				</div>
				<div className="d-grid">
					<button type="submit" className="btn btn-primary">
						Solicitar
					</button>
				</div>
			</form>
		);
	}
}
