import { Button, ButtonLink } from "./Button.styled";
import { HiArrowNarrowLeft } from 'react-icons/hi';

export const GoBackBtn = ({to}) =>{
    return(
        <Button type="button">
        <ButtonLink to={to}>
        <HiArrowNarrowLeft size={24} />
        Go back 
        </ButtonLink>
        </Button>
    )
}
