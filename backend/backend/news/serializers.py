from rest_framework import serializers

from .models import NewsInfo


class NewsInfoSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = NewsInfo
        fields = "__all__"

    # title = serializers.CharField(max_length=150)
    # content = serializers.CharField()
    # is_published = serializers.BooleanField(default=False)
    #
    # def create(self, validated_data):
    #     return NewsInfo.objects.create(**validated_data)
    #
    # def update(self, instance, validated_data):
    #     instance.title = validated_data.get('title', instance.title)
    #     instance.content = validated_data.get('content', instance.content)
    #     instance.is_published = validated_data.get('is_published', instance.is_published)
    #     instance.save()
    #     return instance

# def encode():
#     model = NewsModel('sdfsdf', 'sdfsdfsdfasWQWDQWD')
#     model_sr = NewsSerializer(model)
#     json = JSONParser().render(model_sr.data)
#
#
# def decode():
#     stream = io.BytesIO(b'{"title:":"sdfsdf","content":"sdfsdfsdfasWQWDQWD"}')
#     data = JSONParser.parse(stream)
#     serializer = NewsSerializer(data=data)
#     serializer.is_valid()
#     print(serializer.validated_data)
