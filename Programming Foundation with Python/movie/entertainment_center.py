import fresh_tomatoes
import media

toy_story = media.Movie("Toy Story",
                         "A story of a boy and his toys that come to life",
                         "https://upload.wikimedia.org/wikipedia/en/1/13/Toy_Story.jpg",
                         "https://www.youtube.com/watch?v=KYz2wyBy3kc")

#print(toy_story.storyline)

avatar = media.Movie("Avatar",
                     "A marine on an alien planer",
                     "https://upload.wikimedia.org/wikipedia/en/b/b0/Avatar-Teaser-Poster.jpg",
                     "https://www.youtube.com/watch?v=5PSNL1qE6VY")

#print(avatar.storyline)

#avatar.show_trailer()

the_matrix = media.Movie("The Matrix",
                     "A team fighting machines in a digital world",
                     "https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg",
                     "https://www.youtube.com/watch?v=Q8g9zL-JL8E")

john_wick = media.Movie("John Wick",
                     "An ex hit man wipes out an underground mod",
                     "https://upload.wikimedia.org/wikipedia/en/9/98/John_Wick_TeaserPoster.jpg",
                     "https://www.youtube.com/watch?v=RllJtOw0USI")

pirates_of_the_caribbean = media.Movie("Pirates of the Caribbean",
                     "Blacksmith partners with a pirate to save his love",
                     "https://upload.wikimedia.org/wikipedia/en/0/0e/Pirates_of_the_Caribbean_movie.jpg",
                     "https://www.youtube.com/watch?v=naQr0uTrH_s")

transformers = media.Movie("Transformers",
                     "Two clans of alien robots fight on Earth",
                     "https://upload.wikimedia.org/wikipedia/en/6/66/Transformers07.jpg",
                     "https://www.youtube.com/watch?v=dxQxgAfNzyE")

guardians_of_the_galaxy = media.Movie("Guardians of the Galaxy",
                     "A team of different species unite to fight evil forces in Galaxy",
                     "https://upload.wikimedia.org/wikipedia/en/8/8f/GOTG-poster.jpg",
                     "https://www.youtube.com/watch?v=d96cjJhvlMA")

rogue_one = media.Movie("Rogue One",
                     "A group of heros team up to steal plans for a Death Star",
                     "https://upload.wikimedia.org/wikipedia/en/d/d4/Rogue_One%2C_A_Star_Wars_Story_poster.png",
                     "https://www.youtube.com/watch?v=frdj1zb9sMY")

taxi = media.Movie("Taxi (1998)",
                     "A former race driver helps to stop crime with his taxi",
                     "https://upload.wikimedia.org/wikipedia/en/7/7e/TaxiPoster.jpg",
                     "https://www.youtube.com/watch?v=8nANiVnDJOo")

movies = [toy_story, avatar, the_matrix, john_wick, pirates_of_the_caribbean,
          transformers, guardians_of_the_galaxy, rogue_one, taxi]

fresh_tomatoes.open_movies_page(movies)
#print(media.Movie.VALID_RATINGS)
#print(media.Movie.__doc__)
#print(media.Movie.__name__)
#print(media.Movie.__module__)
#print(taxi.__class__.__module__)
