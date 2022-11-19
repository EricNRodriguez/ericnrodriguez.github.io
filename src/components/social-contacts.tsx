import "./social-contacts.scss";

type SocialContact = {
  icon: string;
  link: string;
};

const socialContacts: SocialContact[] = [
  {
    icon: "fab fa-twitter",
    link: "https://www.twitter.com/ericnrod",
  },
  {
    icon: "fab fa-linkedin",
    link: "https://au.linkedin.com/in/ericnicholasrodriguez",
  },
  {
    icon: "fa fa-envelope",
    link: "mailto:rodriguez.eric.n.work@gmail.com",
  },
  {
    icon: "fab fa-github",
    link: "https://github.com/EricNRodriguez"
  }
];

const SocialContactIcon = (props: SocialContact) => {
    return (
      <a href={props.link} target="_blank">
        <a className={props.icon}/>
      </a>
    );
};

export const SocialContacts = () => {
  return <div className="social-contacts">
    <ul>
      {
        socialContacts.map((contact, i) => <li> <SocialContactIcon key={i} icon={contact.icon} link={contact.link} /> </li>)
      }
    </ul>
  </div>
};
