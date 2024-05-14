import React from 'react';
import {
    WelcomeBoxWrapper, MainDescription, MainImage, MainImageWrapper,
    MainTitle,
    MainTitleDedicated, RatingImageDiv, RatingImageImage, StarBlock, Statistic, StatisticDedicated,
    WelcomeBlockContent,
    WelcomeBlockText,
    WelcomeBox, FlexBlock
} from "./WelcomeBlock.style";
import rating from "../../../assets/images/rating.png"
import mainImage from "../../../assets/images/mainImage.png"
import Nutrition from "../Nutrition/Nutrition";

const WelcomeBlock = () => {
    return (
        <WelcomeBoxWrapper>
            <WelcomeBox>
                <WelcomeBlockContent>
                    <WelcomeBlockText>
                        <FlexBlock>
                            <MainTitle>
                                Beautiful food & takeaway,
                                    <MainTitleDedicated> delivered </MainTitleDedicated>
                                to your door.
                            </MainTitle>
                            <MainDescription>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500.
                            </MainDescription>
                        </FlexBlock>
                        <FlexBlock>
                            <Nutrition text="Place an Order" isActive="Place an Order" />
                            <StarBlock>
                                <RatingImageDiv>
                                    <RatingImageImage src={rating} alt="rating"/>
                                </RatingImageDiv>
                                <Statistic>
                                    <StatisticDedicated>4.8 out of 5 </StatisticDedicated>
                                    based on 2000+ reviews
                                </Statistic>
                            </StarBlock>
                        </FlexBlock>
                    </WelcomeBlockText>
                    <MainImageWrapper>
                        <MainImage src={mainImage}/>
                    </MainImageWrapper>
                </WelcomeBlockContent>
            </WelcomeBox>
        </WelcomeBoxWrapper>
    );
};

export default WelcomeBlock;