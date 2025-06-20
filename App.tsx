import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { CondominioProvider } from './contexts/CondominioContext';
import { MainLayout } from './components/Layout/MainLayout';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Box, Typography } from '@mui/material';

// personalizacao so tema
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#dc004e',
      light: '#ff5983',
      dark: '#9a0036',
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          borderRadius: 8,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          borderRadius: 8,
        },
      },
    },
  },
});

// pagina temporaria para rotas ainda nao implementadas
const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <Box sx={{ p: 3 }}>
    <Typography variant="h4" gutterBottom>
      {title}
    </Typography>
    <Typography variant="body1" color="textSecondary">
      Esta página está em desenvolvimento.
    </Typography>
  </Box>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CondominioProvider>
        <Router>
          <MainLayout>
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/condominio" element={<PlaceholderPage title="Gestão do Condomínio" />} />
              <Route path="/moradores" element={<PlaceholderPage title="Gestão de Moradores" />} />
              <Route path="/funcionarios" element={<PlaceholderPage title="Gestão de Funcionários" />} />
              <Route path="/empresas-terceirizadas" element={<PlaceholderPage title="Empresas Terceirizadas" />} />
              <Route path="/fornecedores" element={<PlaceholderPage title="Fornecedores" />} />
              <Route path="/veiculos" element={<PlaceholderPage title="Gestão de Veículos" />} />
              <Route path="/visitantes" element={<PlaceholderPage title="Controle de Visitantes" />} />
              <Route path="/reservas" element={<PlaceholderPage title="Sistema de Reservas" />} />
              <Route path="/seguranca" element={<PlaceholderPage title="Controle de Segurança" />} />
              <Route path="/ocorrencias" element={<PlaceholderPage title="Gestão de Ocorrências" />} />
              <Route path="/configuracoes" element={<PlaceholderPage title="Configurações" />} />
            </Routes>
          </MainLayout>
        </Router>
      </CondominioProvider>
    </ThemeProvider>
  );
}

export default App;
