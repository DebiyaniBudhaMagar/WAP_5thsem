from django.shortcuts import render, redirect

def Login(request):
    if request.method == "POST":
        if 'verify' in request.POST:
            username = request.POST.get('username')
            password = request.POST.get('password')

            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                request.session.set_expiry(0)
                return redirect('home')
            else:
                return redirect('error')

    return render(request, 'login.html')


def Logout(request):
    logout(request)
    return redirect('login')