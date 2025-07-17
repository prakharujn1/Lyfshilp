import React, { useState, useEffect } from 'react';
import { Star, Play, ThumbsUp, ThumbsDown, Users, Film, Target, TrendingUp } from 'lucide-react';
import { useComputers } from "@/contexts/ComputersContext";
import { usePerformance } from "@/contexts/PerformanceContext"; //for performance

const NetflixRecommendationGame = () => {
  const { completeComputersChallenge } = useComputers();
  const [currentUser, setCurrentUser] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [strategy, setStrategy] = useState('hybrid');
  const [gameStats, setGameStats] = useState({
    satisfaction: 0,
    clickThrough: 0,
    diversity: 0,
    totalRecommendations: 0,
    successfulRecommendations: 0
  });
  const [selectedScenario, setSelectedScenario] = useState('normal');

  //for performance
  const { updateComputersPerformance } = usePerformance();
  const [startTime] = useState(Date.now());

  useEffect(() => {
    if (gameStats.totalRecommendations > 0) {
      const endTime = Date.now();
      const avgResponseTimeSec = ((endTime - startTime) / 1000) / gameStats.totalRecommendations;
      const studyTimeMinutes = Math.round((endTime - startTime) / 60000);

      updateComputersPerformance({
        avgResponseTimeSec,
        studyTimeMinutes,
        completed: gameStats.satisfaction >= 80,
      });
    }
  }, [gameStats.satisfaction >= 80]);


  // Sample movie database
  const movies = [
    { id: 1, title: "Avengers: Endgame", genre: ["Action", "Adventure"], director: "Russo Brothers", actors: ["Robert Downey Jr.", "Chris Evans"], year: 2019, rating: 4.5 },
    { id: 2, title: "Spider-Man: No Way Home", genre: ["Action", "Adventure"], director: "Jon Watts", actors: ["Tom Holland", "Zendaya"], year: 2021, rating: 4.3 },
    { id: 3, title: "The Dark Knight", genre: ["Action", "Crime"], director: "Christopher Nolan", actors: ["Christian Bale", "Heath Ledger"], year: 2008, rating: 4.8 },
    { id: 4, title: "Inception", genre: ["Sci-Fi", "Thriller"], director: "Christopher Nolan", actors: ["Leonardo DiCaprio", "Marion Cotillard"], year: 2010, rating: 4.7 },
    { id: 5, title: "The Hangover", genre: ["Comedy"], director: "Todd Phillips", actors: ["Bradley Cooper", "Zach Galifianakis"], year: 2009, rating: 4.0 },
    { id: 6, title: "Superbad", genre: ["Comedy"], director: "Greg Mottola", actors: ["Michael Cera", "Jonah Hill"], year: 2007, rating: 3.9 },
    { id: 7, title: "The Conjuring", genre: ["Horror"], director: "James Wan", actors: ["Patrick Wilson", "Vera Farmiga"], year: 2013, rating: 4.2 },
    { id: 8, title: "Hereditary", genre: ["Horror"], director: "Ari Aster", actors: ["Toni Collette", "Alex Wolff"], year: 2018, rating: 4.1 },
    { id: 9, title: "Mission: Impossible", genre: ["Action", "Thriller"], director: "Brian De Palma", actors: ["Tom Cruise", "Jon Voight"], year: 1996, rating: 4.0 },
    { id: 10, title: "Top Gun: Maverick", genre: ["Action", "Drama"], director: "Joseph Kosinski", actors: ["Tom Cruise", "Miles Teller"], year: 2022, rating: 4.6 },
    { id: 11, title: "The Notebook", genre: ["Romance", "Drama"], director: "Nick Cassavetes", actors: ["Ryan Gosling", "Rachel McAdams"], year: 2004, rating: 4.1 },
    { id: 12, title: "Titanic", genre: ["Romance", "Drama"], director: "James Cameron", actors: ["Leonardo DiCaprio", "Kate Winslet"], year: 1997, rating: 4.4 },
    { id: 13, title: "Parasite", genre: ["Thriller", "Drama"], director: "Bong Joon-ho", actors: ["Song Kang-ho", "Lee Sun-kyun"], year: 2019, rating: 4.5 },
    { id: 14, title: "Moonlight", genre: ["Drama"], director: "Barry Jenkins", actors: ["Mahershala Ali", "Naomie Harris"], year: 2016, rating: 4.2 },
    { id: 15, title: "Dune", genre: ["Sci-Fi", "Adventure"], director: "Denis Villeneuve", actors: ["Timothée Chalamet", "Rebecca Ferguson"], year: 2021, rating: 4.3 }
  ];

  // Sample user profiles
  const userProfiles = {
    newUser: {
      id: 1,
      name: "New User",
      ratings: {
        1: 5, // Avengers
        3: 4, // Dark Knight
        5: 3  // Hangover
      },
      favoriteGenres: ["Action"],
      ageGroup: "25-34",
      location: "US",
      scenario: "new"
    },
    diverseUser: {
      id: 2,
      name: "Diverse Tastes",
      ratings: {
        1: 5, // Avengers
        5: 4, // Hangover
        7: 4, // Conjuring
        11: 3, // Notebook
        13: 5  // Parasite
      },
      favoriteGenres: ["Action", "Comedy", "Horror"],
      ageGroup: "18-24",
      location: "US",
      scenario: "diverse"
    },
    actionFan: {
      id: 3,
      name: "Action Fan",
      ratings: {
        1: 5, // Avengers
        2: 4, // Spider-Man
        3: 5, // Dark Knight
        9: 4, // Mission Impossible
        10: 5  // Top Gun
      },
      favoriteGenres: ["Action", "Adventure"],
      ageGroup: "35-44",
      location: "US",
      scenario: "normal"
    }
  };

  // Collaborative Filtering Algorithm
  const collaborativeFiltering = (user) => {
    const userRatings = user.ratings;
    const recommendations = [];

    // Find similar users based on rating similarity
    const similarUsers = Object.values(userProfiles).filter(u => u.id !== user.id);

    similarUsers.forEach(similarUser => {
      const commonMovies = Object.keys(userRatings).filter(movieId =>
        similarUser.ratings[movieId] !== undefined
      );

      if (commonMovies.length > 0) {
        // Calculate similarity score
        let similarity = 0;
        commonMovies.forEach(movieId => {
          similarity += Math.abs(userRatings[movieId] - similarUser.ratings[movieId]);
        });
        similarity = 1 / (1 + similarity / commonMovies.length);

        // Recommend movies that similar users liked
        Object.keys(similarUser.ratings).forEach(movieId => {
          if (!userRatings[movieId] && similarUser.ratings[movieId] >= 4) {
            const movie = movies.find(m => m.id === parseInt(movieId));
            if (movie) {
              recommendations.push({
                movie,
                score: similarity * similarUser.ratings[movieId],
                reason: `Users with similar taste rated this ${similarUser.ratings[movieId]}/5`
              });
            }
          }
        });
      }
    });

    return recommendations.sort((a, b) => b.score - a.score).slice(0, 5);
  };

  // Content-Based Filtering Algorithm
  const contentBasedFiltering = (user) => {
    const userRatings = user.ratings;
    const recommendations = [];

    // Analyze user preferences
    const likedMovies = Object.keys(userRatings)
      .filter(movieId => userRatings[movieId] >= 4)
      .map(movieId => movies.find(m => m.id === parseInt(movieId)));

    const preferredGenres = {};
    const preferredDirectors = {};
    const preferredActors = {};

    likedMovies.forEach(movie => {
      movie.genre.forEach(genre => {
        preferredGenres[genre] = (preferredGenres[genre] || 0) + 1;
      });
      preferredDirectors[movie.director] = (preferredDirectors[movie.director] || 0) + 1;
      movie.actors.forEach(actor => {
        preferredActors[actor] = (preferredActors[actor] || 0) + 1;
      });
    });

    // Find movies with similar features
    movies.forEach(movie => {
      if (!userRatings[movie.id]) {
        let score = 0;

        // Genre similarity
        movie.genre.forEach(genre => {
          if (preferredGenres[genre]) {
            score += preferredGenres[genre] * 0.4;
          }
        });

        // Director similarity
        if (preferredDirectors[movie.director]) {
          score += preferredDirectors[movie.director] * 0.3;
        }

        // Actor similarity
        movie.actors.forEach(actor => {
          if (preferredActors[actor]) {
            score += preferredActors[actor] * 0.2;
          }
        });

        // Rating boost
        score += movie.rating * 0.1;

        if (score > 0) {
          recommendations.push({
            movie,
            score,
            reason: `Similar to movies you liked: ${movie.genre.join(', ')}`
          });
        }
      }
    });

    return recommendations.sort((a, b) => b.score - a.score).slice(0, 5);
  };

  // Hybrid Recommendation Algorithm
  const hybridFiltering = (user) => {
    const collabRecs = collaborativeFiltering(user);
    const contentRecs = contentBasedFiltering(user);

    // Combine and weight recommendations
    const combined = {};

    collabRecs.forEach(rec => {
      combined[rec.movie.id] = {
        movie: rec.movie,
        score: rec.score * 0.6,
        reason: `Collaborative: ${rec.reason}`
      };
    });

    contentRecs.forEach(rec => {
      if (combined[rec.movie.id]) {
        combined[rec.movie.id].score += rec.score * 0.4;
        combined[rec.movie.id].reason += ` | Content: ${rec.reason}`;
      } else {
        combined[rec.movie.id] = {
          movie: rec.movie,
          score: rec.score * 0.4,
          reason: `Content: ${rec.reason}`
        };
      }
    });

    return Object.values(combined).sort((a, b) => b.score - a.score).slice(0, 5);
  };

  // Generate recommendations based on selected strategy
  const generateRecommendations = () => {
    if (!currentUser) return;

    let recs = [];
    switch (strategy) {
      case 'collaborative':
        recs = collaborativeFiltering(currentUser);
        break;
      case 'content':
        recs = contentBasedFiltering(currentUser);
        break;
      case 'hybrid':
        recs = hybridFiltering(currentUser);
        break;
    }

    setRecommendations(recs);
    setGameStats(prev => ({
      ...prev,
      totalRecommendations: prev.totalRecommendations + recs.length
    }));
  };

  // Handle user feedback on recommendations
  const handleRecommendationFeedback = (recommendation, liked) => {
    setGameStats(prev => {
      const newSuccessful = liked ? prev.successfulRecommendations + 1 : prev.successfulRecommendations;
      const newSatisfaction = Math.round((newSuccessful / prev.totalRecommendations) * 100);
      const newClickThrough = Math.round((newSuccessful / prev.totalRecommendations) * 100);

      // Calculate diversity based on genre variety
      const genres = new Set();
      recommendations.forEach(rec => {
        rec.movie.genre.forEach(genre => genres.add(genre));
      });
      const newDiversity = Math.round((genres.size / 8) * 100); // 8 total genres

      return {
        ...prev,
        successfulRecommendations: newSuccessful,
        satisfaction: newSatisfaction,
        clickThrough: newClickThrough,
        diversity: newDiversity
      };
    });
  };

  // Select user scenario
  const selectUser = (userKey) => {
    setCurrentUser(userProfiles[userKey]);
    setSelectedScenario(userProfiles[userKey].scenario);
    setRecommendations([]);
  };

  useEffect(() => {
    if (currentUser) {
      generateRecommendations();
    }
  }, [currentUser, strategy]);

  useEffect(() => {
    if (gameStats.satisfaction >= 80) {
      completeComputersChallenge(1, 2);
    }
  }, [gameStats.satisfaction]);

  const renderMovieCard = (recommendation, index) => (
    <div key={index} className="bg-gray-800 rounded-lg p-4 mb-4 border-l-4 border-red-500">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-white">{recommendation.movie.title}</h3>
        <div className="flex items-center text-yellow-400">
          <Star size={16} className="mr-1" />
          <span>{recommendation.movie.rating}</span>
        </div>
      </div>
      <p className="text-gray-300 text-sm mb-2">{recommendation.movie.genre.join(', ')} • {recommendation.movie.year}</p>
      <p className="text-gray-400 text-xs mb-3">{recommendation.reason}</p>
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => handleRecommendationFeedback(recommendation, true)}
            className="flex items-center space-x-1 bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm"
          >
            <ThumbsUp size={14} />
            <span>Like</span>
          </button>
          <button
            onClick={() => handleRecommendationFeedback(recommendation, false)}
            className="flex items-center space-x-1 bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm"
          >
            <ThumbsDown size={14} />
            <span>Dislike</span>
          </button>
        </div>
        <div className="text-xs text-gray-500">
          Score: {recommendation.score.toFixed(2)}
        </div>
      </div>
    </div>
  );

  const renderUserProfile = (user) => (
    <div className="bg-gray-800 rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold text-white mb-2">{user.name}</h3>
      <div className="space-y-2 text-sm">
        <div className="text-gray-300">
          <span className="font-medium">Rated Movies:</span> {Object.keys(user.ratings).length}
        </div>
        <div className="text-gray-300">
          <span className="font-medium">Favorite Genres:</span> {user.favoriteGenres.join(', ')}
        </div>
        <div className="text-gray-300">
          <span className="font-medium">Age Group:</span> {user.ageGroup}
        </div>
        <div className="text-gray-300">
          <span className="font-medium">Scenario:</span> {user.scenario}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-red-600 mb-2">Netflix Recommendation Engine</h1>
          <p className="text-gray-300">Demonstrate Collaborative Filtering + Content-Based Filtering + Hybrid Filtering </p>
        </div>

        {/* Instructions */}
        <div className="bg-gradient-to-r from-red-900/10 to-red-800/10 rounded-lg p-6 mb-8 border border-red-500/30">
          <h2 className="text-2xl font-bold text-red-400 mb-4 text-center">🎯 How to Play</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">1</span>
                Select a User Profile
              </h3>
              <p className="text-gray-300 text-sm ml-9">
                Choose from different user scenarios:
              </p>
              <ul className="text-gray-400 text-sm ml-9 space-y-1">
                <li>• <strong>New User:</strong> Limited viewing history (cold start problem)</li>
                <li>• <strong>Diverse Tastes:</strong> Likes multiple genres (testing algorithm flexibility)</li>
                <li>• <strong>Action Fan:</strong> Clear preferences (easier to recommend)</li>
              </ul>

              <h3 className="text-lg font-semibold text-white flex items-center">
                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">2</span>
                Choose Algorithm Strategy
              </h3>
              <p className="text-gray-300 text-sm ml-9">
                Test different recommendation approaches:
              </p>
              <ul className="text-gray-400 text-sm ml-9 space-y-1">
                <li>• <strong>Collaborative:</strong> "Users like you also watched..."</li>
                <li>• <strong>Content-Based:</strong> "Similar movies based on features..."</li>
                <li>• <strong>Hybrid:</strong> "Best of both worlds..."</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">3</span>
                Rate Recommendations
              </h3>
              <p className="text-gray-300 text-sm ml-9">
                Give feedback on each recommendation using 👍 (Like) or 👎 (Dislike) buttons.
                This simulates real user behavior and affects your success metrics.
              </p>

              <h3 className="text-lg font-semibold text-white flex items-center">
                <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3">4</span>
                Achieve Victory
              </h3>
              <p className="text-gray-300 text-sm ml-9">
                Reach <strong className="text-green-400">80%+ user satisfaction</strong> with diverse recommendations.
                Monitor your metrics and experiment with different strategies!
              </p>

              <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-3 ml-9">
                <h4 className="text-yellow-400 font-semibold text-sm mb-1">💡 Pro Tips:</h4>
                <ul className="text-yellow-300 text-xs space-y-1">
                  <li>• Hybrid approach usually performs best</li>
                  <li>• New users benefit more from content-based filtering</li>
                  <li>• Watch the diversity score - avoid filter bubbles!</li>
                  <li>• Each algorithm has different strengths for different scenarios</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Game Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Target className="text-green-400 mr-2" size={24} />
              <span className="text-2xl font-bold text-green-400">{gameStats.satisfaction}%</span>
            </div>
            <p className="text-gray-300 text-sm">User Satisfaction</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Play className="text-blue-400 mr-2" size={24} />
              <span className="text-2xl font-bold text-blue-400">{gameStats.clickThrough}%</span>
            </div>
            <p className="text-gray-300 text-sm">Click-Through Rate</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Film className="text-purple-400 mr-2" size={24} />
              <span className="text-2xl font-bold text-purple-400">{gameStats.diversity}%</span>
            </div>
            <p className="text-gray-300 text-sm">Diversity Score</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <TrendingUp className="text-yellow-400 mr-2" size={24} />
              <span className="text-2xl font-bold text-yellow-400">{gameStats.totalRecommendations}</span>
            </div>
            <p className="text-gray-300 text-sm">Total Recommendations</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* User Selection */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4 text-red-500">Select User Profile</h2>
            <div className="space-y-4">
              {Object.entries(userProfiles).map(([key, user]) => (
                <button
                  key={key}
                  onClick={() => selectUser(key)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all ${currentUser?.id === user.id
                    ? 'border-red-500 bg-red-900/20'
                    : 'border-gray-600 bg-gray-800 hover:border-red-400'
                    }`}
                >
                  <h3 className="font-semibold text-white">{user.name}</h3>
                  <p className="text-gray-400 text-sm">{user.favoriteGenres.join(', ')}</p>
                  <p className="text-gray-500 text-xs">Scenario: {user.scenario}</p>
                </button>
              ))}
            </div>

            {/* Strategy Selection */}
            <div className="mt-8">
              <h2 className="text-2xl font-bold mb-4 text-red-500">Recommendation Strategy</h2>
              <div className="space-y-2">
                {[
                  { key: 'collaborative', label: 'Collaborative Filtering', icon: Users },
                  { key: 'content', label: 'Content-Based Filtering', icon: Film },
                  { key: 'hybrid', label: 'Hybrid Approach', icon: Target }
                ].map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setStrategy(key)}
                    className={`w-full flex items-center p-3 rounded-lg border-2 transition-all ${strategy === key
                      ? 'border-red-500 bg-red-900/20'
                      : 'border-gray-600 bg-gray-800 hover:border-red-400'
                      }`}
                  >
                    <Icon className="mr-3" size={20} />
                    <span>{label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Current User Profile */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4 text-red-500">Current User</h2>
            {currentUser ? renderUserProfile(currentUser) : (
              <div className="bg-gray-800 rounded-lg p-8 text-center">
                <p className="text-gray-400">Select a user profile to begin</p>
              </div>
            )}

            {/* Victory Condition */}
            <div className="mt-8 bg-gradient-to-r from-red-900/20 to-red-800/20 rounded-lg p-4 border border-red-500">
              <h3 className="font-bold text-red-400 mb-2">Victory Condition</h3>
              <p className="text-gray-300 text-sm">
                Achieve 80%+ user satisfaction with diverse, accurate recommendations
              </p>
              {gameStats.satisfaction >= 80 && (
                <div className="mt-2 text-green-400 font-semibold">
                  🎉 Victory Achieved! Great job with your recommendation engine!
                </div>
              )}
            </div>
          </div>

          {/* Recommendations */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-bold mb-4 text-red-500">Recommendations</h2>
            {recommendations.length > 0 ? (
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {recommendations.map((rec, index) => renderMovieCard(rec, index))}
              </div>
            ) : (
              <div className="bg-gray-800 rounded-lg p-8 text-center">
                <p className="text-gray-400">
                  {currentUser ? 'Generating recommendations...' : 'Select a user to see recommendations'}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Algorithm Explanation */}
        <div className="mt-12 bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-red-500">🧠 Algorithm Deep Dive</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Users className="text-blue-400 mr-2" size={24} />
                <h3 className="font-semibold text-white">Collaborative Filtering</h3>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Finds users with similar taste and recommends movies they liked.
                Works well for popular content but struggles with new users.
              </p>
              <div className="text-xs text-gray-400">
                <strong>How it works:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Calculates user similarity based on rating patterns</li>
                  <li>• Recommends highly-rated movies from similar users</li>
                  <li>• Example: "Users who liked Avengers also enjoyed Spider-Man"</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Film className="text-purple-400 mr-2" size={24} />
                <h3 className="font-semibold text-white">Content-Based Filtering</h3>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Analyzes movie features (genre, director, actors) to find similar content.
                Great for new users but can create filter bubbles.
              </p>
              <div className="text-xs text-gray-400">
                <strong>How it works:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Analyzes genres, directors, and actors you liked</li>
                  <li>• Finds movies with similar features</li>
                  <li>• Example: "You liked Tom Cruise action movies, try Mission Impossible"</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center mb-3">
                <Target className="text-green-400 mr-2" size={24} />
                <h3 className="font-semibold text-white">Hybrid Approach</h3>
              </div>
              <p className="text-gray-300 text-sm mb-3">
                Combines both methods for better accuracy and diversity.
                Handles cold start problems and provides balanced recommendations.
              </p>
              <div className="text-xs text-gray-400">
                <strong>How it works:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Weighs collaborative (60%) + content-based (40%)</li>
                  <li>• Balances popularity with personalization</li>
                  <li>• Solves cold start and filter bubble problems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Real-World Scenarios */}
        <div className="mt-8 bg-gray-900 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-red-500">🎬 Real-World Scenarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-3">🆕 The Cold Start Problem</h3>
              <p className="text-gray-300 text-sm mb-2">
                New users have limited viewing history. How do you recommend movies?
              </p>
              <div className="text-xs text-gray-400">
                <strong>Solutions:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Use content-based filtering initially</li>
                  <li>• Recommend popular movies in preferred genres</li>
                  <li>• Gather quick preferences through onboarding</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-3">🎭 Diverse Tastes Challenge</h3>
              <p className="text-gray-300 text-sm mb-2">
                Users who like both comedy and horror. How to balance recommendations?
              </p>
              <div className="text-xs text-gray-400">
                <strong>Solutions:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Ensure genre diversity in recommendations</li>
                  <li>• Use time-based preferences (mood-based)</li>
                  <li>• Create separate recommendation buckets</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-3">🎯 Filter Bubble Problem</h3>
              <p className="text-gray-300 text-sm mb-2">
                Recommendations become too similar. How to maintain discovery?
              </p>
              <div className="text-xs text-gray-400">
                <strong>Solutions:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Inject some randomness in recommendations</li>
                  <li>• Include trending/popular content</li>
                  <li>• Use exploration vs exploitation balance</li>
                </ul>
              </div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <h3 className="font-semibold text-white mb-3">📊 Success Metrics</h3>
              <p className="text-gray-300 text-sm mb-2">
                How to measure recommendation system performance?
              </p>
              <div className="text-xs text-gray-400">
                <strong>Key Metrics:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Click-through rate (CTR)</li>
                  <li>• User satisfaction scores</li>
                  <li>• Diversity and coverage metrics</li>
                  <li>• Watch time and engagement</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetflixRecommendationGame;