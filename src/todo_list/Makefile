all: dev

dev: clean
	ln -s ../../conf/dev/ common/conf
	python manage.py runserver 0.0.0.0:9150

prod: clean
	ln -s ../../conf/prod/ common/conf
	python manage.py runserver 0.0.0.0:9150

clean:
	rm -rf common/conf
