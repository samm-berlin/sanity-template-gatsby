import S from '@sanity/desk-tool/structure-builder';
import EyeIcon from 'part:@sanity/base/eye-icon';
import EditIcon from 'part:@sanity/base/edit-icon';
import CodeIcon from 'part:@sanity/base/format-code-icon';

import Iframe from './Iframe';
import Json from './Json';

export const previewUrl = 'https://nr2154-preview.herokuapp.com';

export const PreviewsStructure = (urlResolver, forceSlug = true) => [
  S.view.form().icon(EditIcon),
  S.view
    .component(Iframe)
    .options({ resolveUrl: urlResolver, forceSlug })
    .title('Web Preview')
    .icon(EyeIcon),
  S.view.component(Json).title('JSON').icon(CodeIcon),
];

export default { Iframe, Json };
