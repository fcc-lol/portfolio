import React from "react"
import MainPage from "../templates/mainPage"
import SectionHeading from "../components/sectionHeading"
import TextHeading from "../components/textHeading"

const Shop = () => {
  return (
    <MainPage className="shop" pageTitle="Shop">
      <section className="page__main-content">
        <SectionHeading title="Shop" />
        <div className="page__main-content__full">
          <TextHeading title="Coming Soon" />
        </div>
      </section>
    </MainPage>
  )
}

export default Shop
