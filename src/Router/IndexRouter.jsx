import { Switch, Route } from "react-router-dom"
import { ContactConfirm } from "../Pages/ContactConfirm"
import { FrontPage } from "../Pages/FrontPage"
import { BlogPost } from "../Pages/BlogPost"
import { ContactThanks } from "../Pages/ContactThanks"
import { BlogList } from "../Pages/BlogList"
import { BlogCategory } from "../Pages/BlogCategory"
import { BlogArchive } from "../Pages/BlogArchive"
import { WorkList } from "../Pages/WorksList"

export const IndexRouter = () => {
  return(
    <Switch>
      <Route exact path='/'>
        <FrontPage />
      </Route>
      <Route path='/worksList'>
          <WorkList />
      </Route>
      <Route path='/blogPost'>
          <BlogPost />
      </Route>
      <Route path='/blogList'>
          <BlogList />
      </Route>
      <Route path='/blogCategory'>
          <BlogCategory />
      </Route>
      <Route path='/blogArchive'>
          <BlogArchive />
      </Route>
      <Route path='/contactConfirm'>
          <ContactConfirm />
      </Route>
      <Route path='/contactThanks'>
          <ContactThanks />
      </Route>
      <Route path='/#about'>
        <FrontPage />
      </Route>
      <Route path='/#works'>
        <FrontPage />
      </Route>
      <Route path='/#blog'>
        <FrontPage />
      </Route>
      <Route path='/#contact'>
        <FrontPage />
      </Route>
    </Switch>
  )
}