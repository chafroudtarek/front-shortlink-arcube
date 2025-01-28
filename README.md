# URL Shortener Frontend

 React-based URL shortening application built with TypeScript and Vite. This application provides a clean and intuitive interface for shortening long URLs into more manageable links.

## 🚀 Features

- URL shortening with instant feedback
- Copy-to-clipboard functionality
- Url validation
- Toast notifications for user feedback

## 🛠️ Tech Stack

- React 18
- TypeScript
- Vite
- TanStack Query (React Query)
- Axios
- TailwindCSS
- React Toastify

## 📋 Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

## 🔧 Installation

1. Clone the repository:
```bash
git clone [your-repository-url]
cd frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your environment variables:
```env
VITE_API_URL=your_backend_api_url
```

## 🚀 Running the Application

### Development Mode
```bash
npm run dev
# or
yarn dev
```
This will start the development server on port 3000.

### Build for Production
```bash
npm run build
# or
yarn build
```

### Preview Production Build
```bash
npm run preview
# or
yarn preview
```

## 🧪 Linting

To run the linter:
```bash
npm run lint
# or
yarn lint
```

To automatically fix linting issues:
```bash
npm run lint:fix
# or
yarn lint:fix
```

## 🔗 Project Structure

```
frontend/
├── src/
│   ├── data/
│   │   ├── models/       # TypeScript interfaces
│   │   ├── mutations/    # React Query mutations
│   │   └── services/     # API services
│   ├── config/          # Configuration files
│   └── App.tsx          # Main application component
├── public/             # Static assets
└── ...config files
```


