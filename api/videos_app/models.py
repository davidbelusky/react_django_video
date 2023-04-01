from django.db import models

class Video(models.Model):
    def __str__(self):
        return self.name

    name = models.CharField(max_length=128, blank=False, null=False, unique=True)
    short_name = models.CharField(max_length=64, blank=True, null=True)
    icon_uri = models.URLField(max_length=512,blank=True, null=True)
    manifest_uri = models.URLField(max_length=512,blank=True, null=True)
    source = models.CharField(max_length=128, blank=True,null=True)
    focus = models.BooleanField(default=False)
    disabled = models.BooleanField(default=False)
    extra_text = models.JSONField(blank=True, null=True)
    certificate_uri = models.URLField(max_length=512,blank=True,null=True)
    description = models.CharField(max_length=256,blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    drm = models.JSONField(blank=True, null=True)
    features = models.JSONField(blank=True, null=True)
    license_servers = models.JSONField(blank=True, null=True)
    license_request_headers = models.JSONField(blank=True, null=True)
    request_filter = models.CharField(max_length=128,blank=True, null=True, default=None)
    response_filter = models.CharField(max_length=128,blank=True, null=True, default=None)
    clear_keys = models.JSONField(blank=True, null=True,)
    extra_config = models.JSONField(blank=True, null=True)
    ad_tag_uri = models.URLField(max_length=512,blank=True, null=True)
    ima_video_id = models.CharField(max_length=64, blank=True, null=True)
    ima_asset_key = models.CharField(max_length=64,blank=True, null=True)
    ima_content_src_id = models.CharField(max_length=64, blank=True, null=True)
    mime_type = models.CharField(max_length=128,blank=True, null=True)
    media_playlist_full_mime_type = models.CharField(max_length=128, blank=True, null=True)
    stored_progress = models.IntegerField()
    stored_content = models.JSONField(blank=True, null=True, default=None)

