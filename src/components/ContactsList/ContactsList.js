import { ContactCard } from "components/ContactCard/ContactCard";
import { List } from "./ContactsList.styled";

export const ContactsList = ({ contacts, delContact }) => {
    return (
        <List>
            {contacts.map(item => {
                return  <li key={item.id}>
                    <ContactCard item={item} delContact={delContact} />
                </li>
            })}
        </List>
    )
}