from django.urls import path
from api.views import user_views as views
urlpatterns = [
    path('register/',views.registerUser,name='register'),
    path('profile/',views.getUserProfile,name='user_profile'),
     path('profile/update/',views.updateUserProfile,name='user_profile'),
      path('login/',views.MyTokenObtainPairViews.as_view(),name='login'),
    #   path('update/<str:pk>/',views.updateUser,name="updateUser"),
      path('delete/<str:pk>/',views.deleteUser,name="deleteUser"),



]
