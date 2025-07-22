# Movie Recommendation System

A full-stack movie recommendation system built with FastAPI backend and React frontend, featuring user authentication, content-based recommendations, and a modern UI.

## 🚀 Features

- **User Authentication**: JWT-based login/registration system
- **Movie Management**: CRUD operations for movies with ratings
- **Recommendation Engine**: Content-based filtering using cosine similarity
- **Modern UI**: Responsive React frontend with Tailwind CSS
- **RESTful API**: FastAPI backend with automatic documentation
- **Testing**: Comprehensive test suite with pytest

## 🏗️ Architecture

- **Backend**: FastAPI (Python)
- **Frontend**: React + Vite + Tailwind CSS
- **Database**: SQLite (in-memory for demo)
- **Authentication**: JWT tokens
- **Testing**: pytest

## 📁 Project Structure

```
Movie recommendation system/
├── api_server.py              # FastAPI backend server
├── requirements.txt           # Python dependencies
├── test_api.py               # Backend tests
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── index.html
├── Dockerfile               # Docker configuration
└── README.md               # This file
```

## 🛠️ Quick Start

### Prerequisites
- Python 3.8+
- Node.js 16+
- npm or yarn

### Backend Setup
```bash
# Install Python dependencies
pip install -r requirements.txt

# Run the FastAPI server
python api_server.py
```

The backend will be available at `http://localhost:8000`
API documentation: `http://localhost:8000/docs`

### Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

The frontend will be available at `http://localhost:5173`

## 🔧 API Endpoints

### Authentication
- `POST /register` - User registration
- `POST /token` - User login

### Movies
- `GET /movies` - List all movies
- `POST /movies` - Add new movie
- `GET /movies/{movie_id}` - Get movie details
- `PUT /movies/{movie_id}` - Update movie
- `DELETE /movies/{movie_id}` - Delete movie

### Ratings
- `POST /movies/{movie_id}/rate` - Rate a movie
- `GET /movies/{movie_id}/ratings` - Get movie ratings

### Recommendations
- `GET /recommendations` - Get personalized recommendations

## 🧪 Testing

```bash
# Run backend tests
python -m pytest test_api.py -v

# Run frontend tests (if configured)
cd frontend
npm test
```

## 🐳 Docker Deployment

```bash
# Build and run with Docker
docker build -t movie-recommender .
docker run -p 8000:8000 movie-recommender
```

## 🔐 Authentication

1. Register a new user at `/register`
2. Login at `/login` to get JWT token
3. Use the token in the Authorization header: `Bearer <token>`

## 📊 How It Works

1. **Content-Based Filtering**: Uses cosine similarity to find movies similar to user's rated movies
2. **User Preferences**: Learns from user ratings to provide personalized recommendations
3. **Real-time Updates**: Recommendations update as users rate more movies

## 🚀 Production Considerations

- Replace SQLite with PostgreSQL/MySQL
- Add Redis for caching
- Implement rate limiting
- Add comprehensive logging
- Set up CI/CD pipeline
- Use environment variables for secrets
- Add monitoring and health checks

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests
5. Submit a pull request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

Built as a demonstration of full-stack development skills with modern technologies. 