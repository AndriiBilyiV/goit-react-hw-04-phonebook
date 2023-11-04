import { Button } from "./ContactCard.style";
import { IoTrashBinOutline } from "react-icons/io5";

export const ContactCard = ({item, delContact}) => {
    const { name, id, tel } = item;
    return (
        <div>
            {name}: {tel}
            <Button onClick={() => delContact({ id })}><IoTrashBinOutline/></Button>
        </div>
    )
}