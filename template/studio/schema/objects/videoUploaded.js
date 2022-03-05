import { MdVideocam } from 'react-icons/md'
import EmbedPlayer from '../../components/EmbedPlayer'

export default {
  type: 'object',
  name: 'videoUploaded',
  title: 'Video',
  icon: MdVideocam,
  fields: [
    {
      type: 'url',
      name: 'url',
    },
  ],
  preview: {
    select: { url: 'url' },
    component: EmbedPlayer,
  },
}
