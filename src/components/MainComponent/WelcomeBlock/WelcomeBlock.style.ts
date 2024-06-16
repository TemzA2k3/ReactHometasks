import { styled } from "styled-components";
// import mainImage from "../../../assets/images/mainPageBackground.png"

export const WelcomeBoxWrapper = styled.main`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-image: var(--main-background-color);
    background-size: cover;
    background-position: right top;
    background: var(--main-background-color);
`

export const WelcomeBox = styled.section`
    padding: 100px 120px 140px 120px;
`

export const WelcomeBlockContent = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
`
export const WelcomeBlockText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 53px;
`
export const FlexBlock = styled(WelcomeBlockText)`
    gap: 30px;
`
export const MainTitleDedicated = styled.span`
`
export const MainTitle = styled.h1`
    color: var(--main-text-color);
    font-family: sans-serif;
    font-size: 60px;
    font-style: normal;
    font-weight: 400;
    line-height: 60px;
    letter-spacing: 1.8px;
    ${MainTitleDedicated}{
        color: #35B8BE;
    }
`

export const MainDescription = styled.p`
    color: var(--main-descr-color);
    font-family: sans-serif;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 24.12px;
    letter-spacing: 0.36px;
`

export const StarBlock = styled(WelcomeBlockText)`
    gap: 5px;
`

export const RatingImageDiv = styled.div`
    width: 110px;
    height: 27px;
    flex-shrink: 0;
`

export const RatingImageImage = styled.img`
    width: 100%;
    height: 100%;
`

export const StatisticDedicated = styled.span``
export const Statistic = styled.p`
    color: var(--main-descr-color);
    font-family: sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    ${StatisticDedicated}{
         color: #35B8BE;
    }
`

export const MainImage = styled.img``
export const MainImageWrapper = styled.div`
    width: 600px;
    height: 580px;
    flex-shrink: 0;
    ${MainImage}{
        width: 100%;
        height: 100%;
    }
`



