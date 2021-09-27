import React, { FC, useEffect, useContext } from 'react'
import { NavigationContext } from '@/components/Navigation/NavigationContext'
import { SanityPage } from 'web/graphql-types'
import ModuleLoop from '@/containers/ModulesLoop'

interface PageProps {
  page: SanityPage
}
const PageContainer: FC<PageProps> = ({
  page: { title, meta, logoType, route, contentModules }
}) => {
  const { setRoute, setLogoType } = useContext(NavigationContext)
  useEffect(() => {
    setRoute(route?.current || null)
    setLogoType(logoType || 'burger')
  }, [])

  return <ModuleLoop modules={contentModules?.modules} />
}

export default PageContainer
