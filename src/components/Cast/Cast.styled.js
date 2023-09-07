import styled from 'styled-components';

export const CastWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

export const CastSubtitle = styled.h2`
    font-size: 28px;
    margin-bottom: 30px;
    text-aling: center;
    color: #FFFFFF;
    text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
`;

export const CastList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 40px;
`;

export const CastItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const CastPoster = styled.img`
    border-radius: 10px;
    box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.24);
`;

export const ActorName = styled.p`
    font-size: 18px;
    font-weight: 700;
    color:  #ffffff;
    text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
`;

export const Character = styled.p`
  font-size: 18px;
  font-weight: 500;
  color:  #191970;
  text-shadow: 0 1px 0 rgba(19, 74, 70, 0.4);
`;


export const NoCastMessage = styled.div`
    color: #ffffff;
    font-size: 24px;
    font-weight: 700;
    text-shadow: 0 3px 0 rgba(25, 25, 112, 1);
`;