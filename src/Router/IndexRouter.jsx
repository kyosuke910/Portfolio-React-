import { Switch, Route } from "react-router-dom"
import { ContactConfirm } from "../Pages/ContactConfirm"
import { FrontPage } from "../Pages/FrontPage"
import { BlogPost } from "../Pages/BlogPost"

export const IndexRouter = () => {
  return(
    <Switch>
      <Route exact path='/'>
        <FrontPage />
      </Route>
      <Route path='/contactConfirm'>
          <ContactConfirm />
      </Route>
      <Route path='/blogPost'>
          <BlogPost />
      </Route>
    </Switch>
  )
}