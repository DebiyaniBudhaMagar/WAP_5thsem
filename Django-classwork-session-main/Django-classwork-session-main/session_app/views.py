from django.shortcuts import render

def Home(request):
    return render(request, 'home.html')

def Page(request):
    visit = request.session.get('visit', 0)
    visit = visit + 1
    request.session['visit_value'] = visit
    context = {
        'visits': visit,
        }
    return render(request, 'page.html', context)