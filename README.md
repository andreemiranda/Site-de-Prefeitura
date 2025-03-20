# Portal Municipal - Sistema de Gestão de Conteúdo Municipal

Este é um sistema moderno e responsivo para portais municipais, desenvolvido com React, TypeScript e Tailwind CSS.

## 🌟 Características

- Design moderno e responsivo
- Painel administrativo para gestão de conteúdo
- Sistema de notícias e eventos
- Portal da transparência
- Serviços online ao cidadão
- Acessibilidade (WCAG 2.1)
  - VLibras integrado
  - Alto contraste
  - Ajuste de fonte
  - Navegação por teclado
- Otimizado para SEO
- Alto desempenho e carregamento rápido

## 🚀 Tecnologias

- React 19
- TypeScript
- Tailwind CSS
- Vite
- React Router
- React Icons
- React Slick (carrossel)
- Date-fns
- Supabase (Banco de dados e Autenticação)

## 📦 Instalação

### Requisitos

- Node.js 18.0 ou superior
- npm 9.0 ou superior

### Ambiente de Desenvolvimento

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/portal-municipal.git
cd portal-municipal
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
   - Crie um arquivo `.env` na raiz do projeto
   - Adicione as variáveis do Supabase:
   ```
   VITE_SUPABASE_URL=sua_url_do_supabase
   VITE_SUPABASE_ANON_KEY=sua_chave_anonima_do_supabase
   ```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## 🔐 Painel Administrativo

### Acesso ao Painel

O painel administrativo está disponível em `/admin/login` e oferece uma interface segura para gerenciar todo o conteúdo do portal.

### Recursos do Painel

- **Dashboard**: Visão geral com estatísticas e informações importantes
- **Gestão de Conteúdo**: 
  - Criação e edição de notícias
  - Gerenciamento de categorias
  - Upload de documentos
  - Controle de publicação
- **Administradores**: Gerenciamento de usuários administrativos
- **Configurações**: Personalização do portal

### Primeiro Acesso

O sistema é inicializado com um usuário administrador padrão:

- **URL**: /admin/login
- **Email**: contato@verdesmares.gov.br
- **Senha**: Definida durante a configuração inicial do Supabase

### Segurança

- Autenticação via Supabase
- Políticas de Row Level Security (RLS)
- Verificação de administradores
- Proteção contra acessos não autorizados

### Fluxo de Autenticação

1. Acesse `/admin/login`
2. Insira suas credenciais
3. O sistema verifica:
   - Autenticação via Supabase
   - Existência do usuário na tabela `admin_users`
   - Status de verificação do administrador
4. Se autorizado, redireciona para o dashboard

## 🔧 Configuração do Servidor

### Apache

1. Crie ou edite o arquivo `.htaccess` na raiz do projeto:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_FILENAME} !-l
  RewriteRule . /index.html [L]
</IfModule>
```

2. Configure o VirtualHost:

```apache
<VirtualHost *:80>
    ServerName verdesmares.gov.br
    DocumentRoot /var/www/html/portal-municipal/dist
    
    <Directory /var/www/html/portal-municipal/dist>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
    </Directory>
    
    ErrorLog ${APACHE_LOG_DIR}/error.log
    CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
```

### Nginx

```nginx
server {
    listen 80;
    server_name verdesmares.gov.br;
    root /var/www/html/portal-municipal/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache de assets estáticos
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires max;
        add_header Cache-Control "public, no-transform";
    }
}
```

## 🔄 Adaptando para um Novo Município

1. **Configurações Básicas**
   - Edite `src/config/settings.ts` com as informações do município
   - Atualize logos e imagens em `public/images/`
   - Modifique cores e estilos em `tailwind.config.js`

2. **Conteúdo**
   - Atualize textos e informações em `src/data/`
   - Modifique estrutura de menus em `src/components/Header.tsx`
   - Adapte seções da página inicial em `src/pages/Home.tsx`

3. **Serviços**
   - Configure serviços municipais em `src/pages/Services.tsx`
   - Atualize links e integrações em `src/services/`

4. **SEO**
   - Modifique títulos e meta tags em `index.html`
   - Atualize descrições em cada página

## 📱 Módulos Principais

- **Notícias**: Sistema completo de gestão de notícias
- **Serviços**: Catálogo de serviços municipais
- **Transparência**: Portal da transparência
- **Licitações**: Sistema de licitações
- **Legislação**: Base de leis municipais
- **Eventos**: Calendário de eventos
- **Ouvidoria**: Sistema de atendimento ao cidadão

## 🛠️ Customização

### Cores e Tema
Edite `tailwind.config.js` para modificar:
- Cores principais
- Tipografia
- Espaçamentos
- Breakpoints responsivos

### Componentes
Os componentes principais estão em `src/components/`:
- Header
- Footer
- Slider
- Cards
- Buttons

## 📝 Manutenção

### Atualizações de Conteúdo
1. Acesse o painel administrativo
2. Navegue até a seção desejada
3. Edite ou adicione novo conteúdo
4. Publique as alterações

### Backup
- Faça backup regular do banco de dados
- Mantenha cópias dos arquivos de mídia
- Archive logs periodicamente

## 🔒 Segurança

- Mantenha todas as dependências atualizadas
- Use HTTPS em produção
- Configure corretamente as políticas de CORS
- Implemente rate limiting
- Monitore logs de acesso

## 📞 Suporte

Para suporte técnico:
1. Abra uma issue no GitHub
2. Envie email para contato@verdesmares.gov.br
3. Consulte a documentação completa

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.