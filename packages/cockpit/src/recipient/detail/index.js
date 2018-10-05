import format from './formatAnticipationAndTransferConfig'
import { formatToAnticipation } from '../add/formatToRecipient'

const DetailRecipient = client => recipientId => (
  client.recipients.find({ id: recipientId })
    .then(recipient => (format(recipient)))
)

const UpdateDetailRecipient = client => (recipientId, getData) => {
  const formatted = formatToAnticipation(getData)
  return client.recipients.update({
    id: recipientId,
    ...formatted,
  })
}

export default {
  detail: DetailRecipient,
  update: UpdateDetailRecipient,
}
