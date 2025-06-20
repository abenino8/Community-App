import React, { createContext, useContext, useReducer, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { Condominio, Morador, Funcionario, EmpresaTerceirizada, Fornecedor, Veiculo, Visitante, Reserva, Ocorrencia, Usuario } from '../types';
import {
  mockCondominio,
  mockMoradores,
  mockFuncionarios,
  mockEmpresasTerceirizadas,
  mockFornecedores,
  mockVeiculos,
  mockVisitantes,
  mockReservas,
  mockOcorrencias,
  mockUsuarios,
} from '../data/mockData';

interface CondominioState {
  condominio: Condominio | null;
  moradores: Morador[];
  funcionarios: Funcionario[];
  empresasTerceirizadas: EmpresaTerceirizada[];
  fornecedores: Fornecedor[];
  veiculos: Veiculo[];
  visitantes: Visitante[];
  reservas: Reserva[];
  ocorrencias: Ocorrencia[];
  usuarios: Usuario[];
  loading: boolean;
  error: string | null;
}

type CondominioAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_CONDOMINIO'; payload: Condominio }
  | { type: 'ADD_MORADOR'; payload: Morador }
  | { type: 'UPDATE_MORADOR'; payload: Morador }
  | { type: 'DELETE_MORADOR'; payload: string }
  | { type: 'ADD_FUNCIONARIO'; payload: Funcionario }
  | { type: 'UPDATE_FUNCIONARIO'; payload: Funcionario }
  | { type: 'DELETE_FUNCIONARIO'; payload: string }
  | { type: 'ADD_EMPRESA_TERCEIRIZADA'; payload: EmpresaTerceirizada }
  | { type: 'UPDATE_EMPRESA_TERCEIRIZADA'; payload: EmpresaTerceirizada }
  | { type: 'DELETE_EMPRESA_TERCEIRIZADA'; payload: string }
  | { type: 'ADD_FORNECEDOR'; payload: Fornecedor }
  | { type: 'UPDATE_FORNECEDOR'; payload: Fornecedor }
  | { type: 'DELETE_FORNECEDOR'; payload: string }
  | { type: 'ADD_VEICULO'; payload: Veiculo }
  | { type: 'UPDATE_VEICULO'; payload: Veiculo }
  | { type: 'DELETE_VEICULO'; payload: string }
  | { type: 'ADD_VISITANTE'; payload: Visitante }
  | { type: 'UPDATE_VISITANTE'; payload: Visitante }
  | { type: 'DELETE_VISITANTE'; payload: string }
  | { type: 'ADD_RESERVA'; payload: Reserva }
  | { type: 'UPDATE_RESERVA'; payload: Reserva }
  | { type: 'DELETE_RESERVA'; payload: string }
  | { type: 'ADD_OCORRENCIA'; payload: Ocorrencia }
  | { type: 'UPDATE_OCORRENCIA'; payload: Ocorrencia }
  | { type: 'DELETE_OCORRENCIA'; payload: string }
  | { type: 'ADD_USUARIO'; payload: Usuario }
  | { type: 'UPDATE_USUARIO'; payload: Usuario }
  | { type: 'DELETE_USUARIO'; payload: string };

const initialState: CondominioState = {
  condominio: null,
  moradores: [],
  funcionarios: [],
  empresasTerceirizadas: [],
  fornecedores: [],
  veiculos: [],
  visitantes: [],
  reservas: [],
  ocorrencias: [],
  usuarios: [],
  loading: false,
  error: null,
};

const condominioReducer = (state: CondominioState, action: CondominioAction): CondominioState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'SET_CONDOMINIO':
      return { ...state, condominio: action.payload };
    case 'ADD_MORADOR':
      return { ...state, moradores: [...state.moradores, action.payload] };
    case 'UPDATE_MORADOR':
      return {
        ...state,
        moradores: state.moradores.map(m => m.id === action.payload.id ? action.payload : m)
      };
    case 'DELETE_MORADOR':
      return {
        ...state,
        moradores: state.moradores.filter(m => m.id !== action.payload)
      };
    case 'ADD_FUNCIONARIO':
      return { ...state, funcionarios: [...state.funcionarios, action.payload] };
    case 'UPDATE_FUNCIONARIO':
      return {
        ...state,
        funcionarios: state.funcionarios.map(f => f.id === action.payload.id ? action.payload : f)
      };
    case 'DELETE_FUNCIONARIO':
      return {
        ...state,
        funcionarios: state.funcionarios.filter(f => f.id !== action.payload)
      };
    case 'ADD_EMPRESA_TERCEIRIZADA':
      return { ...state, empresasTerceirizadas: [...state.empresasTerceirizadas, action.payload] };
    case 'UPDATE_EMPRESA_TERCEIRIZADA':
      return {
        ...state,
        empresasTerceirizadas: state.empresasTerceirizadas.map(e => e.id === action.payload.id ? action.payload : e)
      };
    case 'DELETE_EMPRESA_TERCEIRIZADA':
      return {
        ...state,
        empresasTerceirizadas: state.empresasTerceirizadas.filter(e => e.id !== action.payload)
      };
    case 'ADD_FORNECEDOR':
      return { ...state, fornecedores: [...state.fornecedores, action.payload] };
    case 'UPDATE_FORNECEDOR':
      return {
        ...state,
        fornecedores: state.fornecedores.map(f => f.id === action.payload.id ? action.payload : f)
      };
    case 'DELETE_FORNECEDOR':
      return {
        ...state,
        fornecedores: state.fornecedores.filter(f => f.id !== action.payload)
      };
    case 'ADD_VEICULO':
      return { ...state, veiculos: [...state.veiculos, action.payload] };
    case 'UPDATE_VEICULO':
      return {
        ...state,
        veiculos: state.veiculos.map(v => v.id === action.payload.id ? action.payload : v)
      };
    case 'DELETE_VEICULO':
      return {
        ...state,
        veiculos: state.veiculos.filter(v => v.id !== action.payload)
      };
    case 'ADD_VISITANTE':
      return { ...state, visitantes: [...state.visitantes, action.payload] };
    case 'UPDATE_VISITANTE':
      return {
        ...state,
        visitantes: state.visitantes.map(v => v.id === action.payload.id ? action.payload : v)
      };
    case 'DELETE_VISITANTE':
      return {
        ...state,
        visitantes: state.visitantes.filter(v => v.id !== action.payload)
      };
    case 'ADD_RESERVA':
      return { ...state, reservas: [...state.reservas, action.payload] };
    case 'UPDATE_RESERVA':
      return {
        ...state,
        reservas: state.reservas.map(r => r.id === action.payload.id ? action.payload : r)
      };
    case 'DELETE_RESERVA':
      return {
        ...state,
        reservas: state.reservas.filter(r => r.id !== action.payload)
      };
    case 'ADD_OCORRENCIA':
      return { ...state, ocorrencias: [...state.ocorrencias, action.payload] };
    case 'UPDATE_OCORRENCIA':
      return {
        ...state,
        ocorrencias: state.ocorrencias.map(o => o.id === action.payload.id ? action.payload : o)
      };
    case 'DELETE_OCORRENCIA':
      return {
        ...state,
        ocorrencias: state.ocorrencias.filter(o => o.id !== action.payload)
      };
    case 'ADD_USUARIO':
      return { ...state, usuarios: [...state.usuarios, action.payload] };
    case 'UPDATE_USUARIO':
      return {
        ...state,
        usuarios: state.usuarios.map(u => u.id === action.payload.id ? action.payload : u)
      };
    case 'DELETE_USUARIO':
      return {
        ...state,
        usuarios: state.usuarios.filter(u => u.id !== action.payload)
      };
    default:
      return state;
  }
};

