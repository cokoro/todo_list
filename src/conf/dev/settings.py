# Database
# https://docs.djangoproject.com/en/1.8/ref/settings/#databases

import os
_BASE_DIR = os.path.dirname(os.path.dirname(
    os.path.dirname(os.path.abspath(__file__))))
_ROOT_DIR = os.path.dirname(os.path.dirname(_BASE_DIR))
_RUN_DIR = os.path.join(_ROOT_DIR, 'run')

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(_RUN_DIR, 'tmp', 'db.sqlite3'),
    }
}
