from django.urls import path
from .views import (VendorUserCreate, AdminUserCreate,
                    SuperAdminUserCreate, BlacklistTokenUpdateView)

app_name = 'account'

urlpatterns = [
    path('vendor-register/', VendorUserCreate.as_view(), name='register_vendor'),
    path('admin-register/', AdminUserCreate.as_view(), name='register_admin'),
    path('super-admin-register/', SuperAdminUserCreate.as_view(),
         name='register_super_admin'),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view(), name='blacklist'),
]
