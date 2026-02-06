from django.urls import path
from .views import Home, ListValue, ContextView as ListValueClass

urlpatterns = [
    path('',Home, name='home'),
    path('person/', ListValue, name='list_Value'),
    path('cbvperson/',ListValueClass.as_view(), name='listvaluecbv'),
]
