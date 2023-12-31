from django.urls import path
from api.views import user_views as views
urlpatterns = [
    path('register/',views.registerUser,name='register'),
    path('profile/',views.getUserProfile,name='user_profile'),
     path('profile/update/',views.updatedUserProfile,name='user_profile'),
      path('login/',views.MyTokenObtainPairView.as_view(),name='tokenlogin'),
      path('update/<str:pk>/',views.updateUser,name="updateUser"),
      path('delete/<str:pk>/',views.deleteUser,name="deleteUser"),



]
