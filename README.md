# Sistema de Controle de Acesso para Condomínio

Um sistema completo de gestão e controle de acesso para condomínios, desenvolvido com React, TypeScript e Material-UI.

## 🏗️ Funcionalidades

### 📊 Dashboard
- Visão geral do condomínio
- Estatísticas em tempo real
- Ações rápidas
- Ocorrências recentes
- Próximas reservas

### 👥 Gestão de Pessoas
- **Moradores**: Cadastro completo com dados pessoais, endereço, veículos
- **Funcionários**: Controle de funcionários terceirizados
- **Visitantes**: Registro de entrada e saída
- **Síndico/Sub-síndico**: Gestão de responsáveis

### 🏢 Empresas e Fornecedores
- **Empresas Terceirizadas**: Segurança, limpeza, manutenção
- **Fornecedores**: Produtos de limpeza, materiais de construção, elétricos
- Controle de contratos e funcionários

### 🚗 Controle de Veículos
- Cadastro de veículos dos moradores
- Veículos de visitantes
- Controle de entrada e saída

### 📅 Sistema de Reservas
- Churrasqueira
- Salão de festas
- Quadra de tênis
- Controle de pagamentos

### 🚨 Gestão de Ocorrências
- Registro de problemas
- Controle de prioridades
- Acompanhamento de resolução

### 🗑️ Informações de Coleta
- Horários de coleta
- Tipos de lixo
- Observações

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **Material-UI (MUI)** - Componentes de interface
- **React Router** - Navegação
- **React Hook Form** - Formulários
- **Yup** - Validação de dados
- **Vite** - Build tool

## 📱 Compatibilidade

- ✅ **Website Responsivo** - Funciona em desktop, tablet e mobile
- 🔄 **App Android** - Em desenvolvimento (React Native)
- 🔄 **App iOS** - Em desenvolvimento (React Native)

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/abenino8/Community-App.git
cd condominio-controle-acesso

# Instale as dependências
npm install

# Execute o servidor de desenvolvimento
npm run dev
```

### Scripts Disponíveis
```bash
npm run dev          # Servidor de desenvolvimento
npm run build        # Build para produção
npm run preview      # Preview do build
npm run lint         # Verificação de código
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   └── Layout/         # Layout principal
├── contexts/           # Contextos React
├── data/              # Dados de exemplo
├── pages/             # Páginas da aplicação
│   └── Dashboard/     # Dashboard principal
├── types/             # Definições TypeScript
├── App.tsx            # Componente principal
└── main.tsx           # Ponto de entrada
```

## 🎨 Interface

O sistema utiliza Material-UI com tema personalizado:
- Cores primárias: Azul (#1976d2)
- Cores secundárias: Rosa (#dc004e)
- Design responsivo e moderno
- Componentes acessíveis

## 📊 Dados de Exemplo

O sistema inclui dados de exemplo para demonstração:
- Condomínio: "Residencial Jardim das Flores"
- 2 moradores cadastrados
- 2 funcionários
- 2 empresas terceirizadas
- 2 fornecedores
- Veículos e visitantes
- Reservas e ocorrências

## 🔐 Segurança

- Controle de acesso por tipo de usuário
- Validação de dados
- Proteção de rotas
- Autenticação (em desenvolvimento)

## 📱 App Mobile

### Android
Para gerar o APK para Android:

```bash
# Instalar React Native CLI
npm install -g @react-native-community/cli

# Criar projeto React Native
npx react-native init CondominioApp --template react-native-template-typescript

# Copiar componentes e lógica
# Configurar navegação
# Build para Android
```

### Google Play Store
Para publicar na Google Play Store:
1. Criar conta de desenvolvedor
2. Preparar assets (ícones, screenshots)
3. Configurar informações do app
4. Upload do APK
5. Revisão e publicação

## 🔄 Próximas Funcionalidades

- [ ] Sistema de autenticação
- [ ] Notificações push
- [ ] Relatórios em PDF
- [ ] Integração com câmeras
- [ ] Controle de acesso por QR Code
- [ ] Backup automático
- [ ] API REST
- [ ] Banco de dados real

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para suporte e dúvidas:
- Email: suporte@condominioapp.com
- WhatsApp: (11) 99999-9999
- Documentação: [docs.condominioapp.com](https://docs.condominioapp.com)

## 🏆 Recursos Especiais

### Para Síndicos
- Dashboard completo com métricas
- Gestão de funcionários
- Controle de contratos
- Relatórios financeiros

### Para Moradores
- Portal do morador
- Reservas online
- Comunicação com síndico
- Histórico de visitantes

### Para Portaria
- Interface simplificada
- Controle rápido de acesso
- Registro de ocorrências
- Comunicação em tempo real

---

**Desenvolvido com ❤️ para facilitar a gestão de condomínios**
