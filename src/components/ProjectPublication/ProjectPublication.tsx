import React from "react"

interface PublicationDetails {
    name: string,
    citation: string,
    link: string
}

export const Publication: React.FC<PublicationDetails> = (props) => {
    return (
        <div className="person-card">
            {/* <div className="card__header">
                <h1 className="card__title">{props.name}</h1>
                <div className="card__header__icons">
                {(() => {
                        if (props.isCurrentMember) {
                            return (
                                <>
                                <span id="alumni-tag">Alumni</span>
                                </>
                            )
                        }
                })()}
            </div>
        </div><h2 className="card__subtitle card__subtitle--involvement">{props.involvement}</h2><p className="card__text">{props.description}</p><div className="card__contact">
                <div id="contact-container">
                    <div className="contact-info-row">
                        <EmailIcon className="icon icon--contact" />
                        <a href={`mailto:${props.email}`} className="card__subtitle card__subtitle--contact">{props.email}</a>
                    </div>
                    <div className="contact-info-row">
                        <PhoneIcon className="icon icon--contact" />
                        <a href={`tel:${props.phone}`} className="card__subtitle card__subtitle--contact">{props.phone}</a>
                    </div>
                    <div className="contact-info-row">
                        <LinkedInIcon className="icon icon--contact" />
                        <a href={`${props.linkedIn}`} className="card__subtitle card__subtitle--contact">{props.linkedIn}</a>
                    </div>
                </div>
            </div> */}
        </div>
    )
}