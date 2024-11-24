from django.contrib.auth import authenticate
from rest_framework import permissions, status, viewsets
from rest_framework.authtoken.models import Token
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import User
from .serializers import UserProfileSerializer, UserSerializer


class UserRegistrationView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        email = request.data.get('email')
        username = request.data.get('username')
        if User.objects.filter(email=email).exists():
            return Response(
                {'error': 'Пользователь с таким email уже существует'},
                status=status.HTTP_400_BAD_REQUEST
            )
        elif User.objects.filter(username=username).exists():
            return Response(
                {'error': 'Пользователь с таким именем уже существует'},
                status=status.HTTP_400_BAD_REQUEST
            )
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"data": serializer.data}, status=status.HTTP_201_CREATED)
        for field, error in serializer.errors.items():
            return Response(
                {'error': f'Некорректное значение {field}: {error[0]}'},
                status=status.HTTP_400_BAD_REQUEST
            )


class UserLoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)

        if user is not None:
            token, _ = Token.objects.get_or_create(user=user)
            return Response({'token': token.key})
        return Response({"error": "Неверные учетные данные"}, status=status.HTTP_401_UNAUTHORIZED)


class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        # Возвращает только текущего аутентифицированного пользователя
        return User.objects.filter(id=self.request.user.id)

    @action(detail=False, methods=['get', 'patch'], permission_classes=[IsAuthenticated])
    def profile(self, request):
        # Для метода GET возвращаем текущего пользователя
        if request.method == 'GET':
            user = request.user
            serializer = self.get_serializer(user)
            return Response(serializer.data)

        # Для метода PATCH обновляем текущего пользователя
        elif request.method == 'PATCH':
            user = request.user
            serializer = self.get_serializer(user, data=request.data, partial=True)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            for field, error in serializer.errors.items():
                return Response(
                    {'error': f'Некорректное значение {field}: {error[0]}'},
                    status=status.HTTP_400_BAD_REQUEST
                )
