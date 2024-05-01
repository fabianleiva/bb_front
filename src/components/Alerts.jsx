import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import { useState } from 'react';

export function AlertUi({ title, variant, reOpen }) {
  const [open, setOpen] = useState(true);

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={open}>
        <Alert
          severity={variant}
          sx={{ mb: 2 }}
        >
          {title}
        </Alert>
      </Collapse>
    </Box>
  );
}