import React from 'react'
import Feature from './Feature'
import Hero from './Hero'
import Faq from '../Faq'

const MainPage = () => {
    return (
        <div>
            <Hero />
            <Feature no={1} heading="heading1" para="lore ipsum" videourl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" />
            <Feature no={2} heading="heading1" para="lore ipsum" videourl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" />
            <Feature no={3} heading="heading1" para="lore ipsum" videourl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" />
            <Feature no={4} heading="heading1" para="lore ipsum" videourl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" />
            <Feature no={5} heading="heading1" para="lore ipsum" videourl="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4" />

            <Faq />

        </div>
    )
}

export default MainPage