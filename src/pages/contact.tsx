import "./contact.scss";
import {Properties, Property} from "../components/properties";
import {SocialContacts} from "../components/social-contacts";

export const Contact = () => {
    return <section className="contact-section">
        <br />
        <div className={"contact-content"}>
            <p>
                Please don't hesitate to reach out, I'm always happy to chat.
            </p>
            <Properties expandWidth={false}>
                <Property property={"Email"} value={"rodriguez.eric.n.work@gmail.com"} />
                <Property property={"Mobile"} value={"0488-699-100"} />
                <Property property={"Address"} value={"just kidding - dont come"} private={true} />
            </Properties>
            <SocialContacts />
        </div>

    </section>
};
