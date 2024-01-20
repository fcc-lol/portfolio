import React from "react"
import MainPage from "../templates/mainPage"
import SectionHeading from "../components/sectionHeading"
import TextHeading from "../components/textHeading"

import ZachFace from "../assets/images/people/zach.jpg"
import DanFace from "../assets/images/people/dan.jpg"
import LeoFace from "../assets/images/people/leo.jpg"

const About = () => {
    return (
        <MainPage className="about" pageTitle="About">
            <section className="page__main-content">
                <SectionHeading title="About" />
                <div className="page__main-content__3up">
                    <TextHeading title="Zach" />
                    <img src={ZachFace} className="page__main-content__3up__profile-image" />
                    <p>I’m a curious tinkerer, who learns by doing. I like to work on projects that present opportunities to think strategically and execute nimbly.</p>
                    <p>I currently work on shaping ambiguous opportunities into high-impact projects on a a Growth Design team at Visa, in New York.</p>
                </div>
                <div className="page__main-content__3up">
                    <TextHeading title="Dan" />
                    <img src={DanFace} className="page__main-content__3up__profile-image" />
                    <p>I'm a guy that likes design and code. More to come.</p>
                </div>
                <div className="page__main-content__3up">
                    <TextHeading title="Leo" />
                    <img src={LeoFace} className="page__main-content__3up__profile-image" />
                    <p>I’m a designer, engineer, and artist. I believe design and technology should encourage community, equal opportunity, and social progress.</p>
                    <p>Living and working in New York City. Originally from Queens, NY.</p>
                </div>
            </section>
        </MainPage>
    )
}

export default About
