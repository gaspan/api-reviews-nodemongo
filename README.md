# api-reviews-nodemongo

#usage
- npm install
- npm start
# api
-https://dry-fortress-35321.herokuapp.com/reviews/create
payload :
{
	"textReview":"mantap",
	"gambar": "mantap.jpg",
	"jmlBintang":"5",
	"user":"ariyadi",
	"waktu":"11 desember 18"
}
-https://dry-fortress-35321.herokuapp.com/reviews/5c0df15b8e0cd41f431bedda
-https://dry-fortress-35321.herokuapp.com/reviews/5c0e0089f7219133d0944830/update
payload :
{
	"textReview":"pelayanan nya meningkat keren bingis",
	"gambar":"gambar.png",
	"jmlBintang":"5",
	"user":"gentur ariyadi",
	"waktu":"11 desember 18"
}
-https://dry-fortress-35321.herokuapp.com/reviews/5c0e0089f7219133d0944830/delete
-https://dry-fortress-35321.herokuapp.com/reviews/getall