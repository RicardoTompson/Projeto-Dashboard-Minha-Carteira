# 📊 Projetos-Dashboards

Repositório dedicado ao desenvolvimento de dashboards interativos com foco em visualização de dados, alternância de temas e autenticação de usuários. Criado com **React**, **TypeScript** e **Styled Components**, este projeto consolida boas práticas de arquitetura front-end e componentes reutilizáveis.

## 🚀 Tecnologias utilizadas

- React
- TypeScript
- Styled Components
- React Icons
- Hooks personalizados (`useAuth`, `useTheme`)
- Git e GitHub

## 🧩 Funcionalidades

- Autenticação de usuários
- Alternância entre temas claro e escuro
- Navegação entre páginas de entrada, saída e resumo financeiro
- Layout responsivo
- Emojis dinâmicos no cabeçalho
- Componentes reutilizáveis e organizados

## 📁 Estrutura do projeto

├── public/ # Arquivos estáticos
├── src/
│ ├── assets/ # Imagens e ícones 
│ ├── components/ # Componentes reutilizáveis (Header, Toggle, etc.) 
│ ├── hooks/ # Hooks personalizados (useAuth, useTheme) 
│ ├── Pages/ # Páginas principais (Dashboard, Entradas, Saídas) 
│ ├── repositories/ # Lógica de acesso a dados 
│ ├── routes/ # Definição de rotas 
│ ├── styles/ # Estilos globais e temas 
│ ├── utils/ # Funções auxiliares (emojis, formatadores) 
│ ├── App.tsx # Componente principal 
│ ├── index.tsx # Ponto de entrada da aplicação 
│ └── react-app-env.d.ts # Tipagens do ambiente React
├── .gitignore 
├── package.json 
├── package-lock.json 
├── tsconfig.json 
└── README.md

<img width="910" height="625" alt="image" src="https://github.com/user-attachments/assets/4b830066-fdce-4979-be6d-72fae3143f4f" />


## 🖼️ Demonstração

> Breve: screenshots do funcionamento do dashboard.

Tela de Login:

-Usuário: teste@gmail.com
-Senha: 123


<img width="1919" height="1030" alt="image" src="https://github.com/user-attachments/assets/252fcb9a-ee30-4b0d-ab97-f5e00aea3e47" />

Tela da Dashboard
<img width="1919" height="1035" alt="image" src="https://github.com/user-attachments/assets/0f51a360-444c-4a4e-8c60-dcdcd0c41ff9" />

Aplicando o botão Light
<img width="1918" height="1026" alt="image" src="https://github.com/user-attachments/assets/0d1c4ed8-ced6-4175-acfa-579479d77fdf" />

Tela de Entradas
<img width="1916" height="1031" alt="image" src="https://github.com/user-attachments/assets/9a34f07f-d288-458d-98eb-1aa173d34de5" />

Tela de Saídas
<img width="1919" height="1031" alt="image" src="https://github.com/user-attachments/assets/c2f6622a-61b2-4975-a550-6c6d4d70608a" />

## 📦 Instalação

``bash
# Clone o repositório
git clone https://github.com/RicardoTompson/Projeto-Dashboard-Minha-Carteira

# Acesse a pasta do projeto
cd Projeto-Dashboard-Minha-Carteira

# Instale as dependências
npm install

# Inicie o projeto
npm start

📚 Aprendizados
- Organização de componentes e estilos

- Uso de transient props ($prop) para evitar warnings no React

- Gerenciamento de tema com Context API

- Boas práticas com TypeScript e React



👨‍💻 Autor
Ricardo Tompson 🔗 LinkedIn 🐙 GitHub
