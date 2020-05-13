import React from "react"

import Contact from '../components/Contact'

class Contacts extends React.Component {
	render() {
			
		return (
		<div className="container" data-testid="contacts">
			<section className="contacts">
				<article className="contact">
					<span className="contact__avatar" />
					<span className="contact__data">Nome</span>
					<span className="contact__data">Telefone</span>
					<span className="contact__data">País</span>
					<span className="contact__data">Admissão</span>
					<span className="contact__data">Empresa</span>
					<span className="contact__data">Departamento</span>
				</article>
				{this.props.users === undefined ? '--' :
					this.props.users.filter((usr) => usr.name.toLowerCase().includes(this.props.filterText.toLowerCase()))
						.sort(function (a, b) {
							if (a[this.props.sortBy] > b[this.props.sortBy]) {
								return 1
							}
							if (a[this.props.sortBy] < b[this.props.sortBy]) {
								return -1
							}
							return 0
						}).map(usr => (
							<Contact key={usr.id} contact={usr} />
						))
				}
			</section>
		</div>
		)
	}
}

export default Contacts