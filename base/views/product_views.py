from rest_framework.decorators import api_view
from base.models import Product
from base.serializers import ProductSerializer
from rest_framework.response import Response

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