from rest_framework import serializers
from django.contrib.auth.models import User
from base.models import Product
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer



class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        data['username'] = self.user.username
        data['email'] = self.user.email

        return data

class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only = True)
    isAdmin = serializers.SerializerMethodField(read_only  = True)
    _id = serializers.SerializerMethodField(read_only = True)
    class Meta:
        model = User
        fields = ['id','username','email','name','isAdmin','_id']

    def get__id(self,obj):
        _id = obj.id
        return _id
    
    def get_isAdmin(self,obj):
        return obj.is_staff

    def get_name(self,obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        return name

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"