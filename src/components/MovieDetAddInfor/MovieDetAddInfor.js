import { FcOpenedFolder, FcConferenceCall } from "react-icons/fc";

import { useLocation } from 'react-router-dom';
import { Icon, InforLink, LinkItem, LinkList, LinkWrapper, SubtitleH4, Wrapper } from './MovieDetAddInfor.styled';
 


const MovieDetAddInfor = () => {
    const location = useLocation();
    return (
         <Wrapper>
            <SubtitleH4>Additional information</SubtitleH4>
            <LinkWrapper>
               <LinkList>
                <LinkItem>
                    <Icon><FcConferenceCall/>
                        </Icon> 
                <InforLink to="cast" state={{ from: location }}>
                    Cast
                </InforLink>
                </LinkItem>
                <LinkItem>
                    <Icon>
                        {<FcOpenedFolder/>}
                    </Icon>
                <InforLink to="reviews" state={{ from: location }}>
                    Reviews
                </InforLink>
                </LinkItem>
            </LinkList>  
            </LinkWrapper>
           
        </Wrapper>
    )
}

export default MovieDetAddInfor;