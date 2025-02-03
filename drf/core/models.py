from django.db import models
from django.auth.models import AbstractUser
import gettext_lazy as _

# Create your models here.

class Musico(AbstractUser):
    bio = models.CharField(max_length=300)
    imagem = models.ImageField(upload_to=None, height_field=None, width_field=None, max_length=None)

class Localidade(models.Model):
    musico = models.OneToOneField("core.Musico", primary_key=True, on_delete=models.CASCADE)
    
    endereco = models.CharField(_("Endereço"), max_length=100)
    latitude = models.FloatField()
    longitude = models.FloatField()
    