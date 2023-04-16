from rest_framework import status, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from accounts.models import MyUser
from .serializers import CustomUserSerializer, MyTokenObtainPairSerializer


class VendorUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        user_serializer = CustomUserSerializer(data=request.data)
        if user_serializer.is_valid():
            user = user_serializer.save(is_vendor_account=True)

            if user:
                json = user_serializer.data
                return Response(json, status=status.HTTP_201_CREATED)

        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class AdminUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        user_serializer = CustomUserSerializer(data=request.data)
        if user_serializer.is_valid():
            user = user_serializer.save(is_admin_account=True)

            if user:
                json = user_serializer.data
                return Response(json, status=status.HTTP_201_CREATED)

        return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class SuperAdminUserCreate(APIView):
    permission_classes = [AllowAny]

    def post(self, request, format='json'):
        user_exists = MyUser.objects.filter(is_super_admin=True)
        if user_exists:
            return Response({'error': 'A super admin user already exists'}, status=status.HTTP_403_FORBIDDEN)
        else:
            user_serializer = CustomUserSerializer(data=request.data)
            if user_serializer.is_valid():
                user = user_serializer.save(is_super_admin=True)

                if user:
                    json = user_serializer.data
                    return Response(json, status=status.HTTP_201_CREATED)

            return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class BlacklistTokenUpdateView(APIView):
    permission_classes = [AllowAny]
    authentication_classes = ()

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)
