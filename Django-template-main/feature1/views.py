from django.shortcuts import render
from django.views.generic import TemplateView

def Home(request):
    return render(request, 'home.html')

def SingleValue(request):
    context = { #python dictionary , named 'context'
        'name': 'John Doe',
        'age': 30,
    }
    return render(request, 'home.html', context)  
    #passing context to template

def ListValue(request):
    context = {
        'people': [#python list, named 'people'
            {'name': 'Alice', 'age': 20},
            {'name': 'Bob', 'age': 25},
            {'name': 'Charlie', 'age': 30},
            {'name': 'David', 'age': 35}]
    }
    return render(request, 'list.html', context)
    #passing list to template

    #Class based view (CBV)
class ContextView(TemplateView):
    template_name = 'context.html'
    def get_context_data(self):
        return {
        'people': [#python list, named 'people'
            {'name': 'Alice', 'age': 20},
            {'name': 'Bob', 'age': 25},
            {'name': 'Charlie', 'age': 30},
            {'name': 'David', 'age': 35}
            ]
        }