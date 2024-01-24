import os
import django
import random
from faker import Faker
from django.utils import timezone

# Set the DJANGO_SETTINGS_MODULE environment variable
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "JollofBox.settings")

# Initialize Django
django.setup()

from jollof_box.models import Movie, TvSerie, Genre

fake = Faker()

def generate_dummy_data(model, count):
    objects = []
    for _ in range(count):
        if model == Movie:
            obj = model(
                title=fake.word(),
                poster="https://m.media-amazon.com/images/M/MV5BMTkzMjczODQzMV5BMl5BanBnXkFtZTcwOTIyOTQ0OQ@@._V1_FMjpg_UX1000_.jpg",
                summary=fake.text(),
                trailer=fake.url(),
                download=fake.url(),
                release_date=fake.date_between(start_date='-365d', end_date='today'),
                trending=random.randint(1, 100),
                language=fake.word(),
                industry=random.choice(['hollywood', 'nollywood', 'bollywood']),
                runtime=fake.random_int(min=60, max=180),
                company=fake.company(),
                rating=random.randint(1, 50),
            )
        elif model == TvSerie:
            obj = model(
                title=fake.word(),
                poster="https://m.media-amazon.com/images/M/MV5BMTkzMjczODQzMV5BMl5BanBnXkFtZTcwOTIyOTQ0OQ@@._V1_FMjpg_UX1000_.jpg",
                summary=fake.text(),
                release_date=fake.date_between(start_date='-365d', end_date='today'),
                language=fake.word(),
                industry=random.choice(['hollywood', 'nollywood', 'bollywood']),
                company=fake.company(),
            )

        obj.save()

        genres = list(Genre.objects.all())  # Convert queryset to a list
        obj.genres.set(random.sample(genres, min(random.randint(1, 5), len(genres))))

        objects.append(obj)

    return objects

# Specify the number of objects you want to create
num_objects = 50

# Generate objects for Movie model
movies = generate_dummy_data(Movie, num_objects)

# Generate objects for TvSerie model
tv_series = generate_dummy_data(TvSerie, num_objects)
