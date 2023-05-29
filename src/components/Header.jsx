import React from 'react'
import { useTranslation } from 'react-i18next'

const Header = () => {
    const [t, i18n] = useTranslation("global")
  return (
    <div>
        {/* <h2>{t("header.hello-world")}</h2>
        <h2>{t("header.mother")}</h2> */}
</div>
  )
}

export default Header