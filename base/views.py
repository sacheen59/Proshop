from django.shortcuts import render
from django.http import JsonResponse
# from .products import products

from base.models import Product
from base.serializers import ProductSerializer
from rest_framework.response import Response
from rest_framework.decorators import api_view

# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/products',
        '/api/products/create',
        '/api/products/upload',
        '/api/products/<id>/review',

        '/api/products/top',
        '/api/products/<id>',

        '/api/products/delete/<id>',
        '/api/products/<update>/<id>',
    ]
    return Response(routes)

@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request,pk):
    product = Product.objects.get(pk = pk)
    serializer = ProductSerializer(product)
    return Response(serializer.data)