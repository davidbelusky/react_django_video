# Video app

### Stack:
**Backend** - Django rest framework

**Frontend** - React

**DB** - Postgresql

### Requirements & instructions: 

To run video app you need docker and docker-compose

1. Run `docker-compose up --build`

After all containers are running you can reach UI on `http://localhost:3000` and API on `http://localhost:8000`

**Teardown**

To teardown video app containers and clean DB run `docker-compose down --volumes`

### API Endpoints

**POST**
`/update-videos/` - update videos in DB (download new videos data and update them to postgreSQL DB)


**GET**
`/video` - get all videos this endpoint also support parameters for `search`, `ordering` and there are also some filters parameters.

**Filters:**

`id`, `name`, `short_name`, `source`, `features`, `drm`


**examples below**

`/video?ordering=name`,

`/video?search=sintel&name__icontains=mp4`

`/video/?page=2`



### Cronjob

There is cronjob running in docker as a container `cronjob` which run every 1 minute `api/update-videos`
