import { Typography } from '@mui/material'

const NotFound = () => {
  return (
    <div style={{ padding: 20 }}>
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        style={{ fontWeight: 'bold' }}
      >
        404 - Page not found
      </Typography>
    </div>
  )
}

export default NotFound
