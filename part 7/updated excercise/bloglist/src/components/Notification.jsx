import { Alert } from '@mui/material'
import useNotificationStore from '../store/notificationStore'

const Notification = () => {
  const { notification } = useNotificationStore()

  if (!notification) {
    return null
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <Alert severity={notification.type}>{notification.message}</Alert>
    </div>
  )
}

export default Notification
