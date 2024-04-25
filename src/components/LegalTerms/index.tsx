import React from 'react'
import { useTranslation, Trans } from 'react-i18next'

import ResourceLink, { IResourceLink } from './ResourceLink'

export default function LegalTerms() {
  const { t } = useTranslation()
  /**
   * TODO: Change 👇🏾 to the ACTUAL link for the Terms of Service
   */
  const termsOfUse: IResourceLink = { 
    label: t('Terms of Service'), 
    url: 'https://icecreaminc.com/#/not/a/real/terms-of-use', 
    target: '_blank' 
  }
  /**
   * TODO: Change 👇🏾 to the ACTUAL link for the Privacy Policy
   */
  const privacyPolicy: IResourceLink = { 
    label: t('Privacy Policy'), 
    url: 'https://icecreaminc.com/#/not/a/real/privacy-policy', 
    target: '_blank' 
  }

  return (
    <>
      <Trans
        i18nKey="components.LegalTerms" 
        components={{
          CompanyName: <span>{t('Company Name')}</span>,
          LinkToTerms: <ResourceLink link={termsOfUse} />,
          LinkToPrivacyPolicy: <ResourceLink link={privacyPolicy} />
        }}>
        By continuing, you agree to &lt;Company Name&rt;’s <ResourceLink link={termsOfUse} /> and acknowledge you’ve read our{' '}
        <ResourceLink link={privacyPolicy} />. You must be at least 18 years old to use &lt;Company Name /&rt;.
      </Trans>    
    </>
  )
}