import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Men from "../Men/Men";
import Women from "../Women/Women";
import Kids from "../Kids/Kids";
import Shop from "../Shop/Shop";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/',
            element:<Shop></Shop>
        },
        {
          path:'/menProducts',
          element:<Men></Men>
        },
        {
          path:'/womenProducts',
          element:<Women></Women>
        },
        {
          path:'/kidsProducts',
          element:<Kids></Kids>
        }
      ]
    },
  ]);

  export default router