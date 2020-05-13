import React from 'react'

export default (props) => {
    const { data } = props
    return (
      <article data-testid="contact" className="contact">
				            <span className="contact__avatar"><img src={data.avatar} alt="Avatar de usuário"/></span>
                    <span className="contact__data">{data.name}</span>
                    <span className="contact__data">{data.phone}</span>
                    <span className="contact__data">{data.country}</span>
                    <span className="contact__data">{data.admissionDate}</span>
                    <span className="contact__data">{data.company}</span>
                    <span className="contact__data">{data.department}</span>
			</article>
     )
   } 


