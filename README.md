# scaled-image-uploader
document/create code that allows a user to upload a scaled image to a server

This is intended to be itterative steps to create all of the parts that will eventually solve a problem for CraftyByMelissa.

The source of the problem.  The artists upload pictures and movies (media) of their work for archival and social networking purposes.  The media comes directly from their high end phones.  The media is enourmous. 

The problem.  The media is too big.  The CraftyByMelissa ownership would like to move away from their Wordpress homepage and instead show rows of images driven from the uploaded media. 

Server side solution.  The images could be resized on the server upon upload or upon publish.

Client side solution.  The images could be resized in the browser after upload.  

I am going to go with a client side solution for the following reasons:
* if they change back ends (currently PHP) the client side solution will still work.
* the client side solution should be easy to extend in ways the allow the editor to select parts of the image instead of blindly scaling the image.
* the client side solution should be easy to extend in a way to allow the editor to pick a frame from a movie as a thumbnail for the movie.
* the main disadvantage is that while it gives editors more control is also adds work.

Step 1.  Show a scaled down large image in a canvas tag.
Step 2.  Upload the image to a server.