import React from 'react'

export default props => {
		const sortBy = props.sortBy

		return (
		<div className="container" data-testid="filters">
				<section className="filters">
					<div className="filters__search">
						<input type="text" className="filters__search__input" placeholder="Pesquisar"
							onChange={(e) => props.onFilterTextChange(e.target.value) } />
						<button className="filters__search__icon">
							<i className="fa fa-search" />
						</button>
					</div>

					<button
						className={`filters__item ${sortBy === "name" ? "is-selected" : ""}`}
						name="name"
						onClick={(e) => props.onSortByChange(e.target.name)}
					>
						Nome <i className="fas fa-sort-down" />
					</button>

					<button
						className={`filters__item ${sortBy === "country" ? "is-selected" : ""}`}
						name="country"
						onClick={(e) => props.onSortByChange(e.target.name)}
					>
						País <i className="fas fa-sort-down" />
					</button>

					<button
						className={`filters__item ${sortBy === "company" ? "is-selected" : ""}`}
						name="company"
						onClick={(e) => props.onSortByChange(e.target.name)}
					>
						Empresa <i className="fas fa-sort-down" />
					</button>

					<button
						className={`filters__item ${sortBy === "department" ? "is-selected" : ""}`}
						name="department"
						onClick={(e) => props.onSortByChange(e.target.name)}
					>
						Departamento <i className="fas fa-sort-down" />
					</button>

					<button
						className={`filters__item ${sortBy === "admissionDate" ? "is-selected" : ""}`}
						name="admissionDate"
						onClick={(e) => props.onSortByChange(e.target.name)}
					>
						Data de admissão <i className="fas fa-sort-down" />
					</button>
					
				</section>
			</div>)
}


