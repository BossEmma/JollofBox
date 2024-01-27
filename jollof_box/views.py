from django.shortcuts import render, HttpResponseRedirect, redirect
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from .models import Movie, TvSerie, Season, Episode
from fuzzywuzzy import fuzz
from random import sample

# Create your views here.

#This function redirects clients to the homepage when an invalid path is entered in the url
def handle404(request, exception):
    return HttpResponseRedirect('home')





def home(request):
    movies= Movie.objects.all().order_by('-release_date')[:20]
    trending_movies= Movie.objects.all().order_by('-trending')[:20]
    all_movies = Movie.objects.all().order_by('?')
    discover_movies = sample(list(all_movies), min(20, all_movies.count()))
    series= TvSerie.objects.all().order_by('-release_date')[:20]


    if request.method== "POST":
        search= request.POST["search"]
        search= search.upper()
        return redirect('search', search=search)

    context={
        "movies": movies, 
        "trending_movies": trending_movies,
        "discover_movies": discover_movies,
        "series":series,
    }   
    return render(request, "index.html", context)





def search(request, search):
    if request.method== "POST":
        search= request.POST["search"]
        search= search.upper()
        return redirect('search', search=search)
    
    if search:
        results = []
        all_movies = Movie.objects.all()
        for movies in all_movies:
            similarity_ratio= fuzz.ratio(search, movies.title)
            if similarity_ratio> 50:
                results.append((movies, similarity_ratio))

        all_tv_series = TvSerie.objects.all()
        for tv_serie in all_tv_series:
            similarity_ratio = fuzz.ratio(search, tv_serie.title)
            if similarity_ratio > 50:
                results.append((tv_serie, similarity_ratio))

        results.sort(key=lambda x: x[1], reverse=True)
        results = [result[0] for result in results]

        objects_per_page = 1
        paginator = Paginator(results, objects_per_page)
        page = request.GET.get('page')
        try:
            paginated_objects = paginator.page(page)
            
        except PageNotAnInteger:
            paginated_objects = paginator.page(1)

        except EmptyPage:
            paginated_objects = paginator.page(paginator.num_pages)
        
        
    context= {"search":search,
            'paginated_objects': paginated_objects
    }
    return render(request, "search.html", context)





def movie_list(request):
    movies= Movie.objects.all().order_by('-release_date')

    if request.method== "POST":
        search= request.POST["search"]
        search= search.upper()
        return redirect('search', search=search)
    
    objects_per_page = 20
    paginator = Paginator(movies, objects_per_page)
    page = request.GET.get('page')
    try:
        paginated_objects = paginator.page(page)
        
    except PageNotAnInteger:
        paginated_objects = paginator.page(1)

    except EmptyPage:
        paginated_objects = paginator.page(paginator.num_pages)
        

    context={
        'paginated_objects': paginated_objects
    }   
    return render(request, "movies_list.html", context)





def series_list(request):
    series= TvSerie.objects.all().order_by('-release_date')

    if request.method== "POST":
        search= request.POST["search"]
        search= search.upper()
        return redirect('search', search=search)
    
    objects_per_page = 20  
    paginator = Paginator(series, objects_per_page)
    page = request.GET.get('page')
    try:
        paginated_objects = paginator.page(page)
 
    except PageNotAnInteger:
        paginated_objects = paginator.page(1)

    except EmptyPage:
        paginated_objects = paginator.page(paginator.num_pages)
        

    context={
        'paginated_objects': paginated_objects
    }   
    return render(request, "series_list.html", context)





def box_office(request):
    return render(request, "box_office.html")





def movie_download(request, title):
    movie= Movie.objects.get(title=title)
    genres= movie.genres.all()

    if request.method== "POST":
        search= request.POST["search"]
        search= search.upper()
        return redirect('search', search=search)
    
    context={
        "movie": movie,
        "genres":genres
    }
    return render(request, "movie_download.html", context)





def series_download(request, title):
    series= TvSerie.objects.get(title=title)
    seasons = Season.objects.filter(series=series)
    genres= series.genres.all()
    episodes = Episode.objects.filter(season__in=seasons)

    if request.method== "POST":
        search= request.POST["search"]
        search= search.upper()
        return redirect('search', search=search)
    
    context= {
        "series": series,
        "episodes":episodes,
        "genres":genres
    }
    return render(request, "series_download.html", context)





def advertise(request):
    return render(request, "advertise.html")



def support(request):
    return render(request, "support.html")



def contact(request):
    return render(request, "contact.html")



def privacy(request):
    return render(request, "privacy.html")



def disclaimer(request):
    return render(request, "disclaimer.html")