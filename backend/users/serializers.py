from rest_framework import serializers

from .models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username', 'password', 'avatar']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user


class UserProfileSerializer(serializers.ModelSerializer):
    def to_representation(self, instance):
        representation = super(UserProfileSerializer, self).to_representation(instance)
        representation['date_joined'] = str(instance.date_joined.date())
        return representation

    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'email',
            'first_name',
            'last_name',
            'gender',
            'date_of_birth',
            'date_joined',
            'avatar'
        ]
