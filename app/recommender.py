from sqlalchemy.orm import Session
from .models import Movie, Rating
from collections import Counter

def recommend_movies_for_user(db: Session, user_id: int, top_n: int = 5):
    user_ratings = db.query(Rating).filter(Rating.user_id == user_id).all()
    if not user_ratings:
        # Recommend top-rated movies if user has no ratings
        return db.query(Movie).limit(top_n).all()
    # Get genres of movies the user liked (score >= 4)
    liked_genres = []
    for r in user_ratings:
        if r.score >= 4:
            movie = db.query(Movie).filter(Movie.id == r.movie_id).first()
            if movie:
                liked_genres.append(movie.genre)
    if not liked_genres:
        return db.query(Movie).limit(top_n).all()
    # Recommend movies from liked genres not already rated
    genre_counts = Counter(liked_genres)
    top_genre = genre_counts.most_common(1)[0][0]
    rated_movie_ids = [r.movie_id for r in user_ratings]
    return db.query(Movie).filter(Movie.genre == top_genre, ~Movie.id.in_(rated_movie_ids)).limit(top_n).all() 