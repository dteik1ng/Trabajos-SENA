const express = require("express");
const app = express();
const PORT = 5000;

app.get("/api", (req, res) => {
  res.json({
    users: [
      {
        id: 1,
        first_name: "Odele",
        last_name: "Insall",
        email: "oinsall0@ox.ac.uk",
        gender: "Female",
        username: "oinsall0",
        bio: "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      },
      {
        id: 2,
        first_name: "Nolan",
        last_name: "Stanlake",
        email: "nstanlake1@mapy.cz",
        gender: "Male",
        username: "nstanlake1",
        bio: "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
      },
      {
        id: 3,
        first_name: "Dani",
        last_name: "Cuff",
        email: "dcuff2@timesonline.co.uk",
        gender: "Male",
        username: "dcuff2",
        bio: "Fusce consequat. Nulla nisl. Nunc nisl.",
      },
      {
        id: 4,
        first_name: "Ikey",
        last_name: "Bartalini",
        email: "ibartalini3@google.co.jp",
        gender: "Male",
        username: "ibartalini3",
        bio: "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
      },
      {
        id: 5,
        first_name: "Heda",
        last_name: "Sandilands",
        email: "hsandilands4@hubpages.com",
        gender: "Female",
        username: "hsandilands4",
        bio: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      },
      {
        id: 6,
        first_name: "Jamal",
        last_name: "Crumbie",
        email: "jcrumbie5@bloglines.com",
        gender: "Male",
        username: "jcrumbie5",
        bio: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
      },
      {
        id: 7,
        first_name: "Ermin",
        last_name: "Heninghem",
        email: "eheninghem6@smh.com.au",
        gender: "Male",
        username: "eheninghem6",
        bio: "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.",
      },
      {
        id: 8,
        first_name: "Heather",
        last_name: "Scriviner",
        email: "hscriviner7@dion.ne.jp",
        gender: "Female",
        username: "hscriviner7",
        bio: "In congue. Etiam justo. Etiam pretium iaculis justo.",
      },
      {
        id: 9,
        first_name: "Clem",
        last_name: "Izat",
        email: "cizat8@aol.com",
        gender: "Male",
        username: "cizat8",
        bio: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.",
      },
      {
        id: 10,
        first_name: "Madeleine",
        last_name: "Robjant",
        email: "mrobjant9@clickbank.net",
        gender: "Female",
        username: "mrobjant9",
        bio: "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      },
    ],
  });
});

app.listen(PORT, console.log(`Servidor Node Por el puerto ${PORT}`));
