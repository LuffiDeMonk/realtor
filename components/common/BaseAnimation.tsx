import React from 'react'
import TextAnimationContainer, { Text } from '../animation/TextAnimation'
import CustomHeading from './CustomHeading'
import CustomSubHeading from './CustomSubHeading'

type Props = {
    title: string,
    subtitle: string
}

export default function TitleAnimation({ title, subtitle }: Props) {
    return (
        <TextAnimationContainer>
            <Text>
                <CustomSubHeading
                    title={subtitle}
                />
            </Text>
            <Text>
                <CustomHeading
                    title={title}
                />
            </Text>
        </TextAnimationContainer>
    )
}
