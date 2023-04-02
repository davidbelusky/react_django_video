import django_filters
from .models import Video

class VideoFilter(django_filters.FilterSet):
    class Meta:
        model = Video
        fields = {
            "id": ["exact"],
            "name": ["icontains"],
            'short_name': ['iexact'],
            "source": ["iexact", "in"],
            'features': [],
            "drm": []
        }

    features = django_filters.CharFilter(
        method='features_filter'
    )

    drm = django_filters.CharFilter(
        method='drm_filter'
    )

    def features_filter(self, queryset, _, value):
        return queryset.filter(features__icontains=value)

    def drm_filter(self, queryset, _, value):
        return queryset.filter(drm__icontains=value)

