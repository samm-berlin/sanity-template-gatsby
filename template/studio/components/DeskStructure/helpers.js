import S from '@sanity/desk-tool/structure-builder'

// set useDocumentTypeList to true if this is just a list to filter another type by
export const submenuList = (
  type,
  title,
  useDocumentTypeList = false,
  filter = false,
  params = {}
) => {
  const base = !useDocumentTypeList
    ? S.documentList(type)
      .canHandleIntent(() => false)
      .menuItems(S.orderingMenuItemsForType(type))
    : S.documentTypeList(type)

  return base
    .title(title)
    .filter(`_type == $type${filter ? `&& ${filter}` : ''}`)
    .params({type, ...params})
}
