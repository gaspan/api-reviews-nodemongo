# api-reviews-nodemongo

#usage
- npm install
- npm start
# api
-https://dry-fortress-35321.herokuapp.com/reviews/create <br>
payload : <br>
{ <br>
	"textReview":"mantap",<br>
	"gambar": "mantap.jpg",<br>
	"jmlBintang":"5",<br>
	"user":"ariyadi",<br>
	"waktu":"11 desember 18"<br>
}<br>
-https://dry-fortress-35321.herokuapp.com/reviews/5c0df15b8e0cd41f431bedda<br>
-https://dry-fortress-35321.herokuapp.com/reviews/5c0e0089f7219133d0944830/update<br>
payload :<br>
{<br>
	"textReview":"pelayanan nya meningkat keren bingis",<br>
	"gambar":"gambar.png",<br>
	"jmlBintang":"5",<br>
	"user":"gentur ariyadi",<br>
	"waktu":"11 desember 18"<br>
}<br>
-https://dry-fortress-35321.herokuapp.com/reviews/5c0e0089f7219133d0944830/delete<br>
-https://dry-fortress-35321.herokuapp.com/reviews/getall<br>