interface CondominioContextType {
  state: CondominioState;
  dispatch: React.Dispatch<CondominioAction>;
}

const CondominioContext = createContext<CondominioContextType | undefined>(undefined);

export const CondominioProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(condominioReducer, initialState);

  // Carregar dados de exemplo na inicialização
  useEffect(() => {
    dispatch({ type: 'SET_CONDOMINIO', payload: mockCondominio });
    mockMoradores.forEach(morador => {
      dispatch({ type: 'ADD_MORADOR', payload: morador });
    });
    mockFuncionarios.forEach(funcionario => {
      dispatch({ type: 'ADD_FUNCIONARIO', payload: funcionario });
    });
    mockEmpresasTerceirizadas.forEach(empresa => {
      dispatch({ type: 'ADD_EMPRESA_TERCEIRIZADA', payload: empresa });
    });
    mockFornecedores.forEach(fornecedor => {
      dispatch({ type: 'ADD_FORNECEDOR', payload: fornecedor });
    });
    mockVeiculos.forEach(veiculo => {
      dispatch({ type: 'ADD_VEICULO', payload: veiculo });
    });
    mockVisitantes.forEach(visitante => {
      dispatch({ type: 'ADD_VISITANTE', payload: visitante });
    });
    mockReservas.forEach(reserva => {
      dispatch({ type: 'ADD_RESERVA', payload: reserva });
    });
    mockOcorrencias.forEach(ocorrencia => {
      dispatch({ type: 'ADD_OCORRENCIA', payload: ocorrencia });
    });
    mockUsuarios.forEach(usuario => {
      dispatch({ type: 'ADD_USUARIO', payload: usuario });
    });
  }, []);

  return (
    <CondominioContext.Provider value={{ state, dispatch }}>
      {children}
    </CondominioContext.Provider>
  );
};

export const useCondominio = () => {
  const context = useContext(CondominioContext);
  if (context === undefined) {
    throw new Error('useCondominio must be used within a CondominioProvider');
  }
  return context;
}; 