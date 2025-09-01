import React from 'react'
import { useTranslation } from 'react-i18next'
import "./styles/AboutMe.css"

const AboutMe = () => {
    const [t, i18n] = useTranslation("global")
  return (
    <article className='container_aboutMe'>
        <h2>{t("AboutMe.aboutMe")}</h2>

        <div className='container_data'>
            <h5>{t("AboutMe.iAm")}</h5>
            <h4>{t("AboutMe.name")}</h4>
            <h2 className='paragraphAboutMe'>{t("AboutMe.FullStack")}</h2>
            <p className='paragraphAboutMe'>{t("AboutMe.pAboutMe")}</p>
        </div>
    </article>
  )
}

export default AboutMe