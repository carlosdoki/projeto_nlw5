import { http } from "./http";
import "./websocket/client";
import "./websocket/admin";

// app.listen(3333, () => console.log("Server is running on port 3333"));
http.listen(3333, () => {
  console.log("Server is running on port 3333");
});
