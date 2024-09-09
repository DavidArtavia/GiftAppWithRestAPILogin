import React from 'react';
import FirebaseConfig from '../../firebase-config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from 'firebase/auth';
const auth = getAuth(FirebaseConfig);
import {
  Button,
  CssBaseline,
  TextField,
  Paper,
  Typography,
  Container,
  Box,
  Link,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google'; // Asegúrate de tener este ícono instalado

const PaperStyled = styled(Paper)(({ theme }) => ({
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
}));

const FormStyled = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1),
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

export const Login = () => {
  const [error, setError] = React.useState('');
  const [register, setRegister] = React.useState(false);

  const handleSubmit =  async(event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;

    try {
      if (register) {
        // Intentar iniciar sesión
        await signInWithEmailAndPassword(auth, username, password);
        setError('');
        alert('¡Inicio de sesión exitoso!');
      } else {
        // Intentar registrar un nuevo usuario
        await createUserWithEmailAndPassword(auth, username, password);
        setError('');
        alert('¡Registro exitoso!');
      }
    } catch (error) {
      setError('Usuario o contraseña incorrectos');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <PaperStyled elevation={3}>
        <Typography component="h1" variant="h5">
          {register ? 'Log In' : 'Create Account'}
        </Typography>
        <Box
          component="img"
          sx={{
            height: 100,
            width: 100,
            margin: '15px 0 0 0',
            borderRadius: '50%',
            boxShadow: register
              ? '0px 4px 10px rgba(255, 0, 255, 0.5)' // Magenta si register es true
              : '0px 4px 10px rgba(0, 0, 255, 0.5)', // Azul si register es false

            
          }}
          alt="Logo de la aplicación"
          src="https://e7.pngegg.com/pngimages/419/473/png-clipart-computer-icons-user-profile-login-user-heroes-sphere-thumbnail.png"
        />
        <FormStyled onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Nombre de usuario"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <ButtonStyled
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: register ? 'magenta' : 'blue',
              '&:hover': {
                backgroundColor: register ? 'darkmagenta' : 'darkblue',
              },
            }}
          >
            {register ? 'Log In' : 'Create Account'}
          </ButtonStyled>
          <Typography component="div" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box component="div" sx={{ display: 'flex', alignItems: 'center', margin: '20px 0' }}>
              <Box component="div" sx={{ flex: 1, height: '1px', backgroundColor: 'rgba(0,0,0,0.2)' }} />
              <Typography variant="body2" color="textSecondary" align="center" sx={{ mx: 2 }}>
                or
              </Typography>
              <Box component="div" sx={{ flex: 1, height: '1px', backgroundColor: 'rgba(0,0,0,0.2)' }} />
            </Box>
            {register ? (
              <Button
                fullWidth
                variant="outlined"
                startIcon={<GoogleIcon />}
                sx={{ margin: '20px 0' }}
              >
                Continue with Google
              </Button>
            ) : null}
          </Typography>
        </FormStyled>
        <Link onClick={() => setRegister(!register)} variant="body2" sx={{ cursor: 'pointer', mt: 2 }}>
          {register ? 'Dont have an account yet? Sign up!' : 'Already have an account? Log in!'}
        </Link>
      </PaperStyled>
    </Container>
  );
};