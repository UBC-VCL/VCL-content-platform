import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./ProjectPeople.css";
import dotenv from "dotenv";

dotenv.config();
const IS_WIP = process.env.REACT_APP_WIP === "development";

interface PersonDetails {
  name: string;
  involvement: string;
  description: string;
  email: string;
  phone: string;
  linkedIn: string;
  isCurrentMember: boolean; // if person is current member or alumni
  edit?: () => void;
  delete?: () => void;
}

export const Person: React.FC<PersonDetails> = (props) => {
  return (
    <div className="person-card">
      <div className="card__header">
        <h1 className="card__title">{props.name}</h1>
        <div className="card__header__icons">
          {(() => {
            if (props.isCurrentMember) {
              return (
                <>
                  <span id="alumni-tag">Alumni</span>
                </>
              );
            }
          })()}
        </div>
      </div>
      <h2 className="card__subtitle card__subtitle--involvement">
        {props.involvement}
      </h2>
      <p className="card__text">{props.description}</p>
      {IS_WIP && (
        <div className="card__contact">
          <div id="contact-container">
            <div className="contact-info-row">
              <EmailIcon className="icon icon--contact" />
              <a
                href={`mailto:${props.email}`}
                className="card__subtitle card__subtitle--contact"
              >
                {props.email}
              </a>
            </div>
            <div className="contact-info-row">
              <PhoneIcon className="icon icon--contact" />
              <a
                href={`tel:${props.phone}`}
                className="card__subtitle card__subtitle--contact"
              >
                {props.phone}
              </a>
            </div>
            <div className="contact-info-row">
              <LinkedInIcon className="icon icon--contact" />
              <a
                href={`${props.linkedIn}`}
                className="card__subtitle card__subtitle--contact"
              >
                {props.linkedIn}
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
