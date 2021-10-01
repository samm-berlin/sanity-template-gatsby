import React, { FC } from 'react'
import { SanityPage } from 'web/types/graphql-types'
import ModulesLoop from '@/modules'

interface PageProps {
  page: SanityPage
}
const PageContainer: FC<PageProps> = ({
  page: { title, meta, contentModules },
  ...props
}) => {
  return <ModulesLoop modules={contentModules?.modules} />
}

export default PageContainer
